class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('.carousel img')
        
        //create an array of images so I can access them by index
        this.images = Array.from(this.images.map(image => new CarouselImage(image)))

        
    }
};

class CarouselImage {

};

let carousel = document.querySelector('.carousel');
let rightButton = document.querySelector('.right-button');
let leftButton = document.querySelector('.left-button');
let images = document.querySelectorAll('.carousel img');

// images.forEach(image => new CarouselImage(image));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
