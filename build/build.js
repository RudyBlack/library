const { execSync, spawnSync, exec } = require('child_process')

const fs  = require('fs')

const 커맨드실행 = (command) => {
   return execSync(command, {'encoding' : 'utf8'});
};

const 파일읽기 = (path) => {
    return fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) throw err;
        let rtnData = data;
        return rtnData;
    });
};


const 함수명추출 = (target) => {
    return target.match(/describe\([\s\S]*?\}\)\;\s\}\)\;/g).map((cur,index)=>{
        let parseVal = cur.match(/['"].*['"]/g);
        
        let rtnVal = {
            [parseVal[0]] :  cur.match(/it\(['"].*['"]/g)
        }
        // return parseVal[0].match(/[a-z].*[a-z]/g)[0];
    })
}

const getObjectString = (target, findObj) => {
    var rtnVal = "";
    
    if(findObj){
        var regExp = new RegExp(findObj + '[\\s]+?=[\\s]+?\\{[\\s\\S]+?\\}\\;[^"]', 'g');

        let regMatch = target.match(regExp);

        if(regMatch){
            rtnVal = regMatch[0].match(new RegExp('\\{[\\s\\S]+?\\}\\;[^"]','g'))[0];
        } 
        
    }else{
        var regExp = new RegExp('\\{.*\\}', 'g');
         if(target.match(regExp)) rtnVal = target.match(regExp);
    }
    
    return rtnVal;
}

const getJsonString = (target) => {
 var regExp = new RegExp(/\{\n[\s\S]*\}/, 'g');
    var match = target.match(regExp); 
    return match;
}




/* ㅡㅡㅡㅡㅡㅡㅡㅡ */

<<<<<<< HEAD
async function test(){
<<<<<<< HEAD
    // let hello = await 파일읽기('./dev/index.js');    
    // console.log(객체문자열추출(hello, 'test'));
    let commandExe = await 커맨드실행('npm run test-json');
    
    
    let jsonObj = eval( JSON.parse(getJsonString(commandExe)) );
    console.log(jsonObj.passes);
=======
    let commandExe = await 커맨드실행('npm run test-json');
=======
function test(){
    // let commandExe = await 커맨드실행('npm run test-json');
>>>>>>> ca3c164... use babel/register
    
    // let jsonObj = eval( JSON.parse(getJsonString(commandExe)) );
    // let passedCode = jsonObj.passes.map((cur, index) => {
    //     return cur.fullTitle.split(' ');
    // })
    
    // console.log(passedCode);
    
    
    //웹팩으로 번들링 해서 가져온다.
    const lib = require('../dev/testCode/index.js');
    
<<<<<<< HEAD
    console.log(passedCode);
>>>>>>> 1c50e90... get test passes testCode
=======
    console.log(lib.arrayUtil.isValidArray);
    console.log(lib.dataUtil);

>>>>>>> ca3c164... use babel/register
    return;
    
};

test();
    








