const main = document.querySelector("main");

const data = [
  {
    image: "drink",
    text: "I'm Thirsty",
  },
  {
    image: "food",
    text: "I'm Hungry",
  },
  {
    image: "tired",
    text: "I'm Tired",
  },
  {
    image: "hurt",
    text: "I'm Hurt",
  },
  {
    image: "happy",
    text: "I'm Happy",
  },
  {
    image: "angry",
    text: "I'm Angry",
  },
  {
    image: "sad",
    text: "I'm Sad",
  },
  {
    image: "scared",
    text: "I'm Scared",
  },
  {
    image: "outside",
    text: "I want to go Outside",
  },
  {
    image: "home",
    text: "I want to go Home",
  },
  {
    image: "school",
    text: "I want to go to School",
  },
  {
    image: "grandma",
    text: "I want to go to Grandmas",
  },
];

const createBox = (items) => {
  const { image, text } = items;
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <img src='https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  box.addEventListener("click", () => handleSpeech(text));
  main.appendChild(box);
};

data.forEach(createBox);

const handleSpeech = (text) => {
  setTextMessage(text);
  speakText();
};

const message = new SpeechSynthesisUtterance();

const setTextMessage = (text) => {
  message.text = text;
};

const speakText = () => {
  speechSynthesis.speak(message);
};

const textarea = document.querySelector("textarea");

const readBtn = document.getElementById("read");
readBtn.addEventListener("click", () => {
  // console.log(textarea.value);
  setTextMessage(textarea.value);
  speakText();
});

document.getElementById("toggle").addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});
