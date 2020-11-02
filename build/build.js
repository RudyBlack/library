const { execSync, spawnSync, exec } = require('child_process')

const fs  = require('fs')

const execommand = (command) => {
   return execSync(command, {'encoding' : 'utf8'});
};


const getJsonString = (target) => {
 var regExp = new RegExp(/\{\n[\s\S]*\}/, 'g');
    var match = target.match(regExp); 
    return match;
}



/* ㅡㅡㅡㅡㅡㅡㅡㅡ */
 const test = async () => {
    let commandExe = await execommand('npm run test-json');
    
    let jsonObj = eval( JSON.parse(getJsonString(commandExe)) );
    let passedCode = jsonObj.passes.map((cur, index) => {
        return cur.fullTitle.split(' ');
    })
    
    
    const testCode = require('../dev/testCode/index.js'); 
    const distCode = passedCode.map( (cur) => {
        return testCode[cur[0]][cur[1]];
    }).join(";\n");
     
     !fs.existsSync('dist/') && fs.mkdirSync('dist/');
     fs.writeFile('dist/library.js', distCode, { flag: 'w', encoding : 'utf8' }, function(err){
      if (err) return console.log(err);
      console.log('write dist code');       
     })
};

test();
    








