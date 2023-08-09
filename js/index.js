var images=Array.from(document.querySelectorAll(".ineer img"))
var screen=document.querySelector(".screen")
var layer=document.querySelector(".layer")
var leftBtn=document.querySelector("#leftBtn")
var rightBtn=document.querySelector("#rightBtn")
var closeBtn=document.querySelector("#closeBtn")

var curIndex
console.log(images)
for(var i=0;i<images.length;i++){
    images[i].addEventListener("click",function(e){
        screen.classList.replace("d-none","d-flex")
        console.log(e.target.getAttribute("src"))
        layer.style.backgroundImage=`url(${e.target.getAttribute("src")})`
         curIndex=images.indexOf(e.target)
        console.log(curIndex);
    })
}
document.addEventListener("click",function(e){
    if (e.target.id=="close"){
        close()
    }
})


closeBtn.addEventListener('click',close)

leftBtn.addEventListener("click",previousImg)
rightBtn.addEventListener("click",nextImg)
function nextImg() {
    curIndex++
    if(curIndex>=images.length){
        curIndex= 0   
    }
layer.style.backgroundImage=`url(${images[curIndex].getAttribute("src")})`
}
function previousImg() {
    curIndex--
    if(curIndex<0){
        curIndex=images.length-1   
        }
    layer.style.backgroundImage=`url(${images[curIndex].getAttribute("src")})`
}
function close(){
    screen.classList.replace("d-flex","d-none")
}
document.addEventListener("keydown",function(e){
    console.log(e);
    switch (e.key) {
        case "ArrowRight":
            nextImg();
        break;
        case "ArrowLeft":
            previousImg();
        break;
        case "Escape":
            close()
            break;
    }
})
