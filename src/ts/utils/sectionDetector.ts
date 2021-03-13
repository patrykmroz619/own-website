const sections = document.querySelectorAll(
    '.section'
) as NodeListOf<HTMLElement>;

type DetectorCallback = (sectionId: string) => void;

let currentSectionId: string;
let isDetectorRunning = false;

const callbacks: DetectorCallback[] = [];

export const runSectionDetector = () => {
    const onScroll = () => {
        const scrollPosition = window.scrollY;

        for (let i = 0; i < sections.length; i++) {
            const sectionOffsetTop = sections[i].offsetTop;
            if (sectionOffsetTop + 100 >= scrollPosition) {
                const id = sections[i].getAttribute('id');
                if (id && id != currentSectionId) {
                    currentSectionId = id;
                    callbacks.forEach((callback) => {
                        callback(id);
                    });
                }
                break;
            }
        }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    isDetectorRunning = true;
};

export const applyDetectorCallback = (callback: DetectorCallback) => {
    callbacks.push(callback);
    if (!isDetectorRunning) {
        runSectionDetector();
    }
};
