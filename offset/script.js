document.addEventListener("DOMContentLoaded", function() {
    const caseSelected = Math.floor(Math.random() * 3); 

    document.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const maxScrollBg = 350;
        const scrollRatioBg = Math.min(scrollPosition / maxScrollBg, 1);

        const maxScrollSvg = 350;
        const scrollRatioSvg = Math.min(scrollPosition / maxScrollSvg, 1);

        if (caseSelected === 0) {

            // CASE 1
            const startBgColor = { r: 255, g: 255, b: 255 }; // white
            const endBgColor = { r: 167, g: 220, b: 251 }; // #A7DCFB

            const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
            const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
            const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
            document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

            const startSvgColor = { r: 0, g: 0, b: 0 }; // black
            const endSvgColor = { r: 131, g: 69, b: 54 }; // #834536

            const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
            const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
            const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
            const svgElements = document.querySelectorAll("svg:not(.svg-opp) path, svg:not(.svg-opp) rect, svg:not(.svg-opp) circle");
            svgElements.forEach(element => {
                element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
            });
    
        } else if (caseSelected === 1) {

            // CASE 2
            const startBgColor = { r: 255, g: 255, b: 255 }; // white
            const endBgColor = { r: 245, g: 91, b: 29 }; // #F5EC69

            const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
            const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
            const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
            document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

            const startSvgColor = { r: 0, g: 0, b: 0 }; // black
            const endSvgColor = { r: 245, g: 236, b: 105 }; // #F55B1D

            const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
            const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
            const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
            const svgElements = document.querySelectorAll("svg:not(.svg-opp) path, svg:not(.svg-opp) rect, svg:not(.svg-opp) circle");
            svgElements.forEach(element => {
                element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
            });

        } else if (caseSelected === 2) {

            // CASE 3
            const startBgColor = { r: 255, g: 255, b: 255 }; // white
            const endBgColor = { r: 246, g: 154, b: 193 };  // #F69AC1

            const rBg = Math.floor(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollRatioBg);
            const gBg = Math.floor(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollRatioBg);
            const bBg = Math.floor(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollRatioBg);
            document.body.style.backgroundColor = `rgb(${rBg}, ${gBg}, ${bBg})`;

            const startSvgColor = { r: 0, g: 0, b: 0 }; // black
            const endSvgColor = { r: 209, g: 32, b: 110 }; // #D1206E

            const rSvg = Math.floor(startSvgColor.r + (endSvgColor.r - startSvgColor.r) * scrollRatioSvg);
            const gSvg = Math.floor(startSvgColor.g + (endSvgColor.g - startSvgColor.g) * scrollRatioSvg);
            const bSvg = Math.floor(startSvgColor.b + (endSvgColor.b - startSvgColor.b) * scrollRatioSvg);
            const svgElements = document.querySelectorAll("svg:not(.svg-opp) path, svg:not(.svg-opp) rect, svg:not(.svg-opp) circle");
            svgElements.forEach(element => {
                element.setAttribute("fill", `rgb(${rSvg}, ${gSvg}, ${bSvg})`);
            });
        }
    });
});
