const fs = require("fs");
function read(file){
    return new Promise((resolve,reject)=>{
    fs.readFile(file,"utf-8",function(err,data){
        if(err) return console.log(err);
        // console.log(data[0])
        let users =JSON.parse(data)
        resolve(users)
    
    })
    })
}
function write(file,data){
    return 

}
module.exports.read=read
module.exports.write=write 