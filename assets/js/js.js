let  totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide= 0;


document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;



goPrev= ()=> {
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
}
goNext=()=>{
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }        
    updateMargin();

}

updateMargin = ()=> {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft =  
    `-${newMargin}px`;

}
setInterval(goNext,5000);


/*responsividade */
window.onload = function() {
    document.querySelector(".menu-opener").addEventListener("click", function() {
        if (document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
        console.log('ok');
        }
    });
};

/*para o menu amburguer aparecer só com resolução menor que 600 */

window.addEventListener('resize', function () {
    var largura = window.innerWidth;

    if (largura > 600)
    document.querySelector(".menu nav ul").removeAttribute('style');
    });
