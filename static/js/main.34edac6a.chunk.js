(this["webpackJsonpreact-component-lifecycle"]=this["webpackJsonpreact-component-lifecycle"]||[]).push([[0],[,,,,,,,,,,,function(e,a,n){e.exports={container:"ClassC_container__Lk89i"}},function(e,a,n){e.exports={container:"ClassD_container__AuLpb"}},function(e,a,n){e.exports={container:"FuncC_container__KwlcA"}},function(e,a,n){e.exports={container:"FuncD_container__2Om9a"}},function(e,a,n){e.exports={container:"ClassB_container__3C_Ow"}},function(e,a,n){e.exports={container:"FuncB_container__3G0ck"}},function(e,a,n){e.exports={container:"ClassA_container__1AZ6d"}},function(e,a,n){e.exports={container:"FuncA_container__2VF84"}},function(e,a,n){e.exports={container:"App_container__300K5"}},function(e,a,n){e.exports=n(25)},,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(9),o=n.n(l),u=n(7),r=n(10),i=n(1),s=n(4),m=n(2),d=n(3),p=n(5),f=n(6),b=c.a.createContext({count:0,value:0}),y=n(11),E=n.n(y),v=function(e){Object(f.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n),(e=a.apply(this,arguments)).handleCount=function(){Object(m.a)(e).setState((function(e){return{count:e.count+1}}))},console.log("".concat(n.displayName,": constructor"));var t=Object(m.a)(e);return t.state={hasError:!1,count:0},e}return Object(d.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(n.displayName,": getDerivedStateFromProps")),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(n.displayName,": getDerivedStateFromError")),{hasError:!0}}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("".concat(n.displayName,": componentDidMount"))}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(n.displayName,": getSnapshotBeforeUpdate")),null}},{key:"componentDidUpdate",value:function(e,a,t){console.log("".concat(n.displayName,": componentDidUpdate"))}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(n.displayName,": componentDidCatch"))}},{key:"componentWillUnmount",value:function(){console.log("".concat(n.displayName,": componentWillUnmount"))}},{key:"render",value:function(){console.log("".concat(n.displayName,": render"));var e=this.props,a=e.name,t=e.value,l=e.grandchild,o=e.onCallback,u=this.state.count;return c.a.createElement("div",{className:E.a.container},n.displayName,c.a.createElement("hr",null),"body",c.a.createElement("hr",null),"count: ",u,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",t,c.a.createElement("br",null),"context count: ",this.context.count,c.a.createElement("br",null),"grandchild: ",l,c.a.createElement("hr",null),c.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")))}}]),n}(c.a.PureComponent);v.contextType=b,v.displayName="ClassC",v.defaultProps={};var h=v,k=n(12),C=n.n(k),N=function(e){Object(f.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n),(e=a.apply(this,arguments)).handleCount=function(){Object(m.a)(e).setState((function(e){return{count:e.count+1}}))},console.log("".concat(n.displayName,": constructor"));var t=Object(m.a)(e);return t.state={hasError:!1,count:0},e}return Object(d.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(n.displayName,": getDerivedStateFromProps")),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(n.displayName,": getDerivedStateFromError")),{hasError:!0}}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("".concat(n.displayName,": componentDidMount"))}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(n.displayName,": getSnapshotBeforeUpdate")),null}},{key:"componentDidUpdate",value:function(e,a,t){console.log("".concat(n.displayName,": componentDidUpdate"))}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(n.displayName,": componentDidCatch"))}},{key:"componentWillUnmount",value:function(){console.log("".concat(n.displayName,": componentWillUnmount"))}},{key:"render",value:function(){console.log("".concat(n.displayName,": render"));var e=this.props,a=e.name,t=e.value,l=e.grandchild,o=e.onCallback,u=this.state.count;return c.a.createElement("div",{className:C.a.container},n.displayName,c.a.createElement("hr",null),"body",c.a.createElement("hr",null),"count: ",u,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",t,c.a.createElement("br",null),"context value: ",this.context.value,c.a.createElement("br",null),"grandchild: ",l,c.a.createElement("hr",null),c.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")))}}]),n}(c.a.PureComponent);N.contextType=b,N.displayName="ClassD",N.defaultProps={};var g=N,O=n(13),j=n.n(O),S=c.a.memo((function(e){var a=e.name,n=e.value,t=e.grandchild,l=e.onCallback;c.a.useEffect((function(){return console.log("".concat(S.displayName,": useEffect")),function(){console.log("".concat(S.displayName,": useEffect Cleanup"))}}),[]),c.a.useLayoutEffect((function(){return console.log("".concat(S.displayName,": useLayoutEffect")),function(){console.log("".concat(S.displayName,": useLayoutEffect Cleanup"))}}),[]);var o=c.a.useRef(!1);c.a.useEffect((function(){o.current?console.log("".concat(S.displayName,": useUpdateEffect")):o.current=!0}));var u=c.a.useRef(!1);c.a.useLayoutEffect((function(){u.current?console.log("".concat(S.displayName,": useUpdateLayoutEffect")):u.current=!0}));var r=c.a.useState(0),s=Object(i.a)(r,2),m=s[0],d=s[1],p=c.a.useCallback((function(){return d((function(e){return e+1}))}),[]),f=c.a.useContext(b);return c.a.createElement("div",{className:j.a.container},S.displayName,c.a.createElement("hr",null),"body",c.a.createElement("hr",null),"count: ",m,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",n,c.a.createElement("br",null),"context count: ",f.count,c.a.createElement("br",null),"grandchild: ",t,c.a.createElement("hr",null),c.a.createElement("button",{onClick:p},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:l},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")))}));S.defaultProps={},S.displayName="FuncC";var D=S,F=n(14),U=n.n(F),_=c.a.memo((function(e){var a=e.name,n=e.value,t=e.grandchild,l=e.onCallback;c.a.useEffect((function(){return console.log("".concat(_.displayName,": useEffect")),function(){console.log("".concat(_.displayName,": useEffect Cleanup"))}}),[]),c.a.useLayoutEffect((function(){return console.log("".concat(_.displayName,": useLayoutEffect")),function(){console.log("".concat(_.displayName,": useLayoutEffect Cleanup"))}}),[]);var o=c.a.useRef(!1);c.a.useEffect((function(){o.current?console.log("".concat(_.displayName,": useUpdateEffect")):o.current=!0}));var u=c.a.useRef(!1);c.a.useLayoutEffect((function(){u.current?console.log("".concat(_.displayName,": useUpdateLayoutEffect")):u.current=!0}));var r=c.a.useState(0),s=Object(i.a)(r,2),m=s[0],d=s[1],p=c.a.useCallback((function(){return d((function(e){return e+1}))}),[]),f=c.a.useContext(b);return c.a.createElement("div",{className:U.a.container},_.displayName,c.a.createElement("hr",null),"body",c.a.createElement("hr",null),"count: ",m,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",n,c.a.createElement("br",null),"context value: ",f.value,c.a.createElement("br",null),"grandchild: ",t,c.a.createElement("hr",null),c.a.createElement("button",{onClick:p},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:l},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")))}));_.defaultProps={},_.displayName="FuncD";var L=_,x=n(15),P=n.n(x),B=function(e){Object(f.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n),(e=a.apply(this,arguments)).handleCount=function(){Object(m.a)(e).setState((function(e){return{count:e.count+1}}))},e.handleValue=function(){Object(m.a)(e).setState((function(e){return{value:e.value+1}}))},e.handleCallback=function(){Object(m.a)(e).setState((function(e){return{callback:e.callback+1}}))},e.handleVisible=function(){Object(m.a)(e).setState((function(e){return{visible:!e.visible}}))},console.log("".concat(n.displayName,": constructor"));var t=Object(m.a)(e);return t.state={hasError:!1,count:0,value:0,callback:0,visible:!0},e}return Object(d.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(n.displayName,": getDerivedStateFromProps")),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(n.displayName,": getDerivedStateFromError")),{hasError:!0}}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("".concat(n.displayName,": componentDidMount"))}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(n.displayName,": getSnapshotBeforeUpdate")),null}},{key:"componentDidUpdate",value:function(e,a,t){console.log("".concat(n.displayName,": componentDidUpdate"))}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(n.displayName,": componentDidCatch"))}},{key:"componentWillUnmount",value:function(){console.log("".concat(n.displayName,": componentWillUnmount"))}},{key:"render",value:function(){console.log("".concat(n.displayName,": render"));var e=this.props,a=e.name,t=e.func,l=e.value,o=e.grandchild,u=e.onCallback,r=this.state,i=r.count,s=r.value,m=r.callback,d=r.visible;return c.a.createElement("div",{className:P.a.container},n.displayName,c.a.createElement("hr",null),d?t?c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{name:n.displayName,value:s,grandchild:o,onCallback:this.handleCallback}),c.a.createElement(L,{name:n.displayName,value:s,grandchild:o,onCallback:this.handleCallback})):c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{name:n.displayName,value:s,grandchild:o,onCallback:this.handleCallback}),c.a.createElement(g,{name:n.displayName,value:s,grandchild:o,onCallback:this.handleCallback})):null,c.a.createElement("hr",null),"count: ",i,c.a.createElement("br",null),"value: ",s,c.a.createElement("br",null),"callback: ",m,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",l,c.a.createElement("br",null),"grandchild: ",o,c.a.createElement("hr",null),c.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:this.handleValue},"\u6539\u53d8 ".concat(t?"".concat(D.displayName,"/").concat(L.displayName):"".concat(h.displayName,"/").concat(g.displayName)," value \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:u},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:this.handleVisible},"\u5378\u8f7d/\u91cd\u8f7d ".concat(t?"".concat(D.displayName,"/").concat(L.displayName):"".concat(h.displayName,"/").concat(g.displayName))))}}]),n}(c.a.PureComponent);B.displayName="ClassB",B.defaultProps={};var M=B,R=n(16),V=n.n(R),A=c.a.memo((function(e){var a=e.name,n=e.func,t=e.value,l=e.grandchild,o=e.onCallback;c.a.useEffect((function(){return console.log("".concat(A.displayName,": useEffect")),function(){console.log("".concat(A.displayName,": useEffect Cleanup"))}}),[]),c.a.useLayoutEffect((function(){return console.log("".concat(A.displayName,": useLayoutEffect")),function(){console.log("".concat(A.displayName,": useLayoutEffect Cleanup"))}}),[]);var u=c.a.useRef(!1);c.a.useEffect((function(){u.current?console.log("".concat(A.displayName,": useUpdateEffect")):u.current=!0}));var r=c.a.useRef(!1);c.a.useLayoutEffect((function(){r.current?console.log("".concat(A.displayName,": useUpdateLayoutEffect")):r.current=!0}));var s=c.a.useState(0),m=Object(i.a)(s,2),d=m[0],p=m[1],f=c.a.useCallback((function(){return p((function(e){return e+1}))}),[]),b=c.a.useState(0),y=Object(i.a)(b,2),E=y[0],v=y[1],k=c.a.useCallback((function(){return v((function(e){return e+1}))}),[]),C=c.a.useState(0),N=Object(i.a)(C,2),O=N[0],j=N[1],S=c.a.useCallback((function(){return j((function(e){return e+1}))}),[]),F=c.a.useState(!0),U=Object(i.a)(F,2),_=U[0],x=U[1],P=c.a.useCallback((function(){return x((function(e){return!e}))}),[]);return c.a.createElement("div",{className:V.a.container},A.displayName,c.a.createElement("hr",null),_?n?c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{name:A.displayName,value:E,grandchild:l,onCallback:S}),c.a.createElement(L,{name:A.displayName,value:E,grandchild:l,onCallback:S})):c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{name:A.displayName,value:E,grandchild:l,onCallback:S}),c.a.createElement(g,{name:A.displayName,value:E,grandchild:l,onCallback:S})):null,c.a.createElement("hr",null),"count: ",d,c.a.createElement("br",null),"value: ",E,c.a.createElement("br",null),"callback: ",O,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",t,c.a.createElement("br",null),"grandchild: ",l,c.a.createElement("hr",null),c.a.createElement("button",{onClick:f},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:k},"\u6539\u53d8 ".concat(n?"".concat(D.displayName,"/").concat(L.displayName):"".concat(h.displayName,"/").concat(g.displayName)," value \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:P},"\u5378\u8f7d/\u91cd\u8f7d ".concat(n?"".concat(D.displayName,"/").concat(L.displayName):"".concat(h.displayName,"/").concat(g.displayName))))}));A.defaultProps={},A.displayName="FuncB";var W=A,w=n(17),J=n.n(w),K=function(e){Object(f.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n),(e=a.apply(this,arguments)).handleCount=function(){Object(m.a)(e).setState((function(e){return{count:e.count+1}}))},e.handleValue=function(){Object(m.a)(e).setState((function(e){return{value:e.value+1}}))},e.handleCallback=function(){Object(m.a)(e).setState((function(e){return{callback:e.callback+1}}))},e.handleVisible=function(){Object(m.a)(e).setState((function(e){return{visible:!e.visible}}))},console.log("".concat(n.displayName,": constructor"));var t=Object(m.a)(e);return t.state={hasError:!1,count:0,value:0,callback:0,visible:!0},e}return Object(d.a)(n,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(n.displayName,": getDerivedStateFromProps")),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(n.displayName,": getDerivedStateFromError")),{hasError:!0}}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("".concat(n.displayName,": componentDidMount"))}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(n.displayName,": getSnapshotBeforeUpdate")),null}},{key:"componentDidUpdate",value:function(e,a,t){console.log("".concat(n.displayName,": componentDidUpdate"))}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(n.displayName,": componentDidCatch"))}},{key:"componentWillUnmount",value:function(){console.log("".concat(n.displayName,": componentWillUnmount"))}},{key:"render",value:function(){console.log("".concat(n.displayName,": render"));var e=this.props,a=e.name,t=e.func,l=e.value,o=e.grandchild,u=e.onCallback,r=this.state,i=r.count,s=r.value,m=r.callback,d=r.visible;return c.a.createElement("div",{className:J.a.container},n.displayName,c.a.createElement("hr",null),d?t?c.a.createElement(W,{name:n.displayName,value:s,grandchild:o,onCallback:this.handleCallback,func:!1}):c.a.createElement(M,{name:n.displayName,value:s,grandchild:o,onCallback:this.handleCallback,func:!1}):null,c.a.createElement("hr",null),"count: ",i,c.a.createElement("br",null),"value: ",s,c.a.createElement("br",null),"callback: ",m,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",l,c.a.createElement("br",null),"grandchild: ",o,c.a.createElement("hr",null),c.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:this.handleValue},"\u6539\u53d8 ".concat(t?W.displayName:M.displayName," value \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:u},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:this.handleVisible},"\u5378\u8f7d/\u91cd\u8f7d ".concat(t?W.displayName:M.displayName)))}}]),n}(c.a.PureComponent);K.displayName="ClassA",K.defaultProps={};var T=K,G=n(18),I=n.n(G),Z=c.a.memo((function(e){var a=e.name,n=e.func,t=e.value,l=e.grandchild,o=e.onCallback;c.a.useEffect((function(){return console.log("".concat(Z.displayName,": useEffect")),function(){console.log("".concat(Z.displayName,": useEffect Cleanup"))}}),[]),c.a.useLayoutEffect((function(){return console.log("".concat(Z.displayName,": useLayoutEffect")),function(){console.log("".concat(Z.displayName,": useLayoutEffect Cleanup"))}}),[]);var u=c.a.useRef(!1);c.a.useEffect((function(){u.current?console.log("".concat(Z.displayName,": useUpdateEffect")):u.current=!0}));var r=c.a.useRef(!1);c.a.useLayoutEffect((function(){r.current?console.log("".concat(Z.displayName,": useUpdateLayoutEffect")):r.current=!0}));var s=c.a.useState(0),m=Object(i.a)(s,2),d=m[0],p=m[1],f=c.a.useCallback((function(){return p((function(e){return e+1}))}),[]),b=c.a.useState(0),y=Object(i.a)(b,2),E=y[0],v=y[1],h=c.a.useCallback((function(){return v((function(e){return e+1}))}),[]),k=c.a.useState(0),C=Object(i.a)(k,2),N=C[0],g=C[1],O=c.a.useCallback((function(){return g((function(e){return e+1}))}),[]),j=c.a.useState(!0),S=Object(i.a)(j,2),D=S[0],F=S[1],U=c.a.useCallback((function(){return F((function(e){return!e}))}),[]);return c.a.createElement("div",{className:I.a.container},Z.displayName,c.a.createElement("hr",null),D?n?c.a.createElement(W,{name:Z.displayName,value:E,grandchild:l,onCallback:O,func:!0}):c.a.createElement(M,{name:Z.displayName,value:E,grandchild:l,onCallback:O,func:!0}):null,c.a.createElement("hr",null),"count: ",d,c.a.createElement("br",null),"value: ",E,c.a.createElement("br",null),"callback: ",N,c.a.createElement("br",null),c.a.createElement("hr",null),"prop value: ",t,c.a.createElement("br",null),"grandchild: ",l,c.a.createElement("hr",null),c.a.createElement("button",{onClick:f},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:h},"\u6539\u53d8 ".concat(n?W.displayName:M.displayName," value \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," callback \u7684\u503c")),"\xa0",c.a.createElement("button",{onClick:U},"\u5378\u8f7d/\u91cd\u8f7d ".concat(n?W.displayName:M.displayName)))}));Z.defaultProps={},Z.displayName="FuncA";var q=Z,z=n(19),H=n.n(z),Q=c.a.memo((function(e){var a=c.a.useState("class"),n=Object(i.a)(a,2),t=n[0],l=n[1],o=c.a.useCallback((function(e){return l(e.target.dataset.type)}),[]),s=c.a.useState(0),m=Object(i.a)(s,2),d=m[0],p=m[1],f=c.a.useCallback((function(){return p((function(e){return e+1}))}),[]),y=c.a.useState(0),E=Object(i.a)(y,2),v=E[0],h=E[1],k=c.a.useCallback((function(){return h((function(e){return e+1}))}),[]),C=c.a.useState(0),N=Object(i.a)(C,2),g=N[0],O=N[1],j=c.a.useCallback((function(){return O((function(e){return e+1}))}),[]),S=c.a.useState({count:0,value:0}),D=Object(i.a)(S,2),F=D[0],U=D[1],_=c.a.useCallback((function(e){var a=e.target.dataset.type;U((function(e){return Object(r.a)({},e,Object(u.a)({},a,e[a]+1))}))}),[]),L=c.a.useState(0),x=Object(i.a)(L,2),P=x[0],B=x[1],M=c.a.useCallback((function(){return B((function(e){return e+1}))}),[]),R=c.a.useState(!0),V=Object(i.a)(R,2),A=V[0],W=V[1],w=c.a.useCallback((function(){return W((function(e){return!e}))}),[]);return c.a.createElement("div",{className:H.a.container},Q.displayName,"\xa0",c.a.createElement("button",{"data-type":"class&func",onClick:o},"Class & Func"),"\xa0",c.a.createElement("button",{"data-type":"class",onClick:o},"Class"),"\xa0",c.a.createElement("button",{"data-type":"func",onClick:o},"Func"),"\xa0",c.a.createElement("button",{"data-type":"func&class",onClick:o},"Func & Class"),c.a.createElement("hr",null),c.a.createElement(b.Provider,{value:F},"class&func"===t&&A?c.a.createElement(T,{name:Q.displayName,value:v,grandchild:P,onCallback:j,func:!0}):null,"class"===t&&A?c.a.createElement(T,{name:Q.displayName,value:v,grandchild:P,onCallback:j,func:!1}):null,"func"===t&&A?c.a.createElement(q,{name:Q.displayName,value:v,grandchild:P,onCallback:j,func:!0}):null,"func&class"===t&&A?c.a.createElement(q,{name:Q.displayName,value:v,grandchild:P,onCallback:j,func:!1}):null),c.a.createElement("hr",null),"count: ",d,c.a.createElement("br",null),"value: ",v,c.a.createElement("br",null),"callback: ",g,c.a.createElement("br",null),"content count: ",F.count,c.a.createElement("br",null),"content value: ",F.value,c.a.createElement("br",null),"grandchild: ",P,c.a.createElement("br",null),c.a.createElement("hr",null),c.a.createElement("button",{onClick:f},"\u6539\u53d8\u81ea\u8eab count \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:k},"\u6539\u53d8 ".concat("class&func"===t||"class"===t?T.displayName:q.displayName," value \u7684\u503c")),"\xa0",c.a.createElement("button",{"data-type":"count",onClick:_},"\u6539\u53d8 content count \u7684\u503c"),"\xa0",c.a.createElement("button",{"data-type":"value",onClick:_},"\u6539\u53d8 content value \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:M},"\u6539\u53d8 ClassC/FuncC/ClassD/FuncD grandchild \u7684\u503c"),"\xa0",c.a.createElement("button",{onClick:w},"\u5378\u8f7d/\u91cd\u8f7d ".concat("class&func"===t||"class"===t?T.displayName:q.displayName)))}));Q.displayName="Container";var X=Q;o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(X,null)))}],[[20,1,2]]]);
//# sourceMappingURL=main.34edac6a.chunk.js.map