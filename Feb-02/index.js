var second=60;
var minute=4;
let running=true;

var stopbtn=document.getElementById("stop_btn");
var resumebtn=document.getElementById("resume_btn");
var resetbtn=document.getElementById("resetbtn");



var timer=setInterval(()=>{
    second=second-1;
    document.getElementById("seconds").innerText=second;
    document.getElementById("minute").innerText=minute;
    if(second==0){
        second=60;
        minute=minute-1;
    }
    if(minute<=0){
        second=60;
        minute=4;
    }
} ,1000);



stop_btn.addEventListener("click",()=>{
    clearInterval(timer);
    running=false;
});

resume_btn.addEventListener("click", ()=>{
    if(running==false)
    {   running=true;
        timer=setInterval(()=>{
       
        second=second-1;
        document.getElementById("seconds").innerText=second;
        document.getElementById("minute").innerText=minute;
        if(second==0){
            second=60;
            minute=minute-1;
        }
        if(minute<0){
            clearInterval(timer);
        }
    } ,1000);}
});


resetbtn.addEventListener("click", ()=>{
sec=60;
min=5;
display()
});