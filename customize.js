const menuBtn = document.querySelector('.menu-btn');
const navHControl = document.querySelector('.nav-h-control')
const main = document.querySelector('#main')
const mainNav = document.querySelector('#main-nav')

menuBtn.addEventListener('click', () => {
    navHControl.classList.toggle('h-36')
})

var waypoint = new Waypoint({
    element: document.getElementById('main'),
    handler: function(direction) {
        if (direction === "down") {
            console.log('down')
            mainNav.classList.add('fixed', 'top-0', 'w-full', 'shadow', 'animate__bounce')
        } else {
            console.log('up')
            mainNav.classList.remove('fixed', 'top-0', 'w-full', 'shadow', 'animate__bounce')
        }
    },
    offset: '0%'
})





// Theme
const changeThemeToDark = () => {
    document.documentElement.classList.add('dark');
    // document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
}

const changeThemeToLight = () => {
    document.documentElement.classList.remove('dark');
    // document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light')
}

let changeTheme = document.getElementById('changeTheme');
changeTheme.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark()
    }
})

let theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
    changeThemeToDark()
    changeTheme.setAttribute('checked', 'checked')
} else {
    changeThemeToLight()
}