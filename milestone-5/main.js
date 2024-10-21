
document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  form?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profession = document.getElementById("profession").value;
    const nameInput = document.getElementById("username").value;
    const fatherName = document.getElementById("fatherName").value;
    const cast = document.getElementById("cast").value;
    const nationality = document.getElementById("nationality").value;
    const city = document.getElementById("city").value;
    const about = document.getElementById("about").value;
    const work = document.getElementById("work").value;
    const hobbies = document.getElementById("hobbies").value;
    const skills = document.getElementById("Skills").value;
    const education = document.getElementById("education").value;
    const projects = document.getElementById("projects").value;
    const LinkedIn = document.getElementById("linkedinurl").value;
    const gitHub = document.getElementById("githuburl").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;

    document.getElementById("putprofession").textContent = profession;
    document.getElementById("putName").textContent = `Name: ${nameInput}`;
    document.getElementById("headingName").textContent = nameInput;
    document.getElementById("putFName").textContent = `F/Name: ${fatherName}`;
    document.getElementById("putCast").textContent = `Cast : ${cast}`;
    document.getElementById("putNationality").textContent = `Nationality : ${nationality}`;
    document.getElementById("putCity").textContent = `City : ${city}`;
    document.getElementById("putAbout").textContent = about;
    document.getElementById("putwork").textContent = work;

    // Hobbies
    const hobbyArray = hobbies.split(",").map(hobby => hobby.trim());
    const hobbiesUI = document.getElementById("hobbiesUI");
    hobbiesUI.innerHTML = "";
    hobbyArray.forEach(element => {
      const li = document.createElement("li");
      li.textContent = element;
      hobbiesUI.appendChild(li);
    });

    // Skills
    const skillArray = skills.split(",").map(skill => skill.trim());
    const skillUI = document.getElementById("putSkill");
    skillUI.innerHTML = "";
    skillArray.forEach(element => {
      const li = document.createElement("li");
      li.textContent = element;
      skillUI.appendChild(li);
    });

    // Education
    const educationArray = education.split(",").map(edu => edu.trim());
    const educationUI = document.getElementById("putEducation");
    educationUI.innerHTML = "";
    educationArray.forEach(element => {
      const li = document.createElement("li");
      li.textContent = element;
      educationUI.appendChild(li);
    });

    // Projects
    const projectsArray = projects.split(",").map(ele => ele.trim());
    const projectUI = document.getElementById("putProjects");
    projectUI.innerHTML = "";
    projectsArray.forEach(element => {
      let li = document.createElement("li");
      li.textContent = element;
      projectUI.appendChild(li);
    });

    // Links
    const container = document.getElementById("links");
    container.innerHTML = "";

    // LinkedIn
    function Linkedin() {
      const aTag = document.createElement("a");
      aTag.href = LinkedIn;
      aTag.textContent = "LinkedIn";
      aTag.target = "_blank";
      container.appendChild(aTag);
    }
    // GitHub
    function github() {
      const aTag = document.createElement("a");
      aTag.href = gitHub;
      aTag.textContent = "GitHub";
      aTag.target = "_blank";
      container.appendChild(aTag);
    }
    // Number
    function numbers() {
      const aTag = document.createElement("a");
      aTag.href = number;
      aTag.textContent = number;
      container.appendChild(aTag);
      aTag.target = "_blank";
    }
    // Email
    function Email() {
      const aTag = document.createElement("a");
      aTag.href = email;
      aTag.textContent = email;
      container.appendChild(aTag);
      aTag.target = "_blank";
    }

    Linkedin();
    github();
    numbers();
    Email();
  });

  // Add PDF download functionality
  document.getElementById("downloadBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set PDF content
    doc.setFontSize(16);
    doc.text(document.getElementById("headingName").textContent, 10, 10);
    doc.text(document.getElementById("putprofession").textContent, 10, 20);

    doc.setFontSize(12);
    doc.text(document.getElementById("putName").textContent, 10, 30);
    doc.text(document.getElementById("putFName").textContent, 10, 40);
    doc.text(document.getElementById("putCast").textContent, 10, 50);
    doc.text(document.getElementById("putNationality").textContent, 10, 60);
    doc.text(document.getElementById("putCity").textContent, 10, 70);

    doc.text("Profile:", 10, 80);
    doc.text(document.getElementById("putAbout").textContent, 10, 90);

    doc.text("Work Experience:", 10, 100);
    doc.text(document.getElementById("putwork").textContent, 10, 110);

    doc.text("Hobbies:", 10, 120);
    const hobbies = Array.from(document.querySelectorAll("#hobbiesUI li"));
    hobbies.forEach((li, index) => {
      doc.text(`${index + 1}. ${li.textContent}`, 10, 130 + index * 10);
    });

    doc.text("Skills:", 10, 140 + hobbies.length * 10);
    const skills = Array.from(document.querySelectorAll("#putSkill li"));
    skills.forEach((li, index) => {
      doc.text(`${index + 1}. ${li.textContent}`, 10, 150 + (hobbies.length + index) * 10);
    });

    // Save the PDF
    doc.save(`${document.getElementById("username").value}-Resume.pdf`);
  });
  document.getElementById("shareResume").addEventListener("click", function () {
    const headingName = document.getElementById("headingName").textContent;
    const resumeURL = window.location.href; // Assuming the resume is available at the current page URL
  
    if (navigator.share) {
      navigator
        .share({
          title: `${headingName}'s Resume`,
          text: `Check out ${headingName}'s resume.`,
          url: resumeURL,
        })
        .then(() => console.log("Resume shared successfully"))
        .catch((error) => console.error("Error sharing resume:", error));
    } else {
      alert("Your browser does not support the Web Share API");
    }
  });
  
});

