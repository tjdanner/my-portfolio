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

gsap.from('h1', { duration: .5, y: '-1000%' });
gsap.from(icons, { duration: .5, y: '2000%', delay: .5, stagger: .2 });



for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', e => {
        icons[i].style.transition = '300ms';
        icons[i].style.transform = 'scale(1.15)';
        label[i].style.display = 'block';
        label[i].style.animation = '300ms fadeIn'
        if (window.screen.width > 550 && window.screen.height > 450) {
            icons[i].addEventListener('mouseout', e => {
                icons[i].style.transform = '';
                label[i].style.animation = '300ms fadeOut';
                setTimeout(e => { label[i].style.display = ''; icons[i].style.transition = ''; }, 290)
            })
        }
    })
    if (window.screen.width <= 550 || window.screen.height <= 450) {
        setTimeout(e => { label[i].style.display = 'block'; label[i].style.animation = '1000ms fadeIn'; }, 1500);
    }
    /* if (window.screen.height <= 450) {
        setTimeout(e => { label[i].style.display = 'block'; label[i].style.animation = '1000ms fadeIn'; }, 1500);
    } */
};

icons[0].onclick = e => {
    banner.innerHTML = 'About';

    html.style.overflowY = 'scroll';

    if (window.screen.width <= 550) {
        main.style.margin = '5vh auto';
    }

    iconContainer.style.animation = '500ms fadeOut';
    setTimeout(e => { iconContainer.style.display = 'none'; }, 490);

    setTimeout(e => { gsap.fromTo(about, { x: '-150%' }, { duration: 1, x: '' }); about.style.display = 'flex';}, 500)

    back.style.animation = '500ms fadeIn';
    setTimeout(e => { back.style.display = 'flex'; }, 1000);
};

icons[1].onclick = e => {
    banner.innerHTML = 'Projects';

    html.style.overflowY = 'scroll';

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
};

icons[2].onclick = e => {
    window.open('media/DannerResumeTech.pdf');
};

icons[3].onclick = e => {
    window.open('https://github.com/tjdanner');
};

icons[4].onclick = e => {
    window.open('https://www.linkedin.com/in/trevor-danner-736b2117a/')
};

back.onclick = e => {
    banner.innerHTML = 'Trevor Danner';
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
        projectLabels[i].style.transform = 'scale(1.15)';
        projectLabels[i].onmouseout = e => {
            projectLabels[i].style.transform = '';
        }
    }
}

projectLabels[0].onclick = e => {
    window.open('https://tjdanner.github.io/tea-cozy/');
}

projectLabels[1].onclick = e => {
    window.open('https://tjdanner.github.io/colmar-academy/');
}
projectLabels[2].onclick = e => {
    window.open('https://tjdanner.github.io/product-preview/');
}

projectLabels[3].onclick = e => {
    window.open('https://tjdanner.github.io/base-apparel/');
}

projectLabels[4].onclick = e => {
    window.open('https://tjdanner.github.io/interactive-rating-component/');
}

projectLabels[5].onclick = e => {
    window.open('https://tjdanner.github.io/credit-card-form/');
}