let formSection = document.getElementById("form-section");
let resume = document.getElementById("staic-resume-div");
let generateResume = document.getElementById("generate-resume-button");
generateResume.addEventListener("click", () => {
  formSection.style.display = "block";
  resume.style.display = "none";
});
let submitbtn = document.getElementById("form-submit-button");
submitbtn.addEventListener("click", () => {
  resume.style.display = "block";
  formSection.style.display = "none";
  generateResume.textContent = "Edit Resume"
});

document
  .getElementById("form-submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let userName = document.getElementById("username").value;
    let fName = document.getElementById("Father'sname").value;
    let nationality = document.getElementById("nationality").value;
    let occuoation = document.getElementById("occupation").value;
    let address = document.getElementById("adress").value;
    let aboutMe = document.getElementById("AboutMe").value;
    let workExperience = document.getElementById("workexperienceses").value;
    let phoneNumber = document.getElementById("user-number").value;
    let email = document.getElementById("user-email").value;
    let linkedIn = document.getElementById("linkedIn").value;
    let gitHub = document.getElementById("gitHub").value;
    let hobbies = document.getElementById("Hobbies").value;
    let skills = document.getElementById("skill").value;
    let project = document.getElementById("project").value;
    let education = document.getElementById("educatio-data").value;

    document.getElementById("put-name").textContent = userName;
    document.getElementById("user-name").textContent = userName;
    document.getElementById("put-f/name").textContent = fName;
    document.getElementById("put-nationality").textContent = nationality;
    document.getElementById("put-occupation").textContent = occuoation;
    document.getElementById("put-adress").textContent = address;
    document.getElementById("put-about").textContent = aboutMe;
    document.getElementById("put-experience").textContent = workExperience;
    document.getElementById("put-usernumber").textContent = phoneNumber;
    document.getElementById("put-github").href = gitHub;
    document.getElementById("put-useremail").textContent = email;
    document.getElementById("put-LinkedIn").href = linkedIn;

    // for hobbies
    const hobbiesAray = hobbies.split(",").map((hobby) => hobby.trim());
    const hobbyUI = document.getElementById("hobbyUI");
    hobbyUI.innerHTML = "";
    hobbiesAray.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      hobbyUI.appendChild(li);
    });
    //
    // for skills
    const skillArray = skills.split(",").map((item) => item.trim());
    const skillUI = document.getElementById("skillsUI");
    skillUI.innerHTML = "";
    skillArray.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      skillUI.appendChild(li);
    });
    //
    // for projects
    const projectArray = project.split(",").map((item) => item.trim());
    const projectIUI = document.getElementById("project-UI");
    projectIUI.innerHTML = "";
    projectArray.forEach((elements) => {
      const li = document.createElement("li");
      li.textContent = elements;
      projectIUI.appendChild(li);
    });
    //
    // for education
    const educationArray = education.split(",").map((item) => item.trim());
    const EduUI = document.getElementById("educationUI");
    EduUI.innerHTML = "";
    educationArray.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = element;
      EduUI.appendChild(li);
    });
    //
  });
