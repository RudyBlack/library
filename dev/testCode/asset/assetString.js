export const a=`
var test = 1;
var test1 = {a:1,a:2,a:3};

var stats = {stats:{suites:3,tests:4,passes:4,pending:0,failures:0,start:"2020-10-14T09:19:11.820Z",end:"2020-10-14T09:19:11.836Z",duration:16,testsRegistered:4,passPercent:100,pendingPercent:0,other:0,hasOther:!1,skipped:0,hasSkipped:!1},results:[{uuid:"6e09172f-a754-4906-b917-55ade895682c",title:"",fullFile:"",file:"",beforeHooks:[],afterHooks:[],tests:[],suites:[{uuid:"726841a6-040e-443d-b178-8ab29a85c7ba",title:"domUtil",fullFile:"/workspace/jsTestContainer/library/dev/index.js",file:"/index.js",beforeHooks:[],afterHooks:[],tests:[{title:"makeDomElement",fullTitle:"domUtil makeDomElement",timedOut:!1,duration:8,state:"passed",speed:"fast",pass:!0,fail:!1,pending:!1,context:null,code:"testCode[key][method]();",err:{},uuid:"418b0c58-610d-452b-ba62-b4ad673548f3",parentUUID:"726841a6-040e-443d-b178-8ab29a85c7ba",isHook:!1,skipped:!1}],suites:[],passes:["418b0c58-610d-452b-ba62-b4ad673548f3"],failures:[],pending:[],skipped:[],duration:8,root:!1,rootEmpty:!1,_timeout:2e3},{uuid:"0ffb9007-1862-4f82-8319-3f5ebc433e86",title:"dataUtil",fullFile:"/workspace/jsTestContainer/library/dev/index.js",file:"/index.js",beforeHooks:[],afterHooks:[],tests:[{title:"StateManagement",fullTitle:"dataUtil StateManagement",timedOut:!1,duration:1,state:"passed",speed:"fast",pass:!0,fail:!1,pending:!1,context:null,code:"testCode[key][method]();",err:{},uuid:"df8df3fb-f6a3-4ddc-bb15-5c758a368782",parentUUID:"0ffb9007-1862-4f82-8319-3f5ebc433e86",isHook:!1,skipped:!1}],suites:[],passes:["df8df3fb-f6a3-4ddc-bb15-5c758a368782"],failures:[],pending:[],skipped:[],duration:1,root:!1,rootEmpty:!1,_timeout:2e3},{uuid:"a25fa770-6072-4923-8823-3dd39701507f",title:"stringUtil",fullFile:"/workspace/jsTestContainer/library/dev/index.js",file:"/index.js",beforeHooks:[],afterHooks:[],tests:[{title:"sliceString",fullTitle:"stringUtil sliceString",timedOut:!1,duration:2,state:"passed",speed:"fast",pass:!0,fail:!1,pending:!1,context:null,code:"testCode[key][method]();",err:{},uuid:"04a2913a-5cad-4cae-9cd2-db2978c2552d",parentUUID:"a25fa770-6072-4923-8823-3dd39701507f",isHook:!1,skipped:!1},{title:"compressString",fullTitle:"stringUtil compressString",timedOut:!1,duration:0,state:"passed",speed:"fast",pass:!0,fail:!1,pending:!1,context:null,code:"testCode[key][method]();",err:{},uuid:"7e153d17-070c-40cc-9aa2-4b69404d9a91",parentUUID:"a25fa770-6072-4923-8823-3dd39701507f",isHook:!1,skipped:!1}],suites:[],passes:["04a2913a-5cad-4cae-9cd2-db2978c2552d","7e153d17-070c-40cc-9aa2-4b69404d9a91"],failures:[],pending:[],skipped:[],duration:2,root:!1,rootEmpty:!1,_timeout:2e3}],passes:[],failures:[],pending:[],skipped:[],duration:0,root:!0,rootEmpty:!0,_timeout:2e3}],meta:{mocha:{version:"8.1.3"},mochawesome:{options:{quiet:!1,reportFilename:"mochawesome",saveHtml:!0,saveJson:!0,consoleReporter:"spec",useInlineDiffs:!1,code:!0},version:"6.1.1"},marge:{options:null,version:"5.1.0"}}};
`

export const b = `
import * as chai from 'chai';
import * as $ from 'jquery';
/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

import * as arrayUtil from './testCode/array.js';
import * as dataUtil from './testCode/data.js';
import * as domUtil from './testCode/dom.js';
import * as httpUtil from './testCode/http.js';
import * as stringUtil from './testCode/string.js';
import * as assetString from './testCode/asset/assetString.js';


const jsdom = require('jsdom-global')();

const { expect, assert } = chai;
const should = chai.should();

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

document.body.innerHTML = '<span id="target" class="target"><span class="fkfk"></span></span>';

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
var testCode = {
  domUtil: {
    makeDomElement: () => {
      expect(domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })).to.not.have.property('type');
      expect(domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })).to.not.have.property('valude');
      expect(domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })).to.have.property('className');
      expect(domUtil.makeDomElement({ elType: 'input', className: 'hello', type: 'button' })).to.have.property('type');
      expect(domUtil.makeDomElement({ elType: 'input', className: 'hello' })).to.have.property('className');
      expect(domUtil.makeDomElement({ elType: 'input', className: 'hello', bgColor: 'blue' })).to.not.have.property('bgColor');
      expect(domUtil.makeDomElement({ elType: 'input', className: 'hello' })).to.have.property('value');
      expect(domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })).to.not.have.property('is');
    },
  },
  httpUtil: {},
  dataUtil: {
    StateManagement: () => {
      const stateManagement = dataUtil.StateManagement;
      stateManagement.set('hello', 1);
      stateManagement.set('hello', 2);
      stateManagement.set('Array', []);
      stateManagement.set('Array2', [1, 2, 3, 4, 5]);

      expect(stateManagement.get('hello')).to.equal(2);
      expect(stateManagement.get('Array')).to.have.lengthOf(0);
      expect(stateManagement.get('Array2')).to.have.lengthOf(5);
    },
  },
  stringUtil: {
    sliceString: () => {
      expect(stringUtil.sliceString('hello', 1)).to.have.lengthOf(5);
      expect(stringUtil.sliceString('hello', 4)).to.have.lengthOf(2);
      expect(stringUtil.sliceString('hello', 6)).to.have.lengthOf(1);
      expect(stringUtil.sliceString('hello', 0)).to.have.lengthOf(1);
      expect(stringUtil.sliceString('[]', 2)).to.eql(['[]']);
    },
    compressString: () => {

    },
      
   getObjectString: () => {
       assert.isString( stringUtil.getObjectString(assetString.a, 'stats'), 'is String');
       expect(stringUtil.getObjectString(assetString.a, 'statsd')).to.equal("");
       assert.isArray( stringUtil.getObjectString(assetString.a), 'is String');
       expect(stringUtil.getObjectString(assetString.a, 'test1')).to.equal("{a:1,a:2,a:3}");
       expect(stringUtil.getObjectString(assetString.a, 'test')).to.equal("");
   },
  },
};


for (const key in testCode) {
  describe(key, () => {
    for (const method in testCode[key]) {
      it(method, () => {
        testCode[key][method]();
      });
    }
  });
}
`

const weirdJsonData = `
>>dsfdsf
>>sdfdsfdfsd
{
  "stats": {
    "suites": 3,
    "tests": 4,
    "passes": 4,
    "pending": 0,
    "failures": 0,
    "start": "2020-10-14T09:19:11.820Z",
    "end": "2020-10-14T09:19:11.836Z",
    "duration": 16,
    "testsRegistered": 4,
    "passPercent": 100,
    "pendingPercent": 0,
    "other": 0,
    "hasOther": false,
    "skipped": 0,
    "hasSkipped": false
  },
  "results": [
    {
      "uuid": "6e09172f-a754-4906-b917-55ade895682c",
      "title": "",
      "fullFile": "",
      "file": "",
      "beforeHooks": [],
      "afterHooks": [],
      "tests": [],
      "suites": [
        {
          "uuid": "726841a6-040e-443d-b178-8ab29a85c7ba",
          "title": "domUtil",
          "fullFile": "/workspace/jsTestContainer/library/dev/index.js",
          "file": "/index.js",
          "beforeHooks": [],
          "afterHooks": [],
          "tests": [
            {
              "title": "makeDomElement",
              "fullTitle": "domUtil makeDomElement",
              "timedOut": false,
              "duration": 8,
              "state": "passed",
              "speed": "fast",
              "pass": true,
              "fail": false,
              "pending": false,
              "context": null,
              "code": "testCode[key][method]();",
              "err": {},
              "uuid": "418b0c58-610d-452b-ba62-b4ad673548f3",
              "parentUUID": "726841a6-040e-443d-b178-8ab29a85c7ba",
              "isHook": false,
              "skipped": false
            }
          ],
          "suites": [],
          "passes": [
            "418b0c58-610d-452b-ba62-b4ad673548f3"
          ],
          "failures": [],
          "pending": [],
          "skipped": [],
          "duration": 8,
          "root": false,
          "rootEmpty": false,
          "_timeout": 2000
        },
        {
          "uuid": "0ffb9007-1862-4f82-8319-3f5ebc433e86",
          "title": "dataUtil",
          "fullFile": "/workspace/jsTestContainer/library/dev/index.js",
          "file": "/index.js",
          "beforeHooks": [],
          "afterHooks": [],
          "tests": [
            {
              "title": "StateManagement",
              "fullTitle": "dataUtil StateManagement",
              "timedOut": false,
              "duration": 1,
              "state": "passed",
              "speed": "fast",
              "pass": true,
              "fail": false,
              "pending": false,
              "context": null,
              "code": "testCode[key][method]();",
              "err": {},
              "uuid": "df8df3fb-f6a3-4ddc-bb15-5c758a368782",
              "parentUUID": "0ffb9007-1862-4f82-8319-3f5ebc433e86",
              "isHook": false,
              "skipped": false
            }
          ],
          "suites": [],
          "passes": [
            "df8df3fb-f6a3-4ddc-bb15-5c758a368782"
          ],
          "failures": [],
          "pending": [],
          "skipped": [],
          "duration": 1,
          "root": false,
          "rootEmpty": false,
          "_timeout": 2000
        },
        {
          "uuid": "a25fa770-6072-4923-8823-3dd39701507f",
          "title": "stringUtil",
          "fullFile": "/workspace/jsTestContainer/library/dev/index.js",
          "file": "/index.js",
          "beforeHooks": [],
          "afterHooks": [],
          "tests": [
            {
              "title": "sliceString",
              "fullTitle": "stringUtil sliceString",
              "timedOut": false,
              "duration": 2,
              "state": "passed",
              "speed": "fast",
              "pass": true,
              "fail": false,
              "pending": false,
              "context": null,
              "code": "testCode[key][method]();",
              "err": {},
              "uuid": "04a2913a-5cad-4cae-9cd2-db2978c2552d",
              "parentUUID": "a25fa770-6072-4923-8823-3dd39701507f",
              "isHook": false,
              "skipped": false
            },
            {
              "title": "compressString",
              "fullTitle": "stringUtil compressString",
              "timedOut": false,
              "duration": 0,
              "state": "passed",
              "speed": "fast",
              "pass": true,
              "fail": false,
              "pending": false,
              "context": null,
              "code": "testCode[key][method]();",
              "err": {},
              "uuid": "7e153d17-070c-40cc-9aa2-4b69404d9a91",
              "parentUUID": "a25fa770-6072-4923-8823-3dd39701507f",
              "isHook": false,
              "skipped": false
            }
          ],
          "suites": [],
          "passes": [
            "04a2913a-5cad-4cae-9cd2-db2978c2552d",
            "7e153d17-070c-40cc-9aa2-4b69404d9a91"
          ],
          "failures": [],
          "pending": [],
          "skipped": [],
          "duration": 2,
          "root": false,
          "rootEmpty": false,
          "_timeout": 2000
        }
      ],
      "passes": [],
      "failures": [],
      "pending": [],
      "skipped": [],
      "duration": 0,
      "root": true,
      "rootEmpty": true,
      "_timeout": 2000
    }
  ],
  "meta": {
    "mocha": {
      "version": "8.1.3"
    },
    "mochawesome": {
      "options": {
        "quiet": false,
        "reportFilename": "mochawesome",
        "saveHtml": true,
        "saveJson": true,
        "consoleReporter": "spec",
        "useInlineDiffs": false,
        "code": true
      },
      "version": "6.1.1"
    },
    "marge": {
      "options": null,
      "version": "5.1.0"
    }
  }
}`

