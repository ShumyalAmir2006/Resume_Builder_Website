const skillInput = document.getElementById("skillInput");
const skillsBox = document.getElementById("skills");

skillInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    const span = document.createElement("span");
    span.textContent = skillInput.value;
    skillsBox.appendChild(span);
    skillInput.value = "";
    save();
  }
});

function save() {
  const data = {
    name: name.value,
    title: title.value,
    email: email.value,
    phone: phone.value,
    location: location.value,
    summary: summary.value,
    skills: [...skillsBox.children].map(s => s.textContent),
    experience: experience.value,
    education: education.value,
    projects: projects.value
  };
  localStorage.setItem("resume", JSON.stringify(data));
}

function showPreview() {
  const d = JSON.parse(localStorage.getItem("resume") || "{}");

  pName.textContent = d.name || "";
  pTitle.textContent = d.title || "";
  pContact.textContent = `${d.email || ""} | ${d.phone || ""} | ${d.location || ""}`;
  pSummary.textContent = d.summary || "";
  pSkills.innerHTML = (d.skills || []).map(s => `<span>${s}</span>`).join("");
  pExperience.textContent = d.experience || "";
  pEducation.textContent = d.education || "";
  pProjects.textContent = d.projects || "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
