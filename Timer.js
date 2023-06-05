let b1=document.getElementsByClassName("btn")[0]
// b1.style.backgroundColor="green"
let b2=document.getElementsByClassName("btn")[1]
// b2.style.backgroundColor="cyan"
let b3=document.getElementsByClassName("btn")[2]
// b3.style.backgroundColor="red"

//

let min=00;
let sec=00;
let mil=00;
let tid= null;
let target=document.getElementsByTagName("p")[0]
target.innerHTML=`0${min} : 0${sec} : 0${mil}`
// start button function
b1.addEventListener('click',function(){
    if(tid!==null)
    {
        clearInterval(tid)
    }
    tid=setInterval(check,10);
})

//reset button function
b2.addEventListener('click',function(){
    clearInterval(tid);
    min=0;
    sec=0;
    mil=0;
    target.innerHTML=`00 :00 :00`
})

//stop butoon function
b3.addEventListener('click',function(){
    clearInterval(tid);
})



function check(){
    mil++;
    if(mil==100)
    {
        sec++;
        mil=0;
        if(sec==60)
        {
            min++;
            sec=0;
        }
    }
    let milstring= mil<10 ? `0${mil}`: mil;
    let secstring= sec<10 ? `0${sec}`: sec;
    let minstring= min<10 ? `0${min}`: min;
    target.innerHTML=`${minstring} : ${secstring} : ${milstring}`
}

