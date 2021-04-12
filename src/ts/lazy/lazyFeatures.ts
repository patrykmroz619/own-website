export const background = (section: HTMLElement) =>
    import('../features/aboveTheFold/background').then(
        ({ setBackgroundAnimation }) => {
            setBackgroundAnimation();
            section.classList.remove('loading');
        }
    );

export const about = (section: HTMLElement) =>
    import('../features/about').then(({ runAboutSectionEffects }) => {
        runAboutSectionEffects();
        section.classList.remove('loading');
    });

export const portfolio = (section: HTMLElement) =>
    import('../features/portfolio').then(({ runPortfolioEffects }) => {
        runPortfolioEffects();
        section.classList.remove('loading');
    });

export const technologies = (section: HTMLElement) =>
    import('../features/technologies').then(({ runTechnologiesEffects }) => {
        runTechnologiesEffects();
        section.classList.remove('loading');
    });

export const contact = (section: HTMLElement) =>
    import('../features/contact').then(({ runContactFeatures }) => {
        runContactFeatures();
        section.classList.remove('loading');
    });
