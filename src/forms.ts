/* =====================================================================
   FORMS — contact form submission to Netlify Forms.
   The form is rendered by the SPA router, so we bind one delegated
   submit listener that survives route changes. Submissions POST the
   URL-encoded body (including form-name=contact) to "/", which Netlify
   captures; email notification to hello@knexu.co.uk is configured once
   in the Netlify dashboard (Site → Forms → notifications).
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
      const body=new URLSearchParams(new FormData(form)).toString();
      const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});
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
