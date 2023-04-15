//declarando constantes e atribuindo a elas referências para elementos HTML 
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const scoreElement = document.querySelector(".score");
const restartButton = document.querySelector(".restart-btn");

let score = 0;

//responsável por fazer o personagem pular
const jump = () => {
  mario.classList.add("jump");
  
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// responsável por detectar colisões entre o Mario e o cano e também para atualizar a pontuação do jogador
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition < 70 && pipePosition > 0 && marioPosition < 70) {
    
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "/images/gameovermario.png";
    mario.style.width = "70px";
    mario.style.marginLeft = "10px";
    pts = true;
    clearInterval(loop);
  }
    
    score++;
    Math.floor(score);
    
    scoreElement.innerText = score;
    
  
}, 10);

//reiniciar o jogo
restartButton.addEventListener("click", () => {
  location.reload();
});

//ao clicar, a função jump() é chamada
document.addEventListener("click", jump);
