// Happy Nest — escena 3D suave en tonos pastel.
// Se mantiene la estructura original, pero se reemplaza la paleta intensa
// por una atmósfera más cálida, orgánica y amable.

function createPastelTexture(baseColor, repeat = 1) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Textura sutil de papel / crayón.
    for (let i = 0; i < 9000; i++) {
        const alpha = 0.025 + Math.random() * 0.035;
        ctx.fillStyle = Math.random() > 0.5
            ? `rgba(255,255,255,${alpha})`
            : `rgba(80,100,90,${alpha})`;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2.2 + .4;
        ctx.fillRect(x, y, size, size);
    }

    // Trazos largos muy suaves para una sensación artesanal.
    ctx.globalAlpha = .06;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#ffffff';

    for (let i = 0; i < 180; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const length = 20 + Math.random() * 35;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + length, y + (Math.random() - .5) * 8);
        ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat, repeat);

    return texture;
}

const canvasElement = document.querySelector('#hero-canvas');

if (canvasElement && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();

    // Fondo pastel.
    scene.background = createPastelTexture('#E5F2EC');

    const camera = new THREE.PerspectiveCamera(
        52,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 3.2, 15);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
        antialias: true,
        alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Paleta pastel.
    const matGrass = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#B8D9C8', 3)
    });

    const matBase = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#F6C8B9')
    });

    const matRoof = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#C8B7DF')
    });

    const matDoor = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#F1D58F')
    });

    const matWindow = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#B9DFE8')
    });

    const matTrunk = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#B88F76')
    });

    const matLeaves = new THREE.MeshLambertMaterial({
        map: createPastelTexture('#91C3A8')
    });

    const matFlower = new THREE.MeshBasicMaterial({
        map: createPastelTexture('#F4A7A7')
    });

    const paisajeGroup = new THREE.Group();

    // Suelo.
    const grass = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 80),
        matGrass
    );
    grass.rotation.x = -Math.PI / 2;
    paisajeGroup.add(grass);

    // Sol / flor de fondo.
    const sun = new THREE.Mesh(
        new THREE.SphereGeometry(2.4, 20, 20),
        new THREE.MeshBasicMaterial({
            map: createPastelTexture('#F5D78E')
        })
    );
    sun.position.set(10, 9, -17);
    sun.scale.z = .18;
    paisajeGroup.add(sun);

    // Casita protagonista.
    const houseGroup = new THREE.Group();
    houseGroup.position.set(0, 0, 0);

    const base = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 3.1, 4),
        matBase
    );
    base.position.y = 1.55;
    houseGroup.add(base);

    const roof = new THREE.Mesh(
        new THREE.ConeGeometry(3.75, 2.7, 4),
        matRoof
    );
    roof.position.y = 4.45;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(roof);

    const door = new THREE.Mesh(
        new THREE.BoxGeometry(1.15, 1.8, .22),
        matDoor
    );
    door.position.set(0, .9, 2.05);
    houseGroup.add(door);

    const windowGeo = new THREE.BoxGeometry(.82, .82, .22);

    [-2.08, 2.08].forEach((x) => {
        const windowMesh = new THREE.Mesh(windowGeo, matWindow);
        windowMesh.position.set(x, 1.55, 0);
        windowMesh.rotation.y = Math.PI / 2;
        houseGroup.add(windowMesh);
    });

    // Pequeña chimenea para darle más personalidad a la silueta.
    const chimney = new THREE.Mesh(
        new THREE.BoxGeometry(.55, 1.25, .55),
        matLeaves
    );
    chimney.position.set(1.55, 5.05, 0);
    houseGroup.add(chimney);

    paisajeGroup.add(houseGroup);

    function createTree(x, z, scale = 1) {
        const tree = new THREE.Group();

        const trunk = new THREE.Mesh(
            new THREE.CylinderGeometry(.28, .38, 1.8, 8),
            matTrunk
        );
        trunk.position.y = .9;
        tree.add(trunk);

        const crown = new THREE.Mesh(
            new THREE.SphereGeometry(1.45, 8, 8),
            matLeaves
        );
        crown.position.y = 2.35;
        tree.add(crown);

        tree.position.set(x, 0, z);
        tree.scale.set(scale, scale, scale);

        return tree;
    }

    paisajeGroup.add(createTree(-6, -3, 1.15));
    paisajeGroup.add(createTree(6, -2, .85));
    paisajeGroup.add(createTree(-8, 4, .72));

    // Flores pastel pequeñas.
    function createFlower(x, z, scale = 1) {
        const flower = new THREE.Group();

        const stem = new THREE.Mesh(
            new THREE.CylinderGeometry(.045, .06, .8, 6),
            matLeaves
        );
        stem.position.y = .4;
        flower.add(stem);

        for (let i = 0; i < 5; i++) {
            const petal = new THREE.Mesh(
                new THREE.SphereGeometry(.18, 8, 8),
                matFlower
            );
            const angle = (Math.PI * 2 / 5) * i;
            petal.position.set(
                Math.cos(angle) * .18,
                .83 + Math.sin(angle) * .08,
                Math.sin(angle) * .18
            );
            petal.scale.set(1, .55, 1);
            flower.add(petal);
        }

        flower.position.set(x, 0, z);
        flower.scale.set(scale, scale, scale);

        return flower;
    }

    paisajeGroup.add(createFlower(-3.9, 1.2, .9));
    paisajeGroup.add(createFlower(4.0, .8, .75));

    scene.add(paisajeGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, .9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xfff7e8, .55);
    directionalLight.position.set(10, 15, 10);
    scene.add(directionalLight);

    const clock = new THREE.Clock();
    let scrollY = window.scrollY;

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        houseGroup.rotation.y = Math.sin(elapsedTime * .42) * .08;
        houseGroup.position.y = Math.sin(elapsedTime * 1.2) * .035;

        sun.position.y = 9 + Math.sin(elapsedTime * 1.5) * .18;

        camera.position.y = 3.2 + scrollY * .0045;
        camera.position.z = 15 + scrollY * .002;
        camera.lookAt(0, 2.15, 0);

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
    });
}

// Scroll reveal.
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: .15,
    rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

reveals.forEach((reveal) => revealOnScroll.observe(reveal));
