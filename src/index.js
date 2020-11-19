// @packages
const { Vector3 } = require('three');
const THREE = require('three');

const { cameraPosition } = require('./utils');

// @scripts
const mouse = new THREE.Vector2();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
const rotation = new Vector3(0, 0, 0);

function init() {
    camera.position.z = 1;
    scene.add(mesh);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotateOnWorldAxis(new Vector3(1, 0, 0), rotation.x);
    mesh.rotateOnWorldAxis(new Vector3(0, 0, 1), rotation.y);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    rotation.setY(THREE.Math.degToRad(3 * mouse.y));
}

const right = 100;
const left = 97;

function onKeyPress(e) {
    let dir = 0;

    if (e.keyCode === right) {
        dir = 1;
    } else if (e.keyCode === left) {
        dir = -1;
    }

    camera.position = cameraPosition(camera.position, new Vector3(dir, 0, 0));
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('keypress', onKeyPress, false);
