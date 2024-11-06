

const menu_btn = document.getElementById('menu_btn');
const menu_btn_hide = document.getElementById('menu_btn_hide');
const nav_bar = document.getElementById('nav_bar');

// hide and show nav_bar
menu_btn.addEventListener('click', function(){
    if (nav_bar.style.display != 'none') {
        nav_bar.style.display = 'none';
    }
    else {
        nav_bar.style.display = '';
    }
});




// document.write("Hello There JavaScript");