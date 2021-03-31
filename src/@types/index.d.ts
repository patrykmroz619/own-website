declare const ObjectKeys: {
    keys<T extends Record<string, unknown>>(object: T): (keyof T)[];
};

declare type Position3d = { x: number; y: number; z: number };

declare type BackgroundShapesNames =
    | 'cube'
    | 'random'
    | 'multiSpheres'
    | 'helix'
    | 'sphere';

declare type BackgroundShapePositions = Record<
    BackgroundShapesNames,
    Position3d[]
>;

declare type SectionId =
    | 'start'
    | 'about'
    | 'portfolio'
    | 'technologies'
    | 'contact';
