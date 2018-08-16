
const menuBtn = $('.menu-btn');
const menu = $('.menu');
const menuNav = $('.menu-nav');
const menuBranding = $('.menu-branding');

const navItems = $('.nav-item');

console.log(navItems);
let showMenu = false;

menuBtn.click(function(){
   
    toggleMenu();
});

function toggleMenu(){
    if(!showMenu){
       menuBtn.addClass("close");
       menu.addClass("show");
       menuNav.addClass("show");
       menuBranding.addClass("show");
        navItems.addClass("show");
        // console.log(navItems.length);
    //    navItems.forEach(element => {
    //        console.log(element);
    //     //    element.addClass("show");
    //    });
       showMenu = true;
    }else{
        menuBtn.removeClass("close");
        menu.removeClass("show");
        menuNav.removeClass("show");
        menuBranding.removeClass("show");
        navItems.removeClass("show");
        // navItems.forEach(element => {
        //     element.removeClass("show");
        // });

        showMenu = false;
    }
}