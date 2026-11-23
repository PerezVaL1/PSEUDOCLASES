document.addEventListener('click',e=>{
  const b=e.target.closest('[data-js]');
  if(b){const demo=b.closest('.demo'),d=demo.querySelector('.stage'),out=demo.querySelector('.out');
    try{const r=new Function('d',b.dataset.js)(d);if(r!==undefined)out.textContent=r}catch(err){out.textContent='Error: '+err.message}}
  const c=e.target.closest('.copy');
  if(c){navigator.clipboard.writeText(c.parentElement.querySelector('code').textContent);c.textContent='¡Copiado!';setTimeout(()=>c.textContent='Copiar',1200)}
});
