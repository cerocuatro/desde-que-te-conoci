const verses = [
    "veo un atardecer de colores",
    "y me recuerda tu nombre",
    "el solcito caliente en la cara",
    "y tu sonrisa perfecta",
    "cualquier canción de amor",
    "y tú mirándome a los ojos",
    "todos los te quiero que te dije",
    "y los que me quedan por decir"
];

const emojis = document.querySelectorAll(".emoji");
const verseContainer = document.getElementById('verse-container');
const verse = document.getElementById('verse');

emojis.forEach((emoji, index) => {
    emoji.addEventListener('mouseover', () => {
        verse.innerText = verses[index]; // Muestra el verso correspondiente al índice del emoji
        verseContainer.style.display = 'flex';
    });

    emoji.addEventListener('mouseout', () => {
        verseContainer.style.display = 'none'; // Oculta el verso al quitar el cursor
    });
});