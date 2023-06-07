const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_tMyPZVx2utMYOAWA7I0qNPNG3JEhskurPe8qUBa2wKCX1kJMQ1BlJw5EpAHBlE1T';
const API_URL_Fav = 'https://api.thecatapi.com/v1/favourites?limit=3&api_key=live_tMyPZVx2utMYOAWA7I0qNPNG3JEhskurPe8qUBa2wKCX1kJMQ1BlJw5EpAHBlE1T';


const spanError = document.getElementById('error')

async function reload() {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("Random");
    console.log(data);
    if (res.status !== 200) {
      spanError.innerHTML = "Hubo un error: " + res.status;
    } else {
      const img1 = document.getElementById('img1');
      const img2 = document.getElementById('img2');
      const img3 = document.getElementById('img3');
      
      img1.src = data[0].url;
      img2.src = data[1].url;
      img3.src = data[2].url;
    }
  }
  
async function loadFavMichis() {
  const res = await fetch(API_URL_Fav);
  const data = await res.json();
  console.log("Favoritos");
  console.log(data);
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

reload();
loadFavMichis();