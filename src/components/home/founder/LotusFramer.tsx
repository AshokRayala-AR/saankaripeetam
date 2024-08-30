// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import petalmain from "../../../assets/svg/petalmain.svg";
// import petalr1 from "../../../assets/svg/petalr1.svg";
// import petall1 from "../../../assets/svg/petall1.svg";
// import petalr2 from "../../../assets/svg/petalr2.svg";
// import petall2 from "../../../assets/svg/petall2.svg";

// function LotusFramer() {
//     const controlsR1 = useAnimation();
//     const controlsL1 = useAnimation();
//     const controlsR2 = useAnimation();
//     const controlsL2 = useAnimation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollY = window.scrollY;

//             controlsR1.start({
//                 x: scrollY / 84,
//                 y: -scrollY / 84,
//                 rotate: scrollY / 10,
//                 opacity: 1,
//             });
//             controlsL1.start({
//                 x: -scrollY / 84,
//                 y: -scrollY / 84,
//                 rotate: -scrollY / 10,
//                 opacity: 1,
//             });
//             controlsR2.start({
//                 x: scrollY / 160,
//                 y: -scrollY / 160,
//                 rotate: scrollY / 17,
//                 opacity: 1,
//             });
//             controlsL2.start({
//                 x: -scrollY / 160,
//                 y: -scrollY / 160,
//                 rotate: -scrollY / 17,
//                 opacity: 1,
//             });
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [controlsR1, controlsL1, controlsR2, controlsL2]);

//     return (
//         <div className=" flex justify-center items-center w-full h-screen">
//             <div className="relative flex justify-center items-center  w-full h-96">
//             <img
//                     src={petalmain}
//                     alt="petalmain"
//                     className="w-1/4 absolute mt-8 z-10"
//                 />


//                 <motion.img
//                     src={petalr1}
//                     alt="petalr1"
//                     className="w-1/4 absolute mt-36 ml-48"
//                     animate={controlsR1}
//                     initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
//                 />
//                 <motion.img
//                     src={petall1}
//                     alt="petall1"
//                     className="w-1/4 absolute mt-36 mr-48"
//                     animate={controlsL1}
//                     initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
//                 />
//                 <motion.img
//                     src={petalr2}
//                     alt="petalr2"
//                     className="w-1/4 absolute mt-16 ml-28"
//                     animate={controlsR2}
//                     initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
//                 />
//                 <motion.img
//                     src={petall2}
//                     alt="petall2"
//                     className="w-1/4 absolute mt-16 mr-28"
//                     animate={controlsL2}
//                     initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
//                 />


//             </div>
//         </div>
//     );
// }

// export default LotusFramer;



// //code for tilting when it comes to screen
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import petalmain from "../../../assets/svg/petalmain.svg";
import petalr1 from "../../../assets/svg/petalr1.svg";
import petall1 from "../../../assets/svg/petall1.svg";
import petalr2 from "../../../assets/svg/petalr2.svg";
import petall2 from "../../../assets/svg/petall2.svg";

function LotusFramer() {
    const controlsR1 = useAnimation();
    const controlsL1 = useAnimation();
    const controlsR2 = useAnimation();
    const controlsL2 = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            controlsR1.start({
                rotate: [0, 30, 0], 
                opacity: 1,
                transition: {
                    duration: 11, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    opacity: 1 
                },
                transformOrigin: "bottom center",
            });
            controlsL1.start({
                rotate: [0, -30, 0], 
                opacity: 1,
                transition: {
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    opacity: 1 
                },
                transformOrigin: "bottom center", 
            });
            controlsR2.start({
                rotate: [0, 50, 0], 
                opacity: 1,
                transition: {
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    opacity: 1 
                },
                transformOrigin: "bottom center", 
            });
            controlsL2.start({
                rotate: [0, -50, 0], 
                opacity: 1,
                transition: {
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    opacity: 1 
                },
                transformOrigin: "bottom center", 
            });
        }
    }, [isInView, controlsR1, controlsL1, controlsR2, controlsL2]);
    

    return (
        <div className=" flex justify-center items-center w-full h-screen">
            <div ref={ref} className="relative flex justify-center items-center w-full h-96">
                <img
                    src={petalmain}
                    alt="petalmain"
                    className="w-1/4 absolute mt-8 z-10"
                />

                <motion.img
                    src={petalr1}
                    alt="petalr1"
                    className="w-1/4 absolute "
                    animate={controlsR1}
                    initial={{ rotate: 0, opacity: 0 }}
                />
                <motion.img
                    src={petall1}
                    alt="petall1"
                    className="w-1/4 absolute "
                    animate={controlsL1}
                    initial={{ rotate: 0, opacity: 0 }}
                />
                <motion.img
                    src={petalr2}
                    alt="petalr2"
                    className="w-1/4 absolute "
                    animate={controlsR2}
                    initial={{ rotate: 0, opacity: 0 }}
                />
                <motion.img
                    src={petall2}
                    alt="petall2"
                    className="w-1/4 absolute "
                    animate={controlsL2}
                    initial={{ rotate: 0, opacity: 0 }}
                />
            </div>
        </div>
    );
}

export default LotusFramer;

// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";
// import petalmain from "../../../assets/svg/petalmain.svg";
// import petalr1 from "../../../assets/svg/petalr1.svg";
// import petall1 from "../../../assets/svg/petall1.svg";
// import petalr2 from "../../../assets/svg/petalr2.svg";
// import petall2 from "../../../assets/svg/petall2.svg";

// function LotusFramer() {
//     const controlsR1 = useAnimation();
//     const controlsL1 = useAnimation();
//     const controlsR2 = useAnimation();
//     const controlsL2 = useAnimation();
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: false });

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollY = window.scrollY;

//             const rotationR1 = scrollY * 0.1; // Gradual tilt based on scroll
//             const rotationL1 = scrollY * 0.1;
//             const rotationR2 = scrollY * 0.2; // Gradual tilt with a slightly different factor
//             const rotationL2 = scrollY * 0.2;

//             if (isInView) {
//                 controlsR1.start({
//                     rotate: Math.min(rotationR1, 30), // Max tilt 30 degrees
//                     opacity: 1,
//                     transition: { duration: 0.1, ease: "linear" },
//                     transformOrigin: "bottom center",
//                 });
//                 controlsL1.start({
//                     rotate: Math.max(-rotationL1, -30), // Max tilt -30 degrees
//                     opacity: 1,
//                     transition: { duration: 0.1, ease: "linear" },
//                     transformOrigin: "bottom center",
//                 });
//                 controlsR2.start({
//                     rotate: Math.min(rotationR2, 50), // Max tilt 50 degrees
//                     opacity: 1,
//                     transition: { duration: 0.1, ease: "linear" },
//                     transformOrigin: "bottom center",
//                 });
//                 controlsL2.start({
//                     rotate: Math.max(-rotationL2, -50), // Max tilt -50 degrees
//                     opacity: 1,
//                     transition: { duration: 0.1, ease: "linear" },
//                     transformOrigin: "bottom center",
//                 });
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [isInView, controlsR1, controlsL1, controlsR2, controlsL2]);

//     return (
//         <div className="flex justify-center items-center w-full h-screen">
//             <div ref={ref} className="relative flex justify-center items-center w-full h-96">
//                 <img
//                     src={petalmain}
//                     alt="petalmain"
//                     className="w-1/4 absolute mt-8 z-10"
//                 />
//                 <motion.img
//                     src={petalr1}
//                     alt="petalr1"
//                     className="w-1/4 absolute"
//                     animate={controlsR1}
//                     initial={{ rotate: 0, opacity: 0 }}
//                 />
//                 <motion.img
//                     src={petall1}
//                     alt="petall1"
//                     className="w-1/4 absolute"
//                     animate={controlsL1}
//                     initial={{ rotate: 0, opacity: 0 }}
//                 />
//                 <motion.img
//                     src={petalr2}
//                     alt="petalr2"
//                     className="w-1/4 absolute"
//                     animate={controlsR2}
//                     initial={{ rotate: 0, opacity: 0 }}
//                 />
//                 <motion.img
//                     src={petall2}
//                     alt="petall2"
//                     className="w-1/4 absolute"
//                     animate={controlsL2}
//                     initial={{ rotate: 0, opacity: 0 }}
//                 />
//             </div>
//         </div>
//     );
// }

// export default LotusFramer;
