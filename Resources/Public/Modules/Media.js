import{a as r}from"./chunk-LOKNYTE4.js";var c="prettyembed",m="/_Resources/Static/Packages/Jonnitto.PrettyEmbedHelper/Scripts/Hls.js?v=2";function p(t){t.directive("prettyembedmedia",(i,{value:s,modifiers:a,expression:l},{evaluate:o})=>{if(s==="media"){y({element:i,Alpine:t,expression:l});return}let d=a.includes("streaming"),e=a.includes("lightbox")?"lightbox":"inline",n={streaming:d,style:e,...o(l||"{}")};f({element:i,Alpine:t,options:n})})}function f({element:t,Alpine:i,options:s}){let{style:a,streaming:l}=s,o={type:null,playing:!1,url:null,id:null,autoplay:!1,loaded:!1,lightbox:a==="lightbox"?!1:null,__media:null},d=l?!_():null;i.bind(t,{"x-data"(){return{...o,play(){if(this.lightbox!==null&&(this.lightbox=!0),!this.loaded&&d){if(this.lightbox){setTimeout(()=>{u(this.__media,this.url)},500);return}u(this.__media,this.url);return}if(this.lightbox){setTimeout(()=>{this.__media?.play()},500);return}this.__media?.play()},pause(e=!1){e&&(this.autoplay||this.__media?.muted)||this.__media?.pause()},reset(){this.autoplay||(this.pause(),this.loaded=!1,this.__media?.currentTime&&(this.__media.currentTime=0))},toogle(){if(this.__media.paused){this.play();return}this.pause()},dispatchEvent(e){let n=this.__media.currentTime;n===this.__media.duration&&(e="finished"),this.$dispatch(c,{detail:{event:e,currentTime:n,type:this.type,style:a,autoplay:this.autoplay,url:this.url,id:this.id}})},init(){a==="lightbox"&&this.$watch("lightbox",(e,n)=>{!e&&e!==n&&this.pause()})}}},"@prettyEmbedReset.window"(){this.reset()},"@prettyEmbedPause.window"({detail:e}){e!=this.$root&&this.pause(!0)}})}function y({element:t,Alpine:i,src:s}){let l=t.tagName.toLowerCase()==="video"?"Video":"Audio";i.bind(t,{"x-init"(){this.__media=t,this.url=s||t.currentSrc,this.id=this.url.split("/").pop(),this.autoplay=t.autoplay,this.type=l},"@play"(){this.loaded||(this.loaded=!0),this.playing=!0,!this.autoplay&&!this.muted&&(this.$dispatch("prettyEmbedPause",this.$root),this.dispatchEvent("play"))},"@pause"(){this.playing=!1,this.autoplay=!1,this.muted||this.dispatchEvent("pause")}})}function _(){return!!document.createElement("video").canPlayType("application/vnd.apple.mpegurl")}function u(t,i){if(typeof Hls<"u"){h(t,i);return}r(m,()=>{setTimeout(()=>h(t,i),10)})}function h(t,i){if(!Hls.isSupported())return;let s=new Hls;s.loadSource(i),s.attachMedia(t),s.on(Hls.Events.MEDIA_ATTACHED,()=>t.play())}window.addEventListener("alpine:init",()=>{window.Alpine.plugin(p)});
