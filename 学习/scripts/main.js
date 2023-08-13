let myHeading = document.querySelector("#include");
myHeading.textContent = "Hello world!";

let myImages = document.querySelector("img");
myImages.onclick = function(){
    let mySrc = myImages.getAttribute("src");
    if (mySrc === "images/风景.jpg") {
        myImages.setAttribute("src","images/风景1.jpg");
    } else {
        myImages.setAttribute("src","images/风景.jpg");
    }
};