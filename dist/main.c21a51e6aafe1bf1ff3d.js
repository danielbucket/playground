(()=>{"use strict";var e,t,n,r={636:(e,t,n)=>{var r=n(540),a=n(961),o=n(976),l=n(767),c=n(168),i=n(581);const m=i.Ay.nav`
  grid-area: Navigation;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 0.5rem;
  font-family: Ubuntu_Reg;
  font-size: 1.25rem;
  width: 100vw;
  box-shadow: 0 0 .5rem .25rem black;
  background-color: #f0f0f0;
`,u=(0,i.Ay)(o.k2)`
  text-decoration: none;
  padding: 0.25rem;
  &.active, &:hover {
    color: #777;
  }
`,s=(0,i.Ay)(u)`
  font-size: clamp(2rem, 2.75rem, 5rem);
  font-family: Laila_Med;
  width: 30%;
  &.active {
    color: black;
  }
`,d=i.Ay.ul`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  flex-grow: 1;
  list-style: none;
  font-size: 2rem;
  padding: 0;
`;function f(){return r.createElement(m,null,r.createElement(s,{to:"/"},"Bucket, LLC"),r.createElement(d,null,r.createElement(g,{to:"/about"},"About"),r.createElement(g,{to:"/contact"},"Contact"),r.createElement(g,{to:"/projects"},"Projects")))}function g(e){let{to:t,children:n,...a}=e;return r.createElement(u,(0,c.A)({to:t},a),n)}const p=i.Ay.footer`
  grid-area: Footer;
  display: flex;
  width: 100%;
  margin: auto;
`,E=(0,i.Ay)(o.N_)`
  text-decoration: none;
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: auto;

  &:hover {
    color: #f0f0f0;
  }

  & img {
    height: 8rem;
  }

  & p {
    font-size: 1.25rem;
    font-family: Ubuntu_Reg;
  }  
`,h=n.p+"3524c849ab38de4be923.png";function y(){return r.createElement(p,null,r.createElement(E,{to:"https://github.com/danielbucket"},r.createElement("img",{src:h,alt:"GitHub icon"}),r.createElement("p",null,"@danielBucket ",r.createElement("span",null,"© 2024"))))}const b=i.Ay.div`
  display: grid;
  justify-content: center;
  grid-template-rows:
    [Navigation] 10rem
    [ParentContentLayout] 1fr
    [Footer] 8rem;
  height: 100vh;
  width: 100vw;
`,v=i.Ay.div`
  grid-area: ParentContentLayout;
  padding-top: 3rem;
  height: 100%;
  font-family: 'Roboto';
`,x=(0,i.Ay)(v)`
  & .header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & img {
      width: 92%;
      border-radius: 2rem;
      margin: auto;
      box-shadow: 0 0 0.75rem 0.3rem black;
    }
  }
  
  & .body-container {
    flex-grow: 1;
    width: 98%;
    font-size: 2rem;
    margin: 2rem auto 0 auto;

    & .text-content-container {
      margin: 1rem 0;
      padding: 1rem;
      background-color: #f0f0f0;
      font-size: 2rem;
      text-align: center;
      border-radius: .3rem;
    }
  }
`;function j(){return r.createElement(r.Fragment,null,r.createElement(b,null,r.createElement(f,null),r.createElement(l.sv,null),r.createElement(y,null)))}const k=(0,i.Ay)(x)``,w=n.p+"9625c35f5ea45945e2e7.jpg";function O(){const[e,t]=(0,r.useState)({}),[n,a]=(0,r.useState)(null),o=(0,l.LG)();return(0,r.useEffect)((()=>{t((()=>o)),a((()=>w))}),[]),r.createElement(r.Fragment,null,r.createElement(k,null,r.createElement("div",{className:"header-container"},r.createElement("img",{src:n,alt:"image of a truck"})),r.createElement("div",{className:"body-container"},r.createElement("div",{className:"text-content-container"},r.createElement("p",null,e.text)))))}const _=(0,i.Ay)(o.k2)`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  margin: 0 1em;
    &:hover {
      color: blue;
    }
`,A=(0,i.Ay)(x)`
  
`,N=n(175);function S(e){let{text:t}=e;return r.createElement(A,null,r.createElement("div",{className:"header-container"},r.createElement("img",{src:N,alt:"robot image"})),r.createElement("div",{className:"body-container"},r.createElement("div",{className:"text-content-container"},r.createElement("p",null,"The ",r.createElement("span",null,t)," page is currently in development."),r.createElement("p",null,"Check back later for updates."),r.createElement(_,{to:"/"},"Click to return home"))))}const C=(0,i.Ay)(x)``,P=n(935);function z(){const[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)({}),o=(0,l.LG)();return(0,r.useEffect)((()=>{a((()=>o)),t((()=>P))}),[]),r.createElement(C,null,r.createElement("div",{className:"header-container"},r.createElement("img",{src:e,alt:"image of Daniel Bucket"})),r.createElement("div",{className:"body-container"},r.createElement("div",{className:"text-container"},r.createElement("p",null,n.bio),r.createElement("p",null,n.name),r.createElement("p",null,n.title))))}const G=(0,i.Ay)(x)``,L=i.Ay.button`
  background-color: #007bff;
  border-radius: 1.75rem;
  font-size: 3.75rem;
  font-family: Ubuntu_Reg;
  border: .5rem solid var(--grayd-a-grey);
  height: 5rem;
  width: 20rem;
`;function T(e){let{to:t,children:n,...a}=e;return r.createElement(L,(0,c.A)({to:t},a),n)}const F=function(){const[e,t]=(0,r.useState)({}),[n,a]=(0,r.useState)(null),[o,c]=(0,r.useState)(!1),[i,m]=(0,r.useState)(null),u=(0,l.LG)();(0,r.useEffect)((()=>{t((()=>u)),a((()=>w)),c((()=>!1))}),[]);const s=(0,l.Zp)(),d=()=>{c((()=>!0)),s("/contact/contact_form")};function f(){return r.createElement("div",{className:"is-active-element"},r.createElement(T,{onClick:d},"Contact Form"),r.createElement("p",{className:"bio-text"},e.bio))}return r.createElement(G,null,r.createElement("div",{className:"header-container"},r.createElement("img",{src:n,alt:"image of truck"})),r.createElement("div",{className:"body-container"},r.createElement("div",{className:"text-container"},o?r.createElement(l.sv,null):r.createElement(f,null))))},M=i.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;

  && div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: .3rem;
  background-color: rgb(226 224 224);

  }
  
  && p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: .3rem;
    background-color: #f0f0f0;
    box-shadow: 0 0 0.75rem 0.3rem black

  }
`;function R(){const e=(0,l.r5)();return r.createElement(M,null,r.createElement("div",null,"Something went wrong"),r.createElement("p",null,e.message))}const B="/api/v1",$=(0,o.Ys)([{path:"/",element:r.createElement(O,null),errorElement:r.createElement(R,null),children:[{index:!0,element:r.createElement(O,null),loader:async()=>await fetch(`${B}/home/GET_content`).then((e=>e.json())).then((e=>e)).catch((e=>console.error(e)))},{path:"/about",element:r.createElement(z,null),loader:async()=>await fetch(`${B}/about/GET_content`).then((e=>e.json())).then((e=>e)).catch((e=>console.error(e)))},{path:"/contact",element:r.createElement(F,null),loader:async()=>await fetch(`${B}/contact/GET_content`).then((e=>e.json())).then((e=>e)).catch((e=>console.error(e))),children:[{path:"/contact/contact_form",element:r.createElement(S,{text:"Contact Form"})}]},{path:"/projects",element:r.createElement(S,{text:"Projects"}),loader:async()=>await fetch(`${B}/projects/GET_content`).then((e=>e.json())).then((e=>e)).catch((e=>console.error(e)))}]}]);a.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(o.pg,{router:$},r.createElement(j,null))))},935:(e,t,n)=>{e.exports=n.p+"213af9a08b3780819fd3.jpg"},175:(e,t,n)=>{e.exports=n.p+"5bc7a549ccb9e7288f69.jpeg"}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(u--,1);var m=r();void 0!==m&&(t=m)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var l={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,o.d(a,l),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,c,i]=n,m=0;if(l.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var u=i(o)}for(t&&t(n);m<l.length;m++)a=l[m],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunkplayground=self.webpackChunkplayground||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var l=o.O(void 0,[633],(()=>o(636)));l=o.O(l)})();
//# sourceMappingURL=main.c21a51e6aafe1bf1ff3d.js.map