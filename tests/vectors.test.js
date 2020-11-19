// @script
const { Vector3 } = require('three');
const { cameraPosition } = require('../src/utils');

test('Position Vector', () => {
    const value = cameraPosition(new Vector3(1, 0, 0), new Vector3(1, 0, 0));
    expect(value).toEqual(new Vector3(2, 0, 0));
});
