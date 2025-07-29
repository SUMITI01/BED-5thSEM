
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
function buyProduct(product_name){
    let isproduct = null
    //implement for loop to find product in an array
    //find product object from product array who's name is equal to prodcut_name
    for(let i=0 ; i<products.length; i++){
        //console.log(products[i].name==product_name);
         if(product[i].name==product_name){
            isproduct = products[i];
        }
    }
if(!isproduct){
    cb("product is not available",null)
}else{
    cb(null,isproduct.amount);
    //cb(null,isproduct.amount);

}
}
