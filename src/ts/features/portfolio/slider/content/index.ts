import { gsap } from 'gsap';
import { setActiveProjectsNavigationItem } from '../navigation';

const projects = [
    ...document.querySelectorAll('.portfolio__project'),
] as HTMLElement[];

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

let timeline: gsap.core.Timeline;

const fadeIn = (project: HTMLElement) => {
    const {
        name,
        description,
        technologiesHeading,
        technologies,
        links,
    } = getProjectsElements(project);

    project.style.pointerEvents = 'initial';

    gsap.set([name, description, technologiesHeading, technologies, links], {
        opacity: 0,
        y: 25,
    });

    timeline = gsap.timeline({ delay: 0.6 });

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

const fadeOut = (project: HTMLElement) => {
    const {
        name,
        description,
        technologiesHeading,
        technologies,
        links,
    } = getProjectsElements(project);

    project.style.pointerEvents = 'none';

    if (timeline) timeline.pause();

    gsap.to(
        [name, description, technologiesHeading, ...technologies, ...links],
        {
            opacity: 0,
        }
    );
};

let beforeActiveElementIndex: number | null = null;

export const setActiveProject = (index: number) => {
    setActiveProjectsNavigationItem(index);

    if (beforeActiveElementIndex !== null) {
        fadeOut(projects[beforeActiveElementIndex]);
    }
    fadeIn(projects[index]);

    beforeActiveElementIndex = index;
};
