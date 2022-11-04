const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];
let currentImgIndex = 0;

const sliderImgEl = document.querySelector(".slider-img");
const sequenceContainerEl = document.querySelector(".sequence-container");
const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");

console.log(btnNext, btnPrev);
sliderImgEl.src = images[currentImgIndex];

for (let i = 0; i < images.length; i++) {

    sequenceContainerEl.innerHTML += `<img src="${images[i]}" class="slider-img">`;
}

btnNext.addEventListener("click", function () {
    console.log("Next btn click");
    const oldseq = document.querySelector(`.sequence-container :nth-child(${currentImgIndex + 1})`);
    oldseq.classList.remove("active")
    currentImgIndex++;
    const ultimoIndiceDisponibile = images.length - 1;

    if (currentImgIndex > ultimoIndiceDisponibile) {
        currentImgIndex = 0;
    }
    sliderImgEl.src = images[currentImgIndex];
});

btnPrev.addEventListener("click", function () {
    console.log("Prev btt click");
    const oldseq = document.querySelector(`.sequence-container :nth-child(${currentImgIndex + 1})`);
    oldseq.classList.remove("active")
    currentImgIndex--;

    if (currentImgIndex < 0) {
        currentImgIndex = 4;
    }
    sliderImgEl.src = images[currentImgIndex];

});