import { Scene, Mesh } from 'three';
import { getCamera } from './objects/camera';
import { getCube } from './objects/cube';
import { getAmbientLight, getPointLight } from './objects/lights';
import { getRenderer } from './objects/renderer';
import { shapesAnimation } from './animations';
import { getPrimaryColor } from '@utils/primaryColor';
import { mediaQuery } from '@utils/mediaQuery';

const root = document.querySelector('.main__background') as HTMLDivElement;

const CUBES_AMOUNT = 125;

export const setBackgroundAnimation = (): void => {
    const scene = new Scene();

    const setMobilePosition = () => scene.position.set(0, -30, 0);
    const setDescopPosition = () => scene.position.set(45, 0, 0);

    mediaQuery('(min-width: 640px)', setDescopPosition, setMobilePosition);

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

    let isAnimate = true;

    const refresh = () => {
        if (isAnimate) {
            sceneOfCubes.rotation.y += 0.003;
            sceneOfCubes.rotation.z += 0.001;
            sceneOfLights1.rotation.z += 0.005;
            sceneOfLights2.rotation.z -= 0.007;
            sceneOfLights1.rotation.x -= 0.003;
            sceneOfLights2.rotation.x += 0.005;

            renderer.render(scene, camera);
            requestAnimationFrame(refresh);
        }
    };

    const pauseAnimation = () => {
        isAnimate = false;
        pauseShapesAnimation();
    };

    const resumeAnimation = () => {
        isAnimate = true;
        resumeShapesAnimation();
        refresh();
    };

    const onScroll = () => {
        if (window.innerHeight < window.scrollY && isAnimate) {
            pauseAnimation();
        } else if (window.innerHeight >= window.scrollY && !isAnimate) {
            resumeAnimation();
        }
    };

    const onVisibilityChange = () => {
        if (document.hidden && isAnimate) {
            pauseAnimation();
        } else if (!isAnimate) {
            resumeAnimation();
        }
    };

    window.addEventListener('scroll', onScroll);
    document.addEventListener('visibilitychange', onVisibilityChange);

    refresh();
};
