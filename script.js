let ctr = 1
function addTodo(){
    const inpText = document.getElementById("input").value
    const newDiv = document.createElement("div");
    const newSpan= document.createElement("span")
    const newBtn = document.createElement("button")

    document.querySelector("body").appendChild(newDiv);
    //Append span and btn to newDiv
    newSpan.innerText = inpText
    newBtn.innerText = "Delete"
    newDiv.appendChild(newSpan)
    newDiv.appendChild(newBtn)
    
}