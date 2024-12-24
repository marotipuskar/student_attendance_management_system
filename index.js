// var a=document.querySelector(".div2");
// document.querySelector(".but1").addEventListener("click",function(){
//     a.style.backgroundColor="white";

// })


// function click(){
    //     // document.getElementsByClassName(a).style.innerHTML="clicked me"
    //     // document.getElementById("login").style.display=block;
    //     alert("helo");
    // };
    
    
function me(){
    document.getElementById("login").style.display="block";
    document.body.style.backgroundColor="red";  
    // console.log("my");
    console.log(login);
    document.getElementsByClassName("clik").style.display="none";

}
function regs(){
    document.getElementById("register").style.display="block";
    document.getElementById("login").style.display="none"
    document.body.style.backgroundColor="rgb(14, 251, 14)";

}

// let a= document.getElementsByName("username").values="none";
// let b= document.getElementsByName("password").values="none";
// function sub(){
//     if(a && b ){
//         alert("Invalid username and password")
//     }else{
//         alert("successfully login ")
//     }

// // }
// function reg(){
//     document.getElementById("register").style.display="block";
//     // document.getElementById("register").style.backgroundColor="yellow";
// }
// document.getElementById("login").style.display="none";





// from below

username=document.getElementById("user").value;
password=document.getElementById("password").value;
document.getElementById("login").addEventListener("submit",submitfun());
function submitfun(event){
    event.preventDefault();
    if(username== "durgesh" && password == "durgesh"){
        document.body.style.backgroundColor="yello";
        window.location.href=""
        // window.location.href="/student.html";
    }else{
        alert("Invalid username and password");
    }
}




// server side has started here



