key1  = document.getElementById('1')
key2  = document.getElementById('2')
key3  = document.getElementById('3')
key4  = document.getElementById('4')
key5  = document.getElementById('5')
key6  = document.getElementById('6')
key7  = document.getElementById('7')
key8  = document.getElementById('8')
key9  = document.getElementById('9')
key0  = document.getElementById('0')
key_ac  = document.getElementById('ac')
key_del  = document.getElementById('del')
key_add  = document.getElementById('add')
key_sub  = document.getElementById('sub')
key_mul  = document.getElementById('mul')
key_div  = document.getElementById('div')
key_dot  = document.getElementById('dot')
key_calc  = document.getElementById('calc')
key_div  = document.getElementById('div')
result_placeholder  = document.getElementById('result')

let firstNumDigits = [];
let secondNumDigits = [];   
let tempDisplay =[];

/* 1 = add, 2=sub, 3=mul, 4=dev */
let operation = 0;

let calc_done = 0;

function calculate_result () {

    console.log("firstNumDigits");
    console.log(firstNumDigits); 


    /*firstNumDigits.push(1);
    secondNumDigits.push(2); */
    firstNum = firstNumDigits.join("");
    secondNum  = secondNumDigits.join("");

    
    console.log("firstnum");
    console.log(firstNum);
    console.log("secondnum");
    console.log(secondNum);

    let result=0;
    /*result = firstNum * secondNum;*/

    switch(operation) {
    case 1:
        result = parseInt(firstNum) + parseInt(secondNum);
        // code block
        break;
    case 2:
        result = parseInt(firstNum) - parseInt(secondNum);
        break;
    case 3:
        result = parseInt(firstNum) * parseInt(secondNum);
        break;
    case 4:

        if (parseInt(secondNum) != 0)
            result = parseInt(firstNum) / parseInt(secondNum);
        else    
            alert('Cannot divide by 0')
        break;
    default:
        alert('Error : illegal operation')
    }

    result_placeholder.innerText = result;
    console.log("result");
    console.log(result);

    operation =0; 
    firstNumDigits=[];
    secondNumDigits=[];
    calc_done=1;
}

function store_digits (digit) {

    console.log("calc-done")
    console.log(calc_done)
    console.log("operation")
    console.log(operation)

    if (calc_done === 1) {
        operation =0; 
        firstNumDigits=[];
        secondNumDigits=[];
        calc_done=0; 
        tempDisplay=[];

    }

    if ( operation > 0) {
        if (secondNumDigits != null)
            secondNumDigits.push(digit);
    } else {
        if (firstNumDigits != null)
            firstNumDigits.push(digit);
    }

    tempDisplay.push(digit);
    result_placeholder.innerText = tempDisplay.join("");



} 

function store_operation (operator) {
    operation = operator;

    switch(operation) {
    case 1:
        tempDisplay.push('+');
        // code block
        break;
    case 2:
        tempDisplay.push('-');
        break;
    case 3:
        tempDisplay.push('*');
        break;
    case 4:
        tempDisplay.push('/');
        break;
    default:
        alert('Error : illegal operation')
    }
    result_placeholder.innerText = tempDisplay.join("");

}

function delete_operation() {
    if (tempDisplay != null) {
        console.log('tempDisplay');
        console.log(tempDisplay);
        tempDisplay.pop();
        if ( operation === 0)
            firstNumDigits.pop();
        else
            secondNumDigits.pop();
            
        console.log(tempDisplay);

        result_placeholder.innerText = tempDisplay.join("");
        console.log(result_placeholder);

    }


}

key_calc.addEventListener('click', calculate_result )
key1.addEventListener('click', () =>{
                        console.log(1);
                        store_digits(1);
 } )
 key2.addEventListener('click', () =>{
                        store_digits(2);
 } )
 key3.addEventListener('click', () =>{
                        store_digits(3);
 } )
 key4.addEventListener('click', () =>{
                        store_digits(4);
 } )
 key5.addEventListener('click', () =>{
                        store_digits(5);
 } )
 key6.addEventListener('click', () =>{
                        store_digits(6);
 } )
 key7.addEventListener('click', () =>{
                        store_digits(7);
 } )
 key8.addEventListener('click', () =>{
                        store_digits(8);
 } )
key9.addEventListener('click', () =>{
                        store_digits(9);
 } )
key0.addEventListener('click', () =>{
                        store_digits(0);
 } )
key_dot.addEventListener('click', () =>{
                        store_digits('.');
 } )
key_add.addEventListener('click', () =>{
                        store_operation(1);
                        
 } )
key_sub.addEventListener('click', () =>{
                        store_operation(2);

 } )
key_mul.addEventListener('click', () =>{
                            store_operation(3);
 } )
key_div.addEventListener('click', () =>{
                            store_operation(4);

 } )
key_del.addEventListener('click', () =>{
                            delete_operation();

 } )

key_ac.addEventListener('click', () =>{
                       firstNumDigits = [];
                       secondNumDigits = []; 
                       result_placeholder.innerText = "";
                       operation =0;
                       calc_done=0;
                       tempDisplay=[];

 } )
 



