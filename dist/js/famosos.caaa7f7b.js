(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["famosos"],{"0b42":function(e,n,a){var o=a("da84"),t=a("e8b5"),i=a("68ee"),r=a("861d"),s=a("b622"),l=s("species"),u=o.Array;e.exports=function(e){var n;return t(e)&&(n=e.constructor,i(n)&&(n===u||t(n.prototype))?n=void 0:r(n)&&(n=n[l],null===n&&(n=void 0))),void 0===n?u:n}},"137b":function(e,n,a){e.exports=a.p+"img/Bad Bunny.44e29a97.jpg"},"2a9f":function(e,n,a){e.exports=a.p+"img/Zac Efron.d874574a.jpg"},"2c14":function(e,n,a){e.exports=a.p+"img/Miley Cyrus.9a8ab9e6.jpg"},"386c":function(e,n,a){"use strict";a("ce9c")},"582a":function(e,n,a){e.exports=a.p+"img/Zendaya.15bb4616.jpg"},"65f0":function(e,n,a){var o=a("0b42");e.exports=function(e,n){return new(o(e))(0===n?0:n)}},"7da7":function(e,n,a){e.exports=a.p+"img/Will Smith.725f84cb.jpg"},"7db0":function(e,n,a){"use strict";var o=a("23e7"),t=a("b727").find,i=a("44d2"),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),o({target:"Array",proto:!0,forced:s},{find:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}}),i(r)},"9c42":function(e,n,a){e.exports=a.p+"img/Johnny Depp.abc5b571.jpg"},"9e30":function(e,n){function a(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id="9e30"},b727:function(e,n,a){var o=a("0366"),t=a("e330"),i=a("44ad"),r=a("7b0b"),s=a("07fa"),l=a("65f0"),u=t([].push),c=function(e){var n=1==e,a=2==e,t=3==e,c=4==e,d=6==e,m=7==e,p=5==e||d;return function(f,v,h,b){for(var g,y,x=r(f),k=i(x),_=o(v,h),C=s(k),j=0,w=b||l,E=n?w(f,C):a||m?w(f,0):void 0;C>j;j++)if((p||j in k)&&(g=k[j],y=_(g,j,x),e))if(n)E[j]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return j;case 2:u(E,g)}else switch(e){case 4:return!1;case 7:u(E,g)}return d?-1:t||c?c:E}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},b8d1:function(e,n,a){e.exports=a.p+"img/Lola Índigo.11536926.jpg"},bf74:function(e,n,a){var o={"./Bad Bunny.jpg":"137b","./Johnny Depp.jpg":"9c42","./Lola Índigo.jpg":"b8d1","./Miley Cyrus.jpg":"2c14","./Rosalía.jpg":"d667","./Will Smith.jpg":"7da7","./Zac Efron.jpg":"2a9f","./Zendaya.jpg":"582a"};function t(e){var n=i(e);return a(n)}function i(e){if(!a.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}t.keys=function(){return Object.keys(o)},t.resolve=i,e.exports=t,t.id="bf74"},ce9c:function(e,n,a){},d667:function(e,n,a){e.exports=a.p+"img/Rosalía.0d3bb792.jpg"},e8b5:function(e,n,a){var o=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},eb8d:function(e,n,a){"use strict";a.r(n);var o=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"fondo"},[1==this.terminado?o("div",{staticClass:"imagen"},[o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{alt:"animales",src:a("f445")}})]):e._e(),e.empezado?e._e():o("div",{staticClass:"animales"},[o("h1",[e._v("Descubre qué famoso te representa")]),o("h2",[e._v("Las respuestas van en escala del 1 al 7 donde 1 es nada/nunca y 7 es siempre/mucho")]),o("button",{staticClass:"button-74",attrs:{role:"button"},on:{click:function(n){e.empezado=!0,e.preguntas[0].seleccionada=!0}}},[e._v("Comenzar el test")])]),o("div",[e._l(e.preguntas,(function(n,a){return o("div",{key:a},[0!=n.seleccionada?o("div",[o("h3",[e._v("1 - nada / nunca | 7 - Mucho / siempre")]),o("div",{staticStyle:{"max-width":"900px",margin:"0 auto"}},[o("h1",[e._v(e._s(n.texto))])]),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"0"},on:{click:function(n){e.isCheck=!0}}}),e._v("1 "),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"1"},on:{click:function(n){e.isCheck=!0}}}),e._v("2 "),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"2"},on:{click:function(n){e.isCheck=!0}}}),e._v("3 "),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"3"},on:{click:function(n){e.isCheck=!0}}}),e._v("4 "),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"4"},on:{click:function(n){e.isCheck=!0}}}),e._v("5 "),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"5"},on:{click:function(n){e.isCheck=!0}}}),e._v("6 "),o("input",{attrs:{id:n.numero,type:"radio",name:n.numero,"v-model":n.model,value:"6"},on:{click:function(n){e.isCheck=!0}}}),e._v("7 "),o("br"),o("hr"),e.final?o("div",{staticClass:"final"},[o("button",{staticClass:"button-74",attrs:{role:"button"},on:{click:function(n){return e.terminarTest()}}},[e._v("Terminar test")])]):o("div",{staticClass:"next"},[o("button",{staticClass:"button-74",attrs:{role:"button",disabled:!e.isCheck},on:{click:function(a){return e.siguientePregunta(n,n.animal)}}},[e._v("Siguiente pregunta")])])]):e._e()])})),e.resultados?o("div",{staticClass:"resultado"},[o("h1",[e._v("Resultados del test")]),o("h2",[e._v("El/la famoso/a que te representa es ...")]),o("h1",[e._v(e._s(e.animal.nombre.toUpperCase()))]),o("img",{staticClass:"img",attrs:{src:a("bf74")("./"+e.animal.nombre+".jpg")}}),o("div",{staticStyle:{"max-width":"900px",margin:"0 auto"}},[o("h3",[e._v(e._s(e.animal.descripcion)+".")])]),o("button",{staticClass:"button-74",attrs:{role:"button"}},[o("router-link",{attrs:{to:"/"}},[e._v("Volver al inicio")])],1)]):e._e()],2)])},t=[],i=(a("7db0"),a("d3b7"),{data:function(){return{wp:"@/assets/famosos/wallp.jpg",empezado:!1,terminado:!0,primera:null,segunda:null,tercera:null,cuarta:null,final:!1,resultados:!1,animal:null,isCheck:!1,animales:[{nombre:"Zac Efron",puntos:0,foto:a("2a9f"),descripcion:" "},{nombre:"Lola Índigo",puntos:0,foto:a("b8d1"),descripcion:" "},{nombre:"Miley Cyrus",puntos:0,foto:a("2c14"),descripcion:""},{nombre:"Will Smith",puntos:0,foto:a("7da7"),descripcion:" "},{nombre:"Johnny Depp",puntos:0,foto:a("9c42"),descripcion:" "},{nombre:"Rosalía",puntos:0,foto:a("d667"),descripcion:" "},{nombre:"Zendaya",puntos:0,foto:a("582a"),descripcion:""},{nombre:"Bad Bunny",puntos:0,foto:a("137b"),descripcion:" "}],preguntas:[{numero:1,texto:"¿Te gusta más comer en restaurantes que pedir comida a domicilio?",model:null,seleccionada:!1,animal:"Rosalía",puntos:0},{numero:2,texto:"¿Te resulta fácil permanecer relajado y concentrado incluso cuando hay algo de presión?",model:null,seleccionada:!1,animal:"Will Smith",puntos:0},{numero:3,texto:"¿Te sientes superior a otras personas?",model:null,seleccionada:!1,animal:"Bad Bunny",puntos:0},{numero:4,texto:"¿Te importa o te incomoda ser el centro de atención?",model:null,seleccionada:!1,animal:"Miley Cyrus"},{numero:5,texto:"¿Te consideras una persona más práctica que creativa?",model:null,seleccionada:!1,animal:"Lola Índigo"},{numero:6,texto:"¿Tu estado de ánimo o humor puede cambiar muy rápidamente?",model:null,seleccionada:!1,animal:"Johnny Depp"},{numero:7,texto:"¿Es muy raro que te dejes llevar por fantasías o ideas?",model:null,seleccionada:!1,animal:"Zendaya"},{numero:8,texto:"Si alguien no responde con rapidez a un mensaje, ¿comienzas a preocuparte porque piensas que has podido decir algo incorrecto?",model:null,seleccionada:!1,animal:"Zac Efron"},{numero:9,texto:"¿Tus emociones te controlan más de lo que tú las controlas a ellas?",model:null,seleccionada:!1,animal:"Zendaya"},{numero:10,texto:"¿Prefieres improvisar a tener que dedicar tiempo a desarrollar un plan detallado?",model:null,seleccionada:!1,animal:"Bad Bunny"},{numero:11,texto:"¿Te consideras una persona con buen sentido del humor?",model:null,seleccionada:!1,animal:"Lola Índigo"},{numero:12,texto:"¿Te gusta viajar?",model:null,seleccionada:!1,animal:"Miley Cyrus"},{numero:13,texto:"¿Te consideras una persona activa?",model:null,seleccionada:!1,animal:"Will Smith"},{numero:14,texto:"¿Eres una persona muy familiar/ te gusta pasar tiempo con la familia?",model:null,seleccionada:!1,animal:"Rosalía"},{numero:15,texto:"¿Te consideras una persona con la mente abierta?",model:null,seleccionada:!1,animal:"Johnny Depp"},{numero:16,texto:"¿Hasta qué punto crees que el dinero da la felicidad?",model:null,seleccionada:!1,animal:"Zac Efron"}]}},methods:{siguientePregunta:function(e,n){for(var a=document.getElementsByName(e.numero),o=0;o<a.length;o++)if("radio"==a[o].type&&a[o].checked){console.log(a[o],a[o].value);var t=this.animales.find((function(e){return"Bad Bunny"==e.nombre})),i=this.animales.find((function(e){return"Johnny Depp"==e.nombre})),r=this.animales.find((function(e){return"Lola Índigo"==e.nombre})),s=this.animales.find((function(e){return"Miley Cyrus"==e.nombre})),l=this.animales.find((function(e){return"Rosalía"==e.nombre})),u=this.animales.find((function(e){return"Will Smith"==e.nombre})),c=this.animales.find((function(e){return"Zac Efron"==e.nombre})),d=this.animales.find((function(e){return"Zendaya"==e.nombre}));switch(n){case"Bad Bunny":t.puntos+=parseInt(a[o].value);break;case"Johnny Depp":i.puntos+=parseInt(a[o].value);break;case"Lola Índigo":r.puntos+=parseInt(a[o].value);break;case"Miley Cyrus":s.puntos+=parseInt(a[o].value);break;case"Will Smith":u.puntos+=parseInt(a[o].value);break;case"Zendaya":d.puntos+=parseInt(a[o].value);break;case"Zac Efron":c.puntos+=parseInt(a[o].value);break;case"Rosalía":l.puntos+=parseInt(a[o].value);break}}var m=this.animales.reduce((function(e,n){return e.y>n.y?e:n}));console.log(m),e.numero<=this.preguntas.length-1?(e.seleccionada=!1,this.preguntas[e.numero].seleccionada=!0):this.final=!0,this.isCheck=!1},getImage:function(e){var n="@/assets/".concat(e,".jpg");return console.log(n),a("9e30")(n)},terminarTest:function(){this.resultados=!0,this.terminado=!this.terminado,this.preguntas[this.preguntas.length-1].seleccionada=!1,console.log(this.animales);var e=this.animales.reduce((function(e,n){return e.puntos>n.puntos?e:n}));console.log(e),this.animal=e}}}),r=i,s=(a("386c"),a("2877")),l=Object(s["a"])(r,o,t,!1,null,"2578f7e2",null);n["default"]=l.exports},f445:function(e,n,a){e.exports=a.p+"img/famosos_test.1fe804d1.jpg"}}]);
//# sourceMappingURL=famosos.caaa7f7b.js.map