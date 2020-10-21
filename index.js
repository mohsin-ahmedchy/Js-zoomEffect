let container = document.querySelector(".container");

let img = document.querySelector("img");

container.addEventListener("mousemove",(e)=>{
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.5)";

})

container.addEventListener("mouseleave",(e)=>{

    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
})