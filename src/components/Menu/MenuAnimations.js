
import gsap from "gsap";
//ANIMATION FUNCTIONS:
    //for background:
export const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top', 
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: .1
            }
        })
    }
    // for the info section on the right:
export const fadeInUp = node => {
        gsap.from(node, {
                y: 60,
                duration: 1,
                delay: .2,
                opacity: 0,
                ease: 'power3.inOut'
        })
    }

    // function for navigation items:
export const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: .8,
            y: 100,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3
            }
        })
    }

    // Hover on the link
export const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut"
    });
  };
  
  // Hover off the link
  export const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut"
    });
  };