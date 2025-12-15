function saveResume() {
  const data = {
    name: name.value,
    title: title.value,
    email: email.value,
    phone: phone.value,
    location: location.value,
    summary: summary.value,
    skills: skills.value.split(",")
  };
  localStorage.setItem("resume", JSON.stringify(data));
  alert("Saved!");
}

function goPreview() {
  const data = JSON.parse(localStorage.getItem("resume") || "{}");

  pName.textContent = data.name || "";
  pTitle.textContent = data.title || "";
  pEmail.textContent = data.email || "";
  pPhone.textContent = data.phone || "";
  pLocation.textContent = data.location || "";
  pSummary.textContent = data.summary || "";

  pSkills.innerHTML = (data.skills || []).map(s =>
    `<span>${s.trim()}</span>`
  ).join(", ");

  builderPage.style.display = "none";
  previewPage.style.display = "block";
}

function goBuilder() {
  previewPage.style.display = "none";
  builderPage.style.display = "block";
}
