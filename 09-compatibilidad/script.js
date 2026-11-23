const G={'Acción':[':hover',':active',':focus',':focus-visible',':focus-within'],
'Enlaces y ubicación':[':link',':visited',':any-link',':target',':target-within',':local-link',':scope',':target-current'],
'Formularios':[':enabled',':disabled',':read-only',':read-write',':placeholder-shown',':default',':checked',':indeterminate',':blank',':valid',':invalid',':in-range',':out-of-range',':required',':optional',':user-valid',':user-invalid',':autofill'],
'Estructurales':[':root',':empty',':first-child',':last-child',':only-child',':nth-child(2n)',':nth-last-child(2n)',':first-of-type',':last-of-type',':only-of-type',':nth-of-type(2n)',':nth-last-of-type(2n)'],
'Lógicas':[':is(a)',':not(a)',':where(a)',':has(a)'],
'Idioma':[':lang(es)',':dir(ltr)'],
'Estado':[':fullscreen',':modal',':popover-open',':open',':picture-in-picture'],
'Multimedia':[':playing',':paused',':seeking',':buffering',':stalled',':muted',':volume-locked'],
'Subtítulos':[':current',':past',':future'],
'Shadow DOM':[':host',':host(a)',':host-context(a)',':defined',':state(x)',':has-slotted'],
'Transiciones':[':active-view-transition',':active-view-transition-type(a)'],
'Páginas impresas':[':first',':left',':right']};
const lista=document.getElementById('lista'),res=document.getElementById('resumen'),f=document.getElementById('flt'),solo=document.getElementById('solo'),filas=[];let ok=0,tot=0,all=0;
for(const [g,ns] of Object.entries(G)){const h=document.createElement('h4');h.textContent=g;lista.append(h);
 for(const n of ns){all++;const s=g==='Páginas impresas'?null:CSS.supports('selector('+n+')');if(s!==null){tot++;if(s)ok++}
  const r=document.createElement('div');r.className='fila '+(s===null?'pg':s?'si':'no');r.dataset.n=n;
  r.innerHTML='<code>'+n+'</code><span>'+(s===null?'solo en @page':s?'soportada':'no soportada')+'</span>';lista.append(r);filas.push(r)}}
function filtrar(){const q=f.value.trim();filas.forEach(r=>{r.hidden=(q&&!r.dataset.n.includes(q))||(solo.checked&&!r.classList.contains('no'))})}
f.oninput=filtrar;solo.onchange=filtrar;
res.textContent='Tu navegador soporta '+ok+' de '+tot+' pseudoclases detectables. En total hay '+all+' en esta lista.';