(window.webpackJsonpsimple_calculator=window.webpackJsonpsimple_calculator||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(23),a(4)),u=a(5),s=a(7),c=a(6),d=a(8),m=(a(24),a(10)),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){"="!==this.props.name?this.props.handleClick(this.props.name):this.props.handleClick()}},{key:"render",value:function(){return i.a.createElement("button",{id:this.props.id,className:"key "+this.props.class+" "+this.props.keyCode,onClick:this.handleClick},this.props.name)}}]),t}(i.a.Component),f={rootReducer:{formula:0,input:0,isPrevCalculate:!1,addDecimal:!1}};function h(e,t,a,n,i){return{name:e,id:t,className:a,keyCode:n,additionalKey:i}}var v=[h("AC","clear","clear",8),h("/","divide","ops",191),h("*","multiply","ops",16,"shiftKey"),h("7","seven","nums",55),h("8","eight","nums",56),h("9","nine","nums",57),h("-","subtract","ops",189),h("4","four","nums",52),h("5","five","nums",53),h("6","six","nums",54),h("+","add","ops",187,"shiftKey"),h("1","one","nums",49),h("2","two","nums",50),h("3","three","nums",51),h("0","zero","nums",48),h(".","decimal","nums",190),h("=","equals","equals",187)],C="ERASE",y="UPDATE_DISPLAY",k=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.props.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.props.handleKeyPress)}},{key:"render",value:function(){var e=this,t=v.map(function(t,a){var n="="!==t.name?e.props.handleClick:e.props.solve,r=t.keyCode;return r+=t.additionalKey?t.additionalKey:"",i.a.createElement(p,{name:t.name,id:t.id,class:t.className,key:a,keyCode:r,handleClick:n})});return i.a.createElement("div",{id:"calculator"},i.a.createElement("div",{id:"screen"},i.a.createElement("div",{id:"formula"},this.props.formula),i.a.createElement("div",{id:"display"},this.props.input)),t)}}]),t}(i.a.Component),b=(a(25),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,{formula:this.props.formula,input:this.props.input,handleClick:this.props.handleClick,solve:this.props.solve,handleKeyPress:this.props.handleKeyPress}))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(2),j=function(e){return{type:y,newState:e}},P=a(14);var E=Object(O.c)({rootReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"default"};switch(t.type){case C:var a=Object.assign({},e);return a.isPrevCalculate=!1,a.input=0,a.formula=0,a.addDecimal=!1,a;case y:return Object.assign({},t.newState);default:return e}}}),w=a(17),g=Object(O.d)(E,f,Object(O.a)(w.a)),D=Object(P.b)(function(e){return{formula:e.rootReducer.formula,input:e.rootReducer.input,isPrevCalculate:e.rootReducer.isPrevCalculate,addDecimal:e.rootReducer.addDecimal}},null,function(e,t){var a=e.formula,n=e.input,i=e.isPrevCalculate,r=e.addDecimal,l=t.dispatch,o=Object.assign({},e);return o.isPrevCalculate=!1,{formula:a,input:n,isPrevCalculate:i,addDecimal:r,handleClick:function(t){if("DIGIT LIMIT MET"!==e.input)if(/[\d]/.test(t)){if(e.input.length>=18&&!/[-+*\/]$/.test(e.formula)&&!e.isPrevCalculate)return o.input="DIGIT LIMIT MET",setTimeout(function(){l(j(e))},800,e,l,j()),void l(j(o));if(0==e.input||/[-+*\/]$/.test(e.formula)||e.isPrevCalculate){if(0==t&&0==e.input)return void l(j(e));o.input=t,(0==o.formula||e.isPrevCalculate)&&(o.formula="")}else o.input=e.input+t;o.formula+=t,l(j(o))}else/[-+\/*]/.test(t)?(o.addDecimal=!1,(/[+*-\/]$/.test(e.formula)&&"-"!==t||/[-]$/.test(e.formula)&&"-"===t)&&(o.formula=e.formula.replace(/[+-\/*]+$/,"")),e.isPrevCalculate&&(o.formula=e.input),o.input=e.input,o.formula+=t,l(j(o))):"AC"===t?l({type:C}):"."===t&&(e.addDecimal?l(j(e)):(o.addDecimal=!0,e.isPrevCalculate&&(o.input="0",o.formula="0"),o.input+=".",o.formula+=".",l(j(o))))},solve:function(){var t=function(e){if(-1===e.indexOf("="))return new Function("return "+e)()}(e.formula);t.toString().length>18&&(t=Number.parseFloat(t).toExponential(12)),e.isPrevCalculate?l(j(e)):(o.formula=e.formula+"="+t,o.input=t,-1===t.toString().indexOf(".")&&(o.addDecimal=!1),o.isPrevCalculate=!0,l(j(o)))},handleKeyPress:function(e){var t=e.keyCode;t+=e.shiftKey?"shiftKey":"";var a=document.getElementsByClassName(t)[0];a&&a.click()}}})(b);l.a.render(i.a.createElement(P.a,{store:g},i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.c8a5f88a.chunk.js.map