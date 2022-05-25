// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

let video = document.querySelector(".video-container")
let btn = document.querySelector(".switch-btn")
let preloader = document.querySelector(".preloader")

btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide")
        video.pause();
    } else {
        btn.classList.remove("slide")
        video.play();
    }
})

window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader")
})
