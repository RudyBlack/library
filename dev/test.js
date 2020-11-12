import { arrayUtil, dataUtil, domUtil, httpUtil, stringUtil } from './testCode/index.js';
import * as asset from './asset/index.js';

const assetString = asset.assetString;
const assetObject = asset.assetObject;
const jsdom = require('jsdom-global')();
const chai = require('chai');
const { expect, assert, should } = chai;
const $ = require('jquery');

const testCode = {
    arrayUtil: {
        isEmptyArray: () => {
            assert.isNotArray(arrayUtil.isEmptyArray([]), 'return is not array');
            assert.isTrue(arrayUtil.isEmptyArray([]), 'true');

            assert.isNotTrue(arrayUtil.isEmptyArray([1, 2, 3]), 'not empty');
            assert.isNotTrue(arrayUtil.isEmptyArray(['']), 'not empty');
            assert.isNotTrue(arrayUtil.isEmptyArray([0]), 'not empty');
            assert.isNotTrue(arrayUtil.isEmptyArray([null]), 'not empty');
            assert.isNotTrue(arrayUtil.isEmptyArray(['undefined']), 'not empty');
            assert.isNotTrue(arrayUtil.isEmptyArray([undefined]), 'not empty');
            assert.isNotTrue(arrayUtil.isEmptyArray([NaN]), 'not empty');
        },
    },
    domUtil: {
        makeDomElement: () => {
            expect(
                domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })
            ).to.not.have.property('type');
            expect(
                domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })
            ).to.not.have.property('valude');
            expect(
                domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })
            ).to.have.property('className');
            expect(
                domUtil.makeDomElement({ elType: 'input', className: 'hello', type: 'button' })
            ).to.have.property('type');
            expect(
                domUtil.makeDomElement({ elType: 'input', className: 'hello' })
            ).to.have.property('className');
            expect(
                domUtil.makeDomElement({ elType: 'input', className: 'hello', bgColor: 'blue' })
            ).to.not.have.property('bgColor');
            expect(
                domUtil.makeDomElement({ elType: 'input', className: 'hello' })
            ).to.have.property('value');
            expect(
                domUtil.makeDomElement({ elType: 'div', className: 'hello', type: 'button' })
            ).to.not.have.property('is');
        },
    },
    httpUtil: {
        getQueryString: () => {
            let url = 'https://www.youtube.com/watch?v=BYbgopx44vo';
            let url1 =
                'https://ide-run.goorm.io/workspace/jsTestContainer?language=kor#g_window_1604283696776';
            let url2 = 'https://test.html/clubradio/issues';
            assert(typeof httpUtil.getQueryString(url) == 'object', 'return type is Object');
            assert.notEqual(httpUtil.getQueryString(url), { v: 'BYbgopx44vo' }, 'value check');
            assert(
                httpUtil.getQueryString(url).v === 'BYbgopx44vo',
                'return value v is BYbgopx44vo'
            );
            assert.isObject(httpUtil.getQueryString(url2), 'return value is Object');
            assert.property(httpUtil.getQueryString(url), 'v');
        },
        promiseMap: async () => {
            const promiseMap = httpUtil.promiseMap;
            const getFetchData = assetObject.getFetchData;
            let {chapterUrls} = await getFetchData('story');
            let fetchData1 = await getFetchData(chapterUrls[0]);
            let fetchData2 = await getFetchData(chapterUrls[1]);
            let fetchData3 = await getFetchData(chapterUrls[2]);
            let fetchData4 = await getFetchData(chapterUrls[3]);
            
            const a = await promiseMap([fetchData1,fetchData2,fetchData3,fetchData4], (cur)=>{
                return cur;
            })
            
            const b = await promiseMap([fetchData1,fetchData2,fetchData3,fetchData4], (cur)=>{
                return cur.html.split(" ")[0];
            })
            
            assert.isNotObject(a);
            assert.isArray(a);
            assert.isArray(b);
            assert(b != []);
            
            assert(b[0] !== "chapter34543")
            assert(b[0] === "chapter1")
            assert(b[1] === "chapter2")
            assert(b[2] === "chapter3")
            assert(b[3] === "chapter4")
            
        },
    },
    dataUtil: {},
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
            expect(stringUtil.getObjectString(assetString.a, 'test1')).to.equal('{a:1,a:2,a:3};');
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