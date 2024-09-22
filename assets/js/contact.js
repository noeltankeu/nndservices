// Language data for both English and French translations
const languageData = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    navDonate: "Donate",

    contactTitleText: "Contact",
    addressTitle: "Address",
    addressText: "24 Abberfield Crescent NE, Calgary Alberta - T2A6N6",
    callTitle: "Call Us",
    callText: "+1 368 889 5240",
    emailTitle: "Email",
    emailText: "info@nndservices.com",
    labelName: "Your Name",
    labelEmail: "Your Email",
    labelSubject: "Subject",
    labelMessage: "Message",
    submitButton: "Send Message",

    footerTitle: "NND SERVICES",
    footerServicesTitle: "Our Services",
    movingService: "Moving Services",
    deliveryService: "Delivery Services",
    junkRemoval: "Junk Removal Services",
    footerFollowUsTitle: "Follow Us",
    footerCopyright: "All Rights Reserved",
    footerDesignedBy: "Designed by ",
  },
  fr: {
    navHome: "Accueil",
    navServices: "Services",
    navAbout: "À Propos",
    navContact: "Contactez-nous",
    navDonate: "Faire un don",

    contactTitleText: "Contactez-nous",
    addressTitle: "Adresse",
    addressText: "24 Abberfield Crescent NE, Calgary Alberta - T2A6N6",
    callTitle: "Appelez-nous",
    callText: "+1 368 889 5240",
    emailTitle: "Email",
    emailText: "info@nndservices.com",
    labelName: "Votre Nom",
    labelEmail: "Votre Email",
    labelSubject: "Sujet",
    labelMessage: "Message",
    submitButton: "Envoyer le Message",

    footerTitle: "NND SERVICES",
    footerServicesTitle: "Nos Services",
    movingService: "Services de déménagement",
    deliveryService: "Services de livraison",
    junkRemoval: "Services de débarras",
    footerFollowUsTitle: "Suivez-nous",
    footerCopyright: "Tous droits réservés",
    footerDesignedBy: "Conçu par ",
  },
};

// Function to change the language dynamically
function changeLanguage() {
  const selectedLanguage = document.getElementById("language-select").value;
  const lang = languageData[selectedLanguage];

  // Update navigation bar content
  document.getElementById("nav-home").textContent = lang.navHome;
  document.getElementById("nav-services").textContent = lang.navServices;
  document.getElementById("nav-about").textContent = lang.navAbout;
  document.getElementById("nav-contact").textContent = lang.navContact;
  document.getElementById("nav-donate").textContent = lang.navDonate;

  // Update contact section content
  document.getElementById("contact-title-text").textContent =
    lang.contactTitleText;
  document.getElementById("address-title").textContent = lang.addressTitle;
  document.getElementById("address-text").textContent = lang.addressText;
  document.getElementById("call-title").textContent = lang.callTitle;
  document.getElementById("call-text").textContent = lang.callText;
  document.getElementById("email-title").textContent = lang.emailTitle;
  document.getElementById("email-text").textContent = lang.emailText;
  document.getElementById("label-name").textContent = lang.labelName;
  document.getElementById("label-email").textContent = lang.labelEmail;
  document.getElementById("label-subject").textContent = lang.labelSubject;
  document.getElementById("label-message").textContent = lang.labelMessage;
  document.getElementById("submit-button").textContent = lang.submitButton;

  // Update footer content
  document.getElementById("footer-title").textContent = lang.footerTitle;
  document.getElementById("footer-services-title").textContent =
    lang.footerServicesTitle;
  document.getElementById("moving-service").textContent = lang.movingService;
  document.getElementById("delivery-service").textContent =
    lang.deliveryService;
  document.getElementById("junk-removal").textContent = lang.junkRemoval;
  document.getElementById("footer-follow-us-title").textContent =
    lang.footerFollowUsTitle;
  document.getElementById(
    "footer-copyright"
  ).textContent = `© Copyright ${lang.footerTitle} ${lang.footerCopyright}`;
  document.querySelector("credits ").textContent = lang.footerDesignedBy;
}

// Initialize the language on page load
window.onload = function () {
  changeLanguage();
};
