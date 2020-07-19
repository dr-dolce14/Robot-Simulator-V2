console.log("WORKING HARD!")
document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  
  
  // ADD CODE HERE!
  const moves = document.getElementById('moves-container')
  const moveButton = document.getElementById('move-button')
  let moving = false

  
  document.addEventListener("keydown", function(e) {
    const direction = document.createElement("li")
    if (e.keyCode === 37) {
    direction.textContent = "left"
    moves.append(direction)
    }
    if (e.keyCode === 38) {
    direction.textContent = "up"
    moves.append(direction)
    }
    if (e.keyCode === 39) {
    direction.textContent = "right"
    moves.append(direction)
    }
    if (e.keyCode === 40) {
    direction.textContent = "down"
    moves.append(direction)
    }
    if (e.key === "Backspace") {
      if (moves.lastChild) {
        moves.lastChild.remove()
      } else {
        alert("nothing to delete!")
      }
      
    }
  })
  

  moveButton.addEventListener("click", function(e) {
    if (moving === false) {
    setInterval(() => moveRobot(), 500)
    }
  })


    function moveRobot() {
        const firstMove = moves.querySelector('li')
        if (firstMove) {
        const dir = firstMove.textContent
        move(dir)
        firstMove.remove() 
        moving = true
       } else {
         alert("no more directions!")
         moving = true
        }
       
  }

  // cannot get the alert to go away and restart the game
  
  }) // DOMContentLoaded end


