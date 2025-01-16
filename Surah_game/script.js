const surahName = document.getElementById("surahName");
const surahNumber = document.getElementById("surahNumber");
const verseNumber = document.getElementById("verseNumber");
const verseText = document.getElementById("verseText");
const verseMeaning = document.getElementById("verseMeaning");
const verseTransliteration = document.getElementById("verseTransliteration");
const verseTranslation = document.getElementById("verseTranslation");
const rollButton = document.getElementById("rollButton");

// Event listener for the "Pick a Random Verse" button
rollButton.addEventListener("click", () => {
  fetch("quran_en.json")
    .then((response) => response.json())
    .then((data) => {
      const randomSurah = data[Math.floor(Math.random() * data.length)];
      const randomVerse =
        randomSurah.verses[
          Math.floor(Math.random() * randomSurah.verses.length)
        ];

      // Update the DOM with the randomly selected verse details
      surahName.textContent = `Surah: ${randomSurah.name}`;
      surahNumber.textContent = `Surah Number: ${randomSurah.id}`;
      verseNumber.textContent = `Verse Number: ${randomVerse.id}`;
      verseText.textContent = `Verse: ${randomVerse.text}`;
      verseMeaning.textContent = `Meaning: ${randomVerse.translation}`;
      verseTransliteration.textContent = `Transliteration: ${randomSurah.transliteration}`;
      verseTranslation.textContent = `Translation: ${randomSurah.translation}`;
    })
    .catch((error) => {
      console.error("Error fetching Quran data:", error);
    });
});