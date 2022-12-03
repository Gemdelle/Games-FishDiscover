const BettaFish = {
    name: "Betta Fish",
    image_url: "./Images/01. Betta Fish.JPG"
};

const GoldFish = {
    name: "Gold Fish",
    image_url: "./Images/02. Gold Fish.JPG"
};

const WhiteSiamese = {
    name: "White Siamese",
    image_url: "./Images/03. White Siamese Fish.jpg"
};

const AngelFish = {
    name: "Angel Fish",
    image_url: "./Images/04. Angel Fish.jpg"
};

const LionFish = {
    name: "Lion Fish",
    image_url: "./Images/05. Lion Fish.jpg"
};

const fish = [BettaFish, GoldFish, WhiteSiamese, AngelFish, LionFish];

const fishNameText = document.getElementById("fish_name");
const fishImage = document.getElementById("fish_image");
const imageContainer = document.getElementById("image_container");

const button1 = document.getElementById("button01");
const button2 = document.getElementById("button02");
const button3 = document.getElementById("button03");
const button4 = document.getElementById("button04");
const button5 = document.getElementById("button05");

function changevisibility() {
    if (fishImage.style.visibility == 0) {
        fishImage.style.visibility = "hidden";
    } else {
        fishImage.style.visibility = "";
    }
}

function hideimage() {
    clearInterval(interval);
    imageContainer.classList.add("hidden");
}

function buttoncolor() {

}

/* Congratulations */

const congratulations = document.getElementById("congratulations");

/* Button 01*/

let interval;
let timeout;

button1.addEventListener("click", function (e) {
    clearInterval(interval);
    clearTimeout(timeout);

    e.currentTarget.classList.add("active");
    imageContainer.classList.remove("hidden");
    fishNameText.textContent = fish[0].name;
    fishImage.src = fish[0].image_url;

    interval = setInterval(changevisibility, 600); /* 0.5 seconds */
    timeout = setTimeout(hideimage, 5000);
});

/* Button 02*/

button2.addEventListener("click", function (e) {
    clearInterval(interval);
    clearTimeout(timeout);

    e.currentTarget.classList.remove("active");
    imageContainer.classList.remove("hidden");
    fishNameText.textContent = fish[1].name;
    fishImage.src = fish[1].image_url;

    interval = setInterval(changevisibility, 600); /* 0.5 seconds */
    timeout = setTimeout(hideimage, 5000);
});

/* Button 03*/

button3.addEventListener("click", function (e) {
    clearInterval(interval);
    clearTimeout(timeout);

    e.currentTarget.classList.remove("active");
    imageContainer.classList.remove("hidden");
    fishNameText.textContent = fish[2].name;
    fishImage.src = fish[2].image_url;

    interval = setInterval(changevisibility, 600); /* 0.5 seconds */
    timeout = setTimeout(hideimage, 5000);
});

/* Button 04*/

button4.addEventListener("click", function (e) {
    clearInterval(interval);
    clearTimeout(timeout);

    e.currentTarget.classList.remove("active");
    imageContainer.classList.remove("hidden");
    fishNameText.textContent = fish[3].name;
    fishImage.src = fish[3].image_url;

    interval = setInterval(changevisibility, 600); /* 0.5 seconds */
    timeout = setTimeout(hideimage, 5000);
});

/* Button 05*/

button5.addEventListener("click", function (e) {
    clearInterval(interval);
    clearTimeout(timeout);

    e.currentTarget.classList.remove("active");
    imageContainer.classList.remove("hidden");
    fishNameText.textContent = fish[4].name;
    fishImage.src = fish[4].image_url;

    interval = setInterval(changevisibility, 600); /* 0.5 seconds */
    timeout = setTimeout(hideimage, 5000);
});
