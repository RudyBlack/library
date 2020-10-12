import * as chai from 'chai';
import * as $ from 'jquery';
/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

import * as arrayUtil from './testCode/array.js';
import * as dataUtil from './testCode/data.js';
import * as domUtil from './testCode/dom.js';
import * as httpUtil from './testCode/http.js';
import * as stringUtil from './testCode/string.js';

const jsdom = require('jsdom-global')();

const { expect } = chai;
const should = chai.should();

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

document.body.innerHTML = '<span id="target" class="target"><span class="fkfk"></span></span>';

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

describe.skip('arrayUtil', () => {});

describe('domUtil', () => {
  it('makeDomElement', () => {
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
    expect(domUtil.makeDomElement({ elType: 'input', className: 'hello' })).to.have.property(
      'className',
    );
    expect(
      domUtil.makeDomElement({ elType: 'input', className: 'hello', bgColor: 'blue' }),
    ).to.not.have.property('bgColor');
    expect(domUtil.makeDomElement({ elType: 'input', className: 'hello' })).to.have.property(
      'value',
    );
    expect(
      domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' }),
    ).to.not.have.property('is');
  });
});

describe('httpUtil', () => {});

describe('dataUtil', () => {
  it('StateManagement', () => {
    const stateManagement = dataUtil.StateManagement;
    stateManagement.set('hello', 1);
    stateManagement.set('hello', 2);
    stateManagement.set('Array', []);
    stateManagement.set('Array2', [1, 2, 3, 4, 5]);

    expect(stateManagement.get('hello')).to.equal(2);
    expect(stateManagement.get('Array')).to.have.lengthOf(0);
    expect(stateManagement.get('Array2')).to.have.lengthOf(5);
  });
});

describe('stringUtil', () => {
  it('sliceString', () => {
    expect(stringUtil.sliceString('hello', 1)).to.have.lengthOf(5);
    expect(stringUtil.sliceString('hello', 4)).to.have.lengthOf(2);
    expect(stringUtil.sliceString('hello', 6)).to.have.lengthOf(1);
    expect(stringUtil.sliceString('hello', 0)).to.have.lengthOf(1);
    expect(stringUtil.sliceString('[]', 2)).to.eql(['[]']);
  });
});
