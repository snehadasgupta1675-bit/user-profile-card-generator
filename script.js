const profileForm = document.getElementById("profileForm");
const profileCard = document.getElementById("profileCard");

profileForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const profileData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    age: document.getElementById("age").value,
    skills: document.getElementById("skills").value,
    bio: document.getElementById("bio").value,
    image: document.getElementById("image").value
  };

  try {
    const response = await fetch("/create-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileData)
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    const imageUrl = data.image
      ? data.image
      : "https://via.placeholder.com/120";

    profileCard.style.display = "block";

    profileCard.innerHTML = `
      <img src="${imageUrl}" alt="Profile Image">
      <h2>${data.name}</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Skills:</strong> ${data.skills || "Not provided"}</p>
      <p><strong>Bio:</strong> ${data.bio || "Not provided"}</p>
    `;
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.log(error);
  }
});