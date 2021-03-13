import {
    AmbientLight,
    Color,
    Mesh,
    MeshBasicMaterial,
    PointLight,
    SphereGeometry,
} from 'three';

export const getPointLight = (
    color: string,
    x: number,
    y: number,
    z: number,
    intensity?: number
): PointLight => {
    const threeColor = new Color(color);

    const geometry = new SphereGeometry(1, 12, 6);
    const material = new MeshBasicMaterial({ color: threeColor });
    const sphere = new Mesh(geometry, material);

    const light = new PointLight(threeColor, intensity);
    light.position.set(x, y, z);
    light.add(sphere);

    return light;
};

export const getAmbientLight = (color?: string): AmbientLight => {
    return new AmbientLight(color ?? 0xffffff, 0.2);
};
