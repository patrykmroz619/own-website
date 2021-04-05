type OnHoverStart = () => void;
type OnHoverEnd = () => void;
type Unsubscribe = () => void;

type HoverEventListener = (
    target: HTMLElement,
    onHoverStart: OnHoverStart,
    onHoverEnd: OnHoverEnd
) => Unsubscribe;

export const hoverEventListener: HoverEventListener = (
    target,
    onHoverStart,
    onHoverEnd
) => {
    target.addEventListener('mouseenter', onHoverStart);
    target.addEventListener('mouseleave', onHoverEnd);
    target.addEventListener('touchstart', onHoverStart);
    target.addEventListener('touchend', onHoverEnd);

    return () => {
        target.removeEventListener('mouseenter', onHoverStart);
        target.removeEventListener('mouseleave', onHoverEnd);
        target.removeEventListener('touchstart', onHoverStart);
        target.removeEventListener('touchend', onHoverEnd);
    };
};
