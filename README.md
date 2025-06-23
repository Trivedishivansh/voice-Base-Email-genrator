# 🎙️ VoiceMail – Voice-Based Email Generator

**VoiceMail** is a simple and accessible voice-powered email generator that allows users to speak their email message and fill in the **To**, **Subject**, and **Message** fields using speech recognition. This is especially helpful for visually impaired users or for hands-free email drafting.

---

## 🔥 Features

- 🎤 **Speech to Text** using Web Speech API
- 🧠 Smart parsing of email addresses (e.g., “john dot doe at gmail dot com” → `john.doe@gmail.com`)
- 📝 Voice input for:
  - Recipient (To)
  - Subject
  - Message body
- 📱 Mobile and desktop support (Chrome only)
- ♿ Designed with accessibility in mind

---

## 🚀 Live Demo

🔗 [View Live on GitHub Pages] 

---

## 🛠️ How It Works

1. Click on the mic buttons beside each field.
2. Speak your input:
   - For **email**, say: `john dot doe at gmail dot com`
   - For **subject/message**, just speak naturally
3. The app fills the field using your voice.
4. (Optional) You can later connect to EmailJS or a backend to send the email.

---

## 📦 Tech Stack

- HTML5 + CSS3
- JavaScript (Vanilla)
- Web Speech API (`SpeechRecognition`)

---

## 📱 Browser Support

| Browser       | Speech Input Support |
|---------------|----------------------|
| ✅ Chrome      | Fully Supported       |
| ❌ Firefox     | Not supported         |
| ❌ Safari/iOS  | Not supported         |
| ✅ Edge (Chromium) | Supported          |

> ⚠️ Speech Recognition only works over **HTTPS** or on **localhost**.

---

