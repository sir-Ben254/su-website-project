const images = [
    "images/justlegs.jpg",
    "images/visitations.jpg",
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
    "images/image17.jpg"
];
let index = 0;
const slide = document.getElementById("slide");

function changeSlide() {
    slide.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}
setInterval(changeSlide, 3000);
changeSlide();

function startSpeech(){
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-us';
    recognition.start();

    recognition.onresult = function (event) {
        const transcript = event.results[o][o].transcript;
        document.getElementById("SearchInput").value = transcript;
    };
}