let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
 let back = document.querySelector("#back");

let name1;
let fname;
let mname;
let adhar;
let balance;
let accountno;
let mobile;
let email;

window.addEventListener("load" , () => {
    container4.style.display="none";
    container3.style.display="none";
    container2.style.display="none";
    container1.style.display="none";
});

// open account

btn1.addEventListener("click", () =>{
   container1.style.display="block";
   let sbtn = document.querySelector("#submit");
   let back = document.querySelector("#back");
   let captc = document.querySelector("#capt");
  let captchano = Math.floor(Math.random()*10000);
  captc.innerHTML="Your Captcha : "+captchano;

   sbtn.addEventListener("click",()=>{ 
   name1 = document.querySelector("#uname").value;
   fname = document.querySelector("#ufname").value;
   mname = document.querySelector("#umname").value;
   adhar = document.querySelector("#adhar").value;
   email = document.querySelector("#email").value;
   mobile = document.querySelector("#mobile").value;
   balance = document.querySelector("#uincome").value;
  let heading = document.querySelector("#heading");
  let captcha = document.querySelector("#captcha").value;
  if(captcha == captchano){
   accountno = Math.floor(Math.random()*10000000);
   heading.innerHTML = "Your Account Number : "+accountno;
  }else{
    heading.innerHTML="Please enter a valid Captcha";
  }
   });

   back.addEventListener("click",()=>{
    container1.style.display="none";
  });
});

// deposit

btn2.addEventListener("click",()=>{
  container2.style.display="block";
   let back1 = document.querySelector("#back1");
   let depobtn = document.querySelector("#deposit");
depobtn.addEventListener("click",()=>{
  let ant = document.querySelector("#accno").value;
  let deposit = document.querySelector("#deposit1").value;
  let head1 = document.querySelector("#head");
  let para = document.querySelector("#succes");
  if(accountno == ant){
    balance = parseFloat(balance) + parseFloat(deposit);
    para.innerText="Deposit Successfully";
    head1.innerHTML="Your Balance : "+balance;
  }else{
    head1.innerHTML="Accont Number Not Matched";
  }
});
  back1.addEventListener("click",()=>{
    container2.style.display="none";
  })
});

// withdraw

btn3.addEventListener("click",()=>{
  container3.style.display="block";
   let back2 = document.querySelector("#back2");
   let withbtn = document.querySelector("#withdraw");
 withbtn.addEventListener("click",()=>{
  let ant = document.querySelector("#accno").value;
  let deposit = document.querySelector("#withd").value;
  let head2 = document.querySelector("#head1");
  let para1 = document.querySelector("#succes1");
  if(accountno == ant){
    balance = parseFloat(balance) - parseFloat(deposit);
    para1.innerText="Withdraw Successfully";
    head2.innerHTML="Your Balance : "+balance;
  }else{
    head2.innerHTML="Accont Number Not Matched";
  }
});
  back2.addEventListener("click",()=>{
    container3.style.display="none";
  })
});

// show display

btn4.addEventListener("click",()=>{
    container4.style.display="block";
  let back3 = document.querySelector("#back3");
  let acchead = document.querySelector(".accno34");
  let headblc = document.querySelector(".blc");  
  let name2 = document.querySelector(".name");
  let fnamedis = document.querySelector(".fname");
  let mnamedis = document.querySelector(".mname");
  let adhardis = document.querySelector(".adhar");
  let mobiledis = document.querySelector(".mobile");
  let emaildis = document.querySelector(".email");
  name2.innerText="Your Name : "+name1;
  fnamedis.innerText="Your Father Name : "+fname;
  mnamedis.innerText="Your Mother Name:"+mname;
  adhardis.innerText="Your Adhar Number:"+adhar;
  mobiledis.innerText="Your Mobile Number : "+mobile;
  emaildis.innerText="Your Email  ID : "+email;
  acchead.innerHTML="Your Account Number : "+accountno;
  headblc.innerHTML="Your Balance : "+balance;

  back3.addEventListener("click",()=>{
    container4.style.display="none";
  });
});