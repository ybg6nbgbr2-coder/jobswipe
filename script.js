import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfvX_iWxK5dcbqFM5onp6-WQgjH1ysb1o",
  authDomain: "jobswipe-d9308.firebaseapp.com",
  projectId: "jobswipe-d9308",
  storageBucket: "jobswipe-d9308.firebasestorage.app",
  messagingSenderId: "95022171668",
  appId: "1:95022171668:web:bb83caac24ab9630a2c901",
  measurementId: "G-17YQJ3TF92"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


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

    document.getElementById("matchScreen").style.display = "block";

}

function skipJob() {

    let card = document.querySelector(".card");

    card.classList.add("swipe-left");

    setTimeout(() => {
        card.classList.remove("swipe-left");
        nextJob();
    }, 400);

}


function nextJob() {

    currentJob++;

    if(currentJob >= jobs.length){
        currentJob = 0;
    }

    showJob();

}


showJob();
window.signup = function() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)

    .then(() => {
        alert("🔥 Account created!");
        window.location.href = "login.html";
    })

    .catch((error) => {
        alert(error.message);
    });

};
