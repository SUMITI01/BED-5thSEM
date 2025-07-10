let products=[
    {
        name:"samasung",
        amount:70000,
        quantity:10

    },
    {
        name:"Iphone 16",
        amount:10000,
        quantity:1
    }
]
//function buyProduct(product_name,cb){
    //some asynchronous operation
    //1. get product details from product db
    //2. write order detail in user db
    //setTimeout(()=>{
       // console.log("order complete");
     //   cb();
   // })
//}

buyProduct("Iphone 16",function(){
    console.log("product is purchased");
})
//console.log("prouct is purchased")
function buyProduct(product_name,cb){
    let isproduct = null
    //implement for loop to find product in an array
    //find product object from product array who's name is equal to prodcut_name
    for(let i=0 ; i<products.length; i++){
         if(product[i].name==product_name){
            isproduct = products[i];
        }
    }

if(!isproduct){
    cb("product is not available",null)
}else{
    cb(null,isproduct.amount);

}
}
function deductamount(account,cb){
    if(amount > account_balance){
        cb("your account balance is low")
    }else{
        account_balance -= amount;
        cb(null,"your product is purchased")

    }
}


buyProduct("Iphone 16",function(err,amount){
    //console.log("product is purchased");
    if(err) return console.log(err)
        console.log(amount)
    deductamount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message)
    });
})
