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
 const test = async () => {
    let commandExe = await 커맨드실행('npm run test-json');
    
    let jsonObj = eval( JSON.parse(getJsonString(commandExe)) );
    let passedCode = jsonObj.passes.map((cur, index) => {
        return cur.fullTitle.split(' ');
    })
    
    
    const testCode = require('../dev/testCode/index.js'); 
    const distCode = passedCode.map( (cur) => {
        return testCode[cur[0]][cur[1]];
    });
    
     fs.writeFile('dist/library.js', distCode, 'utf8', function(err){
      if (err) return console.log(err);
      console.log('write dist code');       
     })
};

test();
    








