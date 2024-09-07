let numbers=document.getElementById("input1");
let selection=document.getElementById("input2");
let colors=document.getElementById("input3");
let buttons=document.getElementById("btn");
let containers=document.getElementById("container");
buttons.addEventListener("click",function()
{
    let numvalue=numbers.value;
    let colorvalue=colors.value;
    let selectvalue=selection.value;
    console.log(numvalue);
    console.log(colorvalue);
    console.log(selectvalue);
    let newelement=document.createElement('div');
    newelement.classList.add("square");
    if(selectvalue==="circle")
    {
        newelement.classList.add("circle");
    }
    containers.appendChild(newelement);

});