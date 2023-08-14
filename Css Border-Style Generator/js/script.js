document.addEventListener("DOMContentLoaded",()=>
{
    const allborder=document.getElementById('all');
    const allvalue=document.getElementById('all-value');
    const border_size=document.getElementById('border');
    const border_value=document.getElementById('border-value');
    
    const code=document.getElementById('code');
    const container=document.querySelector(".container");
    const copy=document.querySelector("#btn");
    const border_styleElement=document.getElementById('border_style');

    var all_radius=10;
    var border_val=5;
    var border_style="solid";
    var border_color="black"
    var coding;

    function allBorderUpdate()
    {
        all_radius=allborder.value;
        border_val=border_size.value;
        allvalue.innerText=all_radius+"px";
        border_value.innerText=border_val+"px"
        coding=`border-radius : ${all_radius}px;
    border:${border_val}px ${border_style} ${border_color};    
            `;
        code.value=coding;
        container.style.cssText=coding;
    }
    
    allborder.addEventListener("mousemove",allBorderUpdate);
    allborder.addEventListener("change",allBorderUpdate);
    
    border_size.addEventListener("mousemove",allBorderUpdate);
    border_size.addEventListener("change",allBorderUpdate);

    border_styleElement.addEventListener("change",function()
    {
        border_style=this.value;
        allBorderUpdate();
    });

    copy.addEventListener("click",()=>
    {
        document.querySelector("textarea").select();
        document.execCommand("copy");
        alert("code copied !!!");
    });


    allBorderUpdate();
});