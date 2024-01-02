
// let a = document.querySelector("#a");
// let isInitial = true;

// a.addEventListener("click", function () {
//     if (isInitial) {
//         a.innerHTML = "a Web Developer";
//     } else {
//         a.innerHTML = "ABHINAV SHRIVASTAV";
//     }

//     isInitial = !isInitial;
// });

let b = document.querySelector(".navbar-button");
b.innerHTML = "MAGIC";
let flag = true;
b.addEventListener("click", function () {
    if (flag) {
        let maincontainer = document.querySelector(".mctnr");
        maincontainer.style.backgroundImage = "linear-gradient(skyblue, #9b59b6)";
        let abt = document.querySelector(".aboutme");
        abt.style.background = "linear-gradient(#9b59b6, skyblue)";
        let ms = document.querySelector(".skillbar");
        ms.style.backgroundImage = "linear-gradient(skyblue, #FDA7DF)";
        let ctme = document.querySelector(".contactpage");
        ctme.style.backgroundImage = "linear-gradient(#FDA7DF, #12CBC4)";
        let bt = document.querySelector("#bt");
        bt.style.background = "linear-gradient(#FDA7DF, #12CBC4)";
        let img = document.querySelector(".image");
        img.style.background = "linear-gradient(#2ecc71, #3498db)";
    } else {
        let maincontainer = document.querySelector(".mctnr");
        maincontainer.style.backgroundImage = "linear-gradient(black, red)";
        let abt = document.querySelector(".aboutme");
        abt.style.background = "linear-gradient(red, pink)";
        let ms = document.querySelector(".skillbar");
        ms.style.backgroundImage = "linear-gradient(pink, skyblue)";
        let ctme = document.querySelector(".contactpage");
        ctme.style.backgroundImage = "linear-gradient(skyblue, pink)";
        let bt = document.querySelector("#bt");
        bt.style.background = "black";
        let img = document.querySelector(".image");
        img.style.background = "black";
    }
    flag = !flag;
});
