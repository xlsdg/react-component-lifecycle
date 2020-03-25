(this["webpackJsonpreact-component-lifecycle"]=this["webpackJsonpreact-component-lifecycle"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports={container:"ClassC_container__Lk89i"}},function(e,a,t){e.exports={container:"FuncC_container__KwlcA"}},function(e,a,t){e.exports={container:"ClassB_container__3C_Ow"}},function(e,a,t){e.exports={container:"FuncB_container__3G0ck"}},function(e,a,t){e.exports={container:"ClassA_container__1AZ6d"}},function(e,a,t){e.exports={container:"FuncA_container__2VF84"}},function(e,a,t){e.exports={container:"App_container__300K5"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),o=t.n(c),r=t(16),u=t(1),s=t(4),i=t(2),m=t(3),p=t(5),d=t(6),f=l.a.createContext({count:0}),b=t(9),h=t.n(b),E=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t),(e=a.apply(this,arguments)).handleCount=function(){Object(i.a)(e).setState((function(e){return{count:e.count+1}}))},console.log("".concat(t.displayName,": constructor"),arguments);var n=Object(i.a)(e);return n.state={hasError:!1,count:0},e}return Object(m.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(t.displayName,": getDerivedStateFromProps"),e,a),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(t.displayName,": getDerivedStateFromError"),e),{hasError:!0}}}]),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("".concat(t.displayName,": componentDidMount"),this.props,this.state)}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(t.displayName,": getSnapshotBeforeUpdate"),e,this.props,a,this.state),null}},{key:"componentDidUpdate",value:function(e,a,n){console.log("".concat(t.displayName,": componentDidUpdate"),e,this.props,a,this.state,n)}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(t.displayName,": componentDidCatch"),this.props,this.state,e,a)}},{key:"componentWillUnmount",value:function(){console.log("".concat(t.displayName,": componentWillUnmount"),this.props,this.state)}},{key:"render",value:function(){console.log("".concat(t.displayName,": render"),this.props,this.state);var e=this.props,a=e.name,n=e.value,c=e.grandchild,o=e.onCallback,r=this.state.count;return l.a.createElement("div",{className:h.a.container},t.displayName,l.a.createElement("hr",null),"body",l.a.createElement("hr",null),"count: ",r,l.a.createElement("br",null),l.a.createElement("hr",null),"child value: ",n,l.a.createElement("br",null),"context: ",this.context.count,l.a.createElement("br",null),"grandchild: ",c,l.a.createElement("hr",null),l.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," state \u7684\u503c")))}}]),t}(l.a.PureComponent);E.contextType=f,E.displayName="ClassC",E.defaultProps={};var y=E,v=t(10),k=t.n(v),C=l.a.memo((function(e){var a=e.name,t=e.value,n=e.grandchild,c=e.onCallback;l.a.useEffect((function(){return console.log("".concat(C.displayName,": useEffect")),function(){console.log("".concat(C.displayName,": useEffect Cleanup"))}}),[]),l.a.useLayoutEffect((function(){return console.log("".concat(C.displayName,": useLayoutEffect")),function(){console.log("".concat(C.displayName,": useLayoutEffect Cleanup"))}}),[]);var o=l.a.useRef(!1);l.a.useEffect((function(){o.current?console.log("".concat(C.displayName,": useUpdateEffect")):o.current=!0}));var r=l.a.useRef(!1);l.a.useLayoutEffect((function(){r.current?console.log("".concat(C.displayName,": useUpdateLayoutEffect")):r.current=!0}));var s=l.a.useState(0),i=Object(u.a)(s,2),m=i[0],p=i[1],d=l.a.useCallback((function(){return p((function(e){return e+1}))}),[]),b=l.a.useContext(f);return l.a.createElement("div",{className:k.a.container},C.displayName,l.a.createElement("hr",null),"body",l.a.createElement("hr",null),"count: ",m,l.a.createElement("br",null),l.a.createElement("hr",null),"child value: ",t,l.a.createElement("br",null),"context: ",b.count,l.a.createElement("br",null),"grandchild: ",n,l.a.createElement("hr",null),l.a.createElement("button",{onClick:d},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:c},"\u6539\u53d8 ".concat(a," state \u7684\u503c")))}));C.defaultProps={},C.displayName="FuncC";var N=C,g=t(11),O=t.n(g),j=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t),(e=a.apply(this,arguments)).handleCount=function(){Object(i.a)(e).setState((function(e){return{count:e.count+1}}))},e.handleValue=function(){Object(i.a)(e).setState((function(e){return{value:e.value+1}}))},e.handleCallback=function(){Object(i.a)(e).setState((function(e){return{callback:e.callback+1}}))},e.handleVisible=function(){Object(i.a)(e).setState((function(e){return{visible:!e.visible}}))},console.log("".concat(t.displayName,": constructor"),arguments);var n=Object(i.a)(e);return n.state={hasError:!1,count:0,value:0,callback:0,visible:!0},e}return Object(m.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(t.displayName,": getDerivedStateFromProps"),e,a),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(t.displayName,": getDerivedStateFromError"),e),{hasError:!0}}}]),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("".concat(t.displayName,": componentDidMount"),this.props,this.state)}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(t.displayName,": getSnapshotBeforeUpdate"),e,this.props,a,this.state),null}},{key:"componentDidUpdate",value:function(e,a,n){console.log("".concat(t.displayName,": componentDidUpdate"),e,this.props,a,this.state,n)}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(t.displayName,": componentDidCatch"),this.props,this.state,e,a)}},{key:"componentWillUnmount",value:function(){console.log("".concat(t.displayName,": componentWillUnmount"),this.props,this.state)}},{key:"render",value:function(){console.log("".concat(t.displayName,": render"),this.props,this.state);var e=this.props,a=e.name,n=e.func,c=e.value,o=e.grandchild,r=e.onCallback,u=this.state,s=u.count,i=u.value,m=u.callback,p=u.visible;return l.a.createElement("div",{className:O.a.container},t.displayName,l.a.createElement("hr",null),p?n?l.a.createElement(N,{name:t.displayName,value:i,grandchild:o,onCallback:this.handleCallback}):l.a.createElement(y,{name:t.displayName,value:i,grandchild:o,onCallback:this.handleCallback}):null,l.a.createElement("hr",null),"count: ",s,l.a.createElement("br",null),"value: ",i,l.a.createElement("br",null),"callback: ",m,l.a.createElement("br",null),l.a.createElement("hr",null),"parent value: ",c,l.a.createElement("br",null),"grandchild: ",o,l.a.createElement("hr",null),l.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:this.handleValue},"\u6539\u53d8 ".concat(n?N.displayName:y.displayName," prop \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:r},"\u6539\u53d8 ".concat(a," state \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:this.handleVisible},"\u5378\u8f7d/\u91cd\u8f7d ".concat(n?N.displayName:y.displayName)))}}]),t}(l.a.PureComponent);j.displayName="ClassB",j.defaultProps={};var S=j,D=t(12),U=t.n(D),F=l.a.memo((function(e){var a=e.name,t=e.func,n=e.value,c=e.grandchild,o=e.onCallback;l.a.useEffect((function(){return console.log("".concat(F.displayName,": useEffect")),function(){console.log("".concat(F.displayName,": useEffect Cleanup"))}}),[]),l.a.useLayoutEffect((function(){return console.log("".concat(F.displayName,": useLayoutEffect")),function(){console.log("".concat(F.displayName,": useLayoutEffect Cleanup"))}}),[]);var r=l.a.useRef(!1);l.a.useEffect((function(){r.current?console.log("".concat(F.displayName,": useUpdateEffect")):r.current=!0}));var s=l.a.useRef(!1);l.a.useLayoutEffect((function(){s.current?console.log("".concat(F.displayName,": useUpdateLayoutEffect")):s.current=!0}));var i=l.a.useState(0),m=Object(u.a)(i,2),p=m[0],d=m[1],f=l.a.useCallback((function(){return d((function(e){return e+1}))}),[]),b=l.a.useState(0),h=Object(u.a)(b,2),E=h[0],v=h[1],k=l.a.useCallback((function(){return v((function(e){return e+1}))}),[]),C=l.a.useState(0),g=Object(u.a)(C,2),O=g[0],j=g[1],S=l.a.useCallback((function(){return j((function(e){return e+1}))}),[]),D=l.a.useState(!0),_=Object(u.a)(D,2),L=_[0],P=_[1],x=l.a.useCallback((function(){return P((function(e){return!e}))}),[]);return l.a.createElement("div",{className:U.a.container},F.displayName,l.a.createElement("hr",null),L?t?l.a.createElement(N,{name:F.displayName,value:E,grandchild:c,onCallback:S}):l.a.createElement(y,{name:F.displayName,value:E,grandchild:c,onCallback:S}):null,l.a.createElement("hr",null),"count: ",p,l.a.createElement("br",null),"value: ",E,l.a.createElement("br",null),"callback: ",O,l.a.createElement("br",null),l.a.createElement("hr",null),"parent value: ",n,l.a.createElement("br",null),"grandchild: ",c,l.a.createElement("hr",null),l.a.createElement("button",{onClick:f},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:k},"\u6539\u53d8 ".concat(t?N.displayName:y.displayName," prop \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," state \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:x},"\u5378\u8f7d/\u91cd\u8f7d ".concat(t?N.displayName:y.displayName)))}));F.defaultProps={},F.displayName="FuncB";var _=F,L=t(13),P=t.n(L),x=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t),(e=a.apply(this,arguments)).handleCount=function(){Object(i.a)(e).setState((function(e){return{count:e.count+1}}))},e.handleValue=function(){Object(i.a)(e).setState((function(e){return{value:e.value+1}}))},e.handleCallback=function(){Object(i.a)(e).setState((function(e){return{callback:e.callback+1}}))},e.handleVisible=function(){Object(i.a)(e).setState((function(e){return{visible:!e.visible}}))},console.log("".concat(t.displayName,": constructor"),arguments);var n=Object(i.a)(e);return n.state={hasError:!1,count:0,value:0,callback:0,visible:!0},e}return Object(m.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,a){return console.log("".concat(t.displayName,": getDerivedStateFromProps"),e,a),null}},{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(t.displayName,": getDerivedStateFromError"),e),{hasError:!0}}}]),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("".concat(t.displayName,": componentDidMount"),this.props,this.state)}},{key:"getSnapshotBeforeUpdate",value:function(e,a){return console.log("".concat(t.displayName,": getSnapshotBeforeUpdate"),e,this.props,a,this.state),null}},{key:"componentDidUpdate",value:function(e,a,n){console.log("".concat(t.displayName,": componentDidUpdate"),e,this.props,a,this.state,n)}},{key:"componentDidCatch",value:function(e,a){console.log("".concat(t.displayName,": componentDidCatch"),this.props,this.state,e,a)}},{key:"componentWillUnmount",value:function(){console.log("".concat(t.displayName,": componentWillUnmount"),this.props,this.state)}},{key:"render",value:function(){console.log("".concat(t.displayName,": render"),this.props,this.state);var e=this.props,a=e.name,n=e.func,c=e.value,o=e.grandchild,r=e.onCallback,u=this.state,s=u.count,i=u.value,m=u.callback,p=u.visible;return l.a.createElement("div",{className:P.a.container},t.displayName,l.a.createElement("hr",null),p?n?l.a.createElement(_,{name:t.displayName,value:i,grandchild:o,onCallback:this.handleCallback,func:!1}):l.a.createElement(S,{name:t.displayName,value:i,grandchild:o,onCallback:this.handleCallback,func:!1}):null,l.a.createElement("hr",null),"count: ",s,l.a.createElement("br",null),"value: ",i,l.a.createElement("br",null),"callback: ",m,l.a.createElement("br",null),l.a.createElement("hr",null),"container value: ",c,l.a.createElement("br",null),"grandchild: ",o,l.a.createElement("hr",null),l.a.createElement("button",{onClick:this.handleCount},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:this.handleValue},"\u6539\u53d8 ".concat(n?_.displayName:S.displayName," prop \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:r},"\u6539\u53d8 ".concat(a," state \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:this.handleVisible},"\u5378\u8f7d/\u91cd\u8f7d ".concat(n?_.displayName:S.displayName)))}}]),t}(l.a.PureComponent);x.displayName="ClassA",x.defaultProps={};var B=x,V=t(14),A=t.n(V),M=l.a.memo((function(e){var a=e.name,t=e.func,n=e.value,c=e.grandchild,o=e.onCallback;l.a.useEffect((function(){return console.log("".concat(M.displayName,": useEffect")),function(){console.log("".concat(M.displayName,": useEffect Cleanup"))}}),[]),l.a.useLayoutEffect((function(){return console.log("".concat(M.displayName,": useLayoutEffect")),function(){console.log("".concat(M.displayName,": useLayoutEffect Cleanup"))}}),[]);var r=l.a.useRef(!1);l.a.useEffect((function(){r.current?console.log("".concat(M.displayName,": useUpdateEffect")):r.current=!0}));var s=l.a.useRef(!1);l.a.useLayoutEffect((function(){s.current?console.log("".concat(M.displayName,": useUpdateLayoutEffect")):s.current=!0}));var i=l.a.useState(0),m=Object(u.a)(i,2),p=m[0],d=m[1],f=l.a.useCallback((function(){return d((function(e){return e+1}))}),[]),b=l.a.useState(0),h=Object(u.a)(b,2),E=h[0],y=h[1],v=l.a.useCallback((function(){return y((function(e){return e+1}))}),[]),k=l.a.useState(0),C=Object(u.a)(k,2),N=C[0],g=C[1],O=l.a.useCallback((function(){return g((function(e){return e+1}))}),[]),j=l.a.useState(!0),D=Object(u.a)(j,2),U=D[0],F=D[1],L=l.a.useCallback((function(){return F((function(e){return!e}))}),[]);return l.a.createElement("div",{className:A.a.container},M.displayName,l.a.createElement("hr",null),U?t?l.a.createElement(_,{name:M.displayName,value:E,grandchild:c,onCallback:O,func:!0}):l.a.createElement(S,{name:M.displayName,value:E,grandchild:c,onCallback:O,func:!0}):null,l.a.createElement("hr",null),"count: ",p,l.a.createElement("br",null),"value: ",E,l.a.createElement("br",null),"callback: ",N,l.a.createElement("br",null),l.a.createElement("hr",null),"container value: ",n,l.a.createElement("br",null),"grandchild: ",c,l.a.createElement("hr",null),l.a.createElement("button",{onClick:f},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:v},"\u6539\u53d8 ".concat(t?_.displayName:S.displayName," prop \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:o},"\u6539\u53d8 ".concat(a," state \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:L},"\u5378\u8f7d/\u91cd\u8f7d ".concat(t?_.displayName:S.displayName)))}));M.defaultProps={},M.displayName="FuncA";var R=M,W=t(15),w=t.n(W),J=l.a.memo((function(e){var a=l.a.useState("class"),t=Object(u.a)(a,2),n=t[0],c=t[1],o=l.a.useCallback((function(e){return c(e)}),[]),s=l.a.useState(0),i=Object(u.a)(s,2),m=i[0],p=i[1],d=l.a.useCallback((function(){return p((function(e){return e+1}))}),[]),b=l.a.useState(0),h=Object(u.a)(b,2),E=h[0],y=h[1],v=l.a.useCallback((function(){return y((function(e){return e+1}))}),[]),k=l.a.useState(0),C=Object(u.a)(k,2),N=C[0],g=C[1],O=l.a.useCallback((function(){return g((function(e){return e+1}))}),[]),j=l.a.useState({count:0}),S=Object(u.a)(j,2),D=S[0],U=S[1],F=l.a.useCallback((function(){return U((function(e){return Object(r.a)({},e,{count:e.count+1})}))}),[]),_=l.a.useState(0),L=Object(u.a)(_,2),P=L[0],x=L[1],V=l.a.useCallback((function(){return x((function(e){return e+1}))}),[]),A=l.a.useState(!0),M=Object(u.a)(A,2),W=M[0],K=M[1],G=l.a.useCallback((function(){return K((function(e){return!e}))}),[]);return l.a.createElement("div",{className:w.a.container},J.displayName,"\xa0",l.a.createElement("button",{onClick:function(){return o("class&func")}},"Class & Func"),"\xa0",l.a.createElement("button",{onClick:function(){return o("class")}},"Class"),"\xa0",l.a.createElement("button",{onClick:function(){return o("func")}},"Func"),"\xa0",l.a.createElement("button",{onClick:function(){return o("func&class")}},"Func & Class"),l.a.createElement("hr",null),l.a.createElement(f.Provider,{value:D},"class&func"===n&&W?l.a.createElement(B,{name:J.displayName,value:E,grandchild:P,onCallback:O,func:!0}):null,"class"===n&&W?l.a.createElement(B,{name:J.displayName,value:E,grandchild:P,onCallback:O,func:!1}):null,"func"===n&&W?l.a.createElement(R,{name:J.displayName,value:E,grandchild:P,onCallback:O,func:!0}):null,"func&class"===n&&W?l.a.createElement(R,{name:J.displayName,value:E,grandchild:P,onCallback:O,func:!1}):null),l.a.createElement("hr",null),"count: ",m,l.a.createElement("br",null),"value: ",E,l.a.createElement("br",null),"callback: ",N,l.a.createElement("br",null),"content: ",D.count,l.a.createElement("br",null),"grandchild: ",P,l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("button",{onClick:d},"\u6539\u53d8\u81ea\u8eab state \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:v},"\u6539\u53d8 ".concat("class&func"===n||"class"===n?B.displayName:R.displayName," prop \u7684\u503c")),"\xa0",l.a.createElement("button",{onClick:F},"\u6539\u53d8 content \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:V},"\u6539\u53d8 ClassC/FuncC prop \u7684\u503c"),"\xa0",l.a.createElement("button",{onClick:G},"\u5378\u8f7d/\u91cd\u8f7d ".concat("class&func"===n||"class"===n?B.displayName:R.displayName)))}));J.displayName="Container";var K=J;o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)))}],[[17,1,2]]]);
//# sourceMappingURL=main.af92a457.chunk.js.map