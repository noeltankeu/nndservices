// Fonction pour afficher les messages d'erreur
const displayError = (id, message, type = "error") => {
  const errorElement = document.getElementById(`${id}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.className =
      type === "error"
        ? "error-message text-danger"
        : "error-message text-success";
  }
};

// Validation du nom
const validateTextField = (id, minLength = 5, maxLength = 50, fieldLabel) => {
  const input = document.getElementById(id);
  if (input.value.length < minLength) {
    displayError(
      id,
      `Le ${fieldLabel} doit contenir au moins ${minLength} caractères.`
    );
    return false;
  } else if (input.value.length > maxLength) {
    displayError(
      id,
      `Le ${fieldLabel} doit contenir moins de ${maxLength} caractères.`
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation de l'email
const validateEmail = (id) => {
  const email = document.getElementById(id).value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format basique d'email
  if (!emailRegex.test(email)) {
    displayError(
      id,
      "Adresse email invalide. Veuillez entrer une adresse valide."
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation des champs texte
const validateTextarea = (id, minLength = 10, fieldLabel) => {
  const textarea = document.getElementById(id);
  if (textarea.value.length < minLength) {
    displayError(
      id,
      `${fieldLabel} doit contenir au moins ${minLength} caractères.`
    );
    return false;
  }
  displayError(id, "", "success");
  return true;
};

// Validation en temps réel pour les champs de saisie
document
  .getElementById("name-field")
  .addEventListener("input", () =>
    validateTextField("name-field", 5, 50, "Nom")
  );

document
  .getElementById("email-field")
  .addEventListener("input", () => validateEmail("email-field"));

document
  .getElementById("subject-field")
  .addEventListener("input", () =>
    validateTextarea("subject-field", 10, "Détails sur les articles")
  );
document
  .getElementById("message-field")
  .addEventListener("input", () =>
    validateTextarea("message-field", 20, "Services supplémentaires")
  );
// Validation du formulaire au moment de la soumission
document.getElementById("moving-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateTextField("name-field", 3, 50, "Nom");
  const isPhoneValid = validatePhoneNumber("tel-field");
  const isAddressValid = validateAddress(
    "pickup-address-field",
    "dropoff-address-field"
  );
  const isDateValid = validateMovingDate("date-demenage-field");

  if (isNameValid && isPhoneValid && isAddressValid && isDateValid) {
    alert("Formulaire soumis avec succès !");
  } else {
    alert("Veuillez corriger les erreurs.");
  }
});
