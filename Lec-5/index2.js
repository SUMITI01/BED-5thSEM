let p = new Promise((resolve,reject)=>{
    resolve("okay")
})

//console.log(p);
p.then(()=>{
    console.loglog(data)
    console.log("promise completed")
})
.catch(()=>{
    console.log(err);
})
let users=[
{
    id:1,
    age:16,
    name:"yashu"
},{
    id:2,
    age:20,
    name:"yashu2"
}
]
function isEligible(id){
    return new Promise((resole,reject)=>{
        let user= users.filter((user)=> user.id==id)[0];
    console.log(user);
    if(!user) return reject("no user found");
    if(user.age>=18){
        return resolve("eligible to vote")
    }else{
        return reject("not eligibile")
    }
    })
}
console.log(isEligible(1))





