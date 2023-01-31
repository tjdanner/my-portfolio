const icons = document.getElementsByClassName('icons');
const main = document.getElementById('main');
const iconGrid = document.getElementById('icon-grid');
const backButton = document.getElementById('back');

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', e => {
        icons[i].style.width = '75px'
        icons[i].addEventListener('mouseout', e => {
            icons[i].style.width = '';
        })
    })
}
icons[0].addEventListener('click', e => {
    iconGrid.style.display = 'none';
    about.style.display = 'flex';
    backButton.style.display = 'block';
})
icons[1].addEventListener('click', e => {
    window.open('media/DannerResumeTech.pdf')
})
icons[3].addEventListener('click', e => {
    window.open('https://github.com/tjdanner')
})
icons[4].addEventListener('click', e => {
    window.open('https://www.linkedin.com/in/trevor-danner-736b2117a/');
})
icons[5].addEventListener('click', e => {
    window.open('https://www.instagram.com/trevordannerpls/')
})
icons[6].addEventListener('click', e => {
    about.style.display = 'none';
    iconGrid.style.display = 'grid';
    backButton.style.display = 'none';
})
