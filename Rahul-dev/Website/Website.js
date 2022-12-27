var items = document.querySelectorAll(".slideitem");
var a=0;
var b=1;
var c=2;
function left(){
}
function right(){
    if(a===8){
        a=0;
    }
    if(b===8){
        b=0;
    }
    if(c===8){
        c=0;
    }
   
    document.querySelectorAll('.slideitem')[a].style.display="none";
    document.querySelectorAll('.slideitem')[b].style.display="block";
    ++c;
    // console.log("c",c);
    document.querySelectorAll('.slideitem')[c].style.display="block";
    a++,b++;
    console.log(a,b,c);
   
}

setInterval(()=>{
    right();

},5000)
    
   
    
    // else{
    // document.querySelectorAll('.slideitem')[++a].style.display="none";
    // document.querySelectorAll('.slideitem')[++c].style.display="block";

    // }
    

