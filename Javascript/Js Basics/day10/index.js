
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]")

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatePassword");
const allcheckBox = document.querySelectorAll("input[type=checkbox]");
const symbol = '!@#$%^&*(){}":><?/.,;/*-+][;.|';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

//set password Length
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
}

function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,90));
}

function generateSymbol(){

        const randNum = getRndInteger(0,symbol.length);
        return symbol.charAt(randNum);
    
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolCheck.checked) hasSym =true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 0){
        setIndicator("#0f0");
    }else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength>=6
    ){
        setIndicator('#ff0');
    }
    else{
        setIndicator("#f00");
    }
 }

 async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";
    }
    catch{
        copyMsg.innerText="Failed";
    }  

    //to make copy wala visible
    copyMsg.classList.add("active");
    setTimeout( () => {
        copyMsg.classList.add("active");
    },2000)
 }

 function shufflePassword(array){
    for(let i=array.length-1;i>0;i--){
        const j = Math.floor(Math.random() * (i*1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((rl) => (str += el));
    return str;
 }


 function handleCheckBoxChange(){
    checkCount = 0;
    allcheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
 }

 allcheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change',handleCheckBoxChange)
 })

 

 inputSlider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    handleSlider();
 })

 copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value){
        copyContent();
    }
 })

 
 //generate password
 generateBtn.addEventListener("click", () => {
    //none of be checkbox are selected
    if(checkCount<=0) return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    console.log("starting the journey");
    //lets start the journey to find new password
    //remove old pass
    password = "";

    //lets put the stuff mentioned b checkbox

    // if(uppercaseCheck.checked){
    //     password = generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password = generateLowerCase();
    // }
    // if(numberCheck.checked){
    //     password = generateRandomNumber();
    // }
    // if(symbolCheck.checked){
    //     password = generateSymbol();
    // }


    let funcArr = [];
    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);
   
    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);
    
    if(numberCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolCheck.checked)
        funcArr.push(generateSymbol)

    
    
        for(let i=0;i<=funcArr.length;i++){
            password += funcArr[i]();
        }

        for(let i=0;i<passwordLength-funcArr.length;i++){
            let randomIndex = getRndInteger(0, funcArr.length);
            password += funcArr[randomIndex]();
        }

        //shuffel the pass

        password = shufflePassword(Array.from(password));

        passwordDisplay.value=password;
        //clacualte strength
        calcStrength();


    })

