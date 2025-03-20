// inject year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theBtn')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 2000,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // autoplay
    autoplay: {
        delay: 5000,
    },

  });