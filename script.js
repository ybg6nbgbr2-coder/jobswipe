let jobs = [
    {
        title: "Barista ☕",
        company: "Milano Coffee",
        salary: "€600/month",
        location: "Ferizaj"
    },
    {
        title: "Car Mechanic 🔧",
        company: "Auto Service",
        salary: "€800/month",
        location: "Pristina"
    },
    {
        title: "Web Designer 💻",
        company: "Digital Agency",
        salary: "€1000/month",
        location: "Remote"
    }
];

let currentJob = 0;

function showJob() {
    let job = jobs[currentJob];

    document.getElementById("jobTitle").innerHTML = job.title;
    document.getElementById("company").innerHTML = "Company: " + job.company;
    document.getElementById("salary").innerHTML = "Salary: " + job.salary;
    document.getElementById("location").innerHTML = "Location: " + job.location;
}

function likeJob() {
    alert("❤️ You matched with " + jobs[currentJob].title);
    nextJob();
}

function skipJob() {
    nextJob();
}

function nextJob() {
    currentJob++;

    if (currentJob >= jobs.length) {
        currentJob = 0;
    }

    showJob();
}

showJob();
