import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

window.addEventListener("load", () => {
  const videoHero = document.querySelector(".hero video");
  const videoFooter = document.querySelector("footer video");

  videoHero.src = "/public/img/video-hero.mp4"
  videoHero.autoplay = true;
  videoHero.muted = true;
  videoHero.loop = true;

  videoFooter.src = "/public/img/video-footer.mp4"
  videoFooter.autoplay = true;
  videoFooter.muted = true;
  videoFooter.loop = true;

  const transitionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".transition",
      // markers: true,
      scrub: true,
      start: "0% 0%",
      end: "+=3000px",
      pin: true,
    }
  });

  transitionTimeline.to(".transition-rectangles div", {
    y: "0",
    stagger: 0.35,
    duration: 4,
  })

  transitionTimeline.to(".message-section ", {
    opacity: 1,
    duration: 0.1
  })

  const splitText = new SplitText(".message-section h2", {
    types: "chars",
    mask: "lines"
  });

  transitionTimeline.from(splitText.chars, {
    y: 100,
    stagger: 0.08,
  })

  const animationSectionH2Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".transition-footer",
      // markers: true,
      scrub: 2,
      start: "0% 0%",
      end: "+=3000px",
      pin: true,
    }
  });

  const animationSectionH2s = document.querySelectorAll(".animation-section h2");
  animationSectionH2s.forEach((text) => {
    const splitH2Text = new SplitText(text, {
      types: "chars",

    });

    animationSectionH2Timeline.from(splitH2Text.chars, {
      opacity: 0,
      filter: "blur(10px)",
      stagger: {
        each: 0.1,
        from: "random",
      },
    })

    animationSectionH2Timeline.to(splitH2Text.chars, {
      opacity: 0,
    }, "+=1.5")
  })

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 15;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const diamondDiv = document.querySelector(".diamond-3d");
  diamondDiv.appendChild(renderer.domElement);

  let model = null;
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("/public/img/diamond-compressed.glb", (gltf) => {
    model = gltf.scene;
    model.position.z = -10;
    model.position.y = 1.5;

    const diamondTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-footer",
        scrub: 2,
        // start: "0% 0%",
        end: "+=4000",
      }
    })

    diamondTimeline.to(model.position, {
      y: 0,
      duration: 2,
    }, "+=0.5");
    diamondTimeline.to(model.rotation, {
      x: 4.6,
      duration: 2,
    }, "<");
    diamondTimeline.to(model.position, {
      z: 14,
      duration: 0.1
    });
    diamondTimeline.to("footer", {
      opacity: 1,
      duration: 0.3,
    })

    scene.add(model);

  }, undefined, (error) => {
    console.error("Error loading GLTF model:", error);
  });

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load("/public/img/hdri.webp", (loadedTexture) => {
    loadedTexture.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromEquirectangular(loadedTexture).texture;
    scene.environment = environment;

  }, undefined, (error) => {
    console.error("Error loading texture:", error);
  });

  function animate() {
    if (model) {
      model.rotation.y += 0.008;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
})

