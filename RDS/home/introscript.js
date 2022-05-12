//A small script to greet users when they first enter the site

//First get elements

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{
    //Load each element after a short 400ms delay
    logoSpan.forEach((span,idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx+1)*300)
    });

    //Unload each element with a shorter 50ms delay between each word
    setTimeout(()=>{
      logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx+1)*50)
      })
    }, 2300);

    //Remove backdrop
    setTimeout(()=>{
      intro.style.top = '-100vh';
    }, 2600)

  })
})

