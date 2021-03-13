import { BoxGeometry, Mesh, MeshPhongMaterial } from 'three';

export const getCube = (size: number, x = 0, y = 0, z = 0) => {
    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshPhongMaterial();

    const cube = new Mesh(geometry, material);
    cube.position.set(x, y, z);

    return cube;
};
