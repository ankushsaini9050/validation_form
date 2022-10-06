const nam = /[a-zA-Z][a-zA-Z ]{2,}/;
const num = /^[0-9]{10}$/;
const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
function fun1() {
  const name = document.getElementById("name").value;
  if (nam.test(name)) {
    document.getElementById("error3").innerHTML = "";
  } else {
    document.getElementById("error3").innerHTML = " * invalid name";
  }
}
  function fun2() {
  const numb = document.getElementById("number").value;
  if (num.test(numb)) {
    document.getElementById("error4").innerHTML = "";
  } else {
    document.getElementById("error4").innerHTML = " * invalid number";
  }
}
function fun3(){
  const email = document.getElementById("mail").value;
  if (reg.test(email)) {
    document.getElementById("error1").innerHTML = "";
  } else {
    document.getElementById("error1").innerHTML = " * invalid email";
  }
}
function fun4(){
  const pwds = document.getElementById("pwds").value;
  if (pwds=="") {
    document.getElementById("error2").innerHTML = " * invalid password";
  } else {
    document.getElementById("error2").innerHTML = "";
  }
}
function fun5(){
  const pday = document.getElementById("day").value
  if(pday==""){
    document.getElementById("error5").innerHTML = "* Enter Day";
  } else {
    document.getElementById("error5").innerHTML = "";
  }
}
function fun6(){
  const pmon = document.getElementById("mm").value
  if(pmon==""){
    document.getElementById("error6").innerHTML = "* Enter Month";
  } else {
    document.getElementById("error6").innerHTML = "";
  }
}
function fun7(){
  const pyear = document.getElementById("yyyy").value
  if(pyear==""){
    document.getElementById("error7").innerHTML = "* Enter Year";
  } else {
    document.getElementById("error7").innerHTML = "";
  }
}
function fun8(){
  const pst = document.getElementById("st").value
  if(pst==""){
    document.getElementById("error8").innerHTML = "* Enter State";
  } else {
    document.getElementById("error8").innerHTML = "";
  }
}
function fun9(){
  const pcon = document.getElementById("con").value
  if(pcon==""){
    document.getElementById("error9").innerHTML = "* Enter Country";
  } else {
    document.getElementById("error9").innerHTML = "";
  }
}

function btnclick(){
  const name = document.getElementById("name").value;
  const numb = document.getElementById("number").value;
  const email = document.getElementById("mail").value;
  const pwds = document.getElementById("pwds").value;
  const pday = document.getElementById("day").valu
  const pmon = document.getElementById("mm").value
  const pyear = document.getElementById("yyyy").value
  const pst = document.getElementById("st").value
  const pcon = document.getElementById("con").value
  const nam = /[a-zA-Z][a-zA-Z ]{2,}/;
  const num = /^[0-9]{10}$/;
   const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
   
   
   if(nam.test(name)&&
     num.test(numb)&&
     reg.test(email)&&
     pwds.length != 0 &&
     pday.length != 0 &&
     pmon.length != 0 &&
     pyear.length != 0 &&
     pst.length != 0 &&
     pcon.length != 0 

     
    ){
        console.log("checked")
       document.getElementById("cbox");
        let submit = document.getElementById("submit");
        submit.classList.remove("disabled")
      }else{
        console.log("no")
        alert("Incorrect informatiom")
      }
}