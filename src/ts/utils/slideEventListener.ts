export type OnSlideEvent = ((x: number, y: number) => void) | null;

type UnsubscribeListener = () => void;

type SlideEventListener = (
    root: HTMLElement,
    onStart?: OnSlideEvent,
    onMove?: OnSlideEvent,
    onEnd?: OnSlideEvent,
    preventDefault?: boolean
) => UnsubscribeListener;

export const slideEventListener: SlideEventListener = (
    root,
    onStart,
    onMove,
    onEnd,
    preventDefault = false
) => {
    const onMouseDown = (e: MouseEvent) => {
        preventDefault && e.preventDefault();
        onStart && onStart(e.clientX, e.clientY);
    };

    const onMouseMove = (e: MouseEvent) => {
        preventDefault && e.preventDefault();
        const isMouseDown = e.buttons === 1;
        if (isMouseDown && onMove) {
            onMove(e.clientX, e.clientY);
        }
    };

    const onMouseUp = (e: MouseEvent) => {
        preventDefault && e.preventDefault();
        onEnd && onEnd(e.clientX, e.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
        preventDefault && e.preventDefault();
        if (onStart) {
            const touch = e.touches[0];
            onStart(touch.pageX, touch.pageY);
        }
    };

    const onTouchMove = (e: TouchEvent) => {
        preventDefault && e.preventDefault();
        if (onMove) {
            const touch = e.touches[0];
            onMove(touch.pageX, touch.pageY);
        }
    };

    const onTouchEnd = (e: TouchEvent) => {
        preventDefault && e.preventDefault();
        if (onEnd) {
            const touch = e.touches[0];
            onEnd(touch.pageX, touch.pageY);
        }
    };

    root.addEventListener('touchstart', onTouchStart);
    root.addEventListener('mousedown', onMouseDown);

    root.addEventListener('touchmove', onTouchMove);
    root.addEventListener('mousemove', onMouseMove);

    root.addEventListener('touchend', onTouchEnd);
    root.addEventListener('mouseup', onMouseUp);

    const unsubscribe = () => {
        root.removeEventListener('touchstart', onTouchStart);
        root.removeEventListener('mousedown', onMouseDown);

        root.removeEventListener('touchmove', onTouchMove);
        root.removeEventListener('mousemove', onMouseMove);

        root.removeEventListener('touchend', onTouchEnd);
        root.removeEventListener('mouseup', onMouseUp);
    };

    return unsubscribe;
};
