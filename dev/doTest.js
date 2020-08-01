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


describe('getUrlFileName 함수 테스트',function(){
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
