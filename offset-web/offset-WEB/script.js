// document.addEventListener("DOMContentLoaded", function() {
//     const caseSelected = Math.floor(Math.random() * 4);

//     document.addEventListener("scroll", function() {
//         const scrollPosition = window.scrollY;
//         const maxScrollBg = 350;
//         const scrollRatioBg = Math.min(scrollPosition / maxScrollBg, 1);

//         const maxScrollSvg = 350;
//         const scrollRatioSvg = Math.min(scrollPosition / maxScrollSvg, 1);

//         if (caseSelected === 0) {
//     // CASE 1
//             const startBgColor = { r: 255, g: 255, b: 255 }; // white
//             const endBgColor = { r: 254, g: 178, b: 206 }; // #FEB2CE

//             const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
//             const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
//             const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
//             document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

//             const startSvgColor = { r: 0, g: 0, b: 0 }; // black
//             const endSvgColor = { r: 245, g: 91, b: 29 }; // #F55B1D

//             const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
//             const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
//             const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
//             const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
//             svgElements.forEach(element => {
//                 element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
//             });

//         } else if (caseSelected === 1) {
//     // CASE 2
//             const startBgColor = { r: 255, g: 255, b: 255 }; // white
//             const endBgColor = { r: 190, g: 230, b: 238 }; // #BEE6EE

//             const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
//             const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
//             const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
//             document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

//             const startSvgColor = { r: 0, g: 0, b: 0 }; // black
//             const endSvgColor = { r: 0, g: 136, b: 72 }; // #008848

//             const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
//             const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
//             const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
//             const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
//             svgElements.forEach(element => {
//                 element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
//             });

//         } else if (caseSelected === 2) {
//     // CASE 3
//             const startBgColor = { r: 255, g: 255, b: 255 }; // white
//             const endBgColor = { r: 195, g: 165, b: 245 };  // #C3A5F5

//             const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
//             const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
//             const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
//             document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

//             const startSvgColor = { r: 0, g: 0, b: 0 }; // black
//             const endSvgColor = { r: 190, g: 230, b: 238 }; // #BEE6EE

//             const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
//             const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
//             const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
//             const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
//             svgElements.forEach(element => {
//                 element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
//             });

//         } else if (caseSelected === 3) {
//     // CASE 4
//             const startBgColor = { r: 255, g: 255, b: 255 }; // white
//             const endBgColor = { r: 245, g: 91, b: 29 };  // #F55B1D

//             const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
//             const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
//             const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
//             document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

//             const startSvgColor = { r: 0, g: 0, b: 0 }; // black
//             const endSvgColor = { r: 251, g: 254, b: 103 }; // #FBFE67

//             const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
//             const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
//             const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
//             const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
//             svgElements.forEach(element => {
//                 element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
//             });
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const caseSelected = Math.floor(Math.random() * 3); // Updated to choose between 3 cases (0, 1, 2)

    document.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const maxScrollBg = 350;
        const scrollRatioBg = Math.min(scrollPosition / maxScrollBg, 1);

        const maxScrollSvg = 350;
        const scrollRatioSvg = Math.min(scrollPosition / maxScrollSvg, 1);

        if (caseSelected === 0) {
    // CASE 1
            const startBgColor = { r: 255, g: 255, b: 255 }; // white
            const endBgColor = { r: 254, g: 178, b: 206 }; // #FEB2CE

            const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
            const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
            const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
            document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

            const startSvgColor = { r: 0, g: 0, b: 0 }; // black
            const endSvgColor = { r: 245, g: 91, b: 29 }; // #F55B1D

            const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
            const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
            const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
            const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
            svgElements.forEach(element => {
                element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
            });

        } else if (caseSelected === 1) {
    // CASE 2
            const startBgColor = { r: 255, g: 255, b: 255 }; // white
            const endBgColor = { r: 190, g: 230, b: 238 }; // #BEE6EE

            const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
            const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
            const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
            document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

            const startSvgColor = { r: 0, g: 0, b: 0 }; // black
            const endSvgColor = { r: 0, g: 136, b: 72 }; // #008848

            const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
            const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
            const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
            const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
            svgElements.forEach(element => {
                element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
            });

        } else if (caseSelected === 2) {
    // CASE 3
            const startBgColor = { r: 255, g: 255, b: 255 }; // white
            const endBgColor = { r: 195, g: 165, b: 245 };  // #C3A5F5

            const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
            const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
            const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
            document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

            const startSvgColor = { r: 0, g: 0, b: 0 }; // black
            const endSvgColor = { r: 190, g: 230, b: 238 }; // #BEE6EE

            const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
            const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
            const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
            const svgElements = document.querySelectorAll("svg path, svg rect, svg circle");
            svgElements.forEach(element => {
                element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
            });
        }
    });
});
