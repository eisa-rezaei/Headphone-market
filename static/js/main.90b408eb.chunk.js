(this["webpackJsonpheadphones-models"]=this["webpackJsonpheadphones-models"]||[]).push([[0],{33:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c.n(i),n=c(25),a=c.n(n),r=c(3),o=c(4),d=(c(33),c(1)),l=function(){return Object(d.jsxs)("main",{className:"getstarted-page",children:[Object(d.jsx)("div",{className:"getstarted-title-container",children:Object(d.jsxs)("h2",{children:["enjoy your ",Object(d.jsx)("span",{children:"music"})," time with classical ",Object(d.jsx)("span",{children:"sound"})]})}),Object(d.jsx)("div",{className:"btn-container",children:Object(d.jsx)(r.b,{to:"/listofproducts",className:"gets-btn",children:"get started"})})]})},j=c(10),u=c(9),b=c(13),h=c.n(b),m=c(17),p=c(14),O=c(15),x=Object(i.createContext)({favorites:[],totalfavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}}),f=function(){return Object(i.useContext)(x)},v=function(e){var t=e.children,c=Object(i.useState)((function(){var e=localStorage.getItem("favoritesProduct");try{return e?JSON.parse(localStorage.getItem("favoritesProduct")):[]}catch(t){console.log(t)}})),s=Object(u.a)(c,2),n=s[0],a=s[1];Object(i.useEffect)((function(){localStorage.setItem("favoritesProduct",JSON.stringify(n))}),[n]);var r={favorites:n,totalFavorites:n.length,addFavorite:function(e){return a((function(t){return t.concat(e)}))},removeFavorite:function(e){return a((function(t){return t.filter((function(t){return e!==t.id}))}))},itemIsFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(d.jsx)(x.Provider,{value:r,children:t})},g=Object(i.createContext)({isBlue:{},isGold:{},isBlack:{},colorIsBlack:function(){},colorIsGold:function(){},colorIsBlue:function(){}}),N=function(e){var t=e.children,c=Object(i.useState)({isBlack:!0,isGold:!1,isBlue:!1}),s=Object(u.a)(c,2),n=s[0],a=s[1],r={isBlue:n.isBlue,isGold:n.isGold,isBlack:n.isBlack,colorIs:n,colorIsBlack:function(){a({isBlack:!0,isGold:!1,isBlue:!1})},colorIsGold:function(){a({isBlack:!1,isGold:!0,isBlue:!1})},colorIsBlue:function(){a({isBlack:!1,isGold:!1,isBlue:!0})}};return Object(d.jsx)(g.Provider,{value:r,children:t})},I=Object(i.createContext)({countProduct:{},cardProducts:[],addingProductCount:function(e){},removingProductCount:function(e){},removingProduct:function(e){},addingProduct:function(e){},isInCard:function(){},productCountReSet:function(e){}}),k=function(){return Object(i.useContext)(I)},P=function(e){var t=e.children,c=Object(i.useState)(0),s=Object(u.a)(c,2),n=s[0],a=s[1],r=Object(i.useState)((function(){var e=localStorage.getItem("cardsProducts");try{return e?JSON.parse(localStorage.getItem("cardsProducts")):[]}catch(t){console.log(t)}})),o=Object(u.a)(r,2),l=o[0],j=o[1];Object(i.useEffect)((function(){localStorage.setItem("cardsProducts",JSON.stringify(l))}),[l]);var b={countProduct:n,addingProductCount:function(){a(n+1)},removingProductCount:function(){if(n>0)return a(n-1)},removingProduct:function(e){j((function(t){return t.filter((function(t){return t.id!==e}))}))},addingProduct:function(e){j((function(t){return t.concat(e)}))},isInCard:function(e){return l.some((function(t){return t.id===e}))},cardProducts:l,productCountReSet:function(e){return a(e)}};return Object(d.jsx)(I.Provider,{value:b,children:t})},C=[{img1:c.p+"static/media/headphone_1_1.69b52547.png",img2:c.p+"static/media/headphone_1_2.839accb0.png",img3:c.p+"static/media/headphone_1_3.ba473e67.png",title:"sennhesiser HD 450BT Headphones",price:199.99,id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. adipisicing elit. Iure provident Obcaecati pariatur facere quos quia molestiae. nihil aut animi eos Eveniet fuga et tenetur non incidunt."},{img1:c.p+"static/media/headphone_2_1.69145d27.png",img2:c.p+"static/media/headphone_2_2.e7ca9626.png",img3:c.p+"static/media/headphone_2_3.cb59b11f.png",title:"headphone Appel power microphone ",price:109.99,id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure provident adipisicing elit. Iure provident a nihil aut animi eos temporibus dolorem quae nihil aut animi eos deleniti. Nihil."},{img1:c.p+"static/media/headphone_3_1.7d5449f7.png",img2:c.p+"static/media/headphone_3_2.74f810c3.png",img3:c.p+"static/media/headphone_3_3.fb4086c4.png",title:"headphone GLX 3 with speacker",price:149.99,id:3,details:"Lorem ipsum dolor sit psum dolor sit adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e psum dolor sit adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e adipisicing elit. Iure provident amet consectetur, adipisicing elit. nihil aut animi eos Inventore, nihil aut animi eos impedit. Soluta e dolore, corrupti adipisci a?"}],B=(c(42),function(){var e=f(),t=e.itemIsFavorite,c=e.removeFavorite,s=e.addFavorite,n=k(),a=n.countProduct,l=n.cardProducts,b=n.addingProductCount,x=n.removingProductCount,v=n.addingProduct,N=n.productCountReSet,I=n.isInCard,P=Object(i.useState)({}),B=Object(u.a)(P,2),S=B[0],_=B[1],F=Object(o.f)().id;Object(i.useEffect)((function(){var e=C.find((function(e){return e.id===parseInt(F)}));_(e)}),[F]);var y=S.title,G=S.img1,w=S.img2,J=S.img3,E=S.price,L=S.details,q=Object(i.useContext)(g),R=q.isBlack,V=q.isGold,D=q.isBlue,H=q.colorIsBlack,A=q.colorIsBlue,M=q.colorIsGold,T=function(){return R?G:V?w:D?J:void 0};return Object(d.jsxs)("main",{className:"item-page",children:[Object(d.jsxs)("header",{className:"header-of-item",children:[Object(d.jsx)(r.b,{to:"/listofproducts",onClick:H,children:Object(d.jsx)(p.a,{})},"1"),Object(d.jsxs)(r.b,{to:"/card",onClick:H,children:[Object(d.jsx)("span",{className:"cardcunter",children:l.length}),Object(d.jsx)(m.c,{})]},"2")]}),Object(d.jsxs)("div",{className:"item-img-container",children:[Object(d.jsxs)(h.a,Object(j.a)(Object(j.a)({},{slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"progressbar"}}),{},{children:[Object(d.jsx)("div",{className:"item-single-pic",children:Object(d.jsx)("img",{src:T(),alt:y,className:"headphone-pic-item",id:"1"})}),Object(d.jsx)("div",{className:"item-single-pic",children:Object(d.jsx)("img",{src:T(),alt:y,className:"headphone-pic-item",id:"2"})}),Object(d.jsx)("div",{className:"item-single-pic",children:Object(d.jsx)("img",{src:T(),alt:y,className:"headphone-pic-item",id:"3"})})]})),Object(d.jsxs)("div",{className:"item-change-color",children:[Object(d.jsx)("span",{className:"color-link1",onClick:H,children:R&&Object(d.jsx)("p",{})}),Object(d.jsx)("span",{className:"color-link2",onClick:M,children:V&&Object(d.jsx)("p",{})}),Object(d.jsx)("span",{className:"color-link3",onClick:A,children:D&&Object(d.jsx)("p",{})})]})]}),Object(d.jsxs)("div",{className:"add-to-card-part",children:[Object(d.jsxs)("header",{className:"item-title-product",children:[Object(d.jsx)("h3",{children:y}),Object(d.jsx)("span",{className:t(parseInt(F))?"item-like-icon active":"item-like-icon ",onClick:function(e){return function(){var i=parseInt(e),n=C.filter((function(e){return e.id===i}));t(i)?c(i):s(n)}}(F),children:Object(d.jsx)(O.a,{})})]}),Object(d.jsxs)("div",{className:"item-stars-container",children:["\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f ",Object(d.jsx)("span",{className:"stars-point",children:"(4.6/5)"})]}),Object(d.jsxs)("div",{className:"item-details",children:[Object(d.jsx)("h4",{children:"product details"}),Object(d.jsx)("p",{children:L})]}),Object(d.jsxs)("div",{className:"item-price-card",children:[Object(d.jsx)("h4",{children:"price"}),Object(d.jsxs)("div",{className:"item-addcard-price",children:[Object(d.jsx)("h2",{children:E}),Object(d.jsxs)("div",{className:"add-card-count",children:[Object(d.jsx)("span",{onClick:x,children:Object(d.jsx)(m.a,{})}),Object(d.jsx)("h3",{children:a}),Object(d.jsx)("span",{onClick:b,children:Object(d.jsx)(m.b,{})})]})]})]}),Object(d.jsx)("div",{className:"item-btn-container",children:Object(d.jsx)(r.b,{to:a>0?"/card":null,className:"items-btn",onClick:function(){a>0&&!I(S.id)&&v(S),H(),N(0)},children:"add to card"})})]})]})}),S=c(27),_=c(16),F=c(28),y=c(11),G=function(){var e=Object(i.useState)(C),t=Object(u.a)(e,1)[0],c=f(),s=c.itemIsFavorite,n=c.removeFavorite,a=c.addFavorite,o=function(e){return function(){var c=t.filter((function(t){return t.id===e}));s(e)?n(e):a(c)}};return Object(d.jsx)("section",{className:"products-container",children:Object(d.jsx)(h.a,Object(j.a)(Object(j.a)({},{spaceBetween:20,autoplay:{delay:1500,disableOnInteraction:!1},slidesPerView:1.5}),{},{children:t.map((function(e){var t=e.img1,c=e.title,i=e.price,n=e.id;return Object(d.jsxs)("div",{className:"single-product",children:[Object(d.jsx)(r.b,{to:"/item/".concat(n),children:Object(d.jsx)("img",{src:t,alt:c,className:"headphone-pic"})}),Object(d.jsx)("span",{className:s(n)?"like-icon active":"like-icon ",onClick:o(n),children:Object(d.jsx)(O.a,{})}),Object(d.jsxs)("div",{className:"product-description",children:[Object(d.jsx)("h5",{children:c}),Object(d.jsx)("h4",{children:i}),Object(d.jsx)(r.b,{to:"/item/".concat(n),children:Object(d.jsx)(y.a,{})})]})]},n)}))}))})},w=function(){return Object(d.jsx)("section",{className:"products-container-list-2",children:Object(d.jsx)(h.a,Object(j.a)(Object(j.a)({},{spaceBetween:20,slidesPerView:1.5}),{},{children:C.map((function(e){var t=e.img1,c=e.title,i=e.price,s=e.id;return Object(d.jsx)(r.b,{to:"/item/".concat(s),children:Object(d.jsxs)("div",{className:"single-product-list-2",children:[Object(d.jsx)("img",{src:t,alt:c,className:"headphone-pic-list-2"}),Object(d.jsxs)("div",{className:"product-description-list-2",children:[Object(d.jsx)("h5",{children:c}),Object(d.jsx)("h4",{children:i}),Object(d.jsx)("span",{children:Object(d.jsx)(y.a,{})})]})]})},s)}))}))})},J=(c(43),function(){var e=f(),t=k().cardProducts;return Object(d.jsxs)("main",{className:"products-page",children:[Object(d.jsxs)("header",{className:"header-of-products",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)(S.a,{})},"1"),Object(d.jsxs)(r.b,{to:"/card",children:[Object(d.jsxs)("span",{className:"cardcunter",children:[t.length," "]}),Object(d.jsx)(m.c,{})]},"2")]}),Object(d.jsxs)("div",{className:"product-title-search",children:[Object(d.jsxs)("span",{className:"discover-bar",children:[Object(d.jsx)("h3",{children:"Discover your best"}),Object(d.jsxs)(r.b,{to:"/favorites",children:[Object(d.jsx)("span",{children:e.totalFavorites}),Object(d.jsx)(F.a,{})]})]}),Object(d.jsxs)("div",{className:"product-search-box",children:[Object(d.jsxs)("span",{className:"search-box",children:[Object(d.jsx)("span",{className:"search-box-icon",children:Object(d.jsx)(O.b,{})}),Object(d.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"search headphones"})]}),Object(d.jsx)("span",{className:"adjustment-icon",children:Object(d.jsx)(_.a,{})})]})]}),Object(d.jsxs)("div",{className:" popular-title-bar",children:[Object(d.jsx)("h4",{children:"popular headphones"}),Object(d.jsx)(r.b,{to:"/",children:"see all"})]}),Object(d.jsx)(G,{}),Object(d.jsxs)("div",{className:" popular-title-bar",children:[Object(d.jsx)("h4",{children:"best sellings"}),Object(d.jsx)(r.b,{to:"/",children:"see all"})]}),Object(d.jsx)(w,{})]})}),E=(c(44),function(){var e=k(),t=e.cardProducts,c=e.removingProduct,i=e.isInCard,s=function(e){return function(){i(e)&&c(e)}};return Object(d.jsxs)("main",{className:"card-page",children:[Object(d.jsx)("header",{className:"header-of-card",children:Object(d.jsx)(r.b,{to:"/listofproducts",children:Object(d.jsx)(p.a,{})},"1")}),Object(d.jsxs)("ul",{className:"card-items-container",children:[Object(d.jsx)("h3",{children:"your card products"}),t.map((function(e){var t=e.title,c=e.img1,i=e.price,n=e.id;return Object(d.jsxs)("li",{className:"card-single-product",children:[Object(d.jsx)(r.b,{to:"/item/".concat(n),children:Object(d.jsx)("img",{src:c,alt:t,className:"headphone-pic-list-2"})}),Object(d.jsxs)("div",{className:"card-product-description",children:[Object(d.jsx)("span",{onClick:s(n),children:Object(d.jsx)(_.b,{})}),Object(d.jsx)("h5",{children:t}),Object(d.jsx)("h4",{children:i}),Object(d.jsx)(r.b,{to:"/item/".concat(n),children:Object(d.jsx)(y.a,{})})]})]},n)}))]})]})}),L=(c(45),function(){var e=f(),t=e.removeFavorite,c=e.itemIsFavorite,i=e.favorites,s=function(e){return function(){if(c(e))return t(e)}};return Object(d.jsxs)("main",{className:"favorites-page",children:[Object(d.jsx)("header",{className:"header-of-favorites",children:Object(d.jsx)(r.b,{to:"/listofproducts",children:Object(d.jsx)(p.a,{})},"1")}),Object(d.jsxs)("section",{className:"favorites-container",children:[Object(d.jsx)("h3",{children:"your favorites products"}),Object(d.jsx)("ul",{className:"favorite-items-container",children:i.map((function(e){var t=e.title,c=e.img1,i=e.price,n=e.id;return Object(d.jsxs)("li",{className:"favorite-single-product",children:[Object(d.jsx)(r.b,{to:"/item/".concat(n),children:Object(d.jsx)("img",{src:c,alt:t,className:"headphone-pic-list-2"})}),Object(d.jsxs)("div",{className:"favorites-product-description",children:[Object(d.jsx)("span",{onClick:s(n),children:Object(d.jsx)(_.b,{})}),Object(d.jsx)("h5",{children:t}),Object(d.jsx)("h4",{children:i}),Object(d.jsx)(r.b,{to:"/item/".concat(n),children:Object(d.jsx)(y.a,{})})]})]},n)}))})]})]})});c(46);var q=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"pages-container",children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",component:l,exact:!0}),Object(d.jsx)(o.a,{path:"/listofproducts",component:J}),Object(d.jsx)(o.a,{path:"/item/:id",children:Object(d.jsx)(B,{})}),Object(d.jsx)(o.a,{path:"/card",children:Object(d.jsx)(E,{})}),Object(d.jsx)(o.a,{path:"/favorites",component:L})]})})})})})};a.a.render(Object(d.jsx)(P,{children:Object(d.jsx)(P,{children:Object(d.jsx)(N,{children:Object(d.jsx)(v,{children:Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(q,{})})})})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.90b408eb.chunk.js.map