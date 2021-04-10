import { Scene, Vector2 } from 'three';
import { gsap } from 'gsap';

export const runMoveEffectOnScene = (scene: Scene) => {
    const mouse = new Vector2();

    const sceneAnimation = () => {
        gsap.to(scene.position, {
            x: (mouse.x - 0.5) * -80,
            y: (mouse.y - 0.5) * 80,
        });

        gsap.to(scene.rotation, {
            x: (mouse.y - 0.5) / 5,
            y: (mouse.x - 0.5) / 5,
        });
    };

    const onMove = (x: number, y: number) => {
        mouse.x = x / window.innerWidth;
        mouse.y = y / window.innerHeight;

        sceneAnimation();
    };

    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener(
        'touchmove',
        (e) => onMove(e.touches[0].clientX, e.touches[0].clientY),
        { passive: true }
    );
};
