let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number;
}
let results=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid number");
        }
}
function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1);
}