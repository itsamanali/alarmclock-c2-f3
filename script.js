

let timesArr = [];

timesArr.push(new Date())

function addTimerr(){
//     let hh = document.getElementById("hh").value;
//     let mm = document.getElementById("mm").value;
//     let ss = document.getElementById("ss").value;

    console.log(hh,mm,ss);
    let da = new Date();
    da.setHours(hh.value);
    da.setMinutes(mm.value);
    da.setSeconds(ss.value);
  
    timesArr.push(da);
   
}

setInterval(render,1000);

let timers = document.getElementById("timers");
function render(){
    if(timesArr.length==0){
        timers.innerText="You have No Timers Currently!"
    }else{
        timers.innerHTML=""
        timesArr.forEach((e)=>{
            e.setSeconds(e.getSeconds()-1);
            if(e.getSeconds()==0){
                e.setMinutes(e.getMinutes()-1);
                e.setSeconds(60);

            }
            if(e.getMinutes()==0){
                e.setHours(e.getHours()-1);
                e.setMinutes(60);

            }
            let div = document.createElement('div');
            div.className="row";
            if(e.getHours()==0 && e.getMinutes()==0 && e.getSeconds()==0){
                div.className = "over";
                div.innerHTML=`
    
                <div class="time">
                   Timer is Over
                </div>
                <button  class="delBtn">Stop</button>
             
            `
            }else{

         
            div.innerHTML=`
    
                <div class="time">
                    <span><input type="number" min="0" max="60"  value="${e.getHours()}"></span>
                    :<span><input type="number"  min="0" max="60"  value="${e.getMinutes()}"></span>:
                    <span><input type="number" min="0" max="60"   value="${e.getSeconds()}"></span>
                </div>
                <button  class="delBtn">Stop</button>
             
            `
            }
            timers.appendChild(div);
        })
    }
}