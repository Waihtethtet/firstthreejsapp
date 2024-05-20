import * as THREE from 'three';
import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '/three/examples/jsm/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader()

THREE.PerspectiveCamera;
THREE.MeshStandardMaterial;
THREE.Texture;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );