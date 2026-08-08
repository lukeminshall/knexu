/* =====================================================================
   FORMS — contact form submission.
   The form is rendered by the SPA router, so we bind one delegated
   submit listener that survives route changes. Submissions POST JSON to
   the Vercel serverless function /api/contact, which emails hello@ via
   Resend (see api/contact.js).
   ===================================================================== */
export function initForms(){
  document.addEventListener('submit',async e=>{
    const form=e.target;
    if(!(form instanceof HTMLFormElement)||form.id!=='contact-form')return;
    e.preventDefault();
    const status=form.querySelector('.cform-status');
    const btn=form.querySelector('button[type=submit]');
    const setStatus=(msg,cls)=>{if(status){status.textContent=msg;status.className='cform-status'+(cls?' '+cls:'');}};
    if(btn)btn.disabled=true;
    setStatus('Sending…');
    try{
      const payload=Object.fromEntries(new FormData(form).entries());
      const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      if(!res.ok)throw new Error('status '+res.status);
      form.reset();
      setStatus("Thanks — that's with us. We'll reply to the email you gave, usually within a day or two.",'ok');
    }catch(err){
      setStatus('Something went wrong sending that. Email us directly at hello@knexu.co.uk and we will pick it up.','err');
    }finally{
      if(btn)btn.disabled=false;
    }
  });
}
