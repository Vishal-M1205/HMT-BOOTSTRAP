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

