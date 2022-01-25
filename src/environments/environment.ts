// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
    firebase : {
      apiKey: "AIzaSyDOiFoh9QqMFlpbfESII7RTuJSc8eraDvw",
      authDomain: "sistema-gym-6cff6.firebaseapp.com",
      projectId: "sistema-gym-6cff6",
      storageBucket: "sistema-gym-6cff6.appspot.com",
      messagingSenderId: "512106238694",
      appId: "1:512106238694:web:9de6247965196df6b46127"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
