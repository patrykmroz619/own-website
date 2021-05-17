import { Scene, Mesh } from 'three';
import { getCamera } from './objects/camera';
import { getCube } from './objects/cube';
import { getAmbientLight, getPointLight } from './objects/lights';
import { getRenderer } from './objects/renderer';
import { shapesAnimation } from './animations';
import { getPrimaryColor } from '@utils/primaryColor';
import { addMediaQueryListener } from '@utils/mediaQueryListener';
import { controlAnimation } from './controls';

export const root = document.querySelector(
    '.main__background'
) as HTMLDivElement;

const CUBES_AMOUNT = 125;

export const setBackgroundAnimation = (): void => {
    const scene = new Scene();

    const setMobilePosition = () => scene.position.set(0, -30, 0);
    const setDescopPosition = () => scene.position.set(45, 0, 0);

    addMediaQueryListener(
        '(min-width: 640px)',
        setDescopPosition,
        setMobilePosition
    );

    const sceneOfCubes = new Scene();
    const sceneOfLights1 = new Scene();
    const sceneOfLights2 = new Scene();
    scene.add(sceneOfCubes);
    scene.add(sceneOfLights1);
    scene.add(sceneOfLights2);

    const renderer = getRenderer(root);
    const camera = getCamera(root);

    const primaryColor = getPrimaryColor();

    const ambientLight = getAmbientLight(primaryColor);

    const pointLight1 = getPointLight(primaryColor, 35, 35, 25, 0.6);
    const pointLight2 = getPointLight('white', -30, -30, -30, 0.6);
    const pointLight3 = getPointLight(primaryColor, 35, -25, -30, 0.6);
    const pointLight4 = getPointLight(primaryColor, -23, -35, 25, 0.6);
    const pointLight5 = getPointLight('white', 25, 30, -30, 0.7);
    const pointLight6 = getPointLight(primaryColor, -25, 30, -35, 0.6);

    sceneOfLights1.add(ambientLight, pointLight1, pointLight2, pointLight3);

    sceneOfLights2.add(pointLight4, pointLight5, pointLight6);

    const cubes: Mesh[] = [];

    for (let i = 0; i < CUBES_AMOUNT; i++) {
        const cube = getCube(5);
        cubes.push(cube);
        sceneOfCubes.add(cube);
    }

    const [pauseShapesAnimation, resumeShapesAnimation] = shapesAnimation(
        cubes
    );

    let isAnimate = false;
    const fps = 60;
    const interval = 1000 / fps;
    let then = Date.now();

    const refresh = () => {
        if (isAnimate) {
            const now = new Date().getTime();
            const delta = now - then;

            if (delta >= interval) {
                then = now;

                sceneOfCubes.rotation.y += 0.003;
                sceneOfCubes.rotation.z += 0.001;
                sceneOfLights1.rotation.z += 0.005;
                sceneOfLights2.rotation.z -= 0.007;
                sceneOfLights1.rotation.x -= 0.003;
                sceneOfLights2.rotation.x += 0.005;

                renderer.render(scene, camera);
            }
            requestAnimationFrame(refresh);
        }
    };

    const pauseAnimation = () => {
        if (isAnimate) {
            isAnimate = false;
            pauseShapesAnimation();
        }
    };

    const resumeAnimation = () => {
        if (!isAnimate) {
            isAnimate = true;
            refresh();
            resumeShapesAnimation();
        }
    };

    controlAnimation(resumeAnimation, pauseAnimation);

    setTimeout(() => {
        resumeAnimation();
        root.classList.remove('loading');
    }, 2000);
};
