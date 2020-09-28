import * as TestLib from './testLib.js'
import * as TestUtil from './testUtil.js'
import * as chai from 'chai'
const jsdom = require('jsdom-global')()
const expect = chai.expect;
const should = chai.should();
import * as $ from 'jquery'

document.body.innerHTML =
`<span id="target" class="target">
	<span class="fkfk"></span>
</span>`;


describe('makeDomElement 테스트',function(){
	it("div 생성", function () {
			expect( TestUtil.makeDomElement({elType : 'div', className : 'hello', type : 'button'}) ).to.not.have.property('type');
			expect( TestUtil.makeDomElement({elType : 'div', className : 'hello', type : 'button'}) ).to.not.have.property('value');
			expect( TestUtil.makeDomElement({elType : 'div', className : 'hello', type : 'button'}) ).to.have.property('className');
	});

	it("input 생성", function () {
		expect( TestUtil.makeDomElement({elType : 'input', className : 'hello', type : 'button'}) ).to.have.property('type');
		expect( TestUtil.makeDomElement({elType : 'input', className : 'hello'}) ).to.have.property('className');
		expect( TestUtil.makeDomElement({elType : 'input', className : 'hello', bgColor : 'blue'}) ).to.not.have.property('bgColor');
		expect( TestUtil.makeDomElement({elType : 'input', className : 'hello'}) ).to.have.property('value');
		expect( TestUtil.makeDomElement({elType : 'div', className : 'hello', type : 'button'}) ).to.not.have.property('is');
		expect( TestUtil.makeDomElement({elType : 'div', className : 'hello', type : 'button'}) ).to.have.property('is');
	});


});
