(this.webpackJsonpnycfridge=this.webpackJsonpnycfridge||[]).push([[0],{210:function(e,t,a){e.exports={Loader:"Spinner_Loader__3K0zH",load1:"Spinner_load1__2AjVX"}},211:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3_tKW"}},236:function(e,t,a){e.exports=a(485)},241:function(e,t,a){},244:function(e,t,a){},45:function(e,t,a){e.exports={Modal:"Modal_Modal__1V7RD",Info:"Modal_Info__1G5I_",popupBubble:"Modal_popupBubble__2oNqw",popupBubbleAnchor:"Modal_popupBubbleAnchor__2LwUK",popupContainer:"Modal_popupContainer__38r-4"}},458:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABzlBMVEUAAABEREBEREBEREBEREBPT0sYGBYRERARERARERARERARERARERAZGRdOTklEREBEREBEREBEREB0dG0ICAgCAgICAgICAgICAgICAgICAgIICAh0dG1EREBEREBEREADAwMDAwMODg0LCwoLCwoLCwoLCwoNDQwDAwMDAwNEREBEREBEREADAwMDAwIGBgaPj4dbW1ZbW1ZbW1YDAwMDAwMDAwMCAgICAgLDw7gDAwMDAwMDAwMCAgIDAwKrq6EDAwMDAwMDAwMCAgIKCgn///8CAgIDAwMDAwMCAgIEBAQEBAQEBAQEBAQEBAQCAgIDAwMDAwMCAgICAgIDAwIDAwIDAwICAgIDAwMDAwMCAgECAgL///8CAgIDAwMCAgLDw7gDAwMCAgICAgLDw7gDAwMCAgICAgLDw7gDAwMCAgIDAwOnp50DAwMDAwMDAwMQEA9MTEcDAwMEBANEREADAwMDAwMDAwNbW1YDAwMDAwMDAwMNDQwLCwoDAwMDAwN0dG0ICAgCAgICAgICAgICAgICAgICAgIICAh0dG1EREBEREBEREBNTUkZGRgRERARERARERARERARERARERAYGBdNTUlEREBEREAAAABmuXyAAAAAmXRSTlMAAwMDAwIHDQ0NDQ0NBwIDAwQEAiB/hYWFhYAgAgQDBFxiEhgYGBgUY1wEAwRfYS0CAwMDS2BdgW4BTGBdfWUCTGBgUw8ASmBieD5CQkI/eWJimnFpaWeVYl52WQBKYG4BYIFuAV2BbgFdfWQCYGBVEQNgTARMYEsDS1xjFBhjXAIggIWFhYWAIAIEAwMCBw0NDQ0NDQcCAwPEsv45AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QHFQ4MFCgXPvIAAAEoSURBVBjTY2BkYmZmYWVj5+Dk4ubh5eNnZmYSYGASFBISFhEVE5cQF5eUkpYREpKVY2AWkpdnUFBUUlZRVVPX0GSQl9fSBgnqMOjq6RsYGhkzmJjCBHV0GMzMLSzlgTqsrBl04II2tnb2OkDawZFBRweiXZ7BydmFwdXVlcHNHclMD08vbx8fXz//AAZ5uMrAoOCQ0NDQsPAImJlAwcioaIaYmBiG2DgU2+MTQBZZJcIsAgkmJafoQJ0EFZRnSE1LzwAJgpwENzMzKztHHugKh1wkM/PyCwoxzCwqZigBCZYi+6isnMHYsMKYobIMbqYOQ1V1jZpKrVpNXT3ETCZZLa2GxqbmltbWlrb2jk4tra5uBgE5be2e3r7+CRMnTZ4yddp0be3uGQDIxEsxpsxhkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNy0yMVQxNDoxMjoyMC0wNDowML8lG8UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDctMjFUMTQ6MTI6MjAtMDQ6MDDOeKN5AAAAAElFTkSuQmCC"},480:function(e,t,a){},483:function(e,t,a){},485:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),l=(a(241),a(31)),c=a(32),d=a(34),s=a(33),u=a(515),A=a(205),m=(a(244),a(519)),g=a(227),p=a(522),E=a(489),f=a(54),h=a(85),b=(a(486),a(247),a(87)),C=a.n(b),D=a(209),w=a.n(D).a.create({baseURL:"https://nycfridge-1595334632389.firebaseio.com/"}),M=(a(458),a(210)),v=a.n(M),B=function(){return o.a.createElement("div",{className:v.a.Loader},"Loading...")},R=a(45),I=a.n(R),O=a(211),j=a.n(O),F=function(e){return e.display?o.a.createElement("div",{className:j.a.Backdrop,onClick:e.clicked}):null},k=(n.Component,a(91)),y=a(510),S=a(514),N=a(518),_=a(517),G=a(521),x=function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),r=a[0],i=a[1];return o.a.createElement(g.a,{overflow:"auto",pad:"medium",gap:"medium",margin:"medium"},o.a.createElement(y.a,{onSubmit:function(t){return function(t){e.onSubmit(t),e.onClose()}(t.value)}},o.a.createElement(S.a,{name:"name",htmlfor:"textinput-id",label:"Fridge Name"},o.a.createElement(N.a,{id:"textinput-id",name:"name",placeholder:"Community Fridge"})),o.a.createElement(S.a,{name:"streetAddress",htmlfor:"textinput-id",label:"Location"},o.a.createElement(N.a,{id:"textinput-id",name:"streetAddress",placeholder:"Street Address"})),o.a.createElement(S.a,{name:"borough",htmlfor:"textinput-id",label:"Borough"},o.a.createElement(_.a,{name:"borough",options:["Brooklyn","Manhattan","Queens","Bronx","Staten Island"],value:r,onChange:function(e){var t=e.option;return i(t)}})),o.a.createElement(S.a,{name:"neighborhood",htmlfor:"textinput-id",label:"Neighborhood"},o.a.createElement(N.a,{id:"textinput-id",name:"neighborhood",placeholder:"Bushwick"})),o.a.createElement(S.a,{name:"link",htmlfor:"textinput-id",label:"Link/Contact"},o.a.createElement(N.a,{id:"textinput-id",name:"link",placeholder:"Website/Social Media"})),o.a.createElement(S.a,{name:"notes",htmlfor:"textinput-id",label:"Notes"},o.a.createElement(G.a,{id:"textinput-id",name:"notes",placeholder:"type anything else people should know about this fridge!"})),o.a.createElement(g.a,{direction:"row",gap:"medium",pad:{top:"large"}},o.a.createElement(E.a,{label:"close",onClick:e.onClose}),o.a.createElement(E.a,{type:"submit",primary:!0,label:"Submit"}),o.a.createElement(E.a,{type:"reset",label:"Reset"}))))},L=a(6),Q=function(e){return{type:"FETCH_FRIDGE_FAIL"}},T=function(e){return{type:"CONFIRM_FRIDGE",id:e}},Y=a(90),U=a(225),H=a.n(U),V=(a(516),a(513),a(121)),z=a.n(V),W=(a(480),function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:I.a.Info},o.a.createElement("div",{className:I.a.popupContainer},o.a.createElement("div",{className:I.a.popuBubbleAnchor},o.a.createElement("div",{className:I.a.popupBubble},this.props.fridgeData.name,o.a.createElement("br",null),this.props.fridgeData.streetAddress," ",o.a.createElement("br",null),this.props.fridgeData.contactGroup))))}}]),a}(n.Component)),Z=function(e){return o.a.createElement("div",{className:"pin",onMouseEnter:function(){return e.toggleHover(e.fridgeData.id)},onMouseLeave:function(){return e.toggleHover(e.fridgeData.id)},onClick:function(){return e.onModalOpen(e.fridgeData.id)}},e.hover===e.fridgeData.id?o.a.createElement(W,{fridgeData:e.fridgeData}):null,o.a.createElement(z.a,{className:"pin-icon"}),o.a.createElement("p",{className:"pin-text"},e.fridgeData.name))},K=(a(483),function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={modal:null,checking:!1},e.onModalOpen=function(t){e.props.getFridge(t),e.setState({modal:t})},e.modalClosedHandler=function(){e.setState({modal:null})},e.confirmCheck=function(t,a){e.props.onFridgeChecked(a),e.setState({checking:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.currentFridge,a=null;if(t){var n,r,i;if(t.confirmed){if(n=o.a.createElement("h4",null,"Status: Confirmed"),r=o.a.createElement(g.a,{pad:{bottom:"large"}},o.a.createElement(E.a,{primary:!0,active:!0,onClick:function(){return e.setState({checking:!0})},label:"Check Fridge"})),t.lastChecked){var l=JSON.parse(t.lastChecked);l=new Date(l),console.log("date",l);var c=l.toLocaleString();i=o.a.createElement("h3",null,"Last checked: ",c)}this.state.checking&&(r=o.a.createElement(y.a,{onSubmit:function(a){return e.confirmCheck(a.value,t)}},o.a.createElement(g.a,{gap:"small"},o.a.createElement(N.a,{size:"small",id:"textinput-id",name:"name",placeholder:"Your Name (optional)"}),o.a.createElement(g.a,{direction:"row",gap:"xsmall"},o.a.createElement(E.a,{size:"small",active:!0,label:"Cancel",onClick:function(){return e.setState({checking:!1})}}),o.a.createElement(E.a,{size:"small",type:"submit",primary:!0,label:"Submit Check"})))))}else n=o.a.createElement(g.a,null,o.a.createElement("h4",null,"Status: Unconfirmed"),o.a.createElement(E.a,{primary:!0,active:!0,onClick:function(){return e.props.onFridgeConfirmed(t)},label:"Confirm Fridge"}));a=o.a.createElement(g.a,Object(Y.a)({align:"center",pad:"medium",overflow:"visible"},"pad","medium"),o.a.createElement("h2",null,t.name),o.a.createElement("h2",null,"Neighborhood: ",t.neighborhood),o.a.createElement("h3",null,"Location: ",t.streetAddress),o.a.createElement("h3",null,"Notes: ",t.notes),o.a.createElement(E.a,{href:t.link,label:"Social Media"}),o.a.createElement(g.a,{align:"center"},n,i,r))}return o.a.createElement("div",{className:"map"},o.a.createElement("div",{className:"google-map"},this.state.modal&&o.a.createElement(m.a,{modal:!0,animation:"fadeIn",onEsc:this.modalClosedHandler,onClickOutside:this.modalClosedHandler}," ",a),o.a.createElement(H.a,{bootstrapURLKeys:{key:"AIzaSyCOvDGXIuekFUUzSPh5l1940wCB657NudI"},defaultCenter:this.props.location,defaultZoom:this.props.zoomLevel},this.props.fridges.map((function(t){return o.a.createElement(Z,{lat:t.lat,lng:t.lng,fridgeData:t,toggleHover:e.props.toggleHover,hover:e.props.hover,onModalOpen:e.onModalOpen})})))))}}]),a}(n.Component)),J=Object(f.b)((function(e){return{currentFridge:e.currentFridge}}),(function(e){return{getFridge:function(t){return e(function(e){return function(t){var a="/fridges/".concat(e,".json");w.get(a).then((function(a){var n=Object(L.a)(Object(L.a)({},a.data),{},{id:e});console.log(n),t({type:"GET_FRIDGE",data:n})})).catch((function(e){console.log(e)}))}}(t))},onFridgeConfirmed:function(t){return e(function(e){var t=Object(L.a)(Object(L.a)({},e),{},{confirmed:!0});return function(a){var n="/fridges/".concat(e.id,".json");w.put(n,t).then((function(t){console.log(t.data),a(T(e.id))}))}}(t))},onFridgeChecked:function(t){return e(function(e){var t=Object(L.a)(Object(L.a)({},e),{},{lastChecked:JSON.stringify(new Date)});return function(a){var n="/fridges/".concat(e.id,".json");w.put(n,t).then((function(e){console.log(e.data),a(function(e){return{type:"CHECK_FRIDGE",data:e}}(t))}))}}(t))}}}))(K),X=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onModalOpen=function(){n.setState({modal:!0})},n.modalClosedHandler=function(){n.setState({modal:!1})},n.toggleHover=function(e){var t=n.state.hover===e?null:e;n.setState({hover:t})},n.fridgeAdded=function(e){n.props.onFridgeAdded(e)},n.addFridge=function(){n.onModalOpen()},n.state={location:{address:"252 Broadway Brooklyn NY 11211",lat:40.7,lng:-73.9},hover:null,modal:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.onFridgesLoad()}},{key:"render",value:function(){var e,t=o.a.createElement(B,null);return this.props.fridges&&!this.props.loading&&(e=o.a.createElement(J,{location:this.state.location,zoomLevel:12,fridgeLocation:this.state.fridgeLocation,toggleHover:this.toggleHover,hover:this.state.hover,fridges:this.props.fridges}),t=o.a.createElement(m.a,{full:"vertical",modal:!0,animation:"fadeIn",onEsc:this.modalClosedHandler,onClickOutside:this.modalClosedHandler},o.a.createElement(x,{onClose:this.modalClosedHandler,onSubmit:this.fridgeAdded}))),o.a.createElement("div",{style:{height:"90vh",width:"80%",margin:"auto"}},o.a.createElement(g.a,{align:"center",pad:"medium"},o.a.createElement(p.a,{level:"2"},"NYC Community Fridges"),o.a.createElement(E.a,{primary:!0,label:"Add Fridge",active:!0,onClick:this.addFridge})),this.state.modal&&t,e)}}]),a}(n.Component),P=Object(f.b)((function(e){return{fridges:e.fridges,loading:e.loading}}),(function(e){return{onFridgesLoad:function(){return e((function(e){e({type:"FETCH_FRIDGE_START"}),w.get("/fridges.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(L.a)(Object(L.a)({},t.data[n]),{},{id:n}));console.log(a),e({type:"LOAD_FRIDGES",data:a})})).catch((function(e){}))}))},onFridgeAdded:function(t){return e((a=t,function(e){e({type:"ADD_FRIDGE_START"});var t=a;C.a.setApiKey("AIzaSyCOvDGXIuekFUUzSPh5l1940wCB657NudI");var n=a.streetAddress.concat(" ",a.borough," NY");console.log(n),C.a.fromAddress(n).then((function(n){var o=n.results[0].geometry.location,r=o.lat,i=o.lng;console.log(r,i),t=Object(L.a)(Object(L.a)({},a),{},{lat:r,lng:i}),console.log("with coords",t),w.post("/fridges.json",t).then((function(a){var n;e((n=a.data.name,{type:"ADD_FRIDGE",data:t,id:n}))})).catch((function(t){e(Q(t))}))})).catch((function(e){}))}));var a}}}))(X),q=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(A.a,null,o.a.createElement("title",null,"Map of NYC Community Fridges"),o.a.createElement("meta",{name:"description",content:"Map of free community fridges and food shares across New York City"})),o.a.createElement(u.a,{theme:{global:{colors:{"light-2":"#f5f5f5",text:{light:"rgba(0, 0, 0, 0.87)"}},edgeSize:{small:"14px"},elevation:{light:{medium:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}},font:{family:"Roboto",size:"14px",height:"20px"}}}},o.a.createElement(P,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(55),ee={fridges:[],loading:!1,submitted:!1,currentFridge:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FRIDGE_START":return Object(L.a)(Object(L.a)({},e),{},{loading:!0});case"LOAD_FRIDGES":return Object(L.a)(Object(L.a)({},e),{},{fridges:t.data,loading:!1});case"GET_FRIDGE":return Object(L.a)(Object(L.a)({},e),{},{currentFridge:t.data,loading:!1});case"ADD_FRIDGE_START":return Object(L.a)(Object(L.a)({},e),{},{loading:!0,submitted:!1});case"ADD_FRIDGE":var a=Object(L.a)(Object(L.a)({},t.data),{},{id:t.id,confirmed:!1});return Object(L.a)(Object(L.a)({},e),{},{fridges:e.fridges.concat(a),loading:!1,submitted:!0});case"CHECK_FRIDGE":return Object(L.a)(Object(L.a)({},e),{},{currentFridge:t.data});case"CONFIRM_FRIDGE":var n=e.fridges,o=n.map((function(e){return e.id===t.id&&(e.confirmed=!0),e}));return Object(L.a)(Object(L.a)({},e),{},{fridges:o,currentFridge:Object(L.a)(Object(L.a)({},e.currentFridge),{},{confirmed:!0})});default:return e}},ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.c,ne=Object($.d)(te,ae(Object($.a)(h.a))),oe=o.a.createElement(f.a,{store:ne},o.a.createElement(q,null));i.a.render(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[236,1,2]]]);
//# sourceMappingURL=main.5824dcac.chunk.js.map