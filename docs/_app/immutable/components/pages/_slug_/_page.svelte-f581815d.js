import{S as D,i as J,s as K,k as H,q as P,a as q,J as T,e as w,l as y,m as E,r as b,h as n,c as S,K as j,b as o,D as C,u as k,A}from"../../../chunks/index-3e215a55.js";function x(m){let e,l=m[0].title+"",s,i,f,c,p=m[0].date+"",h,r,_,d=m[0].pageContent+"",u;return{c(){e=H("h1"),s=P(l),i=q(),f=H("p"),c=P("Published: "),h=P(p),r=q(),_=new T(!1),u=w(),this.h()},l(t){e=y(t,"H1",{});var a=E(e);s=b(a,l),a.forEach(n),i=S(t),f=y(t,"P",{});var v=E(f);c=b(v,"Published: "),h=b(v,p),v.forEach(n),r=S(t),_=j(t,!1),u=w(),this.h()},h(){_.a=u},m(t,a){o(t,e,a),C(e,s),o(t,i,a),o(t,f,a),C(f,c),C(f,h),o(t,r,a),_.m(d,t,a),o(t,u,a)},p(t,[a]){a&1&&l!==(l=t[0].title+"")&&k(s,l),a&1&&p!==(p=t[0].date+"")&&k(h,p),a&1&&d!==(d=t[0].pageContent+"")&&_.p(d)},i:A,o:A,d(t){t&&n(e),t&&n(i),t&&n(f),t&&n(r),t&&n(u),t&&_.d()}}}function z(m,e,l){let{data:s}=e;return m.$$set=i=>{"data"in i&&l(0,s=i.data)},[s]}class F extends D{constructor(e){super(),J(this,e,z,x,K,{data:0})}}export{F as default};