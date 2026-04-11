const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output');
const themeToggle = document.getElementById('theme-toggle');

function render() {
    // Combine HTMl, CSS, JS
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}\x3C/script>`; // Close tag is escaped to avoid breaking the script
    
    // Inject into iframe
    const doc = output.contentDocument || output.contentWindow.document;
    doc.open();
    doc.write(html + css + js);
    doc.close();
}

// Listen for live updates
htmlCode.addEventListener('input', render);
cssCode.addEventListener('input', render);
jsCode.addEventListener('input', render);

// Dark mode toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial render
render();
