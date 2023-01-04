const background = document.querySelector(".background");

document.addEventListener('scroll', ()=>{
    const scrollY = window.scrollY;

    if(scrollY !== 0){
        background.getElementsByClassName.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
    }else{
        background.getElementsByClassName.backgroundPosition = '';
    }
})
