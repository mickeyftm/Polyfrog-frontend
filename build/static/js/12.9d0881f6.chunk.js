(this["webpackJsonpHonest-frontend"]=this["webpackJsonpHonest-frontend"]||[]).push([[12],{665:function(n,e,t){"use strict";t.d(e,"a",(function(){return x}));var r=t(60),c=t(12),i=t(0),a=t.n(i),o=t(3);function s(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return n},n}var u=o.e.div(s(),(function(n){return n.size}),(function(n){return n.size})),l=function(n){var e,t=n.size,r=void 0===t?"md":t,a=Object(i.useContext)(o.a).spacing;switch(r){case"lg":e=a[6];break;case"sm":e=a[2];break;case"md":default:e=a[4]}return Object(c.jsx)(u,{size:e})};function d(){var n=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return d=function(){return n},n}function b(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return b=function(){return n},n}var j=o.e.div(b(),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),f=o.e.div(d()),x=function(n){var e=n.children,t=a.a.Children.toArray(e).length;return Object(c.jsx)(j,{children:a.a.Children.map(e,(function(n,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{children:n}),e<t-1&&Object(c.jsx)(l,{})]})}))})}},666:function(n,e,t){"use strict";t.d(e,"a",(function(){return y}));var r=t(60),c=t(12),i=(t(0),t(3)),a=t(668),o=t(46),s=t(661);function u(){var n=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return l=function(){return n},n}var d=i.e.div(l(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),b=i.e.input(u(),(function(n){return n.theme.colors.primary})),j=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,i=n.startAdornment,a=n.value;return Object(c.jsxs)(d,{children:[!!i&&i,Object(c.jsx)(b,{placeholder:r,value:a,onChange:t}),!!e&&e]})};function f(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return f=function(){return n},n}function x(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return x=function(){return n},n}function p(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return p=function(){return n},n}function O(){var n=Object(r.a)(["\n  width: ","px;\n"]);return O=function(){return n},n}function h(){var n=Object(r.a)([""]);return h=function(){return n},n}var v=i.e.div(h()),m=i.e.div(O(),(function(n){return n.theme.spacing[3]})),g=i.e.div(p()),k=i.e.div(x(),(function(n){return n.theme.colors.primary})),w=i.e.span(f(),(function(n){return n.theme.colors.primary})),y=function(n){var e=n.max,t=n.symbol,r=n.onChange,i=n.onSelectMax,u=n.value,l=n.depositFeeBP,d=void 0===l?0:l,b=Object(s.a)();return Object(c.jsxs)(v,{children:[Object(c.jsxs)(k,{children:[e.toLocaleString()," ",t," ",b(526,"Available")]}),Object(c.jsx)(j,{endAdornment:Object(c.jsxs)(g,{children:[Object(c.jsx)(w,{children:t}),Object(c.jsx)(m,{}),Object(c.jsx)("div",{children:Object(c.jsx)(o.d,{size:"sm",onClick:i,children:b(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),d>0?Object(c.jsxs)(k,{children:[b(10001,"Deposit Fee"),": ",new a.a(u||0).times(d/1e4).toString()," ",t]}):null]})}},667:function(n,e,t){"use strict";t.d(e,"b",(function(){return b}));var r=t(4),c=t.n(r),i=t(15),a=t(0),o=t(66),s=t(53),u=t(128),l=t(664),d=t(663),b=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(o.m)(),b=r.account,j=Object(d.f)(n),f=Object(a.useCallback)(function(){var r=Object(i.a)(c.a.mark((function r(i){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e?l.g:l.f,r.next=3,a(j,i,b);case 3:t(Object(u.g)(String(n),b)),t(Object(u.e)(String(n),b));case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[b,t,e,j,n]);return{onStake:f}};e.a=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)();return{onStake:Object(a.useCallback)(function(){var a=Object(i.a)(c.a.mark((function i(a){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.h)(r,n,a,t);case 2:o=c.sent,e(Object(u.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),i)})));return function(n){return a.apply(this,arguments)}}(),[t,e,r,n])}}},669:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return i}));var r=t(12),c=(t(0),t(46)),i=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},a=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},o=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},672:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(668);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(.5);var c=new r.a(15768e3)},673:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return j}));var r=t(4),c=t.n(r),i=t(15),a=t(0),o=t(66),s=(t(676),t(53)),u=t(128),l=t(664),d=t(663),b=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)();return{onApprove:Object(a.useCallback)(Object(i.a)(c.a.mark((function i(){var a;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(l.a)(n,r,t);case 3:return a=c.sent,e(Object(u.a)(t)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),i,null,[[0,8]])}))),[t,e,n,r])}},j=function(n,e){var t=Object(s.b)(),r=Object(o.m)().account,b=Object(d.f)(e);return{onApprove:Object(a.useCallback)(Object(i.a)(c.a.mark((function i(){var a;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(l.a)(n,b,r);case 3:return a=c.sent,t(Object(u.d)(String(e),r)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),i,null,[[0,8]])}))),[r,t,n,b,e])}}},674:function(n,e,t){"use strict";t.d(e,"b",(function(){return b}));var r=t(4),c=t.n(r),i=t(15),a=t(0),o=t(66),s=t(53),u=t(128),l=t(664),d=t(663),b=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.f)(n);return{onUnstake:Object(a.useCallback)(function(){var a=Object(i.a)(c.a.mark((function i(a){return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.c)(r,a,t);case 2:e(Object(u.g)(String(n),t)),e(Object(u.e)(String(n),t)),e(Object(u.f)(String(n),t));case 5:case"end":return c.stop()}}),i)})));return function(n){return a.apply(this,arguments)}}(),[t,e,r,n])}};e.a=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)();return{onUnstake:Object(a.useCallback)(function(){var a=Object(i.a)(c.a.mark((function i(a){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.i)(r,n,a,t);case 2:o=c.sent,e(Object(u.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),i)})));return function(n){return a.apply(this,arguments)}}(),[t,e,r,n])}}},687:function(n,e,t){"use strict";var r=t(60);function c(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return n},n}var i=t(3).e.div(c());e.a=i},784:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return de}));var r=t(60),c=t(12),i=t(25),a=t(16),o=t(0),s=t.n(o),u=t(27),l=t(13),d=t.n(l),b=t(3),j=t(66),f=t(46),x=t(672),p=t(711),O=t.n(p),h=t(768),v=t.n(h),m=t(661),g=t(303),k=function(){return Object(o.useContext)(g.a)},w=t(662),y=t(106),C=t(30),S=t(687),z=t(171),D=t(4),A=t.n(D),B=t(15),F=t(678);function N(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return N=function(){return n},n}var I=b.e.div(N(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"primary"]})),E=function(n){var e=n.text,t=n.isFinished,r=void 0!==t&&t;return Object(c.jsx)(I,{isFinished:r,children:e})},P=t(663),T=t(673),M=t(667),R=t(674),L=t(675),U=t(684),H=t.n(U);function W(){var n=Object(r.a)(["\n  color: ",";\n"]);return W=function(){return n},n}var Y=Object(b.e)(f.B)(W(),(function(n){var e=n.isDisabled,t=n.color,r=n.theme;return e?r.colors.textDisabled:t})),_=function(n){var e=n.value,t=n.fontSize,r=n.color,i=n.decimals,a=n.isDisabled,s=n.unit,u=Object(o.useRef)(0);return Object(o.useEffect)((function(){u.current=e}),[e]),Object(c.jsxs)(Y,{bold:!0,color:r,fontSize:t,isDisabled:a,children:[Object(c.jsx)(H.a,{start:u.current,end:e,decimals:i,duration:1,separator:","}),e&&s&&Object(c.jsx)("span",{children:s})]})};_.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var q=_,G=t(665),J=t(666),V=function(n){var e=n.max,t=n.onConfirm,r=n.onDismiss,a=n.tokenName,s=void 0===a?"":a,u=Object(o.useState)(""),l=Object(i.a)(u,2),d=l[0],b=l[1],j=Object(o.useState)(!1),x=Object(i.a)(j,2),p=x[0],O=x[1],h=Object(m.a)(),v=Object(o.useMemo)((function(){return Object(w.b)(e)}),[e]),g=Object(o.useCallback)((function(n){b(n.currentTarget.value)}),[b]),k=Object(o.useCallback)((function(){b(v)}),[v,b]);return Object(c.jsxs)(f.v,{title:"".concat(h(316,"Deposit")," ").concat(s," Tokens"),onDismiss:r,children:[Object(c.jsx)(J.a,{value:d,onSelectMax:k,onChange:g,max:v,symbol:s}),Object(c.jsxs)(G.a,{children:[Object(c.jsx)(f.d,{fullWidth:!0,variant:"secondary",onClick:r,children:h(462,"Cancel")}),Object(c.jsx)(f.d,{fullWidth:!0,disabled:p,onClick:Object(B.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.next=3,t(d);case 3:O(!1),r();case 5:case"end":return n.stop()}}),n)}))),children:p?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},Q=function(n){var e=n.onConfirm,t=n.onDismiss,r=n.max,a=n.tokenName,s=void 0===a?"":a,u=Object(o.useState)(""),l=Object(i.a)(u,2),d=l[0],b=l[1],j=Object(o.useState)(!1),x=Object(i.a)(j,2),p=x[0],O=x[1],h=Object(m.a)(),v=Object(o.useMemo)((function(){return Object(w.b)(r)}),[r]),g=Object(o.useCallback)((function(n){b(n.currentTarget.value)}),[b]),k=Object(o.useCallback)((function(){b(v)}),[v,b]);return Object(c.jsxs)(f.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(c.jsx)(J.a,{onSelectMax:k,onChange:g,value:d,max:v,symbol:s}),Object(c.jsxs)(G.a,{children:[Object(c.jsx)(f.d,{variant:"secondary",onClick:t,children:h(462,"Cancel")}),Object(c.jsx)(f.d,{disabled:p,onClick:Object(B.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.next=3,e(d);case 3:O(!1),t();case 5:case"end":return n.stop()}}),n)}))),children:p?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})};function X(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"]);return X=function(){return n},n}var K=b.e.div(X(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"text"]}));function Z(){var n=Object(r.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"]);return Z=function(){return n},n}var $=b.e.div(Z(),(function(n){return n.theme.card.background}),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"secondary"]}),(function(n){return n.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"}));function nn(){var n=Object(r.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]);return nn=function(){return n},n}function en(){var n=Object(r.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]);return en=function(){return n},n}var tn=b.e.div(en()),rn=b.e.a(nn()),cn=function(n){var e=n.hasBalance;return void 0!==e&&e?Object(c.jsxs)("div",{children:[Object(c.jsx)(tn,{children:"Action Required"}),Object(c.jsx)(rn,{href:" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",target:"_blank",children:"What do I need to do?"})]}):Object(c.jsx)("div",{children:Object(c.jsx)(K,{isFinished:!0,children:"FINISHED"})})},an=t(67);function on(){var n=Object(r.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"]);return on=function(){return n},n}function sn(){var n=Object(r.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"]);return sn=function(){return n},n}function un(){var n=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"]);return un=function(){return n},n}var ln,dn=b.e.button(un(),(function(n){return n.disabled?"#ddd":n.theme.card.background}),(function(n){return n.disabled?"#acaaaf":"#32cad7"}),(function(n){return n.fontSize}),(function(n){return n.size}),(function(n){return n.padding}),(function(n){return n.padding}),(function(n){return n.disabled?"none":void 0}),(function(n){return n.disabled?"#eee":"#33cbd7"})),bn=Object(b.e)(an.b)(sn(),(function(n){return-n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),jn=b.e.a(on(),(function(n){return-n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),fn=function(n){var e,t,r,i=n.children,a=n.disabled,s=n.href,u=n.onClick,l=n.size,d=n.text,j=n.to,f=Object(o.useContext)(b.a),x=f.colors,p=f.spacing,O=x.background;switch(l){case"sm":t=p[3],e=36,r=14;break;case"lg":t=p[4],e=72,r=16;break;case"md":default:t=p[4],e=56,r=16}var h=Object(o.useMemo)((function(){return j?Object(c.jsx)(bn,{to:j,children:d}):s?Object(c.jsx)(jn,{href:s,target:"__blank",children:d}):d}),[s,d,j]);return Object(c.jsxs)(dn,{boxShadow:undefined,color:O,disabled:a,fontSize:r,onClick:u,padding:t,size:e,children:[i,h]})},xn=t(42),pn=t(780),On=t(781),hn=t(669);function vn(){var n=Object(r.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]);return vn=function(){return n},n}function mn(){var n=Object(r.a)(["\n  font-size: 14px;\n"]);return mn=function(){return n},n}function gn(){var n=Object(r.a)(["\n  flex: 1;\n"]);return gn=function(){return n},n}function kn(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return kn=function(){return n},n}function wn(){var n=Object(r.a)(["\n  margin-top: 24px;\n"]);return wn=function(){return n},n}function yn(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"]);return yn=function(){return n},n}function Cn(){var n=Object(r.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"]);return Cn=function(){return n},n}var Sn=(ln={},Object(xn.a)(ln,C.a.BINANCE,hn.a),Object(xn.a)(ln,C.a.CORE,hn.c),Object(xn.a)(ln,C.a.COMMUNITY,hn.b),ln),zn=b.e.div(Cn(),(function(n){return n.theme.isDark?"#524B63":"#E9EAEB"}),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled2":"primary2"]})),Dn=b.e.button(yn(),(function(n){return n.theme.colors.primary})),An=b.e.div(wn()),Bn=b.e.div(kn()),Fn=b.e.div(gn()),Nn=b.e.div(mn()),In=b.e.a(vn()),En=function(n){var e=n.projectLink,t=(n.totalStaked,n.blocksRemaining),r=n.isFinished,a=n.blocksUntilStart,s=n.poolCategory,u=n.unit,l=Object(o.useState)(!1),d=Object(i.a)(l,2),b=d[0],j=d[1],f=Object(m.a)(),x=b?pn.a:On.a,p=Sn[s];return Object(c.jsxs)(zn,{isFinished:r,children:[Object(c.jsxs)(Bn,{children:[Object(c.jsx)(Fn,{children:Object(c.jsx)(p,{})}),Object(c.jsxs)(Dn,{onClick:function(){return j(!b)},children:[b?"Hide":"Details"," ",Object(c.jsx)(x,{})]})]}),b&&Object(c.jsxs)(An,{children:[a>0&&Object(c.jsxs)(Bn,{children:[Object(c.jsx)(Fn,{children:Object(c.jsxs)(Nn,{children:[f(410,"Start"),":"]})}),Object(c.jsx)(q,{fontSize:"14px",isDisabled:r,value:a,decimals:0})]}),0===a&&t>0&&Object(c.jsxs)(Bn,{children:[Object(c.jsx)(Fn,{children:Object(c.jsxs)(Nn,{children:[f(411,"End"),":"]})}),Object(c.jsx)(q,{fontSize:"14px",isDisabled:r,value:t,unit:u,decimals:0})]}),Object(c.jsx)(In,{href:e,target:"_blank",children:f(412,"View project site")})]})]})},Pn=s.a.memo(En);function Tn(){var n=Object(r.a)(["\n  display: flex;\n  font-size: 14px;\n  padding: 3px 0;\n"]);return Tn=function(){return n},n}function Mn(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return Mn=function(){return n},n}function Rn(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]);return Rn=function(){return n},n}function Ln(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]);return Ln=function(){return n},n}function Un(){var n=Object(r.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]);return Un=function(){return n},n}var Hn=b.e.div(Un()),Wn=b.e.div(Ln()),Yn=b.e.div(Rn()),_n=b.e.div(Mn(),(function(n){return n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),qn=b.e.div(Tn()),Gn=function(n){var e=n.pool,t=e.sousId,r=(e.image,e.tokenName),a=e.stakingTokenName,s=e.stakingTokenAddress,u=e.projectLink,l=e.harvest,b=(e.apy,e.tokenDecimals),x=e.poolCategory,p=e.totalStaked,O=e.startBlock,h=e.endBlock,v=e.isFinished,g=e.userData,y=e.stakingLimit,S=e.burnFee,z=e.weeklyroi;console.log("burnFee",S);var D=x===C.a.BINANCE,N=Object(m.a)(),I=Object(P.b)(s[137]),U=Object(j.m)().account,H=k(),W=Object(T.b)(I,t).onApprove,Y=Object(M.b)(t,D).onStake,_=Object(R.b)(t).onUnstake,G=Object(L.c)(t,D).onReward,J=Object(o.useState)(!1),X=Object(i.a)(J,2),Z=X[0],nn=X[1],en=Object(o.useState)(!1),tn=Object(i.a)(en,2),rn=tn[0],an=tn[1],on=new d.a((null===g||void 0===g?void 0:g.allowance)||0),sn=new d.a((null===g||void 0===g?void 0:g.stakingTokenBalance)||0),un=new d.a((null===g||void 0===g?void 0:g.stakedBalance)||0),ln=new d.a((null===g||void 0===g?void 0:g.pendingReward)||0),dn=Math.max(O-H,0),bn=Math.max(h-H,0),jn=a===C.b.SYRUP,xn=(null===un||void 0===un?void 0:un.toNumber())>0,pn=!xn&&!on.toNumber()&&!D,On=v&&xn,hn=new d.a(y).multipliedBy(new d.a(10).pow(b)),vn=Object(f.G)(Object(c.jsx)(V,{max:y&&sn.isGreaterThan(hn)?hn:sn,onConfirm:Y,tokenName:y?"".concat(a," (").concat(y," max)"):a,burnFeeBP:10*S})),mn=Object(i.a)(vn,1)[0],gn=Object(f.G)(Object(c.jsx)(Q,{max:un,onConfirm:_,tokenName:a})),kn=Object(i.a)(gn,1)[0],wn=Object(o.useCallback)(Object(B.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,nn(!0),n.next=4,W();case 4:n.sent||nn(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[W,nn]);return Object(c.jsxs)($,{isActive:On,isFinished:v,children:[v&&Object(c.jsx)(Hn,{}),Object(c.jsxs)("div",{style:{padding:"24px"},children:[Object(c.jsxs)(K,{isFinished:v,children:[jn&&"[OLD]"," ",r," ",N(348,"Pool")]}),Object(c.jsxs)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:[Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)(f.p,{src:"/images/bnbpool/".concat(r,".png"),width:64,height:64,alt:r})}),U&&l&&!jn&&Object(c.jsx)(fn,{disabled:!ln.toNumber()||rn,text:rn?"Collecting":"Harvest",onClick:Object(B.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return an(!0),n.next=3,G();case 3:an(!1);case 4:case"end":return n.stop()}}),n)})))})]}),jn?Object(c.jsx)(cn,{hasBalance:xn}):Object(c.jsx)(Yn,{children:Object(c.jsx)(q,{value:Object(w.a)(ln,b),decimals:"BTCB"===r?5:3,isDisabled:v})}),Object(c.jsx)(E,{isFinished:v,text:N(330,"".concat(r," earned"))}),Object(c.jsxs)(Wn,{children:[!U&&Object(c.jsx)(F.a,{}),U&&(pn&&!jn?Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)(f.d,{disabled:v||Z,onClick:wn,fullWidth:!0,children:"Approve"})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.d,{disabled:un.eq(new d.a(0))||rn,onClick:jn?Object(B.a)(A.a.mark((function n(){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return an(!0),n.next=3,_("0");case 3:an(!1);case 4:case"end":return n.stop()}}),n)}))):kn,children:"Unstake ".concat(a)}),Object(c.jsx)(_n,{}),!jn&&Object(c.jsx)(f.o,{disabled:v,onClick:mn,children:Object(c.jsx)(f.a,{color:"background"})})]}))]}),Object(c.jsxs)(qn,{children:[Object(c.jsx)("div",{style:{flex:1},children:"Weekly ROI:"}),z]}),Object(c.jsxs)(qn,{children:[Object(c.jsxs)("div",{style:{flex:1},children:[Object(c.jsxs)("span",{role:"img","aria-label":a,children:["\ud83d\udc18 "," "]}),"Your Stake:"]}),Object(c.jsx)(q,{fontSize:"14px",isDisabled:v,value:Object(w.a)(un)})]}),S>0?Object(c.jsxs)(qn,{children:[Object(c.jsxs)("div",{style:{flex:1},children:[Object(c.jsxs)("span",{role:"img","aria-label":a,children:["\ud83d\udd25"," "]}),"Deposit fee (Burned):"]}),Object(c.jsx)(q,{fontSize:"14px",isDisabled:v,value:S/10,decimals:1,unit:"%"})]}):""]}),Object(c.jsx)(Pn,{projectLink:u,totalStaked:p,blocksRemaining:bn,isFinished:v,blocksUntilStart:dn,poolCategory:x,unit:"blocks"})]})};function Jn(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return Jn=function(){return n},n}var Vn=function(){var n=Object(u.g)(),e=n.url,t=n.isExact,r=Object(m.a)();return Object(c.jsx)(Qn,{children:Object(c.jsxs)(f.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(c.jsx)(f.f,{as:an.b,to:"".concat(e),children:r(999,"Active")}),Object(c.jsx)(f.f,{as:an.b,to:"".concat(e,"/history"),children:r(999,"Inactive")})]})})},Qn=b.e.div(Jn());function Xn(){var n=Object(r.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return Xn=function(){return n},n}var Kn=b.e.div(Xn(),(function(n){return n.theme.colors.textSubtle}));function Zn(){var n=Object(r.a)(["\n  border-top: 1px solid ",";\n  padding: 24px;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return $n=function(){return n},n}function ne(){var n=Object(r.a)(["\n  display: flex;\n  font-size: 14px;\n  padding: 4px 0;\n"]);return ne=function(){return n},n}function ee(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-bottom: 16px;\n"]);return ee=function(){return n},n}function te(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 600;\n  padding: 10px 0;\n"]);return te=function(){return n},n}var re=b.e.div(te(),(function(n){return n.theme.colors.text})),ce=b.e.div(ee(),(function(n){return n.theme.colors.textSubtle})),ie=b.e.div(ne()),ae=b.e.div($n(),(function(n){return n.theme.colors.text})),oe=b.e.div(Zn(),(function(n){return n.theme.isDark?"#524B63":"#E9EAEB"})),se=function(){var n=Object(m.a)();return Object(c.jsxs)($,{children:[Object(c.jsxs)("div",{style:{padding:"24px"},children:[Object(c.jsx)(K,{children:n(414,"Your Honest Project")}),Object(c.jsx)(f.p,{src:"/images/applynow.png",width:64,height:64,alt:"Your project"}),Object(c.jsx)(re,{children:"???"}),Object(c.jsx)(ce,{children:n(416,"Create a pool for your token")}),Object(c.jsx)(f.d,{variant:"secondary",as:"a",href:"https://t.me/polyHonesthead",external:!0,fullWidth:!0,mb:"16px",children:n(418,"Apply Now")}),Object(c.jsxs)(ie,{children:[Object(c.jsxs)("div",{style:{flex:1},children:[n(736,"APR"),":"]}),Object(c.jsx)(ae,{children:"???"})]}),Object(c.jsxs)(ie,{children:[Object(c.jsxs)("div",{style:{flex:1},children:[Object(c.jsx)("span",{role:"img","aria-label":"polyHonest",children:" "}),n(384,"Your Stake"),":"]}),Object(c.jsx)(ae,{children:"???"})]})]}),Object(c.jsx)(oe,{children:Object(c.jsx)(hn.b,{})})]})};function ue(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"]);return ue=function(){return n},n}var le=b.e.div(ue(),(function(n){return n.theme.colors.primary})),de=function(){var n=Object(u.g)().path,e=(Object(m.a)(),Object(j.m)().account),t=Object(y.c)(),r=Object(y.e)(e),o=Object(y.f)(),s=k(),l=function(n,e,t){var r=new d.a(e);return"BNB"===n||"WBNB"===n?new d.a(1):e&&t===C.b.BUSD?r.div(o):r},b=r.map((function(n){var e=t.find((function(e){return e.tokenSymbol===n.tokenName})),r=t.find((function(e){return e.tokenSymbol===n.stakingTokenName})),c=l(C.b.HONEST,null===r||void 0===r?void 0:r.tokenPriceVsQuote,null===r||void 0===r?void 0:r.quoteTokenSymbol),i=l(n.tokenName,null===e||void 0===e?void 0:e.tokenPriceVsQuote,null===e||void 0===e?void 0:e.quoteTokenSymbol).times(n.tokenPerBlock).times(x.a),o=new d.a(0);o=c.times(Object(w.a)(n.totalStaked));var u=i.div(o).times(100);return Object(a.a)(Object(a.a)({},n),{},{isFinished:n.isFinished||s>n.endBlock,apy:u})})),p=v()(b,(function(n){return n.isFinished})),h=Object(i.a)(p,2),g=h[0],D=h[1];return Object(c.jsxs)(z.a,{children:[Object(c.jsxs)(le,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(f.n,{as:"h1",size:"xxl",mb:"16px",children:"Jungle Pools"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Stake honest to earn new tokens"}),Object(c.jsx)("li",{children:"You can unstake at any time."}),Object(c.jsx)("li",{children:"Rewards are calculated per block"})]})]}),Object(c.jsx)("img",{src:"/images/syrup.png",alt:"SYRUP POOL icon",width:410,height:191})]}),Object(c.jsx)(Vn,{}),Object(c.jsx)(Kn,{}),Object(c.jsxs)(S.a,{children:[Object(c.jsx)(u.a,{exact:!0,path:"".concat(n),children:Object(c.jsxs)(c.Fragment,{children:[O()(D,["sortOrder"]).map((function(n){return Object(c.jsx)(Gn,{pool:n},n.sousId)})),Object(c.jsx)(se,{})]})}),Object(c.jsx)(u.a,{path:"".concat(n,"/history"),children:O()(g,["sortOrder"]).map((function(n){return Object(c.jsx)(Gn,{pool:n},n.sousId)}))})]})]})}}}]);
//# sourceMappingURL=12.9d0881f6.chunk.js.map