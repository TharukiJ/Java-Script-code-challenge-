function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    setTimeout(() => {
        ev.target.style.opacity = '0.5';
    }, 0);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const task = document.getElementById(data);
    task.style.opacity = '1';

    // Determine the closest column to drop into
    let dropTarget = ev.target;
    while (dropTarget && !dropTarget.classList.contains('column')) {
        dropTarget = dropTarget.parentElement;
    }

    if (dropTarget && dropTarget.classList.contains('column')) {
        dropTarget.appendChild(task);
    }
}

// Reset opacity if drag ends without drop
document.addEventListener('dragend', (ev) => {
    if (ev.target.classList && ev.target.classList.contains('task')) {
        ev.target.style.opacity = '1';
    }
});
