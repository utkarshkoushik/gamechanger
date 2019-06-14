var use = localStorage.getItem("un");
var mec= localStorage.getItem("usn");


var val=use+mec;
var q=mec+use;
console.log(val)
console.log(q);
var ka=0;

function start(){
    // axios.post('http://localhost:3002/chat',{
    //     username: val,
    //     username1:use,
    //     message: "hi"
       
    // })
    // .then((response)=>{

    //     console.log("stop");
    // })
    // .catch((error)=>{

    //     console.log(error);
    // })
    
    axios.post('http://localhost:3002/orders',{
        username: use,
        username1: mec
       
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })

}

function msg(){
    axios.post('http://localhost:3002/chat',{
        username: val,
        username1:use,
        message: document.getElementById('mes').value
       
    })
    .then((response)=>{
        document.getElementById('mes').value=''
        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })   
}
//
setInterval(function(){
    document.getElementById('ab').innerHTML=`<button style="; color:blue; -moz-border-radius: 1em 1em 1em 1em;
    -webkit-border-radius: 1em;
    border-radius: 1em 1em 1em 1em; height: 3em; width: 97%; background-color: white; margin: 1em;">Your are Talking to: ${mec}</button>`
        axios.get(`http://localhost:3002/chat`) 
    .then((response)=>{
        console.log("axios")
     var si=response.data.length
     for(var i=ka;i<si;i++)
     {
         if(response.data[i].username==val)
         {
             if(response.data[i].username1==use){
            document.getElementById('me').innerHTML+=`
           
            <div class="luky" style="margin-right: 2em;" >
            <div class="content" > ${response.data[i].message}</div>
     
            </div>
            `
           
            
            
         }
        else {document.getElementById('me').innerHTML+=`
        
        <div class="krm" style="margin-left: 2em;">
         <div class="content" > ${response.data[i].message}</div>
  
         </div>
        
        `

        }
        
        }
        else if(response.data[i].username==q)
         {
             if(response.data[i].username1==use){
            document.getElementById('me').innerHTML+=`
            
            <div class="luky" style="margin-right: 2em;" >
            <div class="content" > ${response.data[i].message}</div>
     
            </div>
            `
         }
         else {document.getElementById('me').innerHTML+=`
        
         <div class="krm" style="margin-left: 2em;" >
         <div class="content" > ${response.data[i].message}</div>
  
         </div>
        
        `

        }
        
        }
     }
     ka=i;
        
        
    })

    .catch((err) => {
       console.log(err)
    })
    
    

    
    
    },100);

