let boxes = document.querySelectorAll(".box");
let restbtn= document.querySelector("#resetbttn");
let newgamebttn= document.querySelector("#new_game");
let msgboxx= document.querySelector(".msg_container");
let msg= document.querySelector("#msg");
let turn0=true // PLAYER 0;

const win_Pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]

const resetGame =() =>{
    let turn0=true ;
    EnableBox();
    msgboxx.classList.add("hide");
}
// event lister to be added for clicking of boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(`Box was clicked`);
        if(turn0){
            box.innerText="0"; // player 0
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const EnableBox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner =(winner)=>{
  msg.innerText=` ${winner} WON`; 
   msgboxx.classList.remove("hide");
   disableBox();
}
const checkWinner =() =>{
    for(let pattern of win_Pattern){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val !=""&& pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("WINNER",pos1val);

                showwinner(pos1val);
            }
          
        }
    
    }
};

newgamebttn.addEventListener("click",resetGame);
restbtn.addEventListener("click",resetGame);
