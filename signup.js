const tick=document.querySelector(".true");
function wait(){
    const promise= new Promise(function(resolve){
        setTimeout(function(){
            resolve(alert("All is good!!"));
            tick.style.display="flex"
        }
        ,2000);

    return promise;
})};

const button1 = document.querySelector("div > button");
button1.addEventListener("click", async function(e){
    e.preventDefault();
    let uFname=document.querySelector("[name='Fname']");
    let uphone=document.querySelector("[name='phone']");
    let ucity=document.querySelector("[name=city]");
    let uaddress=document.querySelector("[name=street]");
    let uCFname=document.querySelector("[name=CFname]");
    let uCLname=document.querySelector("[name=CLname]");
    let uCnumber=document.querySelector("[name=Cnumber]");
    let uCsecure=document.querySelector("[name=Csecure]");
    let uEXdate=document.querySelector("[name=EXdate]");
    let ucountry=document.querySelector("[name=country]");
    let message1=document.querySelector(".message1");

    if(uFname.value=="" || uphone.value=="" || ucity.value=="" || uaddress.value=="" || uCFname.value=="" || uCLname.value=="" || uCnumber.value=="" || uCsecure.value=="" || uEXdate.value=="" || ucountry.value==""){
        message1.innerHTML="The required information is missing";
    }

    else{
        message1.innerHTML="";
       await wait();
    }

});

const button2=document.querySelector(".button2");
button2.addEventListener("click", async function(e){
    e.preventDefault();
    const uLoginName=document.querySelector("[name='loginName']");
    const uLoginEmail=document.querySelector("[name='loginEmail']");
    const uLoginPhone=document.querySelector("[name='loginPhone']");

    const message2=document.querySelector(".message2");

    if(uLoginName.value=="" || uLoginEmail.value=="" || uLoginPhone.value==""){
        message2.innerHTML="The required information is missing";
    }

    else{
        message2.innerHTML="";
        await wait();
    }

});
