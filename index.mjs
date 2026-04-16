function toggleMode() {
  document.body.classList.toggle("dark-mode");
  console.log("Button clicked");
}

window.toggleMode = toggleMode;

const affirmations = [
    "You belong in STEM 💖",
    "Your ideas can change the world 🌍",
    "You are capable of solving hard problems 🧠",
    "Mistakes mean you're learning 🔬",
    "You are stronger than any equation 💪"
];

const tips = [
    "Break big problems into smaller steps.",
    "Draw diagrams to visualize solutions.",
    "Practice a little every day.",
    "Ask questions! That's how engineers learn!",
    "Double-check your work like a scientist."
];

document.getElementById("generate-btn").addEventListener("click", function() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById("affirmation").textContent = randomAffirmation;
    document.getElementById("tip").textContent = "💡 Tip: " + randomTip;
});
