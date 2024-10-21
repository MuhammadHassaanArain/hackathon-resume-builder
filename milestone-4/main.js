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
    document.getElementById("putFName").textContent = `F/Name:${fatherName}`;
    document.getElementById("putCast").textContent = `Cast : ${cast}`;
    document.getElementById(
      "putNationality"
    ).textContent = `Nationality : ${nationality}`;
    document.getElementById("putCity").textContent = `City : ${city}`;
    document.getElementById("putAbout").textContent = about;
    document.getElementById("putwork").textContent = work;
    // hobbies
    const hobbyArray = hobbies.split(",").map((hobby) => hobby.trim());
    const hobbiesUI = document.getElementById("hobbiesUI");
    hobbiesUI.innerHTML = "";
    hobbyArray.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      hobbiesUI.appendChild(li);
    });
    // skills
    const skillArray = skills.split(",").map((skill) => skill.trim());
    const skillUI = document.getElementById("putSkill");
    skillUI.innerHTML = "";
    skillArray.forEach((element) => {
      const Li = document.createElement("li");
      Li.textContent = element;
      skillUI.appendChild(Li);
    });
    // education
    const educationArray = education.split(",").map((edu) => edu.trim());
    const educationUI = document.getElementById("putEducation");
    educationUI.innerHTML = "";
    educationArray.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      educationUI.appendChild(li);
    });
    // projects
    const projectsArray = projects.split(",").map((ele) => ele.trim());
    const projectUI = document.getElementById("putProjects");
    projectUI.innerHTML = "";
    projectsArray.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = element;
      projectUI.appendChild(li);
    });
    //     //links
    const container = document.getElementById("links");
    container.innerHTML = "";
    // linkedIN
    function Linkedin() {
      const aTag = document.createElement("a");
      aTag.href = LinkedIn;
      aTag.textContent = "LinkedIn";
      aTag.target = "_blank";
      container.appendChild(aTag);
    }
    //github
    function github() {
      const aTag = document.createElement("a");
      aTag.href = gitHub;
      aTag.textContent = "GitHub";
      aTag.target = "_blank";
      container.appendChild(aTag);
    }
    //    number
    function numbers() {
      const aTag = document.createElement("a");
      aTag.href = number;
      aTag.textContent = number;
      container.appendChild(aTag);
      aTag.target = "_blank";
    }
    // email
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
});
