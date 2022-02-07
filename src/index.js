import "./css/style.css";
import gsap from "gsap";
console.log(gsap);

let tl = gsap.timeline({ defaults: { ease: "power4.easeInOut", duration: 2 } });
console.log(tl);

tl.to(".bg", { scale: 1, opacity: 1, duration: 2.2 });
tl.to(".hero-content h1", { y: 0, opacity: 1 }, "-=2");
tl.to(".hero-content p", { y: 0, opacity: 1 }, "-=1.4");
