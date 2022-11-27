const button = document.querySelector('.header__button');
button.addEventListener('click', (e)=>{
   const links = document.querySelectorAll('.links__link');
   links.forEach(el =>{
      el.classList.toggle('active');
   })
   let txt = document.querySelector('.txt');
   txt.classList.toggle('txt-hide');
})