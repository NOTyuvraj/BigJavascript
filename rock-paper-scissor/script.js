const userDisplay = document.getElementById('user-ans');
const cpuDisplay = document.getElementById('cpu-ans');
const userScore = document.getElementById('user');
const cpuScore = document.getElementById('cpu');
const user = 0;
const cpu = 0;

tempUser;
tempCpu;

function change(){
    let rando = Math.floor(Math.random()*3)+1;
    if(rando==1){
        tempCpu = "Rock";
        return "Rock";
    }
    else if(rando==2){
        tempCpu = "Paper";
        return "Paper";
    }
    else{
        tempCpu = "Scissor";
        return "Scissor";
    }
}

function check(e){

    if(e==1){
        userDisplay.innerHTML = "Rock";
        cpuDisplay.innerHTML = change();
    }
    else if(e==2){
        userDisplay.innerHTML = "Paper";
        cpuDisplay.innerHTML = change();
    }
    else{
        userDisplay.innerHTML = "Scissor";
        cpuDisplay.innerHTML = change();
    }
}

