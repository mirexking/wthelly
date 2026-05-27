const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const step2 = document.getElementById("step2");
const finalMessage = document.getElementById("finalMessage");

let noClicks = 0;

noBtn.addEventListener("click", () => {

  noClicks++;

  const randomX = Math.random() * 300 - 150;
  const randomY = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  const currentScale = 1 - noClicks * 0.15;

  noBtn.style.scale = currentScale;

  if (noClicks >= 5) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";

  step2.classList.remove("hidden");
});

function chooseOption(option) {

  emailjs.send(
    "service_bbw00w7",
    "template_brscs0g",
    {
      message: `Odabrala je: ${option}`
    }
  );

  step2.classList.add("hidden");

  finalMessage.classList.remove("hidden");
}