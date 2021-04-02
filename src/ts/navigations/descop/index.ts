import { addAllSectionsScrollListener } from '@utils/sectionScrollListener';

const descopNavItems = [
    ...document.querySelectorAll('.descopMenu__button'),
] as HTMLElement[];

export const handleDescopNavigation = () => {
    const onScroll = (from: SectionId, to: SectionId) => {
        descopNavItems.forEach((item) => {
            if (item.dataset.navigation === from) {
                item.classList.remove('active');
            }

            if (item.dataset.navigation === to) {
                item.classList.add('active');
            }
        });
    };

    addAllSectionsScrollListener(onScroll);
};
