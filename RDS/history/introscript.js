//Compared to the previous script, this one loads all the text instantly

//Get elements
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
    //Load each element effectively simultaneously

    logoSpan.forEach((span,idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx+1))
    });

    //Unload each element simultaneously after a short delay
    setTimeout(()=>{
      logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx+1)*1)
      })
    }, 1500);

    //Remove backdrop
    setTimeout(()=>{
      intro.style.top = '-100vh';
    }, 1800)

  })
})

