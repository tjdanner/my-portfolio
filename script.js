const html = document.querySelector('html');
const icons = document.getElementsByClassName('icons');
const main = document.getElementById('main');
const iconContainer = document.getElementById('icon-container');
const back = document.getElementById('back-container');
const label = document.getElementsByClassName('label');
const about = document.getElementById('about');
const projectsContainer = document.getElementById('projects-container');
const projects = document.getElementsByClassName('projects');
const projectLabels = document.getElementsByClassName('project-label');
const banner = document.getElementById('banner');
const themes =document.getElementById('themes');

gsap.from('h1', { duration: .5, y: '-1000%' });
gsap.from(icons, { duration: .5, y: '2000%', delay: .5, stagger: .2 });

setTimeout(e=>{
    themes.style.display = 'flex';
    themes.style.animation = 'fadeIn 1000ms';
}, 2000);

for (let i = 0; i < icons.length; i++) {
    if (window.screen.width <= 550 || window.screen.height <= 450) {
        setTimeout(e => {
            label[i].style.display = 'block';
            label[i].style.animation = 'fadeIn 1000ms';
        }, 1500);
    }
    icons[i].onmouseover = e => {
        icons[i].style.transition = '300ms';
        icons[i].style.transform = 'scale(1.15)';
        label[i].style.display = 'block';
        label[i].style.animation = 'fadeIn 500ms';
        if (window.screen.width > 550 && window.screen.height > 450) {
            icons[i].onmouseleave = e => {
                setTimeout(e => { icons[i].style.transition = ''; }, 300);
                icons[i].style.transform = '';
                label[i].style.animation = 'fadeOut 300ms';
                labelRevert = () => {
                    label[i].style.display = '';
                }
                setTimeout(labelRevert, 290);
            }
        }
    }
}

icons[0].onclick = e => {
    banner.innerHTML = 'About';

    if (window.screen.height <= 550) {
        html.style.overflowY = 'scroll';
    }

    main.style.transition = '1s';

    if (window.screen.width <= 550) {
        main.style.margin = '5vh auto';
    }

    iconContainer.style.animation = '500ms fadeOut';
    setTimeout(e => { iconContainer.style.display = 'none'; }, 490);

    setTimeout(e => { gsap.fromTo(about, { x: '-150%' }, { duration: 1, x: '' }); about.style.display = 'flex'; }, 500)

    back.style.animation = '500ms fadeIn';
    setTimeout(e => { back.style.display = 'flex'; }, 1000);

    e.target.style.transform = '';
};

icons[1].onclick = e => {
    banner.innerHTML = 'Projects';

    html.style.overflowY = 'scroll';

    main.style.transition = '1s';

    if (window.screen.width <= 550) {
        main.style.margin = '5vh auto';
    }

    if (window.screen.width > 550) {
        main.style.margin = '3vh auto'
    }

    iconContainer.style.animation = '500ms fadeOut';
    setTimeout(e => { iconContainer.style.display = 'none'; }, 490)

    setTimeout(e => { gsap.fromTo(projectsContainer, { x: '-150%' }, { duration: 1, x: '' }); projectsContainer.style.display = 'flex'; }, 500)

    back.style.animation = '500ms fadeIn';
    setTimeout(e => { back.style.display = 'flex'; }, 1000);

    if (window.screen.width <= 550) {
        label[5].style.display = 'block';
    }

    e.target.style.transform = '';
};

icons[2].onclick = e => {
    window.open('media/DannerResumePortfolio.pdf');
    e.target.style.transform = '';
};

icons[3].onclick = e => {
    window.open('https://github.com/tjdanner');
    e.target.style.transform = '';
};

icons[4].onclick = e => {
    window.open('https://www.linkedin.com/in/trevor-danner-736b2117a/')
    e.target.style.transform = '';
};

back.onclick = e => {
    banner.innerHTML = 'Trevor Danner';

    main.style.transition = '1s';

    banner.style.margin = '';

    html.style.overflowY = '';

    gsap.fromTo(about, { x: '' }, { duration: .8, x: '-150%' });
    setTimeout(e => { about.style.display = 'none'; }, 490);

    gsap.fromTo(projectsContainer, { x: '' }, { duration: .8, x: '-150%' });
    setTimeout(e => { projectsContainer.style.display = ''; }, 490);

    back.style.animation = '500ms fadeOut';
    setTimeout(e => { back.style.display = 'none'; }, 490);

    main.style.margin = '';

    setTimeout(e => { iconContainer.style.display = ''; }, 500)
    iconContainer.style.animation = '500ms fadeIn';
};

for (let i = 0; i < projectLabels.length; i++) {
    projectLabels[i].onmouseover = e => {
        projectLabels[i].style.transition = '300ms'
        projectLabels[i].style.transform = 'scale(1.15)';
        projectLabels[i].onmouseleave = e => {
            projectLabels[i].style.transform = '';
            setTimeout(e => { projectLabels[i].style.transition = 'none'; }, 290)
        }
    }
}

projectLabels[0].onclick = e => {
    window.open('https://tjdanner.github.io/tea-cozy/');
    e.target.style.transform = '';
}

projectLabels[1].onclick = e => {
    window.open('https://tjdanner.github.io/colmar-academy/');
    e.target.style.transform = '';
}
projectLabels[2].onclick = e => {
    window.open('https://tjdanner.github.io/API-dictionary/');
    e.target.style.transform = '';
}

projectLabels[3].onclick = e => {
    window.open('https://tjdanner.github.io/base-apparel/');
    e.target.style.transform = '';
}

projectLabels[4].onclick = e => {
    window.open('https://tjdanner.github.io/interactive-rating-component/');
    e.target.style.transform = '';
}

projectLabels[5].onclick = e => {
    window.open('https://tjdanner.github.io/credit-card-form/');
    e.target.style.transform = '';
}


const themeSelector = document.getElementsByClassName('theme-selector');
let darkMode = localStorage.getItem('darkMode');
let lightMode = localStorage.getItem('lightMode');

removeTransitions = () => {
    main.style.transition = 'none';
    iconContainer.style.transition = 'none';
    icons[0].style.transition = 'none';
    icons[1].style.transition = 'none';
}

enableDark = () => {
    removeTransitions();
    document.querySelector(':root').style.setProperty('--dark', '');
    document.querySelector(':root').style.setProperty('--light', '');
    localStorage.setItem('darkMode', 'enabled');
    localStorage.setItem('lightMode', 'disabled');
}

enableLight = () => {
    removeTransitions();
    document.querySelector(':root').style.setProperty('--dark', 'white');
    document.querySelector(':root').style.setProperty('--light', 'black');
    localStorage.setItem('lightMode', 'enabled');
    localStorage.setItem('darkMode', 'disabled');
}

if (lightMode === 'enabled') {
    enableLight();
} if (darkMode === 'enabled') {
    enableDark();
}

themeSelector[0].onclick = e => {
    darkMode = localStorage.getItem('darkMode');
    removeTransitions();
    enableDark();
    console.log(darkMode);
}

themeSelector[1].onclick = e => {
    removeTransitions();
    enableLight();
    console.log(darkMode);
}