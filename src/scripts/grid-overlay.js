/**
 * Togglers
 */

const html = document.querySelector('html');

const classHasRows = 'has-rows';
const classHasBlocks = 'has-blocks';
const classHasNameGuides = 'has-guides';
const classHasNameGrid   = 'has-grid';

document.addEventListener('keypress', event => {
    (event.key == 'u') && html.classList.toggle(classHasRows);
    (event.key == 'i') && html.classList.toggle(classHasBlocks);
    (event.key == 'o') && html.classList.toggle(classHasNameGuides);
    (event.key == 'p') && html.classList.toggle(classHasNameGrid);
});

/**
 * Set up grid overlay
 */

const overlay = document.createElement('div');
const overlayRow = overlay.appendChild(document.createElement('div'));
overlayRow.classList.add('grid-overlay__row');

overlay.classList.add('grid-overlay');

for(var i = 0; i < 24; i++) {
    let column = document.createElement('div');
    column.classList.add('grid-overlay__column');
    overlayRow.appendChild(column);
}

overlay.appendChild(overlayRow);
document.body.appendChild(overlay);