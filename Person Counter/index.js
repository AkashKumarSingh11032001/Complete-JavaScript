
let count = 0;
function increment(){
    count += 1;
    document.getElementById("count-el").innerHTML = count;
}

function decrement(){
    count -= 1;
    if(count < 0){
        count = 0;
    }else{
        document.getElementById("count-el").innerHTML = count;
    }
}

function save(){
    let curr_messg = document.getElementById("para")
    curr_messg.innerHTML += count + "-"
}

