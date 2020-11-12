import * as testCode from '/testCode/index.js';
import * as asset from '/asset/index.js';

//For test in chrom console..
window.asset = asset;

window.arrayUtil = testCode.arrayUtil;
window.dataUtil  = testCode.dataUtil;
window.domUtil   = testCode.domUtil;
window.httpUtil  = testCode.httpUtil;
window.stringUtil = testCode.stringUtil;

window.assetString = asset.assetString;
window.assetObject = asset.assetObject;

window.chapterUrl = asset.assetObject.getFetchData('story').then(result => result);
