const tab1 = document.querySelector('.tabbtn1');
const tab2 = document.querySelector('.tabbtn2');
const tab3 = document.querySelector('.tabbtn3');
const text1 = document.querySelector('.bookmark');
const text2 = document.querySelector('.bookmark2');
const text3 = document.querySelector('.bookmark3');

tab1.addEventListener('click', function() {
    text1.style.display = 'flex'
    text2.style.display = 'none'
    text3.style.display = 'none'
})
tab2.addEventListener('click', function() {
    text1.style.display = 'none'
    text2.style.display = 'flex'
    text3.style.display = 'none'
})
tab3.addEventListener('click', function() {
    text1.style.display = 'none'
    text2.style.display = 'none'
    text3.style.display = 'flex'
})
const faqs=document.querySelectorAll('.faq3')
faqs.forEach(faq=>{
    faq.addEventListener('click',function(){
        faq.classList.toggle('show')
        faq.classList.toggle('imagerotate')
    })
})

