const views = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;

type DetectorCallback = (sectionId: string) => void;

let currentViewId: string;
let isDetectorRunning = false;

const callbacks: DetectorCallback[] = [];

export const runViewDetector = () => {
    const onScroll = () => {
        const scrollPosition = window.scrollY;

        for (let i = 0; i < views.length; i++) {
            const viewOffsetTop = views[i].offsetTop;
            if (viewOffsetTop + 100 >= scrollPosition) {
                const id = views[i].getAttribute('id');
                if (id && id != currentViewId) {
                    currentViewId = id;
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

export const applyViewDetectorCallback = (callback: DetectorCallback) => {
    callbacks.push(callback);
    if (!isDetectorRunning) {
        runViewDetector();
    }
};
