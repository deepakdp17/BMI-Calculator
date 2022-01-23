
//Dark-light theme

const container = document.querySelector(".container");
const btn = document.querySelector(".toggle_btn");
const innerCircle = document.querySelector(".inner_circle");
const toogleBtn = document.querySelector(".toggle_btn");
let text = document.querySelector(".mode_status");

btn.addEventListener("click", ()=>{
    innerCircle.classList.toggle("move");
    container.classList.toggle("change");
    text.classList.toggle('dark');
    toogleBtn.classList.toggle("color");
    if (text.classList.contains('dark')) {
        text.innerHTML = "Dark Mode";
    }else{
        text.innerHTML = "Light Mode";
    }
});

//BMI calculations

var result;
function calculateBMI(){
    let weight = document.getElementById("inp_weight").value;
    let height = document.getElementById("inp_height").value; 
    
    if(weight == "" && height == ""){
        alertify.alert("Alert","Enter value for Weight and Height");
    }
    else if (weight == "") {
        alertify.alert("Alert","Enter value for Weight");
    }
    else if (height == "") {
        alertify.alert("Alert","Enter value for Height");
    }
    else{
        //height entered in centimeters.dividing by 100 to convert it into meters
        height=height/100;
        result=weight/(height*height);
        result=result.toFixed(1);
    }
}
function displayResult(){
    if(result == undefined){
        alertify.alert("Error","Enter Input values");
        return;
    }
    let msg1=document.getElementById("bmi-value");
    let msg2=document.getElementById("status");
    msg1.innerText=`Your BMI Value: ${result}`;
    if(result<18.5){
        msg2.innerText="Underweight";
    }else if(result<=25.0){
        msg2.innerText="Normal";
    }else{
        msg2.innerText="Overweight";
    }
}
function refresh(){
    document.getElementById("inp_weight").value="";
    document.getElementById("inp_height").value="";
    document.getElementById("bmi-value").innerText="";
    document.getElementById("status").innerText="";
    result=undefined;
}
