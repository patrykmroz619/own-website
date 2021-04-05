import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

const getHTMLStructure = (name: string, iconSrc: string) => {
    const box = document.createElement('div');
    box.classList.add('technology');

    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('technology__iconWrapper');

    const icon = document.createElement('img');
    icon.classList.add('technology__icon');
    icon.src = iconSrc;
    iconWrapper.appendChild(icon);

    const nameElement = document.createElement('p');
    nameElement.textContent = name;
    nameElement.classList.add('technology__name');

    box.appendChild(iconWrapper);
    box.appendChild(nameElement);

    return box;
};

export const createTechnologyObject = (
    name: string,
    iconSrc: string
): CSS3DObject => {
    const htmlStructure = getHTMLStructure(name, iconSrc);

    const technologyObject = new CSS3DObject(htmlStructure);

    return technologyObject;
};
