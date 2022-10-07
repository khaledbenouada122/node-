import * as fs from 'fs';

const result = fs.readFileSync('welcome.txt', {encoding: 'utf-8'},(error,result)=>{
    if (error) throw error
    else {
        console.log("result")
    }

});
console.log(result);
