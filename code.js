function speakText() {
    const text = "Tillykke for helvede! Her har I jeres CNC fræser. Hilsen os fra Halbal.";
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }