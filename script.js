var prevScrollpos = window.scrollY;

window.addEventListener("scroll", ()=> {
  var currentScrollPos = window.scrollY;
  console.log(prevScrollpos > currentScrollPos)
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".top-nav").style.top = "0%";
    document.querySelector(".bottom-nav").style.paddingTop = "5rem"
  } else {
    document.querySelector(".top-nav").style.top = "-100%";
    document.querySelector(".bottom-nav").style.paddingTop = "1rem"

  }
  prevScrollpos = currentScrollPos;
})

document.querySelector(".toggle-btn").addEventListener("click",(event)=> {
  document.querySelector(".toggle-btn .fa-bars").classList.toggle('hide')
  document.querySelector(".toggle-btn .fa-xmark").classList.toggle('hide')
  document.querySelector(".navigation-container").classList.toggle('d-flex')
  document.querySelector(".bottom-nav").classList.toggle('vh-100')
})

document.querySelectorAll(".btn-drop-down").forEach((element, index) => {
  element.addEventListener("click", ()=> {
    console.log()
    document.querySelectorAll(".drop-down")[index].classList.toggle('d-flex')
    document.querySelectorAll(".nav-item .arrow")[index].classList.toggle('rotate-90')
  })

  element.addEventListener('mouseover', ()=> {
    console.log("Hovered")
    document.querySelector(".bottom-nav hr").style.border = "1px solid #00000044";
  })

  element.addEventListener('mouseout', ()=> {
    console.log("Hovered")
    document.querySelector(".bottom-nav hr").style.border = "1px solid #fff";
  })
});