export const background = () =>
    import(
        '../features/aboveTheFold/background'
    ).then(({ setBackgroundAnimation }) => setBackgroundAnimation());

export const about = () =>
    import('../features/about').then(({ runAboutSectionEffects }) =>
        runAboutSectionEffects()
    );

export const portfolio = () =>
    import('../features/portfolio').then(({ runPortfolioEffects }) =>
        runPortfolioEffects()
    );

export const technologies = () =>
    import('../features/technologies').then(({ runTechnologiesEffects }) =>
        runTechnologiesEffects()
    );

export const contact = () =>
    import('../features/contact').then(({ runContactFeatures }) =>
        runContactFeatures()
    );
