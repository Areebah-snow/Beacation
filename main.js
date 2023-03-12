
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
let darkTheme = document.getElementById('dark')
let menuBar = document.querySelector(".menu-icon")
let navBar = document.querySelector(".nav-list")
let body = document.getElementsByTagName('body')
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el));
menuBar.addEventListener("click",()=>{
  navBar.classList.toggle("active")
   
})
window.onscroll = ()=>{
  if(window.scrollY > 5){
    navBar.classList.remove("active")
  }
}

darkTheme.addEventListener('click',()=>{
  console.log('hi')
  body.style.backgroundColor = black;
  body.style.color = white;
})