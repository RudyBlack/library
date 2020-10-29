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
var rtnVal = "";
   var regExp = new RegExp('\\{.*\\}', 'g');
   if(target.match(regExp)) rtnVal = target.match(regExp);
    return rtnVal;
}




/* ㅡㅡㅡㅡㅡㅡㅡㅡ */

async function test(){
    // let hello = await 파일읽기('./dev/index.js');    
    // console.log(객체문자열추출(hello, 'test'));
    let commandExe = await 커맨드실행('npm run-script test-json');
    
    console.log(commandExe.sp);
    return;
    if(commandExe) {
        let testVal = getObjectString(파일읽기('../dev/index.js'), 'testCode');
        console.log(JSON.parse(testVal));
    }
};test();
    








