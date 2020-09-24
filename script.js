// DOM String Init..

const heartItem = document.querySelectorAll(".heart__item");
const heart = document.querySelector(".heart");
const text = document.querySelector(".text");
const btnRect = document.querySelector(".btn-react");
const btnRound = document.querySelector(".btn-round");

let roundItem = 0;

// Arrow Function

const getRandom = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

const setCurrentSelectedBtn = (e) => {
  if (e.target.className.includes("btn-selected")) return;
  btnRect.classList.toggle("btn-selected");
  btnRound.classList.toggle("btn-selected");
  roundItem = roundItem ? 0 : 50;
  heartBlust();
};

const getRandomAnimation = (index) => {
  let val_0 = getRandom(300, 80);
  let val_1 = getRandom(300, 80);
  let val_2 = getRandom(300, 80);
  if (getRandom(100) % 2 == 0) {
    val_0 *= -1;
    val_1 *= -1;
    val_2 *= -1;
  }
  const str = [
    `opacity:0;border-radius:${roundItem}%;transform : translate(${val_1}vh,${val_2}vw); transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:${roundItem}%;transform : scale(${getRandom(
      5,
      2
    )}) translate(${val_1}vh,${val_2}vw); transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:${roundItem}%;transform : scale(0) rotateY(${getRandom(
      180 * 10
    )}deg) rotateX(${getRandom(
      180 * 10
    )}deg) translateY(${val_0}vh) translateX(${val_0}vw); transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:${roundItem}%;transform : rotate(${getRandom(
      360 * 2
    )}deg) scale(${getRandom(
      5,
      1
    )}) translate(${val_1}vh,${val_2}vw) ; transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:${roundItem}%;transform : translateX(${
      val_1 < 0 ? val_1 * -1 : val_1
    }vw); transition:all ${getRandom(6, 1)}s ease-in-out`,
    `opacity:0;border-radius:${roundItem}%;transform : translateY(${
      val_1 > 0 ? val_1 * -1 : val_1
    }vw); transition:all ${getRandom(6, 1)}s ease-in-out`,
  ];
  return str[index];
};

const heartBlust = () => {
  const index = getRandom(6);
  heartItem.forEach((item) => {
    item.style.cssText = getRandomAnimation(index);
  });
  setTimeout(() => {
    heartArrange();
  }, 4000);
};

const heartArrange = () => {
  text.innerHTML = "😤😤huhhh Let's wait a second";
  heartItem.forEach((item) => {
    item.style.transform = ``;
    item.style.opacity = 1;
  });
  setTimeout(() => {
    text.innerHTML =
      "Hehehe 😂😂 you can't break my heart 💞 i'm enough strong let's try again 😜";
  }, 5000);
};

// Event Handling

heart.addEventListener("click", () => {
  heartBlust();
  text.innerHTML = "😒 You're so bad you have broke my heart 💔 😭😭";
});

btnRound.addEventListener("click", setCurrentSelectedBtn);

btnRect.addEventListener("click", setCurrentSelectedBtn);
