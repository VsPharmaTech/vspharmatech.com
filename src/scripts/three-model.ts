
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function loadModel() {
  if (typeof document === "undefined") return; // Ensure it runs only in the browser

  const container = document.getElementById("three-container");
  if (!container) {
    console.error("Three.js container not found");
    return;
  }

  // Create Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(2, 2, 2);
  scene.add(directionalLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const loader = new GLTFLoader();
  loader.load("/model.glb", (gltf) => {
    const model = gltf.scene;
    model.scale.set(5, 5, 5);
    model.position.set(0, -1, 0);
    scene.add(model);

    function animate() {
      requestAnimationFrame(animate);
      model.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
}
