const chai = require('chai')
const expect = chai.expect;
const should = chai.should();
const FUNC = require("./func");

var jsdom = require('jsdom-global')()
var $ = require( "jquery" );	

document.body.innerHTML = 
`<span id="target" class="target">
	<span class="fkfk"></span>
</span>`;


describe('unitTest',function(){

	let testCode = 'isExistElement';
	let testVal = [ 
			{
				arg1 : $(".target"),
				arg2 : ".fkfk",
				result : true
		 	},
		 	{
				arg1 : 1,
				arg2 : 3,
				result : true
		 	}
		];

	it(testCode, function () {
		test(testVal,FUNC()[testCode]);
	});


	function test(testVal,func){
		console.log();
		console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡSTARTㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
		console.log(func);
		console.log();
		
		testVal.map((current,i)=>{
			expect( func( current.arg1,current.arg2 )).to.equal( current.result );
		})
		console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
	}
	

});



