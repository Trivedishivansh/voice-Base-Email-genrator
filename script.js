
const toInput = document.getElementById("to");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const status = document.getElementById("status");

const speakToBtn = document.getElementById("speakTo");
const speakSubjectBtn = document.getElementById("speakSubject");
const speakMessageBtn = document.getElementById("speakMessage");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  status.textContent = "❌ Speech recognition not supported in this browser.";
} else {
  let recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let isListening = false;
  let currentTarget = null;
  let currentType = null;
  let currentButton = null;

  function startListening(field, type, button) {
    if (isListening) {
      recognition.stop(); // stop if already listening
      return;
    }

    currentTarget = field;
    currentType = type;
    currentButton = button;

    status.textContent = "🎧 Listening...";
    button.textContent = "⏹ Stop";
    recognition.start();
    isListening = true;
  }

  recognition.onresult = (event) => {
    let spokenText = event.results[0][0].transcript;

    if (currentType === "email") {
      spokenText = spokenText
        .toLowerCase()
        .replace(/ at /g, "@")
        .replace(/ dot /g, ".")
        .replace(/\s/g, "");
    }

    currentTarget.value = spokenText;
    status.textContent = "✅ Voice captured.";
    stopListening();
  };

  recognition.onerror = (event) => {
    status.textContent = "❌ Error: " + event.error;
    stopListening();
  };

  recognition.onend = () => {
    if (isListening) stopListening(); // if user stopped manually
  };

  function stopListening() {
    isListening = false;
    if (currentButton) currentButton.textContent = "🎤 Start";
    currentTarget = null;
    currentButton = null;
    currentType = null;
  }

  // Event Listeners
  speakToBtn.addEventListener("click", () => {
    startListening(toInput, "email", speakToBtn);
  });

  speakSubjectBtn.addEventListener("click", () => {
    startListening(subjectInput, "text", speakSubjectBtn);
  });

  speakMessageBtn.addEventListener("click", () => {
    startListening(messageInput, "text", speakMessageBtn);
  });
}
