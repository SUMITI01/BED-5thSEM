const fs = require("fs");
let users=[
    {
        id:1,
        name:"Sumiti",
        age:"19"
},
{
    id:2,
    name:"Pranav",
    age:"21"
},
]

fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written");

});