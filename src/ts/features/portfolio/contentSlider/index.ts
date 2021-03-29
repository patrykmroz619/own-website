import { setActiveProjectsNavigationItem } from '../navigation';

const projects = [...document.querySelectorAll('.portfolio__project')];

export const setActiveProject = (index: number) => {
    setActiveProjectsNavigationItem(index);

    for (let i = 0; i < projects.length; i++) {
        if (i === index) {
            projects[i].classList.add('active');
        } else {
            projects[i].classList.remove('active');
        }
    }
};
