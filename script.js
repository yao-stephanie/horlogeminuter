

setInterval(DisplayClock, 500);

function DisplayClock(){
    let time = new Date();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let seconde = time.getSeconds();

    if(hours > 12){
        hours = hours - 12  
    }
    else if(hours == 0){
        hours = 12
    }
    else if(hours < 10){
        hours = '0' + hours ;
    }
    else if(minute < 10){
        minute = '0' + minute ;
    }
    else if(seconde < 10){
        seconde = '0' + seconde ;
    }

    document.getElementById('clock').innerHTML =` ${hours} : ${minute} : ${seconde}`;
}