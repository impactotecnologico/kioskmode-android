# kioskmode-android
Pseudo-Plugin cordova para modo kiosko en Android

## Instrucciones

- Clonar como repositorio normal, no como plugin
- Copiar manualmente la carpeta "net" al proyecto donde se va a usar en platforms\android\app\src\main\java. Es probable que ya exista una carpeta net así que se fusionarán ambas
- Mover manualmente los métodos de la clase MainActivity de kioskmode a la clase MainActivity del proyecto base. Hay que tener especial cuidado con el método oncreate; no debe reemplazarse el existente sino mover a este las operaciones existentes y loadUrl(launchUrl); debe ser la última línea del onCreate
- Eliminar manualmente la clase MainActivity de kioskmode una vez se haya movido todo el código. Esto hará aparecer fallos que se arreglarán en los siguientes pasos
- Editar la clase BootReceiver en la línea 11 añadiendo el cannonicalName de la clase MainActivity: [mi_package_id].MainActivity Como ejemplo: io.ionic.starter.MainActivity.class
- Aplicar el mismo reemplazo anterior en KioskService linea 77 
- Llevar al AndroidManifest.xml los siguientes elementos:
 - Permisos del apartado de abajo
 - Receiver como último elemento dentro del tag application:
 ```
  <receiver android:name="net.impactotecnologico.kioskmode.BootReceiver">
      <intent-filter>
          <action android:name="android.intent.action.BOOT_COMPLETED" />
      </intent-filter>
  </receiver>
 ```
 - Editar la definición de la actividad MainActivity añadiendo dentro del intent-filter lo siguiente. Si tiene alguno puede reemplazarse
 ```
  <action android:name="android.intent.action.MAIN" />
  <category android:name="android.intent.category.LAUNCHER" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.HOME" />
 ```
 - En el mismo tag de MainActivity asegurarse que el atributo configChanges tenga los siguientes valores: `android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|uiMode" `
 - Editar el tag Application añadiendo un atributo y valor: `android:name="net.impactotecnologico.kioskmode.AppContext"`
 
### Permisos Android
```
    <uses-sdk android:minSdkVersion="16" android:targetSdkVersion="26" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.DISABLE_KEYGUARD" />
    <uses-permission-sdk-23 android:name="android.permission.WAKE_LOCK" />
    <uses-permission-sdk-23 android:name="android.permission.DISABLE_KEYGUARD" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission-sdk-23 android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission android:name="android.permission.REORDER_TASKS" />
    <uses-permission-sdk-23 android:name="android.permission.REORDER_TASKS" />
    <uses-permission android:name="android.permission.GET_TASKS" />
    <uses-permission-sdk-23 android:name="android.permission.GET_TASKS" />
    <uses-permission-sdk-23 android:name="android.permission.INTERNAL_SYSTEM_WINDOW" /> 
```