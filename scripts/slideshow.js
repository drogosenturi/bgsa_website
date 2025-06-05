// attempt at making the slideshow a module, or just dynamically
// loaded
/*
export { 
    currentSlide, selector, pics, glowy, active, arr,
    makeDots, select, setActive, slideshow, rotate, swipes
}
    */
/* slideshow */
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '/#home') {
        const currentSlide = document.querySelector("#full-width-image");
        const selector = document.querySelector("#selector");
        const pics = ["/media/misc_photos/board_and_officers_plain.png", "/media/misc_photos/election.jpg",
            "/media/misc_photos/ssa_lively.jpg","/media/misc_photos/ssa_wide.jpg",
            "/media/misc_photos/swap.jpg"];
        const glowy = ["/media/logos/silde-on.png","/media/logos/silde-off.png"];
        let active = 0;
        let arr = [].slice.call(selector.children)


        function makeDots() {
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
        }

        function select(e, a) {
            for (i of selector.children) {
                i.src = glowy[1];
                i.dataset.on = false;
            }
            if (a) {
                selector.children[a].src = glowy[0];
                selector.children[a].dataset.on = true;
            } else if (a === 0) {
                selector.children[0].src = glowy[0];
                selector.children[0].dataset.on = true;
            } else {
                e.target.src = glowy[0];
                e.target.dataset.on = true;
            }
            arr = [].slice.call(selector.children)
            setActive(a);
        }

        function setActive(a) {
            if (a) {
                active = a
            } else {
                for (const i in arr) {
                    if (arr[i].dataset.on === "true") {
                        active = Number(i);
                        console.log(i);
                    }
                    console.log(arr[i].dataset.on);
                }
            }
            slideshow();
        }

        function slideshow() {
            currentSlide.src = pics[active];
        }

        function rotate() {
            if (active < pics.length - 1) {
                active += 1;
            } else {
                active = 0;
            }
            select(1,active)

        }

        function swipes() {
            currentSlide.addEventListener('touchend', rotate);
        }

        makeDots;
        selector.addEventListener('click',select);
        currentSlide.addEventListener('touchmove', swipes);
        setInterval(rotate, 5000);
    }
})