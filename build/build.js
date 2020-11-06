const { execSync, spawnSync, exec } = require('child_process');
const fs = require('fs');

const execommand = (command) => {
    return execSync(command, { encoding: 'utf8' });
};

const getJsonString = (target) => {
    var regExp = new RegExp(/\{\n[\s\S]*\}/, 'g');
    var match  = target.match(regExp);
    
    return match;
};

const getTestPassCode = async () => {
    let commandExe = await execommand('npm run test-json');
    
    let jsonObj    = eval(JSON.parse(getJsonString(commandExe)));
    let passedCode = jsonObj.passes.map((cur) => cur.fullTitle.split(' '));

    return passedCode;
};

const makeDist = (distCode) => {
    !fs.existsSync('dist/') && fs.mkdirSync('dist/');
    
    fs.writeFile('dist/library.js', distCode, { flag: 'w', encoding: 'utf8' }, (err) => {
        return err ? console.log(err) : console.log('write success');
    });
};

(function build(){
    const testCode = require('../dev/testCode/index.js');
    
     getTestPassCode().then((testPassCode) => {
        const distCode = testPassCode.map((cur) => testCode[cur[0]][cur[1]]).join(';\n');
        makeDist(distCode);
    });
})();
