import chai from 'chai';

const chai = require('chai')
const expect = chai.expect;
const should = chai.should();
const FUNC = require("./testLib");
const UTIL = require("./testUtil");
var jsdom = require('jsdom-global')()
var $ = require( "jquery" );
var jsdom = require('jsdom-global')()

document.body.innerHTML =
`<span id="target" class="target">
	<span class="fkfk"></span>
</span>`;


describe('unitTest',function(){

let testTarget = [
	{
		func : FUNC().isPrimitive,
		arg : [false],
		result : true
	},
	{
		func : FUNC().stringToArray_slice,
		arg : ["hel",3],
		result : ["hel"]
	},
]

	it("isPrimitive", function () {
			expect( func(arg[0],arg[1]) ).to.equal( result );
	});
});

function test(testTarget){

	testTarget.map((current,i)=>{
		let func = current['func'];
		let arg = current['arg'];
		let result = current['result'];
		expect( func(arg[0],arg[1]) ).to.equal( result );
	})
}
