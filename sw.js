// Change this to your repository name
var GHPATH = '/yncor.github.io';
 
// Choose a different app prefix name
var APP_PREFIX = 'psb';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = '1';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/style.css`,
  `${GHPATH}/js/index.js`,
  `${GHPATH}/assets/fonts/FiraCode/FiraCode-Bold.ttf`,
  `${GHPATH}/assets/fonts/FiraCode/FiraCode-Retina.ttf`,
]