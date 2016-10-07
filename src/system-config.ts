// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'filepicker': 'vendor/filepicker-js',

  '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
  '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
  '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
  '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
  '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
  '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
  '@angular/router': 'vendor/@angular/router/bundles/router.umd.js'
};

/** User packages configuration. */
const packages: any = {
  filepicker: { defaultExtension: 'js', main: 'index.js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/navigation',
  'app/signup',
  'app/auth',
  'app/signin',
  'app/logout',
  'app/dropdown',
  'app/uploadimage',
  'app/filestack',
  'app/window',
  'app/question-input',
  'app/faq',
  'app/errors/form-errors',
  'app/errors/form-error',
  'app/quiz/quiz',
  'app/questions/question-list/question-list',
  'app/questions/question',
  'app/image',
  'app/game',
  'app/profile',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });


/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
// (function (global) {
//   System.config({
//     paths: {
//       // paths serve as alias
//       'npm:': 'node_modules/'
//     },
//     // map tells the System loader where to look for things
//     map: {
//       // our app is within the app folder
//       app: 'app',

//       // angular bundles
//       '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
//       '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
//       '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
//       '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
//       '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//       '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
//       '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
//       '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

//       // other libraries
//       'rxjs':                       'npm:rxjs',
//       'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
//     },
//     // packages tells the System loader how to load when no filename and/or no extension
//     packages: {
//       app: {
//         main: './main.js',
//         defaultExtension: 'js'
//       },
//       rxjs: {
//         defaultExtension: 'js'
//       },
//       'angular2-in-memory-web-api': {
//         main: './index.js',
//         defaultExtension: 'js'
//       }
//     }
//   });
// })(this);


