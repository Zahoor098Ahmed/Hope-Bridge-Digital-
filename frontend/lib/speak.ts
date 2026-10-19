// Speaks text with the browser's built-in voice. Returns false when speech isn't available.
export function speak(text: string, onEnd?: () => void): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  // Calm mode: a slower, softer voice.
  const calm = document.documentElement.dataset.calm === "true";
  u.rate = calm ? 0.75 : 0.9;
  u.pitch = calm ? 1 : 1.1;
  u.volume = calm ? 0.8 : 1;
  u.lang = "en-US";
  if (onEnd) {
    u.onend = onEnd;
    u.onerror = onEnd;
  }
  window.speechSynthesis.speak(u);
  return true;
}
