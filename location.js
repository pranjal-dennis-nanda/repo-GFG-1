let numbers=document.getElementById("input1");
let selection=document.getElementById("input2");
let colors=document.getElementById("input3");
let buttons=document.getElementById("btn");
let containers=document.getElementById("container");
let flag=false;
buttons.addEventListener("click",function()
{
   if(flag)
   {
    location.reload();
    return;
   }
   flag=true;
    let numvalue=numbers.value;
    let colorvalue=colors.value;
    let selectvalue=selection.value;
    numbers.value=" ";
   
    console.log(numvalue);
    console.log(colorvalue);
    console.log(selectvalue);
    if(numvalue!=="" && flag===true)
{
    
    for(let i=1;i<=numvalue;i++)
{
    setTimeout(()=>{
    let newelement=document.createElement('div');
    newelement.classList.add("square");
    if(selectvalue==="circle")
    {
        newelement.classList.add("circle");
    }
    newelement.style.backgroundColor=colorvalue;
    containers.appendChild(newelement);
    setTimeout(function(){
        newelement.style.opacity='1';
        newelement.style.transform='scale(1)';
    },100);
    newelement.style.margin='20px';
  
},i*1000);
setTimeout(function(){
    containers.innerHTML=" ";
},numvalue*1000+3000);
}
}

else{
    alert("no value entered");
  throw new Error("no value enterd");
}
});

   