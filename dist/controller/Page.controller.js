sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/core/mvc/Controller","../helpers/Horizon"],function(o,e){"use strict";return o.extend("stellar.trezor-workaround.controller.Page",{onInit:function(){console.log("Page")},loadAccount:function(o){console.log(this);var e=this.getView().byId("publicKey").getValue();console.log(e)}})});