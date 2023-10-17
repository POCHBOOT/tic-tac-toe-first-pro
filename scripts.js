
const X="X";
const O="O";
let r1="";
let r2="";
let r3="";
let r4="";
let r5="";
let r6="";
let r7="";
let r8="";
let r9="";
let y=[r1,r2,r3,r4,r5,r6,r7,r8,r9];
let m=[[],[],[],[],[],[],[],[]];
let no=[[],[],[],[],[],[],[],[]];
let yy=[r1,r2,r3,r4,r5,r6,r7,r8,r9];
const l=[X,O,X,O,X,O,X,O,X];
const tup=[X,O,X,O,X,O,X,O,X];
let dd=[];
let r=document.querySelector("#whole").childNodes.length;

for(let i=0;i<r;i++){
    document.querySelector("#whole").childNodes[i].addEventListener("click",function(){
       
        if(document.querySelector("#whole").childNodes[i].innerHTML!=X && document.querySelector("#whole").childNodes[i].innerHTML!=O){
            let fd=tup.slice(0,1) ;
            y[i]=fd[0];
           dd.push(fd);
          
     document.querySelector("#whole").childNodes[i].innerHTML=fd[0];
     
     
     tup[0]=tup[1];
     tup[1]=document.querySelector("#whole").childNodes[i].innerHTML;
        }else{
            window.alert("taken")
        }
      
    } )
} 

  
let k=[[1,3,5],[7,9,11],[13,15,17],[1,7,13],[3,9,15],[5,11,17],[1,9,17],[5,9,13]];
for(let i=0;i<k.length;i++){
    for(let j=0;j<k[i].length;j++){
       
        document.querySelector("#whole").childNodes[k[i][j]].addEventListener("click",function(){
           
            m[i].push(y[k[i][j]]); 
        })
       
    };
};

window.addEventListener("click",function(){
for(let i=0;i<m.length;i++){
if(m[i].length>=3){
    if(m[i].every(cc => cc===X  )){
        window.alert("player 1");
        document.querySelector("#whole").childNodes.forEach(cc=>cc.innerHTML=null);
        y=[""];
       m=[""];

      
    }else if(m[i].every(cc => cc===O  )){
        window.alert("player 2");
        document.querySelector("#whole").childNodes.forEach(cc=>cc.innerHTML=null);
        y=[""];
      
       m=[""];
             ;
    }
}

}

if(dd.length>=9){
window.alert("draw");
document.querySelector("#whole").childNodes.forEach(cc=>cc.innerHTML=null);
        y=[""];
      
       m=[""];
}
if(y.every(cc => cc==="")){
    if(m.every(cf => cf==="")){
    y=[...yy];

       m=[[],[],[],[],[],[],[],[]];
dd=[];
};
}
})
   
window.addEventListener("click",function(){
document.querySelector("#test").innerHTML=[...dd];})
