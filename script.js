console.log("JS loaded")
/* hamburger menu toggle */
document.querySelector('.hamburger').addEventListener('click',function(){
    const mobileMenu = document.querySelector('.mobile_menu');
    mobileMenu.classList.toggle('active');
    console.log("clicked!");
})

/* slideshow */
const currentSlide = document.querySelector("#full-width-image");
const selector = document.querySelector("#selector");
const pics = ["media/misc_photos/board_and_officers_plain.png", "media/misc_photos/election.jpg",
    "media/misc_photos/ssa_lively.jpg","media/misc_photos/ssa_wide.jpg",
    "media/misc_photos/swap.jpg"];
const glowy = ["media/logos/silde-on.png","media/logos/silde-off.png"];

for (i = 0; i < pics.length; i++) {
    const dot = document.createElement('img');
    if (i === 0) {
        dot.setAttribute('src',glowy[0]);
        dot.dataset.on = true;
    } else {
        dot.setAttribute('src',glowy[1]);
        dot.dataset.on = false;
    }
    selector.appendChild(dot);
}

let active = 0;
arr = [].slice.call(selector.children)
function setActive() {
    for (const i in arr) {
        if (arr[i].dataset.on === "true") {
            active = Number(i);
            console.log(i);
        }
        console.log(arr[i].dataset.on);
    }
}
function select(e) {
    for (i of selector.children) {
        i.src = glowy[1];
        i.dataset.on = false;
    }
    e.target.src = glowy[0];
    e.target.dataset.on = true;
    arr = [].slice.call(selector.children)
}

function slideshow(e) {
    currentSlide.src = pics[active];
}


selector.addEventListener('click',select);
selector.addEventListener('click', setActive);
selector.addEventListener("click",slideshow);
