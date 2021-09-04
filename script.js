const imageContainer = document.getElementById("imageTarget");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const desktopQuote = document.getElementById("desktopQuote");
const mobileQuote = document.getElementById("mobileQuote");
const desktopName = document.getElementById("desktopName");
const desktopOccupation = document.getElementById("desktopOccupation");
const mobileOccupation = document.getElementById("mobileOccupation");
const mobileName = document.getElementById("mobileName");

let tanya = false;
const changeSlide = () => {
  tanya = !tanya;
  if (tanya) {
    imageContainer.src = "images/image-john.jpg";
    mobileQuote.innerText =
      " “ If you want to lay the best foundation possible I’d recommend taking this" +
      " course. The depth the instructors go into is incredible. I now feel so" +
      " confident about starting up as a professional developer. ”";
    desktopQuote.innerText =
      " “ If you want to lay the best foundation possible I’d recommend taking this" +
      " course. The depth the instructors go into is incredible. I now feel so" +
      " confident about starting up as a professional developer. ”";
    mobileName.innerText = "John Tarkpor";
    desktopName.innerText = "John Tarkpor";
    mobileOccupation.innerText = "Junior Front-end Developer";
    desktopOccupation.innerText = "Junior Front-end Developer";
  } else {
    imageContainer.src = "images/image-tanya.jpg";
    desktopQuote.innerText =
      " “ I’ve been interested in coding for a while but never taken the jump" +
      " until now. I couldn’t recommend this course enough. I’m now in the job" +
      " of my dreams and so excited about the future. ”";
    mobileQuote.innerText =
      " “ I’ve been interested in coding for a while but never taken the jump" +
      " until now. I couldn’t recommend this course enough. I’m now in the job" +
      " of my dreams and so excited about the future. ”";
    mobileName.innerText = "Tanya Sinclair";
    desktopName.innerText = "Tanya Sinclair";
    mobileOccupation.innerText = "UX Engineer";
    desktopOccupation.innerText = "UX Engineer";
  }
};
leftButton.addEventListener("click", () => changeSlide());
rightButton.addEventListener("click", () => changeSlide());
