---
title: 3D intergration 
published_at: 2025-04-3
snippet: -w6:c1- teapot🫖
disable_html_sanitization: true
allow_math: true
---

missed class but trav the legend caught me up.

not working 

<script type="module">

	import * as THREE from '/scripts/three.js/three.module.js';

	const container = document.getElementById (`three.js_container`)
	const width = container.parentNode.scrollwidth
	const height = width * 9 / 16

	import { OrbitControls } from '/scripts/three.js/OrbitControls.js';
	import { TeapotGeometry } from '/scripts/three.js/TeapotGeometry.js';

	const teapotSize = 300;

	let teapot;

	const textureMap = new THREE.TextureLoader().load( '/scripts/three.js/textures/uv_grid_opengl.jpg' );
				textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;
				textureMap.anisotropy = 16;
				textureMap.colorSpace = THREE.SRGBColorSpace;

	const path = '/scripts/three.js/textures/pisa/';
				const urls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ];

	const materials = {
   wireframe: new THREE.MeshBasicMaterial ({ 
      wireframe: true 
   })
	}

const rand_el = a => a[Math.floor (Math.random () * a.length)]

	const rand_tess = () => rand_el ([ 20, 30, 40, 50 ])

	// CAMERA
const camera = new THREE.PerspectiveCamera (45, width / height, 1, 80000)
camera.position.set (-600, 550, 1300)

// LIGHTS
const ambientLight = new THREE.AmbientLight (0x7c7c7c, 2.0)

const light = new THREE.DirectionalLight (0xFFFFFF, 2.0)
light.position.set (0.32, 0.39, 0.7)

// RENDERER
const renderer = new THREE.WebGLRenderer ({ antialias: true })
renderer.setPixelRatio (window.devicePixelRatio)
renderer.setSize (width, height)
container.appendChild (renderer.domElement)

// CONTROLS
const cameraControls = new OrbitControls (camera, renderer.domElement)

// scene itself
const scene = new THREE.Scene ()
scene.background = new THREE.Color (0xAAAAAA)
scene.add (ambientLight)
scene.add (light)

let material = materials[ 'wireframe' ] 

let geometry = new TeapotGeometry (
   300, // teapotSize
   rand_tess (),
   true,
   true,
   true,
   true,
)

const draw_teapot = ms => { 
	        geometry = new TeapotGeometry (
            teapotSize,
            'wireframe' (), 
            Math.random () < 0.8,
            Math.random () < 0.8,
            true,
            true,
            true 
         )

         material = materials[ 'wireframe' ]

scene.background = type === `reflective` 
            ? textureCube
            : null


teapot = new THREE.Mesh (geometry, material)
   scene.add (teapot)

   renderer.render (scene, camera)

   requestAnimationFrame (draw_teapot)
}

requestAnimationFrame (draw_teapot)


				textureCube = new THREE.CubeTextureLoader().setPath( path ).load( urls );

				materials[ 'wireframe' ] = new THREE.MeshBasicMaterial( { wireframe: true } );
				materials[ 'flat' ] = new THREE.MeshPhongMaterial( { specular: 0x000000, flatShading: true, side: THREE.DoubleSide } );
				materials[ 'smooth' ] = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide } );
				materials[ 'glossy' ] = new THREE.MeshPhongMaterial( { color: 0xc0c0c0, specular: 0x404040, shininess: 300, side: THREE.DoubleSide } );
				materials[ 'textured' ] = new THREE.MeshPhongMaterial( { map: textureMap, side: THREE.DoubleSide } );
				materials[ 'reflective' ] = new THREE.MeshPhongMaterial( { envMap: textureCube, side: THREE.DoubleSide } );

				// scene itself
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xAAAAAA );

				scene.add( ambientLight );
				scene.add( light );

				// GUI
				setupGui();

			}

			// EVENT HANDLERS

			function onWindowResize() {

				const canvasWidth = window.innerWidth;
				const canvasHeight = window.innerHeight;

				renderer.setSize( canvasWidth, canvasHeight );

				camera.aspect = canvasWidth / canvasHeight;
				camera.updateProjectionMatrix();

				render();

			}

			function setupGui() {

				effectController = {
					newTess: 15,
					bottom: true,
					lid: true,
					body: true,
					fitLid: false,
					nonblinn: false,
					newShading: 'glossy'
				};

				const gui = new GUI();
				gui.add( effectController, 'newTess', [ 2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 40, 50 ] ).name( 'Tessellation Level' ).onChange( render );
				gui.add( effectController, 'lid' ).name( 'display lid' ).onChange( render );
				gui.add( effectController, 'body' ).name( 'display body' ).onChange( render );
				gui.add( effectController, 'bottom' ).name( 'display bottom' ).onChange( render );
				gui.add( effectController, 'fitLid' ).name( 'snug lid' ).onChange( render );
				gui.add( effectController, 'nonblinn' ).name( 'original scale' ).onChange( render );
				gui.add( effectController, 'newShading', [ 'wireframe', 'flat', 'smooth', 'glossy', 'textured', 'reflective' ] ).name( 'Shading' ).onChange( render );

			}


			//

			function render() {

				if ( effectController.newTess !== tess ||
					effectController.bottom !== bBottom ||
					effectController.lid !== bLid ||
					effectController.body !== bBody ||
					effectController.fitLid !== bFitLid ||
					effectController.nonblinn !== bNonBlinn ||
					effectController.newShading !== shading ) {

					tess = effectController.newTess;
					bBottom = effectController.bottom;
					bLid = effectController.lid;
					bBody = effectController.body;
					bFitLid = effectController.fitLid;
					bNonBlinn = effectController.nonblinn;
					shading = effectController.newShading;

					createNewTeapot();

				}

				// skybox is rendered separately, so that it is always behind the teapot.
				if ( shading === 'reflective' ) {

					scene.background = textureCube;

				} else {

					scene.background = null;

				}

				renderer.render( scene, camera );

			}

			// Whenever the teapot changes, the scene is rebuilt from scratch (not much to it).
			function createNewTeapot() {

				if ( teapot !== undefined ) {

					teapot.geometry.dispose();
					scene.remove( teapot );

				}

				const geometry = new TeapotGeometry( teapotSize,
					tess,
					effectController.bottom,
					effectController.lid,
					effectController.body,
					effectController.fitLid,
					! effectController.nonblinn );

				teapot = new THREE.Mesh( geometry, materials[ shading ] );

				scene.add( teapot );

			}

		</script>

![blank](/Images/w1/blankpng.png)

<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px; /* Optional: Add some padding if needed */
}

.button {
    display: flex;
    align-items: center;
    /* Add additional styling for buttons if needed */
}

.button img {
    display: block;
}
</style>

<body>
    <div class="container">
        <a href="/10-p5-in-javacscript" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Back.png" width="40" height="40" alt="Page 2">
        <a href="/" class="button middle">
            <img id= "home_id" src="/Images/Buttons/Home.png" width="40" height="40" alt="Page 2">
        </a>
        <a href="/" class="button right">
            <img id= "next_id" src="/Images/Buttons/Forward.png" width="30" height="30" alt="Page 3">
        </a>
    </div>
</body>

![blank](/Images/w1/blankpng.png)
