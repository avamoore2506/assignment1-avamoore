// toggles dark mode on/off
function toggleMode() {
  document.body.classList.toggle("dark-mode"); //selects <body> element and adds/removes "dark-mode"
  console.log("Button clicked");
}

window.toggleMode = toggleMode;

// array of positive affirmation messages
const affirmations = [
    "You belong in STEM 💖",
    "Your ideas can change the world 🌍",
    "You are capable of solving hard problems 🧠",
    "Mistakes mean you're learning 🔬",
    "You are stronger than any equation 💪"
];

// array of helpful study/problem-solving tips
const tips = [
    "Break big problems into smaller steps.",
    "Draw diagrams to visualize solutions.",
    "Practice a little every day.",
    "Ask questions! That's how engineers learn!",
    "Double-check your work like a scientist."
];

document.getElementById("generate-btn").addEventListener("click", function() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]; // picks a random affirmation from the affirmations array
    const randomTip = tips[Math.floor(Math.random() * tips.length)]; // picks a random tip from the tips array

    document.getElementById("affirmation").textContent = randomAffirmation; // updates the text of the element with id="affirmation" to show the affirmation
    document.getElementById("tip").textContent = "💡 Tip: " + randomTip; // updates the text of the element with id="tip" to show the tip with a label
});
