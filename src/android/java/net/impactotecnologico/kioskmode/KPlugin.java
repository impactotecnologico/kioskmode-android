package net.impactotecnologico.kioskmode;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import org.json.JSONArray;
import org.json.JSONException;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;

public class KPlugin extends CordovaPlugin {

  private Activity activity;
  private Context context;

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
  }

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    this.context = cordova.getActivity().getApplicationContext();
    this.activity = cordova.getActivity();
    try {
      Intent intent = new Intent(context, KioskActivity.class);
      System.out.println("Entra en vista");
      this.cordova.getActivity().startActivity(intent);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return true;
  }
}
