const userDisplay = document.getElementById('user-ans');
const cpuDisplay = document.getElementById('cpu-ans');
const userScore = document.getElementById('user-score');
const cpuScore = document.getElementById('cpu-score');
let user = 0;
let cpu = 0;

let tempUser;
let tempCpu;

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

function updateScore(){
    userScore.innerHTML = user;
    cpuScore.innerHTML = cpu;
}

function changeScore(tempCpu , tempUser){
    if((tempUser==="Paper" && tempCpu==="Rock" ) || (tempUser==="Rock" && tempCpu==="Scissor") || (tempUser==="Scissor" && tempCpu==="Rock")){
        user += 1; 
    }
    else if((tempUser==="Paper" && tempCpu==="Paper" ) || (tempUser==="Scissor" && tempCpu==="Scissor") || (tempUser==="Rock" && tempCpu==="Rock")){
        
    }else{
        cpu += 1;
    }
}

function check(e){

    if(e==1){
        tempUser = "Rock";
        userDisplay.innerHTML = "Rock";
        cpuDisplay.innerHTML = change();
        changeScore(tempCpu , tempUser);
        updateScore()
    }
    else if(e==2){
        tempUser = "Paper";
        userDisplay.innerHTML = "Paper";
        cpuDisplay.innerHTML = change();
        changeScore(tempCpu , tempUser);
        updateScore()
    }
    else{
        tempUser = "Scissor";
        userDisplay.innerHTML = "Scissor";
        cpuDisplay.innerHTML = change();
        changeScore(tempCpu , tempUser);
        updateScore()
    }
}

function resetScore(){
    user = 0;
    cpu = 0;
    userScore.innerHTML = 0;
    cpuScore.innerHTML = 0;
}