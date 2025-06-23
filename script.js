const startBtn = document.getElementById("start");
    const messageInput = document.getElementById("message");
    const status = document.getElementById("status");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      startBtn.onclick = () => {
        status.textContent = "🎧 Listening...";
        recognition.start();
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        messageInput.value = transcript;
        status.textContent = "✅ Voice captured!";
      };

      recognition.onerror = (event) => {
        status.textContent = "❌ Error: " + event.error;
      };
    } else {
      status.textContent = "⚠️ Speech Recognition not supported in this browser.";
    }