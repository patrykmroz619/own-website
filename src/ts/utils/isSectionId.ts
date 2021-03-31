const sectionIds = ['start', 'portfolio', 'about', 'technologies', 'contact'];

export const isSectionId = (id: string): id is SectionId => {
    return sectionIds.some((sectionId) => sectionId === id);
};
