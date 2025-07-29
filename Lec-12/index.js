let box=document.querySelector("#box");
let btn = document.querySelector("#btn");
let stop=document.querySelector("#stop");
let colours=["red","black","green","yellow","pink","blue","violet","brown","grey","purple"]
let id=null;
function generateRandomColour(){
    let index=Math.floor(Math.random()*10);
    console.log(index);

    let randomcolour=colours[index];
    console.log(randomcolour)
    box.computedStyleMap.background=randomcolour;
}
btn.addEventListener("click",function(){
    id=setInterval(()=>{
    generateRandomColour();
    },500)
})
stop.addEventListener("click",function(){
    if(id){
        clearInterval(id)
    }
})
