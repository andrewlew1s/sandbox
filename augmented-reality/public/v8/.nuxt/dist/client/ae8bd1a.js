(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{251:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("4d0048c3",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n(251)},253:function(t,e,n){var r=n(131)(!1);r.push([t.i,"a-scene{position:fixed;top:0;left:0;right:0;bottom:0}",""]),t.exports=r},254:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("28f1127f",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";n.r(e);n(104);var r={schema:{min:{default:6},max:{default:10}},init:function(){var t=this;console.log("init");var e=document.getElementById("ground");e.background="green",console.log("ground: ",e),e.addEventListener("click",(function(e){console.log("click");var n=document.createElement("a-entity"),r=e.detail.intersection.point;n.setAttribute("position",r);var o=360*Math.random();n.setAttribute("rotation","0 ".concat(o," 0"));var l=Math.floor(Math.random()*(Math.floor(t.data.max)-Math.ceil(t.data.min))+Math.ceil(t.data.min));n.setAttribute("visible","false"),n.setAttribute("scale","0.0001 0.0001 0.0001"),n.setAttribute("shadow",{receive:!1}),n.setAttribute("gltf-model","#cactusModel"),t.el.sceneEl.appendChild(n),n.addEventListener("model-loaded",(function(){n.setAttribute("visible","true"),n.setAttribute("animation",{property:"scale",to:"".concat(l," ").concat(l," ").concat(l),easing:"easeOutElastic",dur:800})}))}))}},o={name:"TapToPlace",data:function(){return{isLoaded:!1}},head:function(){return{script:[{src:"//cdn.8thwall.com/web/aframe/8frame-1.1.0.min.js"},{src:"//cdn.8thwall.com/web/aframe/aframe-physics-system-4.0.1.min.js"},{src:"//cdn.8thwall.com/web/xrextras/xrextras.js"},{src:"//apps.8thwall.com/xrweb?appKey=zl9iYLs0UnM13G8kugSsXRboJtbC2OJOZWmGeV4dvmWAKMaq1kwdRIa4PTdy4WvWyR05BG"}]}},mounted:function(){this.on8thWallReady()},methods:{on8thWallReady:function(){AFRAME.registerComponent("tap-place",r)}}},l=(n(252),n(61)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("a-scene",{pre:!0,attrs:{"tap-place":"","landing-page":"","xrextras-loading":"","xrextras-runtime-error":"",renderer:"colorManagement:true","vr-mode-ui":"enabled: false",xrweb:"\nallowedDevices: any;\ndefaultEnvironmentFogIntensity: 0.5;\ndefaultEnvironmentFloorTexture: #groundTex;\ndefaultEnvironmentFloorColor: #FFF;\ndefaultEnvironmentSkyBottomColor: #B4C4CC;\ndefaultEnvironmentSkyTopColor: #5ac8fa;\ndefaultEnvironmentSkyGradientStrength: 0.5;"}},[n("a-assets",{pre:!0,attrs:{"v-pre":""}},[n("img",{pre:!0,attrs:{id:"groundTex",src:"/sand.jpg"}}),t._v(" "),n("a-asset-item",{pre:!0,attrs:{id:"cactusModel","v-pre":"",src:"/cactus.glb"}})],1),t._v(" "),n("a-camera",{pre:!0,attrs:{id:"camera","v-pre":"",position:"0 8 0",raycaster:"objects: .cantap",cursor:"\n  fuse: false;\n  rayOrigin: mouse;"}}),t._v(" "),n("a-entity",{pre:!0,attrs:{"v-pre":"",light:"\n  type: directional;\n  intensity: 0.8;\n  castShadow: true;\n  shadowMapHeight:2048;\n  shadowMapWidth:2048;\n  shadowCameraTop: 40;\n  shadowCameraBottom: -40;\n  shadowCameraRight: 40;\n  shadowCameraLeft: -40;\n  target: #camera","xrextras-attach":"target: camera; offset: 8 15 4",position:"1 4.3 2.5",shadow:""}}),t._v(" "),n("a-light",{pre:!0,attrs:{"v-pre":"",type:"ambient",intensity:"0.5"}}),t._v(" "),n("a-box",{pre:!0,attrs:{id:"ground","v-pre":"",class:"cantap",scale:"1000 2 1000",position:"0 -0.99 0",material:"shader: shadow; transparent: true; opacity: 0.4",shadow:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n(254)},257:function(t,e,n){var r=n(131)(!1);r.push([t.i,".overlay{top:0;left:0;bottom:0;right:0;z-index:10}.overlay,button{position:absolute}button{left:50%;top:90%;transform:translate(-50%,-50%);background-color:#7611b6;color:#fff;max-width:100%;font-size:1.5rem;border:none;border-radius:20px;padding:10px 15px;font-family:Helvetica,sans-serif}",""]),t.exports=r},258:function(t,e,n){"use strict";n.r(e);var r={name:"HomePage"},o=(n(256),n(61)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("TapToPlace")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TapToPlace:n(255).default})}}]);