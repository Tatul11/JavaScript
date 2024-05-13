const navImage = [...document.getElementsByClassName("navImage")];
const slydeImage = [...document.getElementsByClassName("slydeImage")];
const btnLeft = document.getElementsByClassName("left")[0];
const btnRight = document.getElementsByClassName("right")[0];

let curentSlide = 0;

function btnLogic(ind){
  removeIMg(navImage, "navActive");
  removeIMg(slydeImage, "slaydeActive");
  slydeImage[ind].classList.add('slaydeActive')
  navImage[ind].classList.add('navActive')
  document.body.style.backgroundImage = `url(${navImage[ind].src})`

}

btnLeft.addEventListener("click", (e) => {
  curentSlide--;
  if (curentSlide < 0) {
    curentSlide = navImage.length - 1;
  }
btnLogic(curentSlide)
  console.log({curentSlide});
});

btnRight.addEventListener("click", (e) => {
  curentSlide++;
  if (curentSlide > navImage.length -1) {
    curentSlide = 0;
  }
btnLogic(curentSlide)
  // console.log(curentSlide);
});

function removeIMg(arr, className) {
  arr.forEach((e) => e.classList.remove(className));
}

navImage.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    console.log('keydown');
    removeIMg(navImage, "navActive");
    removeIMg(slydeImage, "slaydeActive");
    e.target.classList.add("navActive");
    slydeImage[+e.target.dataset.id].classList.add("slaydeActive");
    document.body.style.backgroundImage = `url(${e.target.src})`
  });
});
