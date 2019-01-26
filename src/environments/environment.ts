// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBXd9hG-FGK9EOQHJsFBvUTeoNmEiVzJww",
    authDomain: "nikhilrustagi-181092.firebaseapp.com",
    databaseURL: "https://nikhilrustagi-181092.firebaseio.com",
    projectId: "nikhilrustagi-181092",
    storageBucket: "nikhilrustagi-181092.appspot.com",
    messagingSenderId: "441495767932"
  },
  img:{
    infiniteScrolling: 'https://nikhilrstg18.github.io/mat-data-grid/assets/img/infinitescroll.PNG',
    sorting:{
      s1: 'https://nikhilrstg18.github.io/mat-data-grid/assets/img/s1.png',
      s2: 'https://nikhilrstg18.github.io/mat-data-grid/assets/img/s2.png',
      s3: 'https://nikhilrstg18.github.io/mat-data-grid/assets/img/s3.png',
      s4: 'https://nikhilrstg18.github.io/mat-data-grid/assets/img/s4.png',
      s5: 'https://nikhilrstg18.github.io/mat-data-grid/assets/img/s5.png',
    },
    filtering:{
      f1:'https://nikhilrstg18.github.io/mat-data-grid/assets/img/f1.png',
      f2:'https://nikhilrstg18.github.io/mat-data-grid/assets/img/f2.png',
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
