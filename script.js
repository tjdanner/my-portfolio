const icons = document.getElementsByClassName('icons');
const main = document.getElementById('main');
const iconContainer = document.getElementById('icon-container');
const backButton = document.getElementById('back');
const label = document.getElementsByClassName('label');
const about = document.getElementById('about')

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', e => {
        icons[i].style.transition = '300ms'
        icons[i].style.transform = 'scale(1.15)'
        label[i].style.display = 'block';
        label[i].style.animation = '500ms fadeIn'
        icons[i].addEventListener('mouseout', e => {
            icons[i].style.transform = '';
            label[i].style.animation = '500ms fadeOut';
            setTimeout(e => { label[i].style.display = ''; icons[i].style.transition = ''; }, 490)
        })
    })
}

/* icons[0].addEventListener('click', e => {
    iconContainer.style.display = 'none';
    about.style.display = 'flex';
    backButton.style.display = 'block';
    gsap.from(about, { duration: 1, x: '-100%' })
})

icons[5].addEventListener('click', e => {
    icons[5].style.display = '';
    setTimeout(e => { iconContainer.style.display = 'flex' }, 900);
    gsap.to(about, { duration: 1, x: '-200%' })
    setTimeout(e => { about.style.display = '' }, 900)
    gsap.from(icons, { duration: 1, y: '10000%', stagger: .1 })
})
 */

gsap.from('h1', { duration: 1, y: '-1000%' })
gsap.from(icons, { duration: 1, y: '10000%', stagger: .1 })