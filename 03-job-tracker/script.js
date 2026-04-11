document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('job-list');

    // Using local storage for data persistence
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    function renderJobs() {
        jobList.innerHTML = '';
        jobs.forEach((job, index) => {
            const li = document.createElement('li');
            li.className = `job-item ${job.status}`;
            li.innerHTML = `
                <div class="job-info">
                    <h3>${job.company}</h3>
                    <p>${job.role} &bull; <strong>${job.status}</strong></p>
                </div>
                <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
            `;
            jobList.appendChild(li);
        });
