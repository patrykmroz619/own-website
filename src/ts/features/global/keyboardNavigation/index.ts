import { addAllSectionsScrollListener } from '@utils/sectionScrollListener';

const pageWrapper = document.querySelector('.wrapper') as HTMLElement;
const sections = [...document.querySelectorAll('.section')] as HTMLElement[];

const onTabPress = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
        pageWrapper.classList.add('tabbing');

        window.removeEventListener('keydown', onTabPress);
        window.addEventListener('mousedown', onMouseDown);
    }
};

const onMouseDown = () => {
    pageWrapper.classList.remove('tabbing');

    window.removeEventListener('mousedown', onMouseDown);
    window.addEventListener('keydown', onTabPress);
};

const setTabIndexesOnFocusableElements = (
    section: HTMLElement,
    value: string
) => {
    const elements = section.querySelectorAll('[data-keyboard-focus="true"]');
    elements.forEach((el) => el.setAttribute('tabindex', value));
};

const onSectionChange = (from: string, to: string) => {
    const fromSection = sections.find((section) => section.id === from);
    const toSection = sections.find((section) => section.id === to);

    if (fromSection && toSection) {
        setTabIndexesOnFocusableElements(fromSection, '-1');
        setTabIndexesOnFocusableElements(toSection, '1');
    }
};

export const handleKeyboardNavigation = () => {
    window.addEventListener('keydown', onTabPress);
    setTabIndexesOnFocusableElements(document.body, '-1'); // set defaults tabindex
    addAllSectionsScrollListener(onSectionChange);
};
