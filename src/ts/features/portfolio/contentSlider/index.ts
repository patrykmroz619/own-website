import { gsap } from 'gsap';
import { setActiveProjectsNavigationItem } from '../navigation';

const projects = [...document.querySelectorAll('.portfolio__project')];

const getProjectsElements = (project: Element) => {
    const name = project.querySelector('.project__name');
    const description = project.querySelector('.project__descriptionWrapper');
    const technologiesHeading = project.querySelector(
        '.project__technologiesHeading'
    );
    const technologies = project.querySelectorAll('.project__technology');
    const links = project.querySelectorAll('.project__link');

    return { name, description, technologiesHeading, technologies, links };
};

const revealAnimation = (project: Element) => {
    const {
        name,
        description,
        technologiesHeading,
        technologies,
        links,
    } = getProjectsElements(project);

    const timeline = gsap.timeline();

    timeline.to(name, { opacity: 1, y: 0 });
    timeline.to(description, { opacity: 1, y: 0 }, '-=0.25');
    timeline.to(technologiesHeading, { opacity: 1, y: 0 }, '-=0.25');
    technologies.forEach((technology) => {
        timeline.to(technology, { opacity: 1, y: 0 }, '-=0.4');
    });
    links.forEach((link) => {
        timeline.to(link, { opacity: 1, y: 0 }, '-=0.25');
    });
};

const hideAnimation = (project: Element) => {
    const projectElements = getProjectsElements(project);

    const timeline = gsap.timeline();

    timeline.to(Object.values(projectElements), { opacity: 0 });
    timeline.set(Object.values(projectElements), {
        y: 25,
    });
};

export const setActiveProject = (index: number) => {
    setActiveProjectsNavigationItem(index);

    for (let i = 0; i < projects.length; i++) {
        if (i === index) {
            projects[i].classList.add('active');
            revealAnimation(projects[i]);
        } else {
            projects[i].classList.remove('active');
            hideAnimation(projects[i]);
        }
    }
};
