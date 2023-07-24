class waqt{
     isOver;
     time;
     constructor(p2){
       this.isOver = false;
       this.time = p2;
       this.isPlayed = true; 
     }

}

let timesArr = [];

// timesArr.push(new Date())
// console.log(new Date());
function addTimerr(){
//     let hh = document.getElementById("hh").value;
//     let mm = document.getElementById("mm").value;
//     let ss = document.getElementById("ss").value;

    
    let da = new Date();
    da.setHours(hh.value);
    da.setMinutes(mm.value);
    da.setSeconds(ss.value);
   
    let obj = new waqt(da);
    timesArr.push(obj);
   
}

let sound = new Audio("./alarm.mp3");
function stop(e) {
    sound.pause();
   
}
setInterval(render,1000);

let timers = document.getElementById("timers");
function render(){
    if(timesArr.length==0){
        timers.innerText="You have No Timers Currently!"
    }else{
        timers.innerHTML=""
        timesArr.forEach((e)=>{
            if(!e.isOver){
                e.time.setSeconds(e.time.getSeconds()-1);

                if(e.time.getSeconds()==0){
                    e.time.setMinutes(e.time.getMinutes()-1);
                    e.time.setSeconds(60);

                }
                if(e.time.getMinutes()==0){
                    e.time.setHours(e.time.getHours()-1);
                    e.time.setMinutes(60);

                }
            }
            let div = document.createElement('div');
            div.className="row";
            if(e.time.getHours()==0 && e.time.getMinutes()==0 && e.time.getSeconds()==0){
                e.isOver = true;
                if(e.isPlayed){
                    sound.play();
                    e.isPlayed = false;
                }
               
                
                div.className = "over";
                div.innerHTML=`
    
                <div class="time">
                   Timer is Over
                </div>
                <button onclick = "stop()" class="delBtn">Stop</button>
             
            `
            }else{

         
            div.innerHTML=`
    
                <div class="time">
                    <span><input type="number" min="0" max="60"  value="${e.time.getHours()}"></span>
                    :<span><input type="number"  min="0" max="60"  value="${e.time.getMinutes()}"></span>:
                    <span><input type="number" min="0" max="60"   value="${e.time.getSeconds()}"></span>
                </div>
                <button  class="delBtn">Stop</button>
             
            `
            }
            timers.appendChild(div);
        })
    }
}