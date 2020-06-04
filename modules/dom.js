export function getPosition(domElement) {
    let position = [];
    position.push(domElement.getBoundingClientRect().x);
    position.push(domElement.getBoundingClientRect().y);

    return position;
}

export function moveTo(domElement, x, y) {
    domElement.style.position = "absolute";
    domElement.style.left = x + 'px';
    domElement.style.top = y + 'px';
    return [domElement.style.left, domElement.style.top];
}

export default {
    getPosition,
    moveTo
}