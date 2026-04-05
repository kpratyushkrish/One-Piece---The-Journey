/* ===================================================
   ONE PIECE GRAND LINE — MAIN JAVASCRIPT
   =================================================== */

// ==================== DATA ====================

const crewData = [
    {
        name: "Monkey D. Luffy",
        role: "Captain",
        bounty: "3,000,000,000",
        emoji: "👒",
        desc: "The man who will become King of the Pirates. Luffy's rubber body and indomitable spirit have carried his crew across the most dangerous seas in the world.",
        ability: "Gomu Gomu no Mi — Grants a rubber body capable of incredible stretching, compression, and devastating gear transformations.",
        fullDesc: "With an unwavering dream and a straw hat entrusted to him by Shanks, Luffy set out from Foosha Village to gather a crew, conquer the Grand Line, and find the One Piece. His simple honesty and pure determination inspire all who meet him."
    },
    {
        name: "Roronoa Zoro",
        role: "Swordsman",
        bounty: "1,111,000,000",
        emoji: "⚔️",
        desc: "The greatest swordsman in the making. Zoro wields three swords simultaneously and has never broken a promise — not once.",
        ability: "Santoryu (Three Sword Style) — A fearsome combat style using a sword in each hand and one in his mouth.",
        fullDesc: "Zoro aims to become the World's Greatest Swordsman, a promise made to his childhood rival Kuina. His discipline, loyalty, and monstrous strength make him the crew's most reliable combatant and Luffy's first mate in all but name."
    },
    {
        name: "Nami",
        role: "Navigator",
        bounty: "366,000,000",
        emoji: "🗺️",
        desc: "The woman who will map the entire world. Nami's mastery of weather and navigation is unrivaled across all seas.",
        ability: "Clima-Tact — A weather-manipulating staff that can summon storms, lightning, and mirages.",
        fullDesc: "Born into tragedy and enslaved by the fishman Arlong, Nami's dream of charting a complete map of the world seemed impossible — until Luffy freed her. Now she guides the Straw Hats through the deadliest waters with absolute precision."
    },
    {
        name: "Usopp",
        role: "Sniper",
        bounty: "500,000,000",
        emoji: "🎯",
        desc: "The brave warrior of the sea — or so he claims. Usopp's sharpshooting skills and creative inventions have saved the crew countless times.",
        ability: "Expert Marksmanship — Unmatched long-range accuracy with his slingshot, Kuro Kabuto.",
        fullDesc: "Starting as a cowardly liar from Syrup Village, Usopp has grown into a genuinely brave warrior. His tactical mind, engineering skills, and incredible aim make him indispensable despite his constant protests otherwise."
    },
    {
        name: "Sanji",
        role: "Cook",
        bounty: "1,032,000,000",
        emoji: "🍳",
        desc: "The Black Leg chef whose kicks can shatter steel. Sanji fights only with his legs, preserving his hands for the art of cooking.",
        ability: "Diable Jambe — Superheats his leg through friction to deliver devastating flaming kicks.",
        fullDesc: "Raised by the pirate chef Zeff, Sanji dreams of finding All Blue — a legendary sea where all the world's fish gather. His chivalry, culinary genius, and lethal kicking style make him one of the crew's strongest fighters."
    },
    {
        name: "Tony Tony Chopper",
        role: "Doctor",
        bounty: "1,000",
        emoji: "🦌",
        desc: "A reindeer who ate the Human-Human Fruit. Chopper's medical genius can cure any disease, and his transformations make him a versatile fighter.",
        ability: "Hito Hito no Mi — Grants human intelligence and allows transformation between multiple combat forms.",
        fullDesc: "Shunned by both reindeer and humans, Chopper was taken in by Dr. Hiluluk and Dr. Kureha. He dreams of becoming a doctor who can cure any disease. Despite his tiny bounty, his skills are immeasurably valuable."
    },
    {
        name: "Nico Robin",
        role: "Archaeologist",
        bounty: "930,000,000",
        emoji: "📚",
        desc: "The sole survivor of Ohara, Robin can read the ancient Poneglyphs — making her the most dangerous woman in the world to the World Government.",
        ability: "Hana Hana no Mi — Sprouts body parts from any surface, enabling espionage and devastating grappling attacks.",
        fullDesc: "Hunted since age eight for her ability to read Poneglyphs, Robin finally found a home with the Straw Hats. Her dream is to discover the True History hidden in the Rio Poneglyph, unraveling the secrets of the Void Century."
    },
    {
        name: "Franky",
        role: "Shipwright",
        bounty: "394,000,000",
        emoji: "🤖",
        desc: "A cyborg shipwright powered by cola. Franky built the Thousand Sunny and maintains it with unmatched engineering skill.",
        ability: "Cyborg Body — Franky's body is a walking arsenal of weapons, powered by cola fuel.",
        fullDesc: "Originally the gangster leader of Water 7, Franky used his genius to rebuild his own body after a devastating injury. He constructed the Thousand Sunny, the ship destined to carry the Straw Hats to Laugh Tale."
    },
    {
        name: "Brook",
        role: "Musician",
        bounty: "383,000,000",
        emoji: "💀",
        desc: "A living skeleton revived by the Revive-Revive Fruit. Brook's music and swordsmanship are both hauntingly beautiful.",
        ability: "Yomi Yomi no Mi — Granted a second life, allowing Brook to exist as an animated skeleton with soul-based powers.",
        fullDesc: "Brook spent 50 years alone in the Florian Triangle, waiting to reunite with the whale Laboon. His dream is to circumnavigate the world and return to Laboon. His cheerful demeanor belies decades of solitude and loss."
    },
    {
        name: "Jinbe",
        role: "Helmsman",
        bounty: "1,100,000,000",
        emoji: "🦈",
        desc: "A Fish-Man of legendary strength and honor. Jinbe's mastery of Fish-Man Karate and seamanship is unmatched.",
        ability: "Fish-Man Karate — Manipulates water in the environment to deliver devastating strikes at range.",
        fullDesc: "A former Warlord of the Sea and member of the Sun Pirates, Jinbe joined the Straw Hats after years of supporting Luffy. He dreams of true equality between humans and fish-men, and his wisdom grounds the crew."
    }
];

const devilFruits = [
    {
        name: "Gomu Gomu no Mi",
        type: "paramecia",
        emoji: "🍖",
        power: "Transforms the user's body into rubber, granting immunity to bullets and electricity. At its peak, allows the awakened form — Gear 5 — which turns imagination into reality.",
        user: "Monkey D. Luffy",
        effect: "rubber"
    },
    {
        name: "Mera Mera no Mi",
        type: "logia",
        emoji: "🔥",
        power: "Grants the ability to create, control, and transform into fire at will. The user becomes a living flame, intangible to physical attacks.",
        user: "Portgas D. Ace / Sabo",
        effect: "fire"
    },
    {
        name: "Goro Goro no Mi",
        type: "logia",
        emoji: "⚡",
        power: "Grants absolute dominion over electricity. The user can transform into lightning, travel at the speed of light, and deliver 200 million volts of devastation.",
        user: "Enel",
        effect: "lightning"
    },
    {
        name: "Hie Hie no Mi",
        type: "logia",
        emoji: "❄️",
        power: "Bestows the power of absolute cold. The user can freeze anything on contact, create ice constructs, and become ice itself.",
        user: "Aokiji (Kuzan)",
        effect: "ice"
    },
    {
        name: "Yami Yami no Mi",
        type: "logia",
        emoji: "🌑",
        power: "Controls the power of darkness itself. Can absorb anything — attacks, light, even other Devil Fruit powers. The most terrifying Logia.",
        user: "Marshall D. Teach (Blackbeard)",
        effect: "darkness"
    },
    {
        name: "Ope Ope no Mi",
        type: "paramecia",
        emoji: "💊",
        power: "Creates a spherical 'Room' where the user has godlike control — teleporting objects, switching souls, and performing impossible surgery.",
        user: "Trafalgar D. Water Law",
        effect: "room"
    }
];

const storyArcs = [
    { name: "East Blue", saga: "East Blue Saga", icon: "⛵", desc: "Where it all began. Luffy gathers his first crewmates and sets sail from the weakest sea toward the Grand Line." },
    { name: "Alabasta", saga: "Alabasta Saga", icon: "🏜️", desc: "A desert kingdom on the brink of civil war. The Straw Hats face Crocodile, one of the Seven Warlords, to save Princess Vivi's homeland." },
    { name: "Skypiea", saga: "Sky Island Saga", icon: "☁️", desc: "An island in the sky ruled by a self-proclaimed god. The crew discovers ancient secrets 10,000 meters above the sea." },
    { name: "Water 7", saga: "Water 7 Saga", icon: "🌊", desc: "The floating city of shipwrights. Betrayal, loss, and the most emotional battle in Straw Hat history — the assault on Enies Lobby." },
    { name: "Thriller Bark", saga: "Thriller Bark Saga", icon: "👻", desc: "A massive ghost ship in the Florian Triangle. Zombies, shadows, and the arrival of Brook — the skeleton musician." },
    { name: "Marineford", saga: "Summit War Saga", icon: "⚔️", desc: "The greatest war the world has ever seen. Pirates, Marines, and Warlords collide in a battle that changes everything." },
    { name: "Fish-Man Island", saga: "Fish-Man Island Saga", icon: "🐚", desc: "10,000 meters beneath the sea. The Straw Hats arrive in a kingdom of fish-men and merfolk, confronting racism and destiny." },
    { name: "Dressrosa", saga: "Dressrosa Saga", icon: "🏟️", desc: "A kingdom of passion and toys ruled by the puppet master Doflamingo. Luffy's alliance with Law begins to shake the New World." },
    { name: "Whole Cake Island", saga: "Whole Cake Saga", icon: "🎂", desc: "A wonderland of sweets ruled by Big Mom. Sanji's past resurfaces, and the crew faces one of the Four Emperors." },
    { name: "Wano Country", saga: "Wano Saga", icon: "⛩️", desc: "An isolated land of samurai under the tyrant Kaido's reign. The Straw Hats join forces with rebels to liberate an entire nation." }
];

const mapLocations = [
    { name: "Foosha Village", x: 8, y: 50, desc: "Luffy's hometown in East Blue" },
    { name: "Baratie", x: 15, y: 40, desc: "The floating restaurant at sea" },
    { name: "Arlong Park", x: 18, y: 60, desc: "Where Nami was freed" },
    { name: "Loguetown", x: 22, y: 45, desc: "Town of the beginning and end" },
    { name: "Reverse Mountain", x: 28, y: 50, desc: "Gateway to the Grand Line" },
    { name: "Whiskey Peak", x: 33, y: 38, desc: "Town of bounty hunters" },
    { name: "Drum Island", x: 38, y: 30, desc: "Where Chopper joined" },
    { name: "Alabasta", x: 43, y: 55, desc: "Vivi's desert kingdom" },
    { name: "Skypiea", x: 48, y: 15, desc: "The island in the sky" },
    { name: "Water 7", x: 52, y: 50, desc: "City of shipwrights" },
    { name: "Enies Lobby", x: 55, y: 42, desc: "Judicial island — stormed by the Straw Hats" },
    { name: "Thriller Bark", x: 60, y: 60, desc: "The haunted island ship" },
    { name: "Sabaody", x: 65, y: 48, desc: "Archipelago of bubbles and lawlessness" },
    { name: "Fish-Man Island", x: 68, y: 70, desc: "Kingdom beneath the sea" },
    { name: "Dressrosa", x: 73, y: 45, desc: "Kingdom of passion" },
    { name: "Whole Cake Island", x: 78, y: 35, desc: "Big Mom's territory" },
    { name: "Wano Country", x: 84, y: 50, desc: "Land of samurai" },
    { name: "Laugh Tale", x: 93, y: 48, desc: "The final island... where One Piece awaits" }
];

const quotes = [
    { text: "I'm gonna be King of the Pirates!", author: "Monkey D. Luffy" },
    { text: "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are forgotten.", author: "Dr. Hiluluk" },
    { text: "A man's dream will never die!", author: "Marshall D. Teach" },
    { text: "The ocean is vast. You'll surely find nakama who will accept you.", author: "Jinbe" },
    { text: "Nothing happened.", author: "Roronoa Zoro" },
    { text: "I want to live! Take me to the sea with you!", author: "Nico Robin" }
];

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    initLoading();
    initCursor();
    initBackgroundCanvas();
    populateCrew();
    populateFruits();
    populateTimeline();
    populateMap();
    populateQuotes();
    createEmbers();
    initNavigation();
    initAudio();
});

// ==================== LOADING SCREEN ====================

function initLoading() {
    const bar = document.getElementById('loading-bar');
    const screen = document.getElementById('loading-screen');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            bar.style.width = '100%';

            setTimeout(() => {
                gsap.to(screen, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                        screen.style.display = 'none';
                        initHeroAnimations();
                        initScrollAnimations();
                    }
                });
            }, 400);
        } else {
            bar.style.width = progress + '%';
        }
    }, 200);
}

// ==================== CUSTOM CURSOR ====================

function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (window.innerWidth <= 768) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .crew-card, .fruit-card, .timeline-item, .map-pin, .treasure-chest');
    const addHover = () => { cursor.classList.add('hovering'); follower.classList.add('hovering'); };
    const removeHover = () => { cursor.classList.remove('hovering'); follower.classList.remove('hovering'); };

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
        document.querySelectorAll('a, button, .crew-card, .fruit-card, .timeline-item, .map-pin, .treasure-chest').forEach(el => {
            el.removeEventListener('mouseenter', addHover);
            el.removeEventListener('mouseleave', removeHover);
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Initially bind
    setTimeout(() => {
        document.querySelectorAll('a, button, .crew-card, .fruit-card, .timeline-item, .map-pin, .treasure-chest').forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });
    }, 100);
}

// ==================== BACKGROUND CANVAS ====================

function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let stars = [];
    let width, height;
    let time = 0;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        // Recreate stars on resize
        stars = [];
        for (let i = 0; i < 80; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height * 0.6,
                size: Math.random() * 1.5 + 0.3,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinkleOffset: Math.random() * Math.PI * 2,
                baseOpacity: Math.random() * 0.3 + 0.1
            });
        }
    }
    resize();
    window.addEventListener('resize', resize);

    // Create floating particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * 2000,
            y: Math.random() * 2000,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: -Math.random() * 0.4 - 0.1,
            opacity: Math.random() * 0.4 + 0.1,
            hue: Math.random() > 0.7 ? 40 : 200
        });
    }

    function drawWave(yBase, amplitude, wavelength, speed, color, fillBelow) {
        ctx.beginPath();
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= width; x += 3) {
            const y = yBase +
                Math.sin((x / wavelength) + time * speed) * amplitude +
                Math.sin((x / (wavelength * 0.6)) + time * speed * 1.3) * (amplitude * 0.4);
            ctx.lineTo(x, y);
        }
        if (fillBelow) {
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        time += 0.008;

        // Draw twinkling stars
        stars.forEach(s => {
            const twinkle = Math.sin(time * 8 * s.twinkleSpeed + s.twinkleOffset);
            const opacity = s.baseOpacity + twinkle * 0.15;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 220, 240, ${Math.max(0.02, opacity)})`;
            ctx.fill();
        });

        // Draw floating particles
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.opacity += (Math.random() - 0.5) * 0.008;
            p.opacity = Math.max(0.05, Math.min(0.45, p.opacity));

            if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.hue === 40
                ? `rgba(212, 168, 83, ${p.opacity})`
                : `rgba(26, 188, 156, ${p.opacity * 0.5})`;
            ctx.fill();

            // Glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = p.hue === 40
                ? `rgba(212, 168, 83, ${p.opacity * 0.08})`
                : `rgba(26, 188, 156, ${p.opacity * 0.04})`;
            ctx.fill();
        });

        // Draw layered ocean waves at the very bottom
        const waveBase = height - 8;
        drawWave(waveBase - 25, 6, 300, 0.5, 'rgba(13, 31, 60, 0.4)', true);
        drawWave(waveBase - 15, 4, 200, 0.7, 'rgba(22, 58, 95, 0.15)', false);
        drawWave(waveBase - 5, 3, 150, 0.9, 'rgba(26, 188, 156, 0.06)', false);

        requestAnimationFrame(animate);
    }
    animate();
}

// ==================== HERO ANIMATIONS ====================

function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to('#hero-subtitle-top', { opacity: 1, duration: 0.8, y: 0 })
        .to('.title-line', { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.3")
        .to('#hero-desc', { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .to('#cta-begin', { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
        .to('#scroll-indicator', { opacity: 0.6, duration: 0.8 }, "-=0.2")
        .to('#hero-ship', { left: '75%', duration: 3, ease: "power1.inOut" }, 0);

    // Parallax on mouse move
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to('.hero-compass', { x: x * 30, y: y * 30, duration: 1, ease: "power2.out" });
        gsap.to('#hero-ship', { y: y * 15, duration: 1, ease: "power2.out" });
        gsap.to('.hero-fog', { x: x * 20, y: y * 10, duration: 1.5, ease: "power2.out" });
    });

    // CTA ripple effect
    document.getElementById('cta-begin').addEventListener('click', function (e) {
        createRipple(e, this);
        gsap.to(window, { duration: 1.5, scrollTo: '#crew', ease: "power2.inOut" });
    });

    document.getElementById('cta-join').addEventListener('click', function (e) {
        createRipple(e, this);
        setTimeout(() => {
            window.open('https://www.instagram.com/kpratyush.krish', '_blank');
        }, 300);
    });
}

function createRipple(e, button) {
    const ripple = button.querySelector('.cta-ripple');
    const rect = button.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    ripple.classList.remove('animate');
    void ripple.offsetWidth;
    ripple.classList.add('animate');
    setTimeout(() => ripple.classList.remove('animate'), 600);
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Navigation background on scroll
    ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => {
            document.getElementById('main-nav').classList.toggle('scrolled', self.progress > 0);
        }
    });

    // Active nav link
    document.querySelectorAll('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => updateActiveNav(section.id),
            onEnterBack: () => updateActiveNav(section.id),
        });
    });

    // Crew cards
    gsap.utils.toArray('.crew-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Fruit cards
    gsap.utils.toArray('.fruit-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Timeline items
    gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Quotes
    gsap.utils.toArray('.quote-item').forEach((quote) => {
        gsap.to(quote, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: quote,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.querySelectorAll('.section-tag, .section-title, .section-divider, .section-subtitle'), {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Treasure section
    ScrollTrigger.create({
        trigger: '#treasure',
        start: 'top 60%',
        onEnter: () => {
            const tl = gsap.timeline();
            tl.to('#treasure-title', { opacity: 1, y: 0, duration: 0.8 })
                .to('#treasure-desc', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
                .to('.treasure-cta', { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
                .add(() => {
                    document.getElementById('treasure-chest').classList.add('opened');
                }, 0.3);
        }
    });

    // Scroll indicator fade
    ScrollTrigger.create({
        start: 'top -200',
        onUpdate: (self) => {
            gsap.to('#scroll-indicator', { opacity: self.progress > 0 ? 0 : 0.6, duration: 0.3 });
        }
    });
}

function updateActiveNav(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === id);
    });
}

// ==================== POPULATE CREW ====================

function populateCrew() {
    const grid = document.getElementById('crew-grid');
    crewData.forEach((member, i) => {
        const card = document.createElement('div');
        card.className = 'crew-card';
        card.setAttribute('data-index', i);
        card.innerHTML = `
            <div class="crew-card-shine"></div>
            <span class="crew-card-emoji">${member.emoji}</span>
            <h3 class="crew-card-name">${member.name}</h3>
            <div class="crew-card-role">${member.role}</div>
            <div class="crew-card-bounty">₿${member.bounty}</div>
            <p class="crew-card-desc">${member.desc}</p>
            <p class="crew-card-ability">${member.ability}</p>
        `;
        card.addEventListener('click', () => openCrewModal(i));

        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

            // Move shine based on mouse position
            const shine = card.querySelector('.crew-card-shine');
            const shineX = (x / rect.width) * 100;
            const shineY = (y / rect.height) * 100;
            shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(212, 168, 83, 0.08), transparent 60%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            const shine = card.querySelector('.crew-card-shine');
            shine.style.background = '';
        });

        grid.appendChild(card);
    });
}

function openCrewModal(index) {
    const member = crewData[index];
    const overlay = document.getElementById('crew-modal-overlay');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <div class="modal-emoji">${member.emoji}</div>
        <h3 class="modal-name">${member.name}</h3>
        <div class="modal-role">${member.role}</div>
        <div class="modal-bounty">💰 Bounty: ₿${member.bounty}</div>
        <p class="modal-desc">${member.fullDesc}</p>
        <div class="modal-ability-title">Special Ability</div>
        <p class="modal-ability">${member.ability}</p>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.getElementById('modal-close').addEventListener('click', closeCrewModal);
document.getElementById('crew-modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCrewModal();
});

function closeCrewModal() {
    const overlay = document.getElementById('crew-modal-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== POPULATE DEVIL FRUITS ====================

function populateFruits() {
    const container = document.getElementById('fruits-container');
    devilFruits.forEach((fruit, i) => {
        const card = document.createElement('div');
        card.className = 'fruit-card';
        card.setAttribute('data-type', fruit.type);
        card.innerHTML = `
            <div class="fruit-orb">${fruit.emoji}</div>
            <div class="fruit-name">${fruit.name}</div>
            <div class="fruit-type">${fruit.type}</div>
        `;

        // Floating animation
        card.style.animationDelay = (i * 0.3) + 's';

        card.addEventListener('click', () => openFruitDetail(i));
        container.appendChild(card);
    });

    // Add floating animation to fruit orbs
    gsap.utils.toArray('.fruit-orb').forEach((orb, i) => {
        gsap.to(orb, {
            y: -8,
            duration: 2 + Math.random(),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3
        });
    });
}

function openFruitDetail(index) {
    const fruit = devilFruits[index];
    const overlay = document.getElementById('fruit-detail-overlay');
    const content = document.getElementById('fruit-detail-content');

    content.innerHTML = `
        <span class="fruit-detail-emoji">${fruit.emoji}</span>
        <h3 class="fruit-detail-name">${fruit.name}</h3>
        <span class="fruit-detail-type-tag ${fruit.type}">${fruit.type}</span>
        <p class="fruit-detail-power">${fruit.power}</p>
        <p class="fruit-detail-user">Known User: ${fruit.user}</p>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.getElementById('fruit-detail-close').addEventListener('click', closeFruitDetail);
document.getElementById('fruit-detail-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeFruitDetail();
});

function closeFruitDetail() {
    const overlay = document.getElementById('fruit-detail-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== POPULATE TIMELINE ====================

function populateTimeline() {
    const container = document.getElementById('timeline-items');
    storyArcs.forEach((arc, i) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <span class="timeline-island-icon">${arc.icon}</span>
            <h3 class="timeline-arc-name">${arc.name}</h3>
            <div class="timeline-arc-saga">${arc.saga}</div>
            <p class="timeline-arc-desc">${arc.desc}</p>
        `;
        container.appendChild(item);
    });
}

// ==================== POPULATE MAP ====================

function populateMap() {
    const container = document.getElementById('map-locations');
    const tooltip = document.getElementById('map-tooltip');
    const mapCanvas = document.getElementById('map-canvas');
    const wrapper = mapCanvas.parentElement;

    let mapTime = 0;
    let mapAnimId = null;
    const ctx = mapCanvas.getContext('2d');
    let mapW = 0, mapH = 0;

    function resizeMap() {
        const rect = wrapper.getBoundingClientRect();
        mapCanvas.width = rect.width;
        mapCanvas.height = rect.height;
        mapW = mapCanvas.width;
        mapH = mapCanvas.height;
    }
    resizeMap();
    window.addEventListener('resize', resizeMap);

    // Animated map drawing
    function drawMap() {
        mapTime += 0.006;
        const w = mapW;
        const h = mapH;
        if (w === 0 || h === 0) { mapAnimId = requestAnimationFrame(drawMap); return; }

        ctx.clearRect(0, 0, w, h);

        // Ocean gradient
        const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.6);
        grad.addColorStop(0, '#0d1f3c');
        grad.addColorStop(1, '#060d1a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Animated ocean ripples
        for (let i = 0; i < 12; i++) {
            const rx = (Math.sin(mapTime * 0.3 + i * 1.7) * 0.3 + 0.5) * w;
            const ry = (Math.cos(mapTime * 0.2 + i * 2.1) * 0.3 + 0.5) * h;
            const rippleR = 30 + Math.sin(mapTime * 2 + i) * 10;
            ctx.beginPath();
            ctx.arc(rx, ry, rippleR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(26, 188, 156, ${0.02 + Math.sin(mapTime + i) * 0.01})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
        }

        // Grid lines
        ctx.strokeStyle = 'rgba(212, 168, 83, 0.03)';
        ctx.lineWidth = 0.5;
        for (let x = 0; x < w; x += 50) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += 50) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }

        // Calm Belt bands (subtle animated shimmer)
        const calmShimmer = Math.sin(mapTime * 2) * 0.01 + 0.03;
        ctx.fillStyle = `rgba(192, 57, 43, ${calmShimmer})`;
        ctx.fillRect(0, h * 0.15, w, h * 0.1);
        ctx.fillRect(0, h * 0.72, w, h * 0.1);

        // Red Line (vertical continental barriers)
        ctx.fillStyle = 'rgba(139, 69, 19, 0.1)';
        ctx.fillRect(w * 0.27 - 2, 0, 6, h);
        ctx.fillRect(w * 0.64 - 2, 0, 6, h);
        ctx.fillStyle = 'rgba(192, 57, 43, 0.06)';
        ctx.fillRect(w * 0.27, 0, 2, h);
        ctx.fillRect(w * 0.64, 0, 2, h);

        // Draw island landmasses at each location
        mapLocations.forEach((loc, i) => {
            const px = (loc.x / 100) * w;
            const py = (loc.y / 100) * h;
            const islandSize = loc.name === 'Laugh Tale' ? 12 : 5 + Math.sin(i * 1.2) * 3;

            // Island glow
            ctx.beginPath();
            ctx.arc(px, py, islandSize + 8, 0, Math.PI * 2);
            ctx.fillStyle = loc.name === 'Laugh Tale'
                ? `rgba(245, 200, 66, ${0.04 + Math.sin(mapTime * 3) * 0.02})`
                : 'rgba(212, 168, 83, 0.02)';
            ctx.fill();

            // Island body
            ctx.beginPath();
            ctx.arc(px, py, islandSize, 0, Math.PI * 2);
            ctx.fillStyle = loc.name === 'Laugh Tale'
                ? `rgba(245, 200, 66, ${0.12 + Math.sin(mapTime * 3) * 0.05})`
                : 'rgba(46, 80, 60, 0.15)';
            ctx.fill();
        });

        // Draw the Grand Line path (animated dashes)
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(212, 168, 83, 0.18)';
        ctx.lineWidth = 1.5;
        const dashOffset = mapTime * 20;
        ctx.setLineDash([8, 6]);
        ctx.lineDashOffset = -dashOffset;

        // Draw as smooth curve
        mapLocations.forEach((loc, i) => {
            const px = (loc.x / 100) * w;
            const py = (loc.y / 100) * h;
            if (i === 0) ctx.moveTo(px, py);
            else {
                const prev = mapLocations[i - 1];
                const prevX = (prev.x / 100) * w;
                const prevY = (prev.y / 100) * h;
                const cpx = (prevX + px) / 2;
                const cpy = (prevY + py) / 2 + (Math.sin(i * 0.8) * 15);
                ctx.quadraticCurveTo(cpx, cpy, px, py);
            }
        });
        ctx.stroke();
        ctx.setLineDash([]);

        // Compass rose in corner
        const cx = w * 0.92;
        const cy = h * 0.85;
        const compassR = 25;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(Math.sin(mapTime * 0.5) * 0.05);

        // Compass circles
        ctx.beginPath();
        ctx.arc(0, 0, compassR, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(212, 168, 83, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // N pointer
        ctx.beginPath();
        ctx.moveTo(0, -compassR + 3);
        ctx.lineTo(-3, 0);
        ctx.lineTo(3, 0);
        ctx.closePath();
        ctx.fillStyle = 'rgba(192, 57, 43, 0.4)';
        ctx.fill();

        // S pointer
        ctx.beginPath();
        ctx.moveTo(0, compassR - 3);
        ctx.lineTo(-3, 0);
        ctx.lineTo(3, 0);
        ctx.closePath();
        ctx.fillStyle = 'rgba(212, 168, 83, 0.3)';
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 168, 83, 0.4)';
        ctx.fill();

        // Direction letters
        ctx.font = '7px Cinzel';
        ctx.fillStyle = 'rgba(212, 168, 83, 0.3)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', 0, -compassR - 6);
        ctx.fillText('S', 0, compassR + 6);
        ctx.fillText('E', compassR + 6, 0);
        ctx.fillText('W', -compassR - 6, 0);

        ctx.restore();

        // Region labels
        ctx.font = '11px Cinzel';
        ctx.fillStyle = 'rgba(212, 168, 83, 0.1)';
        ctx.textAlign = 'center';
        ctx.fillText('E A S T   B L U E', w * 0.15, h * 0.1);
        ctx.fillText('P A R A D I S E', w * 0.45, h * 0.1);
        ctx.fillText('N E W   W O R L D', w * 0.78, h * 0.1);

        ctx.font = '8px Cinzel';
        ctx.fillStyle = 'rgba(192, 57, 43, 0.08)';
        ctx.fillText('C A L M   B E L T', w * 0.5, h * 0.2);
        ctx.fillText('C A L M   B E L T', w * 0.5, h * 0.77);

        mapAnimId = requestAnimationFrame(drawMap);
    }

    // Start map animation when it comes into view
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!mapAnimId) drawMap();
            } else {
                if (mapAnimId) { cancelAnimationFrame(mapAnimId); mapAnimId = null; }
            }
        });
    }, { threshold: 0.1 });
    mapObserver.observe(document.getElementById('world-map'));

    // Place pins
    mapLocations.forEach((loc) => {
        const pin = document.createElement('div');
        pin.className = 'map-pin';
        pin.style.left = loc.x + '%';
        pin.style.top = loc.y + '%';
        pin.innerHTML = `
            <span class="map-pin-label">${loc.name}</span>
            <div class="map-pin-dot"></div>
        `;

        pin.addEventListener('mouseenter', (e) => {
            tooltip.innerHTML = `
                <div class="map-tooltip-title">${loc.name}</div>
                <div class="map-tooltip-desc">${loc.desc}</div>
            `;
            tooltip.classList.add('visible');
        });

        pin.addEventListener('mousemove', (e) => {
            const mapRect = wrapper.getBoundingClientRect();
            tooltip.style.left = (e.clientX - mapRect.left + 15) + 'px';
            tooltip.style.top = (e.clientY - mapRect.top - 10) + 'px';
        });

        pin.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        container.appendChild(pin);
    });
}

// ==================== POPULATE QUOTES ====================

function populateQuotes() {
    const container = document.getElementById('quotes-container');
    quotes.forEach((q) => {
        const item = document.createElement('div');
        item.className = 'quote-item';
        item.innerHTML = `
            <p class="quote-text">${q.text}</p>
            <span class="quote-author">${q.author}</span>
        `;
        container.appendChild(item);
    });
}

// ==================== FLOATING EMBERS ====================

function createEmbers() {
    const heroParticles = document.getElementById('hero-particles');
    const treasureParticles = document.getElementById('treasure-particles');

    function addEmbers(container, count) {
        for (let i = 0; i < count; i++) {
            const ember = document.createElement('div');
            ember.className = 'ember';
            ember.style.left = Math.random() * 100 + '%';
            ember.style.top = Math.random() * 100 + '%';

            const size = Math.random() * 3 + 1;
            ember.style.width = size + 'px';
            ember.style.height = size + 'px';

            gsap.to(ember, {
                y: -(Math.random() * 200 + 100),
                x: (Math.random() - 0.5) * 80,
                opacity: Math.random() * 0.6 + 0.1,
                duration: Math.random() * 6 + 4,
                repeat: -1,
                delay: Math.random() * 5,
                ease: "none",
                onRepeat: function () {
                    gsap.set(ember, {
                        x: 0,
                        y: 0,
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%'
                    });
                }
            });

            container.appendChild(ember);
        }
    }

    addEmbers(heroParticles, 25);
    addEmbers(treasureParticles, 20);
}

// ==================== NAVIGATION ====================

function initNavigation() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('open');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            toggle.classList.remove('active');
            menu.classList.remove('open');

            gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: target, offsetY: 80 },
                ease: "power2.inOut"
            });
        });
    });
}

// ==================== AUDIO ====================

function initAudio() {
    const btn = document.getElementById('audio-toggle');
    const audio = document.getElementById('ocean-audio');
    let muted = true;

    btn.classList.add('muted');

    btn.addEventListener('click', () => {
        if (muted) {
            audio.play().catch(() => { });
            btn.classList.remove('muted');
        } else {
            audio.pause();
            btn.classList.add('muted');
        }
        muted = !muted;
    });
}

// ==================== KEYBOARD ESCAPE ====================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCrewModal();
        closeFruitDetail();
    }
});

// ==================== GSAP ScrollTo Plugin (inline) ====================
// Simple scroll-to implementation if GSAP ScrollTo not loaded
if (!gsap.plugins || !gsap.plugins.scrollTo) {
    gsap.registerPlugin({
        name: "scrollTo",
        init(target, value) {
            // Simple fallback
        }
    });

    // Override the scrollTo usage with native
    const origGsapTo = gsap.to.bind(gsap);
    const patchedTo = function (target, vars) {
        if (target === window && vars.scrollTo) {
            const scrollTarget = typeof vars.scrollTo === 'string' ? vars.scrollTo :
                (vars.scrollTo.y || vars.scrollTo);
            const offsetY = (typeof vars.scrollTo === 'object' && vars.scrollTo.offsetY) || 0;
            const el = document.querySelector(scrollTarget);
            if (el) {
                const targetY = el.getBoundingClientRect().top + window.pageYOffset - offsetY;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
            return;
        }
        return origGsapTo(target, vars);
    };
    gsap.to = patchedTo;
}