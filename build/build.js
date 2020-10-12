const { exec } = require('child_process')
const fs  = require('fs')

const 커맨드실행 = (command) => {
    exec('npm test', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return false;
        }
    });
};

const 파일읽기 = async (path) => {
    return fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) throw err;
        let rtnData = data;
        return rtnData;
    });
};

// 테스트함수명 추출
// 테스트 함수명을 각 파일에서 찾기
// 함수 찾아서 버퍼에 저장
// dist폴더에서 배포.js 파일에 쓰기


/* ㅡㅡㅡㅡㅡㅡㅡㅡ */

const 함수명추출 = (target) => {
    return target.match(/describe\([\s\S]*?\}\)\;\s\}\)\;/g).map((cur,index)=>{
        
        console.log(cur);
        // let parseVal = cur.match(/['"].*['"]/g);
        // return parseVal[0].match(/[a-z].*[a-z]/g)[0];
    })
}
async function test(){
    let hello = await 파일읽기('./dev/doTest.js');    
    
    console.log(함수명추출(hello));
    
};test();
    








