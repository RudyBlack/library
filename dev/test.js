import {
  arrayUtil,
  dataUtil,
  domUtil,
  httpUtil,
  stringUtil,
<<<<<<< HEAD
} from './testCode/index.js';

import * as assetString from './testCode/asset/assetString.js';
=======
  assetString,
} from './testCode/index.js';

>>>>>>> d4a15713462d3a279dd48493eac0e652c6438e26
if (typeof window === 'undefined') {
  const jsdom = require('jsdom-global')();
  const chai = require('chai');
  const { expect, assert, should } = chai;
  const $ = require('jquery');

  const testCode = {
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
    httpUtil: {},
    dataUtil: {
<<<<<<< HEAD
      // StateManagement: () => {
      //   const stateManagement = dataUtil.StateManagement;
      //   stateManagement.set('hello', 1);
      //   stateManagement.set('hello', 2);
      //   stateManagement.set('Array', []);
      //   stateManagement.set('Array2', [1, 2, 3, 4, 5]);

      //   expect(stateManagement.get('hello')).to.equal(2);
      //   expect(stateManagement.get('Array')).to.have.lengthOf(0);
      //   expect(stateManagement.get('Array2')).to.have.lengthOf(5);
      // },
=======
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
>>>>>>> d4a15713462d3a279dd48493eac0e652c6438e26
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

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
document.body.innerHTML = '<span id="target" class="target"><span class="fkfk"></span></span>';

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
