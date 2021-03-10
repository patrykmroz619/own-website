import { AmbientLight, Color, PointLight } from 'three';

export const getPointLight = (
    color: string,
    x: number,
    y: number,
    z: number,
    intensity?: number
): PointLight => {
    const threeColor = new Color(color);

    const light = new PointLight(threeColor, intensity);
    light.position.set(x, y, z);

    return light;
};

export const getAmbientLight = (): AmbientLight => {
    return new AmbientLight(0xffffff, 0.01);
};
