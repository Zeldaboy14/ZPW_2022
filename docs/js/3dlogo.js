import { GLTFLoader } from 'https://www.unpkg.com/three@0.120.1/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'https://www.unpkg.com/three@0.120.1/examples/jsm/loaders/RGBELoader.js';
import { Fire } from 'https://www.unpkg.com/three@0.120.1/examples/jsm/objects/Fire.js';

(function Logo() {
	var loader = new GLTFLoader();
	var RenderCanvas = $("#LogoCanvas");
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, RenderCanvas.innerWidth / RenderCanvas.innerHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({ canvas: LogoCanvas, alpha: true, antialias: true });
	var clock = new THREE.Clock();
	var LogoMesh;
	var LogoMixer;
	new RGBELoader()
		.setDataType(THREE.UnsignedByteType)
		.setPath('assets/3d/')
		.load('env_small.hdr', async function (texture) {
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1;
			renderer.outputEncoding = THREE.sRGBEncoding;
			let pmremGenerator = new THREE.PMREMGenerator(renderer);
			pmremGenerator.compileEquirectangularShader();
			let envMap = pmremGenerator.fromEquirectangular(texture).texture;
			scene.environment = envMap;
			pmremGenerator.dispose();
		});

	camera.position.z = 2.5;
	camera.lookAt(0, 0, 0);

	let pointlight = new THREE.PointLight(0xffffff, 0.8, 100);
	pointlight.position.set(3, 2, 4);
	pointlight.castShadow = true;
	scene.add(pointlight);

	loader.load('model/logo.glb', async function (gltf) {

		//gltf.scene.position.set(0.0, -0.4, 0.0);
		LogoMesh = gltf.scene;
		scene.add(LogoMesh);

		LogoMixer = new THREE.AnimationMixer(LogoMesh);
		let clips = gltf.animations;
		clips.forEach(function (clip) {
			LogoMixer.clipAction(clip).play();
		});

	}, undefined, function (error) {
		console.error(error);
	});

	var CENTERX, CENTERY = 0;

	function UpdateCenterPosition() {
		let CanvasOffset = RenderCanvas.offset();
		CENTERX = CanvasOffset.left + RenderCanvas.innerWidth() / 2.0;
		CENTERY = CanvasOffset.top + RenderCanvas.innerHeight() / 2.0;
	}

	window.addEventListener('resize', onWindowResize, false);
	async function onWindowResize() {
		UpdateCenterPosition();
		camera.aspect = RenderCanvas.innerWidth() / RenderCanvas.innerHeight();
		camera.updateProjectionMatrix();
		renderer.setSize(RenderCanvas.innerWidth(), RenderCanvas.innerHeight(), false);
	}

	var MOUSEX = 0.0;
	var MOUSEY = 0.0;
	var MOUSETARGETX = 0.0;
	var MOUSETARGETY = 0.0;
	document.onmousemove = handleMouseMove;
	function handleMouseMove(event) {
		MOUSETARGETX = event.pageX;
		MOUSETARGETY = event.pageY;
	}

	var fire;

	var plane = new THREE.PlaneBufferGeometry(2, 2);
	fire = new Fire(plane, {
		textureWidth: 512,
		textureHeight: 512,
		debug: false
	});
	scene.add(fire);
	fire.addSource(0.5, 0.1, 0.1, 1.0, 0.0, 1.0);
	fire.position.z = 0.35;
	fire.position.y = 1.5;
	fire.color1.set('#ffffff');
	fire.color2.set('#cdc1bb');
	fire.color3.set('#000000');
	fire.colorBias = 0.6;
	fire.burnRate = 0.35;
	fire.diffuse = 1.33;
	fire.viscosity = 0.25;
	fire.expansion = -0.25;
	fire.swirl = 50.0;
	fire.drag = 0.35;
	fire.airSpeed = 16.0;
	fire.windX = 0.0;
	fire.windY = 0.45;
	fire.speed = 500.0;


	var NormalRenderCanvas = document.getElementById('LogoCanvas');
	var StretchTarget = 0.0;
	var curStretch = 0.0;
	NormalRenderCanvas.addEventListener('mousedown', e => { StretchTarget = 1.0; });
	NormalRenderCanvas.addEventListener('mouseup', e => { StretchTarget = 0.0; });

	function lerp(start, end, amt) {
		return (1.0 - amt) * start + amt * end;
	}
	//var startTime = Date.now();
	function animate() {
		//let curTime = Date.now() - startTime;
		curStretch = lerp(curStretch, StretchTarget, 0.1);
		MOUSEX = lerp(MOUSEX, MOUSETARGETX, 0.2);
		MOUSEY = lerp(MOUSEY, MOUSETARGETY, 0.2);

		camera.position.z = 2.5 + curStretch;

		let deltaTime = clock.getDelta();
		if (LogoMixer) LogoMixer.update(deltaTime + (curStretch / 10.0));

		let MouseFactor = (5000.0 - (curStretch * 4200.0));
		camera.position.x = -(MOUSEX - CENTERX) / MouseFactor;
		camera.position.y = (MOUSEY - CENTERY) / MouseFactor;
		camera.lookAt(0, 0, 0);

		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	};
	animate();

	$(window).on('load', function () {
		onWindowResize();
	});
}());