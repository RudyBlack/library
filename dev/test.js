import {
  arrayUtil,
  dataUtil,
  domUtil,
  httpUtil,
  stringUtil,
} from './testCode/index.js';

import * as assetString from './testCode/asset/assetString.js';
if (typeof window === 'undefined') {
  const jsdom = require('jsdom-global')();
  const chai = require('chai');
  const { expect, assert, should } = chai;
  const $ = require('jquery');

  const testCode = {
  arrayUtil: {
    isEmptyArray : () => {
        assert.isNotArray(arrayUtil.isEmptyArray([]), 'return is not array');
        assert.isTrue(arrayUtil.isEmptyArray([]), 'true');
        
        assert.isNotTrue(arrayUtil.isEmptyArray([1,2,3]), 'not empty');
        assert.isNotTrue(arrayUtil.isEmptyArray([""]), 'not empty');
        assert.isNotTrue(arrayUtil.isEmptyArray([0]), 'not empty');
        assert.isNotTrue(arrayUtil.isEmptyArray([null]), 'not empty');
        assert.isNotTrue(arrayUtil.isEmptyArray(['undefined']), 'not empty');
        assert.isNotTrue(arrayUtil.isEmptyArray([undefined]), 'not empty');
        assert.isNotTrue(arrayUtil.isEmptyArray([NaN]), 'not empty');
    }
  },
    domUtil: {
      makeDomElement: () => {
        expect(
          domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' }),
        ).to.not.have.property('type');
        expect(
          domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' }),
        ).to.not.have.property('valude');
        expect(
          domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' }),
        ).to.have.property('className');
        expect(
          domUtil.makeDomElement({ elType: 'input', className: 'hello', type: 'button' }),
        ).to.have.property('type');
        expect(
          domUtil.makeDomElement({ elType: 'input', className: 'hello' }),
        ).to.have.property('className');
        expect(
          domUtil.makeDomElement({ elType: 'input', className: 'hello', bgColor: 'blue' }),
        ).to.not.have.property('bgColor');
        expect(
          domUtil.makeDomElement({ elType: 'input', className: 'hello' }),
        ).to.have.property('value');
        expect(
          domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' }),
        ).to.not.have.property('is');
      },
    },
    httpUtil: {
        getQueryString : () => {
            let url = 'https://www.youtube.com/watch?v=BYbgopx44vo';
            let url1 = 'https://ide-run.goorm.io/workspace/jsTestContainer?language=kor#g_window_1604283696776';
            let url2 = 'https://test.html/clubradio/issues';
            assert( typeof httpUtil.getQueryString(url) == 'object', 'return type is Object');
            assert.notEqual( httpUtil.getQueryString(url), {v:'BYbgopx44vo'}, 'value check');
            assert( httpUtil.getQueryString(url).v === 'BYbgopx44vo', 'return value v is BYbgopx44vo');
            assert.isObject(  httpUtil.getQueryString(url2), 'return value is Object' );
            assert.property( httpUtil.getQueryString(url), 'v' );
        }
    },
    dataUtil: {
      
    },
    stringUtil: {
      sliceString: () => {
        expect(stringUtil.sliceString('hello', 1)).to.have.lengthOf(5);
        expect(stringUtil.sliceString('hello', 4)).to.have.lengthOf(2);
        expect(stringUtil.sliceString('hello', 6)).to.have.lengthOf(1);
        expect(stringUtil.sliceString('hello', 0)).to.have.lengthOf(1);
        expect(stringUtil.sliceString('[]', 2)).to.eql(['[]']);
      },
      getObjectString: () => {
        assert.isString(stringUtil.getObjectString(assetString.a, 'stats'), 'is String');
        expect(stringUtil.getObjectString(assetString.a, 'statsd')).to.equal('');
        assert.isArray(stringUtil.getObjectString(assetString.a), 'is String');
        expect(stringUtil.getObjectString(assetString.a, 'test1')).to.equal(
          '{a:1,a:2,a:3};',
        );
        expect(stringUtil.getObjectString(assetString.a, 'test')).to.equal('');
      },
      getJsonString: () => {
        assert.isNotString(stringUtil.getJsonString(assetString.a), 'is String');
        assert.isNotString(stringUtil.getJsonString(assetString.a), 'is String');
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
}

/* DOM ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */


/* WEB TEST ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

let url = 'https://www.youtube.com/watch?v=BYbgopx44vo';
let url1 = 'https://ide-run.goorm.io/workspace/jsTestContainer?language=kor#g_window_1604283696776';
let url2 = 'https://test.html/clubradio/issues';

let querystring = httpUtil.getQueryString(url2);

let $div = document.getElementsByTagName('div')[0];


domUtil.getAttr($div);
console.log( domUtil.getAttr($div, 'style') );

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
