const movies = [
  {
    title: "O Senhor dos Anéis",
    image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    description: "Uma jornada épica pela Terra Média."
  },
  {
    title: "Interestelar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "Exploração espacial em busca de um novo lar."
  },
  {
    title: "Batman: O Cavaleiro das Trevas",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "O embate entre o Batman e o Coringa."
  }
];

const container = document.getElementById('movie-container');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.classList.add('movie-card');

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-info">
      <div class="movie-title">${movie.title}</div>
      <div class="movie-description">${movie.description}</div>
    </div>
  `;

  container.appendChild(card);
});
