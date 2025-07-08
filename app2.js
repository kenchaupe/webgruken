let slider1 = document.querySelector('.slider1 .list1');
let items1 = document.querySelectorAll('.slider1 .list1 .item1');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots1 = document.querySelectorAll('.slider1 .dots1 li');

let lengthItems = items1.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider1();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider1();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider1.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider1 .dots1 li.active1');
    last_active_dot.classList.remove('active1');
    dots[active].classList.add('active1');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots1.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider1();
    })
})
window.onresize = function(event) {
    reloadSlider1();
};

