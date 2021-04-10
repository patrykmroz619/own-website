export type OnSlideEvent = ((x: number, y: number) => void) | null;

type UnsubscribeListener = () => void;

type SlideEventListener = (
    root: HTMLElement,
    onStart?: OnSlideEvent,
    onMove?: OnSlideEvent,
    onEnd?: (() => void) | null,
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
        onEnd && onEnd();
    };

    const onTouchStart = (e: TouchEvent) => {
        preventDefault && e.preventDefault();
        if (onStart) {
            const touch = e.touches[0];
            onStart(touch.pageX, touch.pageY);
        }
    };

    const onTouchMove = (e: TouchEvent) => {
        e.stopPropagation();
        preventDefault && e.preventDefault();
        if (onMove) {
            const touch = e.touches[0];
            onMove(touch.pageX, touch.pageY);
        }
    };

    const onTouchEnd = (e: TouchEvent) => {
        preventDefault && e.preventDefault();
        if (onEnd) {
            onEnd();
        }
    };

    root.addEventListener('touchstart', onTouchStart, { passive: true });
    root.addEventListener('mousedown', onMouseDown);

    root.addEventListener('touchmove', onTouchMove, { passive: true });
    root.addEventListener('mousemove', onMouseMove);

    root.addEventListener('touchend', onTouchEnd, { passive: true });
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
