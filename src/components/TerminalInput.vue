<script setup lang="ts">
import { onMounted } from 'vue';

// const textInput = document.getElementById('text-input');
// const cursor = document.getElementById('cursor');
// const history = document.getElementById('output-div');
let textInput: HTMLElement | null;
let cursor: HTMLElement | null;
let history: HTMLElement | null;
let input = ''
let errorArray: string[] = [];
onMounted(()=>{
    textInput = document.getElementById('text-input');
    cursor = document.getElementById('cursor');
    history = document.getElementById('output-div');
});


document.addEventListener('keydown',(event)=>{
    const keyValue = event.key;
    // console.log(`cursor is ${cursor == null }`);
    // console.log(`textInput is ${textInput == null }`);
    // console.log(`history is ${history == null }`);
    if(cursor == null || textInput == null || history == null){return}
    if(keyValue.length === 1){
        input += keyValue;
        if(keyValue === ' '){
            cursor.innerHTML = "&nbsp;";
        }else{
            cursor.innerText = keyValue;
        }
        textInput.innerText = input.substring(0, input.length -1);
        // if(cursor.innerHTML !== '&nbsp;'){
        //     cursor.innerText = keyValue;
        // }else{
        //     cursor.innerHTML = keyValue;
        //     textInput.innerText = command.substring(0, command.length -1);
        // }
    }else if(keyValue === "Backspace"){
        if(input.length >= 1){
            input = input.substring(0, input.length -1);
            if(input.substring(input.length -1) === " " || input.length === 0){
                cursor.innerHTML = "&nbsp;";
            }else{
                cursor.innerText = input.substring(input.length -1);
            }
            textInput.innerText = input.substring(0, input.length -1);
            
        }
    }else if(keyValue === "Enter"){
        const output = document.createElement('pre');
        output.innerText = input;
        history.appendChild(output);
        let response = processCommand(input);
        if(response === 'error'){
            const errMsg = document.createElement('pre');
            errMsg.innerText = errorArray[errorArray.length-1];
            history.appendChild(errMsg);
        }else if(response === 'clear'){
            history.innerHTML = '';
        }else{
            const result = document.createElement('pre');
            result.innerText = response;
            history.appendChild(result);
        }
        
        input = '';
        textInput.innerText = input;
        cursor.innerHTML = '&nbsp;'

    }
    
});

function processCommand(str: string): string{
    let arr = str.split(' ');
    if(arr[0] === 'clear'){
        return 'clear';
    }else if(arr[0] === 'add'){
        arr.shift()
        return add(arr);
    }else{
        errorArray.push('--invalid command')
        return 'error';
    }
}

function add(numbers: string[]):string{
    let addArray:number[] = [];
    numbers.forEach((arg)=>{
        if(!isNaN(Number(arg))){
            addArray.push(Number(arg));
        }
    });
    if(addArray.length >0){
        return addArray.reduce((total,value)=>{
            return total + value;
        }).toString();
    } else {
        errorArray.push('--invalid arguments')
        return 'error';
    }
}
</script>

<template>
    <div id="output-div"></div>
    <div id="input-div">
        <pre>><pre id="text-input"></pre><span id="cursor">&nbsp;</span></pre>
    </div>
</template>

<style scoped>
*{
    color: white;
    font-family: monospace;
}
pre {
    white-space: pre-wrap;
}
#input-div{
    margin-left: .5rem;
}
#text-input{
    display: inline-block;
}
#cursor{
    /* position: relative; */
    /* bottom: 2em;
    left: 50px; */
    display: inline-block;
    background-color: white;
    color: black;
    animation: cursor-blink 1s steps(10,start) infinite;
}
@keyframes cursor-blink {
    to{
        /* visibility: hidden; */
        color: white;
        background-color: transparent;
    }
}
</style>