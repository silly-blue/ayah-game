document.getElementById("rollButton").addEventListener("click", rollRandomVerse);

async function rollRandomVerse() {
    // Load the quran_en.json data
    const response = await fetch("quran_en.json");
    const quranData = await response.json();

    // Get random Surah
    const randomSurahIndex = Math.floor(Math.random() * quranData.length);
    const randomSurah = quranData[randomSurahIndex];
    const surahName = randomSurah.name;
    const chapterNumber = randomSurah.id;

    // Get random Ayah (verse) from the selected Surah
    const randomAyahIndex = Math.floor(Math.random() * randomSurah.verses.length);
    const randomAyah = randomSurah.verses[randomAyahIndex];
    const verseText = randomAyah.text;
    const verseMeaning = randomAyah.translation; // Use 'translation' for meaning

    // Get the transliteration and translation for the Surah
    const transliteration = randomSurah.transliteration;
    const translation = randomSurah.translation;

    // Update HTML with the selected verse details
    document.getElementById("surahName").textContent = `Surah: ${surahName}`;
    document.getElementById("verseText").textContent = `Verse: ${verseText}`;
    document.getElementById("verseMeaning").textContent = `Meaning: ${verseMeaning}`;
    document.getElementById("chapterNumber").textContent = `Chapter Number: ${chapterNumber}`;
    document.getElementById("verseTransliteration").textContent = `Transliteration: ${transliteration}`;
    document.getElementById("verseTranslation").textContent = `Translation: ${translation}`;
}
