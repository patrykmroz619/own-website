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

declare type Technology = {
    name: string;
    iconSrc?: string;
};

declare type TechnologiesBoardScheme = Array<Array<Technology | null>>;

declare type Message = {
    name: string;
    email: string;
    subject: string;
    content: string;
};

declare type ApiResponseBody<TData> = {
    success: boolean;
    data: TData;
};
