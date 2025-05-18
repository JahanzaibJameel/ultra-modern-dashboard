// Initialize particle.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00f0ff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f0ff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Interactive demo box effect
const demoBox = document.querySelector('.demo-box');

demoBox.addEventListener('mousemove', (e) => {
    const x = e.clientX - demoBox.getBoundingClientRect().left;
    const y = e.clientY - demoBox.getBoundingClientRect().top;

    const centerX = demoBox.offsetWidth / 2;
    const centerY = demoBox.offsetHeight / 2;

    const angleX = (y - centerY) / 25;
    const angleY = (centerX - x) / 25;

    demoBox.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

demoBox.addEventListener('mouseleave', () => {
    demoBox.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Floating elements animation
const floatingElements = document.querySelectorAll('.floating-element');

floatingElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 2}s`;
});