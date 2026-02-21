document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-effect");
  const textToType = "Network Analyst...";
  let charIndex = 0;
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const newTextDelay = 2000;

  const phrases = [
    "Network Analyst...",
    "Contributor LibreNMS...",
    "Creator of the dark Dracula theme for LibreNMS...",
    "Technologist in Systems Analysis and Development...",
    "MBE in Computer Network Management",
  ];
  let phraseIndex = 0;

  function type() {
    if (charIndex < phrases[phraseIndex].length) {
      textElement.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      if (phrases.length > 1) {
        setTimeout(erase, newTextDelay);
      }
    }
  }

  function erase() {
    if (charIndex > 0) {
      textElement.textContent = phrases[phraseIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      phraseIndex++;
      if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
      }
      setTimeout(type, typingSpeed + 500);
    }
  }

  type();
});
