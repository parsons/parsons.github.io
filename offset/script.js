// Scroll color fade. All colors live at the top of style.css:
//   --color-bg / --color-shape are the starting colors,
//   --theme-N-bg / --theme-N-shape are the themes (one is picked at random per visit).
// Link hover colors follow along, per background (the page, or the shapes):
// whichever theme color contrasts more with it (darker on light backgrounds,
// lighter on dark ones), or pink if that's too close to the text color.
document.addEventListener("DOMContentLoaded", function() {
    const root = document.documentElement;
    const css = getComputedStyle(root);
    const maxScroll = 350; // px of scrolling to reach the full theme color

    // turn any CSS color (hex, name, rgb) into {r, g, b}
    const probe = document.createElement("div");
    document.body.appendChild(probe);
    function toRgb(value) {
        probe.style.color = "";
        probe.style.color = value.trim();
        const [r, g, b] = getComputedStyle(probe).color.match(/\d+/g).map(Number);
        return { r, g, b };
    }

    const themes = [];
    for (let n = 1; css.getPropertyValue(`--theme-${n}-bg`).trim(); n++) {
        themes.push({
            bg: toRgb(css.getPropertyValue(`--theme-${n}-bg`)),
            shape: toRgb(css.getPropertyValue(`--theme-${n}-shape`)),
        });
    }
    const startBg = toRgb(css.getPropertyValue("--color-bg"));
    const startShape = toRgb(css.getPropertyValue("--color-shape"));
    const text = toRgb(css.getPropertyValue("--color-text"));
    const pink = toRgb(css.getPropertyValue("--color-pink"));
    const pinkDark = toRgb(css.getPropertyValue("--color-pink-dark"));
    probe.remove();

    if (!themes.length) return;
    const theme = themes[Math.floor(Math.random() * themes.length)];

    function mix(from, to, t) {
        return {
            r: Math.floor(from.r + (to.r - from.r) * t),
            g: Math.floor(from.g + (to.g - from.g) * t),
            b: Math.floor(from.b + (to.b - from.b) * t),
        };
    }

    function toCss({ r, g, b }) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    // WCAG relative luminance and contrast ratio
    function luminance({ r, g, b }) {
        const [lr, lg, lb] = [r, g, b].map(function(v) {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
    }

    function contrast(a, b) {
        const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
        return (hi + 0.05) / (lo + 0.05);
    }

    // of the candidates, the one that stands out most against the background
    function mostContrast(background, ...candidates) {
        return candidates.reduce((best, c) => contrast(c, background) > contrast(best, background) ? c : best);
    }

    function distance(a, b) {
        return Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);
    }

    // if the best theme color is too close to the text to see the change,
    // fall back to pink (light or dark, again by contrast with the background)
    function hoverOn(background) {
        const hover = mostContrast(background, theme.bg, theme.shape);
        if (distance(hover, text) > 100) return hover;
        return mostContrast(background, pink, pinkDark);
    }

    // the Register button's text is dark pink, not black, so it skips the fallback
    root.style.setProperty("--hover-on-pink", toCss(mostContrast(pink, theme.bg, theme.shape)));

    function update() {
        const t = Math.min(window.scrollY / maxScroll, 1);
        const bg = mix(startBg, theme.bg, t);
        const shape = mix(startShape, theme.shape, t);
        root.style.setProperty("--hover-on-bg", toCss(hoverOn(bg)));
        root.style.setProperty("--hover-on-shape", toCss(hoverOn(shape)));

        if (t === 0) { // at the top, fall back to the CSS starting colors (keeps the logo's own color)
            root.style.removeProperty("--bg-current");
            root.style.removeProperty("--shape-current");
            return;
        }
        root.style.setProperty("--bg-current", toCss(bg));
        root.style.setProperty("--shape-current", toCss(shape));
    }

    document.addEventListener("scroll", update);
    update();
});
