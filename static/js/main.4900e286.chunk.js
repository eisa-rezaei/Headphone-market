(this["webpackJsonpheadphones-models"]=this["webpackJsonpheadphones-models"]||[]).push([[0],{33:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t);var c=i(2),s=i.n(c),a=i(25),n=i.n(a),r=i(3),o=i(4),l=(i(33),i(1)),d=function(){return Object(l.jsxs)("main",{className:"getstarted-page",children:[Object(l.jsx)("div",{className:"getstarted-title-container",children:Object(l.jsxs)("h2",{children:["enjoy your ",Object(l.jsx)("span",{children:"music"})," time with classical ",Object(l.jsx)("span",{children:"sound"})]})}),Object(l.jsx)("div",{className:"btn-container",children:Object(l.jsx)(r.b,{to:"/listofproducts",className:"gets-btn",children:"get started"})})]})},j=i(10),b=i(9),h=i(12),u=i.n(h),m=i(16),p=i(13),O=[{img1:i.p+"static/media/headphone_1_1.c7e208bc.png",img2:i.p+"static/media/headphone_1_2.11052ddb.png",img3:i.p+"static/media/headphone_1_3.065c854c.png",title:"sennhesiser HD 450BT Headphones",price:199.99,id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. adipisicing elit. Iure provident Obcaecati pariatur facere quos quia molestiae. nihil aut animi eos Eveniet fuga et tenetur non incidunt."},{img1:i.p+"static/media/headphone_2_1.5111fab0.png",img2:i.p+"static/media/headphone_2_2.08f85fd4.png",img3:i.p+"static/media/headphone_2_3.68326f86.png",title:"headphone Appel power microphone ",price:109.99,id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure provident adipisicing elit. Iure provident a nihil aut animi eos temporibus dolorem quae nihil aut animi eos deleniti. Nihil."},{img1:i.p+"static/media/headphone_3_1.ae3e5bfe.png",img2:i.p+"static/media/headphone_3_2.25272582.png",img3:i.p+"static/media/headphone_3_3.af3c73b2.png",title:"headphone GLX 3 with speacker",price:149.99,id:3,details:"Lorem ipsum dolor sit psum dolor sit adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e psum dolor sit adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e dolore, corrupti adipisci a?"}],x=i(14),v=Object(c.createContext)({favorites:[],totalfavorites:0,addFavorite:function(e){},removeFavorite:function(e){},isIsFavorite:function(e){}}),f=function(e){var t=e.children,i=Object(c.useState)([]),s=Object(b.a)(i,2),a=s[0],n=s[1],r={favorites:a,totalFavorites:a.length,addFavorite:function(e){return n((function(t){return t.concat(e)}))},removeFavorite:function(e){return n((function(t){return t.filter((function(t){return e!==t.id}))}))},itemIsFavorite:function(e){return a.some((function(t){return t.id===e}))}};return Object(l.jsx)(v.Provider,{value:r,children:t})},g=function(){return Object(c.useContext)(v)},N=(i(42),Object(c.createContext)({isBlue:{},isGold:{},isBlack:{},colorIsBlack:function(){},colorIsGold:function(){},colorIsBlue:function(){}})),I=function(e){var t=e.children,i=Object(c.useState)({isBlack:!0,isGold:!1,isBlue:!1}),s=Object(b.a)(i,2),a=s[0],n=s[1],r={isBlue:a.isBlue,isGold:a.isGold,isBlack:a.isBlack,colorIs:a,colorIsBlack:function(){n({isBlack:!0,isGold:!1,isBlue:!1})},colorIsGold:function(){n({isBlack:!1,isGold:!0,isBlue:!1})},colorIsBlue:function(){n({isBlack:!1,isGold:!1,isBlue:!0})}};return Object(l.jsx)(N.Provider,{value:r,children:t})},k=function(){var e=Object(c.useContext)(N),t=g(),i=Object(c.useState)("default droduct"),s=Object(b.a)(i,2),a=s[0],n=s[1],d=Object(c.useState)(0),h=Object(b.a)(d,2),v=h[0],f=h[1],I=Object(o.f)().id;Object(c.useEffect)((function(){var e=O.find((function(e){return e.id===parseInt(I)}));n(e)}),[I]);var k=a.title,B=a.img1,F=a.img2,_=a.img3,C=a.price,G=a.details,w=function(){return e.isBlack?B:e.isGold?F:e.isBlue?_:void 0};return Object(l.jsxs)("main",{className:"item-page",children:[Object(l.jsxs)("header",{className:"header-of-item",children:[Object(l.jsx)(r.b,{to:"/listofproducts",children:Object(l.jsx)(p.a,{})},"1"),Object(l.jsx)(r.b,{to:"/card",children:Object(l.jsx)(m.c,{})},"2")]}),Object(l.jsxs)("div",{className:"item-img-container",children:[Object(l.jsxs)(u.a,Object(j.a)(Object(j.a)({},{slidesPerView:"auto",pagination:{el:".swiper-pagination"}}),{},{children:[Object(l.jsx)("div",{className:"item-single-pic",children:Object(l.jsx)("img",{src:w(),alt:k,className:"headphone-pic-item",id:"1"})}),Object(l.jsx)("div",{className:"item-single-pic",children:Object(l.jsx)("img",{src:w(),alt:k,className:"headphone-pic-item",id:"2"})}),Object(l.jsx)("div",{className:"item-single-pic",children:Object(l.jsx)("img",{src:w(),alt:k,className:"headphone-pic-item",id:"3"})})]})),Object(l.jsxs)("div",{className:"item-change-color",children:[Object(l.jsx)(r.b,{className:"color-link1",onClick:e.colorIsBlack,children:Object(l.jsx)("p",{})}),Object(l.jsx)(r.b,{className:"color-link2",onClick:e.colorIsGold,children:Object(l.jsx)("p",{})}),Object(l.jsx)(r.b,{className:"color-link3",onClick:e.colorIsBlue,children:Object(l.jsx)("p",{})})]})]}),Object(l.jsxs)("div",{className:"add-to-card-part",children:[Object(l.jsxs)("header",{className:"item-title-product",children:[Object(l.jsx)("h3",{children:k}),Object(l.jsx)("span",{className:t.itemIsFavorite(parseInt(I))?"item-like-icon active":"item-like-icon ",onClick:function(){return function(e){var i=parseInt(e),c=t.itemIsFavorite(i),s=O.filter((function(e){return e.id===i}));c?t.removeFavorite(i):t.addFavorite(s),console.log(t.favorites)}(I)},children:Object(l.jsx)(x.a,{})})]}),Object(l.jsxs)("div",{className:"item-stars-container",children:["\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f ",Object(l.jsx)("span",{className:"stars-point",children:"(4.6/5)"})]}),Object(l.jsxs)("div",{className:"item-details",children:[Object(l.jsx)("h4",{children:"product details"}),Object(l.jsx)("p",{children:G})]}),Object(l.jsxs)("div",{className:"item-price-card",children:[Object(l.jsx)("h4",{children:"price"}),Object(l.jsxs)("div",{className:"item-addcard-price",children:[Object(l.jsx)("h2",{children:C}),Object(l.jsxs)("div",{className:"add-card-count",children:[Object(l.jsx)("span",{onClick:function(){v>0&&f(v-1)},children:Object(l.jsx)(m.a,{})}),Object(l.jsx)("h3",{children:v}),Object(l.jsx)("span",{onClick:function(){return f(v+1)},children:Object(l.jsx)(m.b,{})})]})]})]}),Object(l.jsx)("div",{className:"item-btn-container",children:Object(l.jsx)(r.b,{to:"/listofproducts",className:"items-btn",children:"add to card"})})]})]})},B=i(27),F=i(19),_=i(28),C=(i(43),i(15)),G=function(){var e=Object(c.useState)(O),t=Object(b.a)(e,1)[0],i=g();return Object(l.jsx)("section",{className:"products-container",children:Object(l.jsx)(u.a,Object(j.a)(Object(j.a)({},{spaceBetween:20,autoplay:{delay:1500,disableOnInteraction:!1},slidesPerView:1.5}),{},{children:t.map((function(e){var c=e.img1,s=e.title,a=e.price,n=e.id;return Object(l.jsxs)("div",{className:"single-product",children:[Object(l.jsx)(r.b,{to:"/item/".concat(n),children:Object(l.jsx)("img",{src:c,alt:s,className:"headphone-pic"})}),Object(l.jsx)("span",{className:i.itemIsFavorite(n)?"like-icon active":"like-icon ",onClick:function(){return function(e){var c=i.itemIsFavorite(e),s=t.filter((function(t){return t.id===e}));c?i.removeFavorite(e):i.addFavorite(s)}(n)},children:Object(l.jsx)(x.a,{})}),Object(l.jsxs)("div",{className:"product-description",children:[Object(l.jsx)("h5",{children:s}),Object(l.jsx)("h4",{children:a}),Object(l.jsx)(r.b,{to:"/item/".concat(n),children:Object(l.jsx)(C.a,{})})]})]},n)}))}))})},w=function(){var e=Object(c.useState)(O),t=Object(b.a)(e,1)[0];return Object(l.jsx)("section",{className:"products-container-list-2",children:Object(l.jsx)(u.a,Object(j.a)(Object(j.a)({},{spaceBetween:20,slidesPerView:1.5}),{},{children:t.map((function(e){var t=e.img1,i=e.title,c=e.price,s=e.id;return Object(l.jsx)(r.b,{to:"/item/".concat(s),children:Object(l.jsxs)("div",{className:"single-product-list-2",children:[Object(l.jsx)("img",{src:t,alt:i,className:"headphone-pic-list-2"}),Object(l.jsxs)("div",{className:"product-description-list-2",children:[Object(l.jsx)("h5",{children:i}),Object(l.jsx)("h4",{children:c}),Object(l.jsx)("span",{children:Object(l.jsx)(C.a,{})})]})]})},s)}))}))})},S=function(){console.log("component rendered");var e=g();return Object(l.jsxs)("main",{className:"products-page",children:[Object(l.jsxs)("header",{className:"header-of-products",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)(B.a,{})},"1"),Object(l.jsx)(r.b,{to:"/card",children:Object(l.jsx)(m.c,{})},"2")]}),Object(l.jsxs)("div",{className:"product-title-search",children:[Object(l.jsxs)("span",{className:"discover-bar",children:[Object(l.jsx)("h3",{children:"discover your best"}),Object(l.jsxs)(r.b,{to:"/favorites",children:[Object(l.jsx)("span",{children:e.totalFavorites}),Object(l.jsx)(_.a,{})]})]}),Object(l.jsxs)("div",{className:"product-search-box",children:[Object(l.jsxs)("span",{className:"search-box",children:[Object(l.jsx)("span",{className:"search-box-icon",children:Object(l.jsx)(x.b,{})}),Object(l.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"search headphones"})]}),Object(l.jsx)("span",{className:"adjustment-icon",children:Object(l.jsx)(F.a,{})})]})]}),Object(l.jsxs)("div",{className:" popular-title-bar",children:[Object(l.jsx)("h4",{children:"popular headphones"}),Object(l.jsx)(r.b,{to:"/",children:"see all"})]}),Object(l.jsx)(G,{}),Object(l.jsxs)("div",{className:" popular-title-bar",children:[Object(l.jsx)("h4",{children:"best sellings"}),Object(l.jsx)(r.b,{to:"/",children:"see all"})]}),Object(l.jsx)(w,{})]})},y=(i(44),function(){return Object(l.jsx)("main",{className:"card-page",children:Object(l.jsx)("header",{className:"header-of-card",children:Object(l.jsx)(r.b,{to:"/listofproducts",children:Object(l.jsx)(p.a,{})},"1")})})}),P=(i(45),function(){var e=g(),t=e.favorites;return Object(l.jsxs)("main",{className:"favorites-page",children:[Object(l.jsx)("header",{className:"header-of-favorites",children:Object(l.jsx)(r.b,{to:"/listofproducts",children:Object(l.jsx)(p.a,{})},"1")}),Object(l.jsxs)("section",{className:"favorites-container",children:[Object(l.jsx)("h3",{children:"your favorites product"}),Object(l.jsx)("ul",{className:"favorite-items-container",children:t.map((function(t){var i=t.title,c=t.img,s=t.price,a=t.id;return Object(l.jsxs)("li",{className:"favorite-single-product",children:[Object(l.jsx)(r.b,{to:"/item/".concat(a),children:Object(l.jsx)("img",{src:c,alt:i,className:"headphone-pic-list-2"})}),Object(l.jsxs)("div",{className:"favorites-product-description",children:[Object(l.jsx)("span",{onClick:function(){return function(t){if(e.itemIsFavorite(t))return e.removeFavorite(t)}(a)},children:Object(l.jsx)(F.b,{})}),Object(l.jsx)("h5",{children:i}),Object(l.jsx)("h4",{children:s}),Object(l.jsx)(r.b,{to:"/item/".concat(a),children:Object(l.jsx)(C.a,{})})]})]},a)}))})]})]})});i(46);var L=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"pages-container",children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",component:d,exact:!0}),Object(l.jsx)(o.a,{path:"/listofproducts",component:S}),Object(l.jsx)(I,{children:Object(l.jsx)(o.a,{path:"/item/:id",children:Object(l.jsx)(k,{})})}),Object(l.jsx)(o.a,{path:"/card",component:y}),Object(l.jsx)(o.a,{path:"/favorites",component:P})]})})})})})};n.a.render(Object(l.jsx)(f,{children:Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(L,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4900e286.chunk.js.map