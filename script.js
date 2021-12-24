const slideshow = document.querySelector(".slideshow");
// Now the way will do this slideshow, by removing first link element and add it back to the link as the
// last link

//it takes two arguments, the first one is the callback function, which get executed after each interval, as
//for the second argument its the amount of interval itself.
setInterval(() => {
    const firstIcon = slideshow.firstElementChild;
    firstIcon.classList.add("faded-out");
    // slideshow.removeChild(firstIcon);
    //now the icons are removing without any transition, because this is synchronous JS, it doesnt wait 0.5 s
    //to apply transition and then remove it from the parent element, it immediately remove the child, without 
    //any transition effect.
    
    const thirdIcon = slideshow.children[3];
    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");
    
    setTimeout(() => {
        slideshow.removeChild(firstIcon);
        //by defualt appendChild method append the child at last of parent element
        slideshow.appendChild(firstIcon);
        // firstIcon.classList.remove("faded-out");
        //now the icon will add at last without any transition, the reason is same as above
        setTimeout(() => {
            firstIcon.classList.remove("faded-out");
        }, 500);
    }, 500);

}, 3000);