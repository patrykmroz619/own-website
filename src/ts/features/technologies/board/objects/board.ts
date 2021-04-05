import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { setPosition } from '../setPosition';
import { createTechnologyObject } from './technologyObject';

type Board = Array<Array<CSS3DObject | null>>;

export const generateBoard = (boardScheme: TechnologiesBoardScheme) => {
    const board: Board = boardScheme.map((row, y) => {
        return row.map((technology, x) => {
            if (technology) {
                const object = createTechnologyObject(
                    technology.name,
                    technology.iconSrc || ''
                );
                setPosition(object, x, y);
                return object;
            }

            return null;
        });
    });

    return board;
};
