let slidControl__Info = [
    0,
    document.querySelector('.background__slider')
];
let header = document.querySelector('.header')

let sliderControl__left = document
.querySelector('.background__slider-control__slider-left')
.addEventListener('mousedown', () => {
    sliderControl(true,false);
});

let sliderControl__right = document
.querySelector('.background__slider-control__slider-right')
.addEventListener('mousedown', () => {
    sliderControl(false,true);
});

function sliderControl (left,right) { 
    if (left === true) { 
        if (slidControl__Info[0] === 0) {
            slidControl__Info[0] = slidControl__Info[0] -300
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
            console.log(slidControl__Info[0])
        }  else if (slidControl__Info[0] === -100) {
            header.style.background=" linear-gradient(90.35deg, rgba(0, 0, 0, 0.01) 16.51%, rgba(109, 76, 110, 0.3) 48.2%, rgba(0, 0, 0, 0.01) 83.93%)"
            slidControl__Info[0] = slidControl__Info[0] +100
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
            console.log(slidControl__Info[0])
        } else if (slidControl__Info[0] === -200) {
            header.style.background=" linear-gradient(90.35deg, #000000 16.51%, rgba(109, 76, 110, 0.95) 48.2%, #000000 83.93%)"
            slidControl__Info[0] = slidControl__Info[0] +100
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
        } else {
            slidControl__Info[0] = slidControl__Info[0] +100
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
            console.log(slidControl__Info[0])
        }
    
    } else if (right === true) {
        if (slidControl__Info[0] === -300) {
            slidControl__Info[0] = slidControl__Info[0] +300
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
            console.log(slidControl__Info[0])
        } else if (slidControl__Info[0] === -100) {
            header.style.background=" linear-gradient(90.35deg, rgba(0, 0, 0, 0.01) 16.51%, rgba(109, 76, 110, 0.3) 48.2%, rgba(0, 0, 0, 0.01) 83.93%)"
            slidControl__Info[0] = slidControl__Info[0] -100
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
            console.log(slidControl__Info[0])
        } else if (slidControl__Info[0] === 0) {
            header.style.background=" linear-gradient(90.35deg, #000000 16.51%, rgba(109, 76, 110, 0.95) 48.2%, #000000 83.93%)"
            slidControl__Info[0] = slidControl__Info[0] -100
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
        } else {
            slidControl__Info[0] = slidControl__Info[0] -100
            slidControl__Info[1].style.left=slidControl__Info[0]+"%"
            console.log(slidControl__Info[0])
        }
    }
}