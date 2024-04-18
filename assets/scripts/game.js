const rudolph = document.querySelector('.rudolph');
const sbp = document.querySelector('.sbp');
const clouds = document.querySelector('.clouds');
const clouds2 = document.querySelector('.clouds2');
let score = 0;

const updateScore = () => {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
}

const increaseScore = () => {
    score++;
    updateScore();
}

const jump = () => {
    rudolph.classList.add('jump');
    setTimeout(() => {
        rudolph.classList.remove('jump');
    }, 500);
}

document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});

const loop = setInterval(() => {

    const sbpPosition = sbp.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const clouds2Position = clouds2.offsetLeft;
    const rudolphPosition = +window.getComputedStyle(rudolph).bottom.replace('px', '');
    increaseScore();

    if(sbpPosition <=220 && sbpPosition > 80  && rudolphPosition < 50 ){

        sbp.style.animation = 'none';
        sbp.style.left = `${sbpPosition}px`

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        clouds2.style.animation = 'none';
        clouds2.style.left = `${clouds2Position}px`

        rudolph.src = '../images/morte.png'

        clearInterval(loop);
    }

},10)

document.addEventListener('keydown', jump);


