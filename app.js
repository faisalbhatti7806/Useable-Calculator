var vel = document.getElementById("zee");
function add(v){
vel.value += v ;
}
function anser(){
    vel.value=eval(vel.value);
}
function clr(){
    vel.value ="";
}
function squar(){
    vel.value=Math.sqrt(vel.value);
}
function cancel(){
//     var arr =vel.value.split("");
//     arr.pop();
//    vel.value= arr.join("");
   vel.value= vel.value.slice(0,-1);

    // vel.value=vel.value.substr(0,vel.value.length-1);
}