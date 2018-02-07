cordova.define("net.impactotecnologico.kioskmode.KPlugin", function(require, exports, module) {
  var exec = require('cordova/exec');

  var KActivity = {
      
      exitKiosk: function () {
          exec(null, null, "KPlugin", "exitKiosk", []);
      },
      
      isInKiosk: function (callback) {
          if(/ios|iphone|ipod|ipad/i.test(navigator.userAgent)) {
              callback(false); // ios not supported - cannot be in kiosk
              return;
          }
          exec(function(out){
              callback(out == "true");
          }, function(error){
              alert("KPlugin.isInKiosk failed: " + error);
          }, "KPlugin", "isInKiosk", []);
      },
      
      isSetAsLauncher: function (callback) {
          if(/ios|iphone|ipod|ipad/i.test(navigator.userAgent)) {
              callback(false); // ios not supported - cannot be in kiosk
              return;
          }
          exec(function(out){
              callback(out == "true");
          }, function(error){
              alert("KPlugin.isSetAsLauncher failed: " + error);
          }, "KPlugin", "isSetAsLauncher", []);
      },
      
      setAllowedKeys: function (keyCodes) {
          exec(null, null, "KPlugin", "setAllowedKeys", keyCodes);
      }
      
  }

  module.exports = KActivity;

})