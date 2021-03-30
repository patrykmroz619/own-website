import { handleKeyboard } from './keyboard';
import { handleTouch } from './touch';
import { handleWheel } from './wheel';

export const handleControls = () => {
    handleWheel();
    handleKeyboard();
    handleTouch();
};
