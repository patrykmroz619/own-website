export const background = () =>
    import('./aboveTheFold/background').then(({ setBackgroundAnimation }) =>
        setBackgroundAnimation()
    );

export const about = () =>
    import('./about').then(({ runAboutSectionEffects }) =>
        runAboutSectionEffects()
    );

export const portfolio = () =>
    import('./portfolio').then(({ runPortfolioEffects }) =>
        runPortfolioEffects()
    );

export const technologies = () =>
    import('./technologies').then(({ runTechnologiesEffects }) =>
        runTechnologiesEffects()
    );

export const contact = () =>
    import('./contact').then(({ runContactFeatures }) => runContactFeatures());
