let tags = document.getElementsByClassName('header__burger');
for (let element of tags) {
    element.onclick = () => {
        element.classList.toggle('header__burger_active');
        let menu = document.getElementsByClassName('header__menu');
        for (let elem of menu) elem.classList.toggle('header__menu_active');
        document.body.classList.toggle('body_lock');
    };
}
