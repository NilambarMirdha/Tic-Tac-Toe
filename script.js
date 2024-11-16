let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true; //playerx, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
    
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{                     //going to the each box
    box.addEventListener("click",() =>{   //addEventListener tell that, that boxis clicked
        console.log("box was clicked");   //next function () tell that box was clicked
         if(turnO){
            box.innerText="O";
            turnO=false;
         }
         else{
            box.innerText="X";
            turnO=true;
         }
         box.disabled=true;
        //  After clicking the box, the box ix disabled

        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        // for reset the boxes
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");// when someone is win then the hide is remove and show the msgContainer
    disableBoxes();

}
const checkWinner =() =>{
    for(let pattern of winPatterns){
      
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("Winner",pos1Val);  
            showWinner(pos1Val);
            // disableBoxes();
        } 
    }
    }
}

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
