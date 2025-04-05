console.log("JS loaded")
/* hamburger menu toggle */
document.querySelector('.hamburger').addEventListener('click',function(){
    const mobileMenu = document.querySelector('.mobile_menu');
    mobileMenu.classList.toggle('active');
    console.log("clicked!");
})

/* slideshow */