let hamburger = document.querySelector('.menu');
hamburger.addEventListener('click',showMenu);

function showMenu(e){
    let menus = document.getElementById('menus');
    // let idName = e.target.value;
    console.log('work');
    if (menus.style.display === 'none') {
        console.log('test');
        menus.style.display = 'flex';
    }
    else{
        menus.style.display='none';
    }
}