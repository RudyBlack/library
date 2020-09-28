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



