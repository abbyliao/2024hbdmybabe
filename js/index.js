"use strict";var vm=Vue.createApp({data:function(){return{}},setup:function(){console.log("create");axios.get("https://script.google.com/macros/s/AKfycbxJ54iVY4WrkK_Hw-fH_KQQ2bLOchgTa8lDWZPvljzK0Pp3fEShaLZ8WCZk8HsxKhoo/exec",{params:{time:(new Date).toLocaleString("zh-TW")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}});vm.mount("#wrapper"),$((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"));var o=!1;setTimeout((function(){$(".loading").fadeOut(1e3)}),3500),$(".envelope").click((function(){$(this).hasClass("open")&&!o?(o=!0,$(this).removeClass("open").addClass("close"),setTimeout((function(){o=!1}),3500)):$(this).hasClass("open")||o||(o=!0,$(this).removeClass("close").addClass("open"),setTimeout((function(){o=!1}),3e3))}))})),$(window).on("load",(function(){}));