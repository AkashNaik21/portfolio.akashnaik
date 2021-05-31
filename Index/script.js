// gallery items filter
const filterButtons=document.getElementById('filter-btns').children;
const items=document.querySelector(".portfoil-gallery").children;

for(let i=0;i<filterButtons.length;i++)
{
    filterButtons[i].addEventListener("click",function(){
        for(let j=0;j<filterButtons.length;j++)
        {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target= this.getAttribute("data-target")

        for(let k=0;k<items.length;k++)
        {
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block"
            }
            if(target=="all")
            {
                items[k].style.display="block"
            }
        }
    })
}


// light box
const closelightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lignthboxImage=lightbox.querySelector("img");

// closing light box by click outside the pic
lightbox.addEventListener("click",function(){
    if(event.target!=lignthboxImage){
        lightbox.classList.remove("show");  
        lightbox.classList.add("hide");
    }
})

// closing light box by clicking cross 
closelightbox.addEventListener("click",function(){
    lightbox.classList.remove("show");      
    lightbox.classList.add("hide");   
})

const gallery=document.querySelector(".portfoil-gallery");
const galleyItem=gallery.querySelectorAll(".item");

// selecting the image for light box
galleyItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lignthboxImage.src=element.querySelector("img").getAttribute("src") 
    })
})

//testimonial slider
const slideConatiner=document.querySelector(".testi-slider");
const slides=slideConatiner.children;
const containerWidth=slideConatiner.offsetWidth;
const margin=30;
let itemPerSlide=0;

//responsive 
const responsive=[
    {breakpoint:{width:0,item:1}},
    {breakpoint:{width:991,item:2}}
]

function load(){
    for(let i=0;i<responsive.length;i++)
    {
        if( window.innerWidth>responsive[i].breakpoint.width){
            itemPerSlide=responsive[i].breakpoint.item; 
        }
    }
    start();
}
function start()
{
    totalWidth=0;
    for(let i=0;i<slides.length;i++)
    {
        slides[i].style.width=(containerWidth/itemPerSlide)-margin+"px";
        slides[i].style.margin=margin/2+"px";
        totalWidth+=containerWidth/itemPerSlide;
    }
    slideConatiner.style.width=totalWidth+"px";

    const slideDots=Math.ceil(slides.length/itemPerSlide);

    for(let i=0;i<slideDots;i++)
    {
        const div=document.createElement("div");
        div.id=i;
        div.setAttribute("onclick","controlSlide(this)");
        if(i==0)
        {
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }   
}


let currentSlide=0;
function controlSlide(element){
    currentSlide=element.id;
    changeSlide(currentSlide) 
}
function changeSlide(currentSlide){
    controlButtons=document.querySelector(".slide-controls").children;
    for(let i=0;i<controlButtons.length;i++)
    {
        controlButtons[i].classList.remove("active")
    }
    controlButtons[currentSlide].classList.add("active")
    slideConatiner.style.marginLeft=-(containerWidth*currentSlide)+"px";
}
function autoplay(){
    if(autoSlide==slideDots-1){
        autoSlide=0;
    }
    else{
        autoSlide++;
    }
    changeSlide(autoSlide)
}
window.onload=load();

//LOCKING NAV BAR 

window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>991){
        document.querySelector("header").classList.add("fixed");
    }
}

// navbar links
const navbar=document.querySelector(".navbar");
a=navbar.querySelectorAll("a");
a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0;i<a.length;i++){
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
})

// ham burger
const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show");
})



// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
  
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }


