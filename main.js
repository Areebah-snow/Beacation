
const observer =  new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
         if(entry.isIntersecting){
          entry.target.classList.add('show');
         }
         else{
          entry.target.classList.remove('show');
         }
  })
})

let menuBar = document.querySelector(".menu-icon")
let navBar = document.querySelector(".nav-list")
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el));
menuBar.addEventListener("click",()=>{
  navBar.classList.toggle("active")
   
})
window.onscroll = ()=>{
  if(window.scrollY > 10){
    navBar.classList.remove("active")
  }
}
