const img = document.querySelector('.img');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    img.src = data.message;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
});

