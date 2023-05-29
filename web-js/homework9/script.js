const tabTitles = document.querySelectorAll('.tabs-title');
const tabContents = document.querySelectorAll('.tabs-content li');


tabTitles.forEach((tabTitle, index) => {
    tabTitle.addEventListener('click', () => {

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        tabContents[index].classList.add('active');

        tabTitles.forEach(title => {
            title.classList.remove('active');
        });

        tabTitle.classList.add('active');
    });
});