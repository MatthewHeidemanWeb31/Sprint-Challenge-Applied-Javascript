/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function createCarousel(){
  const container = document.createElement('div');
  let leftButton = document.createElement('div');
  let rightButton = document.createElement('div');
  let img = document.createElement('img');
  container.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  container.appendChild(img)
  container.appendChild(leftButton);
  container.appendChild(rightButton);
  return container;
};
const carouselParent = document.querySelector('.carousel-container');
carouselParent.appendChild(container);

