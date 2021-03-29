import { setActiveProject } from '../index';

const items = [...document.querySelectorAll('.projectsNavigation__item')];

items.forEach((item, index) => {
    item.addEventListener('click', () => setActiveProject(index));
});

export const setActiveProjectsNavigationItem = (indexOfActiveItem: number) => {
    items.forEach((item, index) => {
        if (index === indexOfActiveItem) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};
