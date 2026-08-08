/* Vercel Serverless Function — contact form → email via Resend.
   Set in Vercel → Project → Settings → Environment Variables:
     RESEND_API_KEY  (required)  — from resend.com
     CONTACT_TO      (optional, default hello@knexu.co.uk)
     CONTACT_FROM    (optional, default 'Knexu Website <onboarding@resend.dev>')
       For production, use a Resend-verified sender on your domain, e.g.
       'Knexu Website <website@knexu.co.uk>'. Until a domain is verified,
       Resend's onboarding@resend.dev only delivers to the Resend account owner. */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let data = req.body;
  if (typeof data === 'string') { try { data = JSON.parse(data); } catch { data = {}; } }
  data = data || {};

  const str = v => (v == null ? '' : String(v)).trim();
  const name = str(data.name);
  const email = str(data.email);
  const organisation = str(data.organisation);
  const message = str(data.message);
  const botField = str(data['bot-field']);

  // Honeypot: pretend success so bots don't retry, but send nothing.
  if (botField) return res.status(200).json({ ok: true });

  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Invalid email' });
  if (name.length > 200 || email.length > 200 || organisation.length > 200 || message.length > 5000)
    return res.status(400).json({ error: 'Field too long' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email not configured' });

  const to = process.env.CONTACT_TO || 'hello@knexu.co.uk';
  const from = process.env.CONTACT_FROM || 'Knexu Website <onboarding@resend.dev>';

  const subject = `New enquiry from ${name}${organisation ? ' (' + organisation + ')' : ''}`;
  const text =
    `New contact form submission from knexu.co.uk\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Organisation: ${organisation || '—'}\n\n` +
    `Message:\n${message}\n`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, subject, text, reply_to: email })
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text());
      return res.status(502).json({ error: 'Send failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
