const icons = document.getElementsByClassName('icons');
const main = document.getElementById('main');
const iconContainer = document.getElementById('icon-container');
const back = document.getElementById('back-container');
const label = document.getElementsByClassName('label');
const about = document.getElementById('about')

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', e => {
        icons[i].style.transition = '300ms'
        icons[i].style.transform = 'scale(1.15)'
        label[i].style.display = 'block';
        label[i].style.animation = '300ms fadeIn'
        icons[i].addEventListener('mouseout', e => {
            icons[i].style.transform = '';
            label[i].style.animation = '300ms fadeOut';
            setTimeout(e => { label[i].style.display = ''; icons[i].style.transition = ''; }, 290)
        })
    })
    /* backButton.addEventListener('mouseover', e=> {
        backButton.style.transform = 'scale(1.15)'
        backButton.addEventListener('mouseout', e=> {
            backButton.style.transform = '';
        })
    }) */
}

icons[0].addEventListener('click', e => {
    iconContainer.style.animation = '500ms fadeOut';
    setTimeout(e => { iconContainer.style.display = 'none' }, 500)
    setTimeout(e => { gsap.from(about, { duration: 1, x: '-150%' }); about.style.display = 'flex'; }, 500)
    setTimeout(e => { back.style.display = 'block'; }, 1000);
    back.style.animation = '500ms fadeIn';
})

back.addEventListener('click', e => {
    gsap.to(about, { duration: 1, x: '-150%' })
    setTimeout(e => { about.style.display = ''; }, 1000)
    back.style.animation = '100ms fadeOut';
    back.style.display = '';
    setTimeout(e => { iconContainer.style.display = ''; }, 1000);
    gsap.from(icons, { duration: .5, y: '1050%', delay: 1, stagger: .25 });
    iconContainer.style.animation = '';
})

icons[2].addEventListener('click', e=> {
    iconContainer.style.animation = '500ms fadeOut';
    setTimeout(e => { iconContainer.style.display = 'none' }, 490);
})

gsap.from('h1', { duration: .5, y: '-1000%' });
gsap.from(icons, { duration: .5, y: '1050%', delay: .5, stagger: .2 });