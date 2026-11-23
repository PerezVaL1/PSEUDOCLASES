const CSS=`:host{display:block;padding:.8rem;border:2px solid #CBD6C6;border-radius:8px;background:#fff}
:host(.activa){border-color:#39A900;box-shadow:0 4px 0 #39A900}
:host-context(.oscuro){background:#00304D;color:#fff}
::slotted([slot=titulo]){margin:0 0 .3rem;font-weight:700}
slot[name=extra]:has-slotted{display:block;border-top:1px dashed currentColor;margin-top:.5rem}`;
class TarjetaX extends HTMLElement{constructor(){super();this.attachShadow({mode:'open'}).innerHTML='<style>'+CSS+'</style><slot name="titulo"></slot><slot></slot><slot name="extra"><em>Sin contenido extra</em></slot>'}}
customElements.define('tarjeta-x',TarjetaX);
class BotonX extends HTMLElement{constructor(){super();this._i=this.attachInternals();this.attachShadow({mode:'open'}).innerHTML='<slot></slot>'}}
customElements.define('boton-x',BotonX);