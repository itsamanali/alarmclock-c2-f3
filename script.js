
let da = new Date();
da.setHours(10);
console.log(da.getHours());

let timesArr = [];

class Timee{
    constructor(hh,mm,ss){
        this.hr=hh;
        this.min=mm;
        this.sec=ss;
    }
}

function addTimer(){
    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ss = document.getElementById("ss").value;

    
    let da = new Date();
    da.setHours(hh);
    da.setMinutes(mm);
    da.setSeconds(ss);
    console.log(da);
    timesArr.push(da);
    render()
}

// setInterval(render,1000);

let timers = document.getElementById("timers");
function render(){
    if(timesArr.length==0){
        timers.innerText="You have No Timers Currently!"
    }else{
        timesArr.forEach((e)=>{
            let div = document.createElement('div');
            div.className="row";
            div.innerHTML=`
    
                <div class="time">
                    <span><input type="number" min="0" max="60" id="hh" value="${e.hr}"></span>
                    :<span><input type="number"  min="0" max="60" id="mm"  value="${e.min}"></span>:
                    <span><input type="number" min="0" max="60" id="ss"  value="${e.sec}"></span>
                </div>
                <button  id="delBtn">Stop</button>
             
            `
        timers.appendChild(div);
        })
    }
}