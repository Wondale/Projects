const baseURL = "https://picsum.photos/v2/list?limit=100";

const Container = document.querySelector(".container");
const Card = document.querySelector(".card");
const Button = document.querySelector("#button");

const fetchPicsumPhotos = async () => {
  try {
    const response = await fetch(baseURL);
    const photos = await response.json();
    const randomPhoto = await photos[Math.floor(Math.random() * photos.length)];
    const photoUI = `
          <div class="card">
            <img src="${randomPhoto.download_url}" alter="picsum photo" loading="lazy">
            <h2><span>Author name :</span> ${randomPhoto.author}</h2>
            <h4>Photo id : ${randomPhoto.id}</h4>
          </div>
        `;
    Container.innerHTML = photoUI;
    Card.innerHTML = photoUI;
  } catch (error) {
    console.log(error.message);
  }
};

fetchPicsumPhotos();
window.addEventListener("load", fetchPicsumPhotos);
Button.addEventListener("click", fetchPicsumPhotos);
