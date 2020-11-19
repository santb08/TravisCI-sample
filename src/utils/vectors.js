// @packages
const { Vector3 } = require('three');

const cameraPosition = (position, distance) => new Vector3(0, 0, 0)
    .setX(position.x + distance.x)
    .setY(position.y + distance.y)
    .setZ(position.z + distance.z);

module.exports = {
    cameraPosition
};
