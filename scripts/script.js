const trendCards = document.querySelectorAll('.trend-card')
const gap = 60
const trendSlider = document.getElementById('trend-pro-slider')

const scrollWidth = trendCards[0].offsetWidth + gap

document.getElementById('nextBtn').addEventListener('click',()=>{
   
    trendSlider.scrollBy({
        left:scrollWidth,
        behavior:"smooth"
    })
})
document.getElementById('prevBtn').addEventListener('click',()=>{
    trendSlider.scrollBy({
        left:-scrollWidth,
        behavior:"smooth"
    })
})

const hmtCards = document.querySelectorAll('.hmt-coll-card')
const hmtSlider = document.getElementById('hmt-coll-slider')

const scrollWidthHmt = trendCards[0].offsetWidth + gap

document.getElementById('hmt-next').addEventListener('click',()=>{
   
    hmtSlider.scrollBy({
        left:scrollWidthHmt,
        behavior:"smooth"
    })
})
document.getElementById('hmt-prev').addEventListener('click',()=>{
    hmtSlider.scrollBy({
        left:-scrollWidthHmt,
        behavior:"smooth"
    })
})


const upArrow = document.getElementById('up-arrow');
upArrow.style.display = "none"
upArrow.style.cursor = "pointer"
window.addEventListener('scroll',()=>{
  if(window.scrollY == 0){
        upArrow.style.display = "none"
  }  
  else{
    upArrow.style.display = "inline"
  }
})

upArrow.addEventListener('click',()=>{
   window.scrollTo({
    top:0,
    behavior:"smooth"
   })
})

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.style.visibility = "hidden";
const nav_2_1 = document.getElementById('nav-2-1');
const nav_2_2 = document.getElementById('nav-2-2');
const nav2 = document.getElementById('nav2');
window.addEventListener('scroll',()=>{
    if(window.scrollY == 0){
          toggleBtn.style.visibility = "hidden";
          nav_2_1.classList.remove('d-none');
          nav_2_1.classList.add("d-flex");
          nav_2_2.classList.remove('d-none');
          nav_2_2.classList.add("d-flex");
          nav2.classList.remove('justify-content-between')
          nav2.classList.add('justify-content-around')
          
    }
    let currentScroll = window.scrollY;

    if(currentScroll > 0){
          toggleBtn.style.visibility = "visible";
          nav_2_1.classList.remove('d-flex');
          nav_2_1.classList.add('d-none')
          nav_2_2.classList.remove('d-flex');
          nav_2_2.classList.add('d-none')
          nav2.classList.remove('justify-content-around')
          nav2.classList.add('justify-content-between')
          currentScroll = window.scrollY;
    }
})

toggleBtn.addEventListener('click',()=>{
        nav_2_1.classList.remove('d-none');
          nav_2_1.classList.add("d-flex");
          nav_2_2.classList.remove('d-none');
          nav_2_2.classList.add("d-flex");
})


const toolTipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]')

toolTipElements.forEach((e)=>{
  new bootstrap.Tooltip(e)
})