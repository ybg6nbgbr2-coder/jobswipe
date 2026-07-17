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

function likeJob() {
    alert("❤️ You liked " + jobs[currentJob].title);
    nextJob();
}

function skipJob() {
    alert("❌ You skipped " + jobs[currentJob].title);
    nextJob();
}

function nextJob() {
    currentJob++;

    if (currentJob >= jobs.length) {
        alert("No more jobs available!");
        currentJob = 0;
    }
}
