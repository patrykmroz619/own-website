import { Scene, Mesh } from 'three';
import { getCamera } from './objects/camera';
import { getCube } from './objects/cube';
import { getAmbientLight, getPointLight } from './objects/lights';
import { getRenderer } from './objects/renderer';
import { shapesAnimation } from './animations';

const root = document.querySelector('.main__background') as HTMLDivElement;

const CUBES_AMOUNT = 216;

export const start = (): void => {
    const scene = new Scene();
    const sceneOfCubes = new Scene();
    scene.add(sceneOfCubes);

    const renderer = getRenderer(root);
    const camera = getCamera(root);

    const ambientLight = getAmbientLight();
    const pointLight1 = getPointLight('red', 30, 30, 30, 0.5);
    const pointLight2 = getPointLight('white', -30, -30, -30, 0.7);

    scene.add(ambientLight, pointLight1, pointLight2);

    const cubes: Mesh[] = [];

    for (let i = 0; i < CUBES_AMOUNT; i++) {
        const cube = getCube(5);
        cubes.push(cube);
        sceneOfCubes.add(cube);
    }

    shapesAnimation(cubes);

    const refresh = () => {
        sceneOfCubes.rotation.y += 0.005;
        sceneOfCubes.rotation.z += 0.002;

        renderer.render(scene, camera);
        requestAnimationFrame(refresh);
    };

    refresh();
};
