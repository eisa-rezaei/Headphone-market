(this["webpackJsonpheadphones-models"]=this["webpackJsonpheadphones-models"]||[]).push([[0],{33:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c.n(i),a=c(24),n=c.n(a),r=c(4),d=c(3),j=(c(33),c(1)),l=function(){return Object(j.jsxs)("main",{className:"getstarted-page",children:[Object(j.jsx)("div",{className:"getstarted-title-container",children:Object(j.jsxs)("h2",{children:["enjoy your ",Object(j.jsx)("span",{children:"music"})," time with classical ",Object(j.jsx)("span",{children:"sound"})]})}),Object(j.jsx)("div",{className:"btn-container",children:Object(j.jsx)(r.b,{to:"/listofproducts",className:"gets-btn",children:"get started"})})]})},o=c(9),h=c.p+"static/media/headphone_1.c7e208bc.png",b=[{img:c.p+"static/media/headphone_2.5111fab0.png",title:"sennhesiser HD 450BT Headphones",price:199.99,id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. adipisicing elit. Iure provident Obcaecati pariatur facere quos quia molestiae. nihil aut animi eos Eveniet fuga et tenetur non incidunt."},{img:h,title:"headphone Appel power microphone ",price:109.99,id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure provident adipisicing elit. Iure provident a nihil aut animi eos temporibus dolorem quae nihil aut animi eos deleniti. Nihil."},{img:c.p+"static/media/headphone_3.ae3e5bfe.png",title:"headphone GLX 3 with speacker",price:149.99,id:3,details:"Lorem ipsum dolor sit psum dolor sit adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e psum dolor sit adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e dolore, corrupti adipisci a?"}],p=c(11),u=c(15),m=(c(40),c(16)),O=function(){var e=Object(i.useState)("default droduct"),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(0),n=Object(o.a)(a,2),l=n[0],h=n[1],O=Object(d.f)().id;Object(i.useEffect)((function(){var e=b.find((function(e){return e.id===parseInt(O)}));s(e)}),[O]);var x=c.title,v=c.img,f=c.price,N=c.details;return Object(j.jsxs)("main",{className:"item-page",children:[Object(j.jsxs)("div",{className:"item-img-container",children:[Object(j.jsxs)("header",{className:"header-of-item",children:[Object(j.jsx)(r.b,{to:"/listofproducts",children:Object(j.jsx)(u.a,{})},"1"),Object(j.jsx)(r.b,{to:"/card",children:Object(j.jsx)(p.c,{})},"2")]}),Object(j.jsx)("img",{src:v,alt:x,className:"headphone-pic-item"})]}),Object(j.jsxs)("div",{className:"add-to-card-part",children:[Object(j.jsxs)("header",{className:"item-title-product",children:[Object(j.jsx)("h3",{children:x}),Object(j.jsx)("span",{className:"item-like-icon",children:Object(j.jsx)(m.a,{})})]}),Object(j.jsxs)("div",{className:"item-stars-container",children:["\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f ",Object(j.jsx)("span",{className:"stars-point",children:"(4.6/5)"})]}),Object(j.jsxs)("div",{className:"item-details",children:[Object(j.jsx)("h4",{children:"product details"}),Object(j.jsx)("p",{children:N})]}),Object(j.jsxs)("div",{className:"item-price-card",children:[Object(j.jsx)("h4",{children:"price"}),Object(j.jsxs)("div",{className:"item-addcard-price",children:[Object(j.jsx)("h2",{children:f}),Object(j.jsxs)("div",{className:"add-card-count",children:[Object(j.jsx)("span",{onClick:function(){l>0&&h(l-1)},children:Object(j.jsx)(p.a,{})}),Object(j.jsx)("h3",{children:l}),Object(j.jsx)("span",{onClick:function(){return h(l+1)},children:Object(j.jsx)(p.b,{})})]})]})]}),Object(j.jsx)("div",{className:"item-btn-container",children:Object(j.jsx)(r.b,{to:"/listofproducts",className:"items-btn",children:"add to card"})})]})]})},x=c(26),v=c(27),f=c(28),N=(c(41),c(12)),g=c(17),I=c.n(g),F=c(18),w=Object(i.createContext)({favorites:[],totalfavorites:0,addFavorite:function(e){},removeFavorite:function(e){},isIsFavorite:function(e){}}),S=function(e){var t=e.children,c=Object(i.useState)([]),s=Object(o.a)(c,2),a=s[0],n=s[1],r={favorites:a,totalfavorites:a.length,addFavorite:function(e){n((function(t){return t.concat(e)}))},removeFavorite:function(e){return n((function(t){return t.filter((function(t){return e!==t.id}))}))},itemIsFavorite:function(e){return a.some((function(t){return t.id===e}))}};return Object(j.jsx)(w.Provider,{value:r,children:t})},k=function(){var e=Object(i.useState)(b),t=Object(o.a)(e,1)[0],c=Object(i.useContext)(w);return console.log(c.favorites),Object(j.jsx)("section",{className:"products-container",children:Object(j.jsx)(I.a,Object(N.a)(Object(N.a)({},{spaceBetween:20,autoplay:{delay:1500,disableOnInteraction:!1},slidesPerView:1.5}),{},{children:t.map((function(e){var t=e.img,i=e.title,s=e.price,a=e.id;return Object(j.jsxs)("div",{className:"single-product",children:[Object(j.jsx)(r.b,{to:"/item/".concat(a),children:Object(j.jsx)("img",{src:t,alt:i,className:"headphone-pic"})}),Object(j.jsx)("span",{className:"like-icon",onClick:function(){return function(e){c.itemIsFavorite(e)?c.removeFavorite(e):c.addFavorite(e)}(a)},children:Object(j.jsx)(m.a,{})}),Object(j.jsxs)("div",{className:"product-description",children:[Object(j.jsx)("h5",{children:i}),Object(j.jsx)("h4",{children:s}),Object(j.jsx)(r.b,{to:"/item/".concat(a),children:Object(j.jsx)(F.a,{})})]})]},a)}))}))})},y=function(){var e=Object(i.useState)(b),t=Object(o.a)(e,1)[0];return Object(j.jsx)("section",{className:"products-container-list-2",children:Object(j.jsx)(I.a,Object(N.a)(Object(N.a)({},{spaceBetween:20,slidesPerView:1.5}),{},{children:t.map((function(e){var t=e.img,c=e.title,i=e.price,s=e.id;return Object(j.jsx)(r.b,{to:"/item/".concat(s),children:Object(j.jsxs)("div",{className:"single-product-list-2",children:[Object(j.jsx)("img",{src:t,alt:c,className:"headphone-pic-list-2"}),Object(j.jsxs)("div",{className:"product-description-list-2",children:[Object(j.jsx)("h5",{children:c}),Object(j.jsx)("h4",{children:i}),Object(j.jsx)("span",{children:Object(j.jsx)(F.a,{})})]})]})},s)}))}))})},C=function(){return Object(j.jsxs)("main",{className:"products-page",children:[Object(j.jsxs)("header",{className:"header-of-products",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)(x.a,{})},"1"),Object(j.jsx)(r.b,{to:"/card",children:Object(j.jsx)(p.c,{})},"2")]}),Object(j.jsxs)("div",{className:"product-title-search",children:[Object(j.jsx)("h3",{children:"discover your best"}),Object(j.jsxs)("div",{className:"product-search-box",children:[Object(j.jsxs)("span",{className:"search-box",children:[Object(j.jsx)("span",{className:"search-box-icon",children:Object(j.jsx)(v.a,{})}),Object(j.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"search headphones"})]}),Object(j.jsx)("span",{className:"adjustment-icon",children:Object(j.jsx)(f.a,{})})]})]}),Object(j.jsxs)("div",{className:" popular-title-bar",children:[Object(j.jsx)("h4",{children:"popular headphones"}),Object(j.jsx)(r.b,{to:"/",children:"see all"})]}),Object(j.jsx)(k,{}),Object(j.jsxs)("div",{className:" popular-title-bar",children:[Object(j.jsx)("h4",{children:"best sellings"}),Object(j.jsx)(r.b,{to:"/",children:"see all"})]}),Object(j.jsx)(y,{})]})},B=(c(44),c(45),function(){return Object(j.jsx)("main",{className:"card-page",children:Object(j.jsx)("header",{className:"header-of-card",children:Object(j.jsx)(r.b,{to:"/listofproducts",children:Object(j.jsx)(u.a,{})},"1")})})});var L=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"pages-container",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",component:l,exact:!0}),Object(j.jsx)(d.a,{path:"/listofproducts",component:C}),Object(j.jsx)(d.a,{path:"/item/:id",children:Object(j.jsx)(O,{})}),Object(j.jsx)(d.a,{path:"/card",component:B})]})})})})})};n.a.render(Object(j.jsx)(S,{children:Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(L,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.984accf1.chunk.js.map