/**
 * Togglers
 */

const html = document.querySelector('html');

const classShowBlocks = 'show-block-children';
const classShowNameGuides = 'show-guides';
const classShowNameGrid = 'show-grid';
const classShowColumns = 'show-columns';

document.addEventListener('keypress', event => {
    (event.ctrlKey && event.key === 'u') && html.classList.toggle(classShowColumns);
    (event.ctrlKey && event.key === 'i') && html.classList.toggle(classShowBlocks);
    (event.ctrlKey && event.key === 'o') && html.classList.toggle(classShowNameGuides);
    (event.ctrlKey && event.key === 'p') && html.classList.toggle(classShowNameGrid);
});


/**
 * Set up grid overlay
 */

const overlay = document.createElement('div');
// const overlayRow = overlay.appendChild(document.createElement('div'));
// overlayRow.classList.add('grid-overlay__row');

overlay.classList.add('grid-overlay');

for(var i = 0; i < 24; i++) {
    let column = document.createElement('div');
    column.classList.add('grid-overlay__column');
    column.appendChild(document.createElement('div'));
    overlay.appendChild(column);
}

// overlay.appendChild(overlayRow);
document.body.appendChild(overlay);
