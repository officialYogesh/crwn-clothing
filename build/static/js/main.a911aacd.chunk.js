(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(48),i=n.n(a),s=n(46),o=n(19),l=n(60),u=n(32),b=(n(77),n(61)),d=n(70),j=n(13),p={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},O=n(25),h=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},m=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},f={hidden:!0,cartItems:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case p.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:h(e.cartItems,t.payload)});case p.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:m(e.cartItems,t.payload)});case p.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case p.CLEAR_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:[]});default:return e}},v=n(62),g=n.n(v),S={CHECK_USER_SESSION:"CHECK_USER_SESSION",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},y={currentUser:null,error:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.SIGN_IN_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload,error:null});case S.SIGN_OUT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:null,error:null});case S.SIGN_IN_FAILURE:case S.SIGN_OUT_FAILURE:case S.SIGN_UP_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});default:return e}},C=n(69),E={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},N={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},w={collections:null,isFetching:!1,errorMessage:void 0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.FETCH_COLLECTIONS_START:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case N.FETCH_COLLECTIONS_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{collections:t.payload,isFetching:!1});case N.FETCH_COLLECTIONS_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},T={key:"root",storage:g.a,whitelist:["cart"]},U=Object(u.b)({user:I,cart:x,directory:_,shop:k}),A=Object(C.a)(T,U),R=n(0),L=n.n(R),G=n(14),F=n(38),P=n(3),M=n(63),H=n(35),D={apiKey:"AIzaSyDUG2pr2J1DyA2xU02F2L_C63snkc7ks8s",authDomain:"crwn-clothing-506c5.firebaseapp.com",projectId:"crwn-clothing-506c5",storageBucket:"crwn-clothing-506c5.appspot.com",messagingSenderId:"879710890691",appId:"1:879710890691:web:c26aebec2d873a17735076"},q=Object(M.a)(D),z=Object(F.c)(q),V=new F.a,K=Object(H.e)(),W=function(){var e=Object(P.a)(L.a.mark((function e(t,n){var r,c,a,i,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Object(H.b)(K,"users/".concat(t.uid)),e.next=5,Object(H.c)(r);case 5:if(!(c=e.sent).exists()){e.next=9;break}e.next=18;break;case 9:return a=t.displayName,i=t.email,s=new Date,e.prev=11,e.next=14,Object(H.f)(Object(H.b)(K,"users",t.uid),Object(j.a)({displayName:a,email:i,createdAt:s},n));case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(11);case 18:return e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t,n){return e.apply(this,arguments)}}(),B=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},J=function(e){return{type:S.SIGN_IN_SUCCESS,payload:e}},Q=function(e){return{type:S.SIGN_IN_FAILURE,payload:e}},X=function(e){var t=e.user,n=e.additionalData;return{type:S.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},Y=L.a.mark(be),$=L.a.mark(de),Z=L.a.mark(je),ee=L.a.mark(pe),te=L.a.mark(Oe),ne=L.a.mark(he),re=L.a.mark(me),ce=L.a.mark(fe),ae=L.a.mark(xe),ie=L.a.mark(ve),se=L.a.mark(ge),oe=L.a.mark(Se),le=L.a.mark(ye),ue=L.a.mark(Ie);function be(e,t){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(G.b)(W,e,t);case 3:return n.next=5,Object(G.c)(J(Object(j.a)({id:e.uid},e)));case 5:n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,Object(G.c)(Q(n.t0));case 11:case"end":return n.stop()}}),Y,null,[[0,7]])}function de(){var e,t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(F.f)(z,V);case 3:return e=n.sent,t=e.user,n.next=7,be(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(G.c)(Q(n.t0));case 13:case"end":return n.stop()}}),$,null,[[0,9]])}function je(e){var t,n,r,c,a;return L.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,Object(F.e)(z,n,r);case 4:return c=i.sent,a=c.user,i.next=8,be(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(G.c)(Q(i.t0));case 14:case"end":return i.stop()}}),Z,null,[[1,10]])}function pe(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=Object(F.d)(z,function(){var t=Object(P.a)(L.a.mark((function t(r){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e(r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,be(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(G.c)(Q(t.t0));case 14:case"end":return t.stop()}}),ee,null,[[0,10]])}function Oe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.signOut();case 3:return e.next=5,Object(G.c)({type:S.SIGN_OUT_SUCCESS});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(G.c)((t=e.t0,{type:S.SIGN_OUT_FAILURE,payload:t}));case 10:case"end":return e.stop()}var t}),te,null,[[0,7]])}function he(e){var t,n,r,c,a,i;return L.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,Object(F.b)(z,n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(G.c)(X({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(G.c)((o=s.t0,{type:S.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),ne,null,[[1,10]])}function me(e){var t,n,r;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,be(n,r);case 3:case"end":return c.stop()}}),re)}function fe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.GOOGLE_SIGN_IN_START,de);case 2:case"end":return e.stop()}}),ce)}function xe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.EMAIL_SIGN_IN_START,je);case 2:case"end":return e.stop()}}),ae)}function ve(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.CHECK_USER_SESSION,pe);case 2:case"end":return e.stop()}}),ie)}function ge(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.SIGN_OUT_START,Oe);case 2:case"end":return e.stop()}}),se)}function Se(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.SIGN_UP_START,he);case 2:case"end":return e.stop()}}),oe)}function ye(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.SIGN_UP_SUCCESS,me);case 2:case"end":return e.stop()}}),le)}function Ie(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(fe),Object(G.b)(xe),Object(G.b)(ve),Object(G.b)(ge),Object(G.b)(Se),Object(G.b)(ye)]);case 2:case"end":return e.stop()}}),ue)}var Ce=function(e){return{type:N.FETCH_COLLECTIONS_SUCCESS,payload:e}},Ee=L.a.mark(we),_e=L.a.mark(ke),Ne=L.a.mark(Te);function we(){var e,t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(H.d)(Object(H.a)(K,"collections"));case 3:return e=n.sent,n.next=6,Object(G.b)(B,e);case 6:return t=n.sent,n.next=9,Object(G.c)(Ce(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(G.c)((r=n.t0.message,{type:N.FETCH_COLLECTIONS_FAILURE,payload:r}));case 15:case"end":return n.stop()}var r}),Ee,null,[[0,11]])}function ke(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(N.FETCH_COLLECTIONS_START,we);case 2:case"end":return e.stop()}}),_e)}function Te(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(ke)]);case 2:case"end":return e.stop()}}),Ne)}var Ue=function(){return{type:p.TOGGLE_CART_HIDDEN}},Ae=function(e){return{type:p.ADD_ITEM,payload:e}},Re=L.a.mark(Fe),Le=L.a.mark(Pe),Ge=L.a.mark(Me);function Fe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)({type:p.CLEAR_CART});case 2:case"end":return e.stop()}}),Re)}function Pe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.SIGN_OUT_SUCCESS,Fe);case 2:case"end":return e.stop()}}),Le)}function Me(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Pe)]);case 2:case"end":return e.stop()}}),Ge)}var He=L.a.mark(De);function De(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Ie),Object(G.b)(Te),Object(G.b)(Me)]);case 2:case"end":return e.stop()}}),He)}var qe=Object(d.a)(),ze=[qe];var Ve=Object(u.d)(A,u.a.apply(void 0,ze));qe.run(De);var Ke,We,Be,Je,Qe,Xe,Ye,$e,Ze,et,tt,nt,rt,ct,at,it,st,ot,lt,ut,bt,dt,jt=Object(b.a)(Ve),pt=Ve,Ot=(n(81),n(1)),ht=n(2),mt=n(10),ft=n(11),xt=n(15),vt=n(18),gt=Object(vt.a)([function(e){return e.user}],(function(e){return e.currentUser})),St=function(e){return e.shop},yt=Object(vt.a)([St],(function(e){return e.collections})),It=Object(vt.a)([yt],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Ct=Object(vt.a)([St],(function(e){return e.isFetching})),Et=Object(vt.a)([St],(function(e){return!!e.collections})),_t=n(37),Nt=n(29),wt=n(30),kt=wt.b.div(Ke||(Ke=Object(Nt.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Tt=wt.b.div(We||(We=Object(Nt.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),Ut=n(6),At=["isLoading"],Rt=function(e){return function(t){var n=t.isLoading,r=Object(_t.a)(t,At);return n?Object(Ut.jsx)(kt,{children:Object(Ut.jsx)(Tt,{})}):Object(Ut.jsx)(e,Object(j.a)({},r))}},Lt=Object(wt.a)(Be||(Be=Object(Nt.a)(["\n  background-color: black;\n  color: white;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),Gt=Object(wt.a)(Je||(Je=Object(Nt.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),Ft=Object(wt.a)(Qe||(Qe=Object(Nt.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n  }\n"]))),Pt=wt.b.button(Xe||(Xe=Object(Nt.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border: none;\n\n  ',"\n"])),(function(e){return e.isGoogleSignIn?Ft:e.inverted?Gt:Lt})),Mt=["children"],Ht=function(e){var t=e.children,n=Object(_t.a)(e,Mt);return Object(Ut.jsx)(Pt,Object(j.a)(Object(j.a)({},n),{},{children:t}))},Dt=(n(83),Object(o.b)(null,(function(e){return{addItem:function(t){return e(Ae(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object(Ut.jsxs)("div",{className:"collection-item",children:[Object(Ut.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(Ut.jsxs)("div",{className:"collection-footer",children:[Object(Ut.jsx)("span",{className:"name",children:r}),Object(Ut.jsx)("span",{className:"price",children:c})]}),Object(Ut.jsx)(Ht,{className:"custom-button",inverted:!0,onClick:function(){n(t)},children:"Add to cart"})]})}))),qt=(n(84),function(e){var t=e.title,n=e.items;return Object(Ut.jsxs)("div",{className:"collection-preview",children:[Object(Ut.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Ut.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(Ut.jsx)(Dt,{item:e},e.id)}))})]})}),zt=(n(85),["id"]),Vt=Object(vt.b)({collections:It}),Kt=Object(o.b)(Vt)((function(e){var t=e.collections;return Object(Ut.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(_t.a)(e,zt);return Object(Ut.jsx)(qt,Object(j.a)({},n),t)}))})})),Wt=Object(vt.b)({isLoading:Ct}),Bt=Object(u.c)(Object(o.b)(Wt),Rt)(Kt),Jt=(n(86),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(vt.a)([yt],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection;if(t){var n=t.title,r=t.items;return Object(Ut.jsxs)("div",{className:"collection-page",children:[Object(Ut.jsx)("h2",{className:"title",children:n}),Object(Ut.jsx)("div",{className:"items",children:r.map((function(e){return Object(Ut.jsx)(Dt,{item:e},e.id)}))})]})}return Object(Ut.jsx)(xt.a,{to:"/"})}))),Qt=Object(vt.b)({isLoading:function(e){return!Et(e)}}),Xt=Object(u.c)(Object(o.b)(Qt),Rt)(Jt),Yt=function(e){Object(mt.a)(n,e);var t=Object(ft.a)(n);function n(){return Object(Ot.a)(this,n),t.apply(this,arguments)}return Object(ht.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return Object(Ut.jsxs)("div",{className:"shop-page",children:[Object(Ut.jsx)(xt.b,{exact:!0,path:"".concat(e.path),component:Bt}),Object(Ut.jsx)(xt.b,{path:"".concat(e.path,"/:collectionId"),component:Xt})]})}}]),n}(c.a.Component),$t=Object(o.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:N.FETCH_COLLECTIONS_START})}}}))(Yt),Zt=n(5),en=(n(90),["handleChange","label"]),tn=function(e){var t=e.handleChange,n=e.label,r=Object(_t.a)(e,en);return Object(Ut.jsxs)("div",{className:"group",children:[Object(Ut.jsx)("input",Object(j.a)({className:"form-input",onChange:t},r)),n?Object(Ut.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},nn=(n(91),function(e){Object(mt.a)(n,e);var t=Object(ft.a)(n);function n(e){var r;return Object(Ot.a)(this,n),(r=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=r.props.emailSignInStart,n=r.state;t(n.email,n.password)},r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(Zt.a)({},c,n))},r.state={email:"",password:""},r}return Object(ht.a)(n,[{key:"render",value:function(){var e=this.props.googleSignInStart;return Object(Ut.jsxs)("div",{className:"sign-in",children:[Object(Ut.jsx)("h2",{children:"I already have an account"}),Object(Ut.jsx)("span",{children:"Sign in with your email and password"}),Object(Ut.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(Ut.jsx)(tn,{type:"text",name:"email",id:"email",label:"Email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(Ut.jsx)(tn,{type:"password",name:"password",id:"password",label:"Password",value:this.state.password,handleChange:this.handleChange,autoComplete:"on",required:!0}),Object(Ut.jsxs)("div",{className:"buttons",children:[Object(Ut.jsx)(Ht,{type:"submit",children:" Sign In"}),Object(Ut.jsxs)(Ht,{type:"button",onClick:e,isGoogleSignIn:!0,children:[" ","Sign in with Google"]})]})]})]})}}]),n}(r.Component)),rn=Object(o.b)(null,(function(e){return{googleSignInStart:function(){return e({type:S.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:S.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))(nn),cn=(n(92),function(e){Object(mt.a)(n,e);var t=Object(ft.a)(n);function n(){var e;return Object(Ot.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(P.a)(L.a.mark((function t(n){var r,c,a,i,s,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,o=e.props.signUpStart,i===s){t.next=6;break}return alert("Passwords don't match"),t.abrupt("return");case 6:o({email:a,password:i,displayName:c});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(Zt.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(ht.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object(Ut.jsxs)("div",{className:"sign-up",children:[Object(Ut.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(Ut.jsx)("span",{children:"Sign up with your email and password"}),Object(Ut.jsxs)("form",{onSubmit:this.handleSubmit,className:"sign-up-form",children:[Object(Ut.jsx)(tn,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(Ut.jsx)(tn,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(Ut.jsx)(tn,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(Ut.jsx)(tn,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(Ut.jsx)(Ht,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(r.Component)),an=Object(o.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:S.SIGN_UP_START,payload:e}}(t))}}}))(cn),sn=(n(93),function(){return Object(Ut.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(Ut.jsx)(rn,{}),Object(Ut.jsx)(an,{})]})}),on=(n(94),Object(o.b)(null,(function(e){return{addItem:function(t){return e(Ae(t))},removeItem:function(t){return e(function(e){return{type:p.REMOVE_ITEM,payload:e}}(t))},clearItem:function(t){return e(function(e){return{type:p.CLEAR_ITEM_FROM_CART,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.addItem,r=e.removeItem,c=e.clearItem,a=t.name,i=t.imageUrl,s=t.price,o=t.quantity;return Object(Ut.jsxs)("div",{className:"checkout-item",children:[Object(Ut.jsx)("div",{className:"image-container",children:Object(Ut.jsx)("img",{src:i,alt:a})}),Object(Ut.jsx)("span",{className:"name",children:a}),Object(Ut.jsxs)("span",{className:"quantity",children:[Object(Ut.jsx)("div",{className:"arrow",onClick:function(){r(t)},children:"\u276e"}),Object(Ut.jsx)("span",{className:"value",children:o}),Object(Ut.jsx)("div",{className:"arrow",onClick:function(){n(t)},children:"\u276f"})]}),Object(Ut.jsx)("span",{className:"price",children:s}),Object(Ut.jsx)("div",{className:"remove-button",onClick:function(){return c(t)},children:"\u2715"})]})}))),ln=n(68),un=n.n(ln),bn=function(e){var t=e.price,n=100*t;return Object(Ut.jsx)(un.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",currency:"USD",billingAddress:!0,shippingAddress:!0,allowRememberMe:!0,image:"../../assets/images/crown.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log("token :>> ",e),alert("Payment successful!!")},stripeKey:"pk_test_51K47kXSJ9dFPl1KfAW9H7ieanRaYTep8froBG44HOT2WW1fx6mzfxGLdQDpMZV7iWQX1G2TPl49cAMh8uAk9vsUJ00NNQkE27Z"})},dn=function(e){return e.cart},jn=Object(vt.a)([dn],(function(e){return e.cartItems})),pn=Object(vt.a)([dn],(function(e){return e.hidden})),On=Object(vt.a)([jn],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),hn=Object(vt.a)([jn],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),mn=(n(95),Object(vt.b)({cartItems:jn,total:hn})),fn=Object(o.b)(mn)((function(e){var t=e.cartItems,n=e.total;return Object(Ut.jsxs)("div",{className:"checkout-page",children:[Object(Ut.jsxs)("div",{className:"checkout-header",children:[Object(Ut.jsx)("div",{className:"header-block",children:Object(Ut.jsx)("span",{children:"Product"})}),Object(Ut.jsx)("div",{className:"header-block",children:Object(Ut.jsx)("span",{children:"Description"})}),Object(Ut.jsx)("div",{className:"header-block",children:Object(Ut.jsx)("span",{children:"Quantity"})}),Object(Ut.jsx)("div",{className:"header-block",children:Object(Ut.jsx)("span",{children:"Price"})}),Object(Ut.jsx)("div",{className:"header-block",children:Object(Ut.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(Ut.jsx)(on,{cartItem:e},e.id)})),Object(Ut.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(Ut.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(Ut.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01-25 - CVV: 123"]}),Object(Ut.jsx)(bn,{price:n})]})})),xn=Object(vt.a)([function(e){return e.directory}],(function(e){return e.sections})),vn=(n(96),Object(xt.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.linkUrl,a=e.history,i=e.match;return Object(Ut.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(c))},children:[Object(Ut.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(Ut.jsxs)("div",{className:"content",children:[Object(Ut.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(Ut.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),gn=(n(97),["id"]),Sn=Object(vt.b)({sections:xn}),yn=Object(o.b)(Sn)((function(e){var t=e.sections;return Object(Ut.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(_t.a)(e,gn);return Object(Ut.jsx)(vn,Object(j.a)({},n),t)}))})})),In=wt.b.div(Ye||(Ye=Object(Nt.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* padding: 20px 80px; */\n"]))),Cn=function(){return Object(Ut.jsx)(In,{children:Object(Ut.jsx)(yn,{})})},En=(n(98),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(Ut.jsxs)("div",{className:"cart-item",children:[Object(Ut.jsx)("img",{src:n,alt:c}),Object(Ut.jsxs)("div",{className:"item-details",children:[Object(Ut.jsx)("span",{className:"name",children:c}),Object(Ut.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),_n=(n(99),Object(vt.b)({cartItems:jn})),Nn=Object(xt.g)(Object(o.b)(_n)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(Ut.jsxs)("div",{className:"cart-dropdown",children:[Object(Ut.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(Ut.jsx)(En,{item:e},e.id)})):Object(Ut.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(Ut.jsx)(Ht,{onClick:function(){n.push("/checkout"),r(Ue())},children:"GO TO CHECKOUT"})]})}))),wn=["title","titleId"];function kn(){return kn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kn.apply(this,arguments)}function Tn(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Un(e,t){var n=e.title,c=e.titleId,a=Tn(e,wn);return r.createElement("svg",kn({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),$e||($e=r.createElement("g",null)),Ze||(Ze=r.createElement("g",null)),et||(et=r.createElement("g",null)),tt||(tt=r.createElement("g",null)),nt||(nt=r.createElement("g",null)),rt||(rt=r.createElement("g",null)),ct||(ct=r.createElement("g",null)),at||(at=r.createElement("g",null)),it||(it=r.createElement("g",null)),st||(st=r.createElement("g",null)),ot||(ot=r.createElement("g",null)),lt||(lt=r.createElement("g",null)),ut||(ut=r.createElement("g",null)),bt||(bt=r.createElement("g",null)),dt||(dt=r.createElement("g",null)))}var An,Rn,Ln=r.forwardRef(Un),Gn=(n.p,n(100),Object(vt.b)({itemCount:On})),Fn=Object(o.b)(Gn,(function(e){return{toggleCartHidden:function(){return e(Ue())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(Ut.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(Ut.jsx)(Ln,{className:"shopping-icon"}),Object(Ut.jsx)("span",{className:"item-count",children:n})]})})),Pn=["title","titleId"];function Mn(){return Mn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}function Hn(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Dn(e,t){var n=e.title,c=e.titleId,a=Hn(e,Pn);return r.createElement("svg",Mn({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,An||(An=r.createElement("desc",null,"Created with Sketch.")),Rn||(Rn=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var qn,zn,Vn,Kn,Wn=r.forwardRef(Dn),Bn=(n.p,wt.b.div(qn||(qn=Object(Nt.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"])))),Jn=Object(wt.b)(s.b)(zn||(zn=Object(Nt.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]))),Qn=wt.b.div(Vn||(Vn=Object(Nt.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),Xn=Object(wt.b)(s.b)(Kn||(Kn=Object(Nt.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),Yn=Object(vt.b)({currentUser:gt,hidden:pn}),$n=Object(o.b)(Yn,(function(e){return{signOutStart:function(){return e({type:S.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return Object(Ut.jsxs)(Bn,{children:[Object(Ut.jsx)(Jn,{className:"logo-container",to:"/",children:Object(Ut.jsx)(Wn,{})}),Object(Ut.jsxs)(Qn,{className:"options",children:[Object(Ut.jsx)(Xn,{to:"/shop",children:"SHOP"}),Object(Ut.jsx)(Xn,{to:"/shop",children:"CONTACT"}),t?Object(Ut.jsxs)(Xn,{as:"div",onClick:r,children:[" ","SING OUT"]}):Object(Ut.jsx)(Xn,{to:"/signin",children:" SING IN "}),Object(Ut.jsx)(Fn,{})]}),n?null:Object(Ut.jsx)(Nn,{})]})})),Zn=(n(101),function(e){Object(mt.a)(n,e);var t=Object(ft.a)(n);function n(){var e;Object(Ot.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e.unsubscribeFromSnapshot=null,e}return Object(ht.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.checkUserSession)()}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth(),this.unsubscribeFromSnapshot()}},{key:"render",value:function(){var e=this;return Object(Ut.jsxs)("div",{children:[Object(Ut.jsx)($n,{}),Object(Ut.jsxs)(xt.d,{children:[Object(Ut.jsx)(xt.b,{exact:!0,path:"/",component:Cn}),Object(Ut.jsx)(xt.b,{path:"/shop",component:$t}),Object(Ut.jsx)(xt.b,{exact:!0,path:"/checkout",component:fn}),Object(Ut.jsx)(xt.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(Ut.jsx)(xt.a,{to:"/"}):Object(Ut.jsx)(sn,{})}}),Object(Ut.jsx)(xt.a,{from:"*",to:"/"})]})]})}}]),n}(c.a.Component)),er=Object(vt.b)({currentUser:gt}),tr=Object(o.b)(er,(function(e){return{checkUserSession:function(){return e({type:S.CHECK_USER_SESSION})}}}))(Zn);i.a.render(Object(Ut.jsx)(o.a,{store:pt,children:Object(Ut.jsx)(s.a,{children:Object(Ut.jsx)(c.a.StrictMode,{children:Object(Ut.jsx)(l.a,{persistor:jt,children:Object(Ut.jsx)(tr,{})})})})}),document.getElementById("root"))},81:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.a911aacd.chunk.js.map