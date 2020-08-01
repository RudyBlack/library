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




describe('sliceString 함수 테스트',function(){
	it("sliceString은 리턴값이 배열이다.", function () {
			expect(  Array.isArray( TestUtil.sliceString("1",1) ) ).to.equal( true );
	});
	it("sliceString('ababab',2) == ['ab','ab','ab']", function () {
			expect( TestUtil.sliceString('ababab',2) ).to.eql(['ab','ab','ab'] );
	});
	it("sliceString('abcbcbdddggg',3) == ['abc','bcb','ddd','ggg']", function () {
			expect( TestUtil.sliceString('abcbcbdddggg',3) ).to.eql( ['abc','bcb','ddd','ggg'] );
	});
	it("sliceString('남현우입니다',6) == ['남현우입니다']", function () {
			expect( TestUtil.sliceString('남현우입니다',6) ).to.eql( ['남현우입니다'] );
	});
	it("sliceString(78787979,0) 에러뱉음", function () {
			expect( TestUtil.sliceString(78787979,3) ).to.eql( error );
	});
});
describe.skip('getUrlFileName 함수 테스트',function(){
	it("https://devlive.club5678.com/r_mgnf/dsfdsf/aaa.html은 aaa와 같다", function () {
			expect( TestUtil.getUrlFileName("https://devlive.club5678.com/r_mgnf/dsfdsf/aaa.html") ).to.equal( "aaa" );
	});

	it("https://devlive.club5678.com/은 공백", function () {
			expect( TestUtil.getUrlFileName("https://devlive.club5678.com/") ).to.equal( "" );
	});

	it("쿼리스트링 있을 시", function () {
			expect( TestUtil.getUrlFileName("https://devlive.club5678.com/r_mgnf/dsfdsf/aaa.html?mode=11&sdmfklsdmlf=34534543543") ).to.equal( "aaa" );
	});
});
