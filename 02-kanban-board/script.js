function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    setTimeout(() => {
        ev.target.style.opacity = '0.5';
    }, 0);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    setTimeout(() => {
        ev.target.style.opacity = '0.5';
    }, 0);
}

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

