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

    gsap.set([name, description, technologiesHeading, technologies, links], {
        opacity: 0,
        y: 25,
    });

    const timeline = gsap.timeline();

    timeline.to(name, { opacity: 1, y: 0 });
    timeline.to(description, { opacity: 1, y: 0 }, '-=0.3');
    timeline.to(technologiesHeading, { opacity: 1, y: 0 }, '-=0.3');
    technologies.forEach((technology) => {
        timeline.to(technology, { opacity: 1, y: 0 }, '-=0.45');
    });
    links.forEach((link) => {
        timeline.to(link, { opacity: 1, y: 0 }, '-=0.3');
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
        }
    }
};
