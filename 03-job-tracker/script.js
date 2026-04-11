document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('job-list');

    // Using local storage for data persistence
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

