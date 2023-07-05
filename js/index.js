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
const openNav = document.querySelector(".ri-menu-line");

const closeNav = document.querySelector(".ri-close-circle-line");

const navList = document.querySelector(".list1");

openNav.addEventListener("click", function() {

    navList.style.top = "250px"

    openNav.style.display = "none"

    closeNav.style.display = "block"

})

closeNav.addEventListener("click", function() {

    navList.style.top = "-200px"

    openNav.style.display = "block"

    closeNav.style.display = "none"

})

document.querySelectorAll(".list1 a").forEach(navLink => {

    navLink.addEventListener("click", function() {

        navList.style.top = "-200px"

        openNav.style.display = "block"

        closeNav.style.display = "none"

    })

})
