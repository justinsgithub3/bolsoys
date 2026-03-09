let content = document.querySelector('.main-content');
const modal = document.getElementById('drawing-modal');
const modalImg = document.getElementById('modal-img');


async function showAllDrawings() {
    try {
        console.log('fethcing...');
        const response = await fetch('/api/drawings/');
        const data = await response.json();
        const numberOfDrawings = data.length; // number of drawings in array
        const drawingUrl = data.drawings; // array of drawing urls
        // loop over each drawing url and add it to an drwg element in the content section
        for (let i = 0; i < numberOfDrawings; i++) {
            let thisDrawing = drawingUrl[i]; // specific drawing url to work with
            const drwgEle = document.createElement('img');
            drwgEle.setAttribute('id', i);
            drwgEle.setAttribute('width', "10%");
            drwgEle.setAttribute('src', thisDrawing);
            drwgEle.setAttribute('class', "drawing")

            // rename this ****
            addClickToEnlarge(drwgEle, thisDrawing);

            // only have 1 of the 2 block below execute!

            // adds drawing as last
            content.appendChild(drwgEle);

            // adds drawing as first
            //content.insertBefore(drwgEle, content.firstChild);
        };
    } catch (e) {
        console.log("Error: " + e);
    }
}

// close the enlarged image
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});


function addClickToEnlarge(element, url) {
    const modal = document.getElementById('drawing-modal');
    const modalImg = document.getElementById('modal-img');

    element.style.cursor = "pointer"; // Visual cue that it's clickable
    
    element.addEventListener('click', () => {
        modalImg.src = url;
        modal.showModal();
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    // initial render goes to gallery
    showAllDrawings();
});