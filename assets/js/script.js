const btn_container =document.getElementById("btn-container");
let btns = btn_container.querySelectorAll(".btn");
let boxs=document.querySelectorAll(".img-box")
const branding=document.getElementById("branding")
const design=document.getElementById("design")
const web=document.getElementById("web")
const all=document.getElementById("all")
let branding_boxs=document.querySelectorAll(".branding")
let design_boxs=document.querySelectorAll(".design")
let web_boxs=document.querySelectorAll(".web")
function deactive(){
    btns.forEach(function (btn){
        btn.classList.remove("active")
    })
    boxs.forEach(function (box){
        box.style.display="none"
    })
}

btns.forEach(function (btn){
    btn.addEventListener("click",function (){
        deactive()
        btn.classList.add("active")
    })
})

branding.addEventListener("click",function (){
    branding_boxs.forEach(function (branding_box){
        branding_box.style.display="flex"
    })
})
design.addEventListener("click",function (){
    design_boxs.forEach(function (design_box){
        design_box.style.display="flex"
    })
})
web.addEventListener("click",function (){
    web_boxs.forEach(function (web_box){
        web_box.style.display="flex"
    })
})
all.addEventListener("click",function (){
    boxs.forEach(function (box){
        box.style.display="flex"
    })
})