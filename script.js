let score = 0;
let scoreInterval = setInterval(() => {
    document.getElementById("score").textContent = score++;
}, 100);


document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});


function jump() {
    let dino = document.getElementById("dino");
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 500);
    }
}


let checkCollision = setInterval(function() {
    let dino = document.getElementById("dino");
    let obstacle = document.getElementById("obstacle");
   
    let dinoRect = dino.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();
   
    if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top
    ) {
        document.getElementById("score").textContent = "Game Over! Score: " + score;
        clearInterval(checkCollision);
        clearInterval(scoreInterval);
        obstacle.style.animation = "none";
    }
}, 50);
