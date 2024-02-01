
function centerData(){
    let promise =new Promise((res,rej)=>{
        var request=new XMLHttpRequest();
        const capitalized=document.getElementById('input1').value
    const state=  capitalized.charAt(0).toUpperCase() + capitalized.slice(1)
        request.open('GET',`https://isro.vercel.app/api/centres`)
        request.send();
        request.onload=function(){
            if(request.status==200){
                var data=JSON.parse(request.response)
                let finaldata=data.centres
               let output=finaldata.filter(element=>element.State==state)
               let finalout=output.filter(element=>element.State==state)
                let answer=finalout.find(element=>(element),state)   
             if (answer===undefined){
                rej("No centers in the state, please give another state name ")
             }
             else{
                ans1=answer.name
                ans2=answer.Place
                res(ans1,ans2)
             }
            }
          else{
                rej("some error occured")
            }
        
        }
    }
    )
promise.then((data)=>{console.log(data)

let weather=document.getElementById("dataall")
        weather.innerHTML=`<div class="card" style="width:auto;">
            <img class="image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/800px-Indian_Space_Research_Organisation_Logo.svg.png" 
            class="card-img-top" alt="ISRO Image">
            <div class="card-body">
        <h5 class="card-title"><b> State of : ${document.getElementById("input1").value}</b></h5>
        <p class="card-text"><b>Name of the center: </b>${ans1}</p>
        <p class="card-text"><b>Place: </b>${ans2}</p>
            </div>
            </div>`
})
promise.catch((err)=>{console.log(err)
    let weather=document.getElementById("dataall")
    weather.innerHTML=`<p class="card-text1">${err}</p>`
}) 
}            