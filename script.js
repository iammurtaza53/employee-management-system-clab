function handleRecommendationSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("rec-name");
  const messageInput = document.getElementById("rec-message");
  const message = messageInput.value.trim();
  const name = nameInput.value.trim();

  if (!message) {
    alert("Please enter a recommendation message before submitting.");
    return;
  }

  // Create new recommendation card (Task 7)
  const container = document.getElementById("recommendation-list");
  const card = document.createElement("div");
  card.className = "recommendation-card";

  const text = name ? `“${message}” — ${name}` : `“${message}”`;
  card.textContent = text;

  container.appendChild(card);

  // Show popup confirmation (Task 9)
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2500);

  // Clear form
  nameInput.value = "";
  messageInput.value = "";
}
