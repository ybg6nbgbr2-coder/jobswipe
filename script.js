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
        salary: "€900/month",
        location: "Pristina"
    },
    {
        title: "Web Developer 💻",
        company: "Tech Company",
        salary: "€1200/month",
        location: "Remote"
    }
];

let currentJob = 0;

function showJob() {

    let job = jobs[currentJob];

    document.getElementById("jobTitle").innerHTML = job.title;
    document.getElementById("company").innerHTML = "🏢 " + job.company;
    document.getElementById("salary").innerHTML = "💰 " + job.salary;
    document.getElementById("location").innerHTML = "📍 " + job.location;

}


function likeJob() {

    alert("🔥 You applied for " + jobs[currentJob].title);

    nextJob();

}


function skipJob() {

    nextJob();

}


function nextJob() {

    currentJob++;

    if(currentJob >= jobs.length){
        currentJob = 0;
    }

    showJob();

}


showJob();
