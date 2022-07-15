const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) {
      newIndex = slides.children.length - 1 
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})


/*const click = document.querySelectorAll(".buttonClick");
click.forEach(btn => {
  btn.addEventListener('click', function(event) {
    let x = event.pageX - event.target.offsetLeft;
    let y = event.pageY - event.target.offsetRight;

    let newEff = document.createElement('span');
    newEff.style.left = x + 'px';
    newEff.style.top = y + 'px';
    this.appendChild(newEff);

    setTimeout(() => {
      newEff.remove()
    }, 1000)
  })
})*/