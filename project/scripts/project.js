//Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last update date
document.getElementById("lastModified").innerHTML = document.lastModified;

//Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav-burguer-view");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


//Array of Artist Objects
const artists = [
  {
    artistName: "Twenty One Pilots",
    location: "USA",
    onTour: "No",
    comment: "The show was amazing!",
    imageUrl:
      "https://www.twentyonepilots.com/sites/g/files/g2000020241/files/2025-06/desktopHeaderBg_0.jpg"
  },
  {
    artistName: "Adele",
    location: "UK",
    onTour: "Yes",
    comment: "Can't wait to see her live again!",
    imageUrl:
      "https://www.rollingstone.com/wp-content/uploads/2023/06/Weekends-with-Adele-tickets-e1697840693866.jpg"
  },
  {
    artistName: "Halsey",
    location: "USA",
    onTour: "Yes",
    comment: "Her concerts are always a blast!",
    imageUrl:
      "https://www.mlive.com/resizer/v2/PDNSQILCNNHS5AEZWSUG2PPKBQ.jpg?auth=39882d802782c2fc64a9ae4dc02f5eabb95890ea06962d2fb5c0879a222ce2dc&width=1280&smart=true&quality=90"
  },
  {
    artistName: "Balu Brigada",
    location: "New Zealand",
    onTour: "No",
    comment: "A unique and captivating performance!",
    imageUrl:
      "https://loyolaphoenix.com/wp-content/uploads/2024/10/AshleyWilson-BB-4-scaled.jpg"
  },


];


//Create Artist cards
createArtistCard(artists);


//Compute artirsts cards
function createArtistCard() {
  document.querySelector(".container-artists").innerHTML = "";
  artists.forEach(artist => {
    let card = document.createElement("section");
    let artistName = document.createElement("h3");
    let location = document.createElement("p");
    let onTour = document.createElement("p");
    let comment = document.createElement("p");
    let img = document.createElement("img");

    artistName.textContent = artist.artistName;
    location.innerHTML = `<span class="label">Location: </span>${artist.location}`;
    onTour.innerHTML = `<span class="label">On tour:</span> ${artist.onTour}`;
    comment.innerHTML = `<span class="label">Comment:</span> ${artist.comment}`;
    img.setAttribute("src", artist.imageUrl);
    img.setAttribute("alt", '${artist.artistName} Concert');
    img.setAttribute("loading", "lazy");

    card.appendChild(artistName);
    card.appendChild(location);
    card.appendChild(onTour);
    card.appendChild(comment);
    card.appendChild(img);
    document.querySelector(".container-artists").appendChild(card);
  });
}

//Array for artists
const genres = [
    {
        id: "gr-001",
        name: "Pop",
    },
    {
        id: "gr-002",
        name: "Rock",
    },
    {
        id: "gr-003",
        name: "Jazz",
    },
    {
        id: "gr-004",
        name: "Classical",
    },
    {
        id: "gr-005",
        name: "Hip-Hop",
    },
    
];

const genreSelect = document.getElementById("genre");
//Populate genre dropdown
genres.forEach(genre => {
    let option = document.createElement("option");
    option.value = genre.id;
    option.textContent = genre.name;
    genreSelect.appendChild(option);
});

//Counter for reviews
document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("reviewCount") || 0;

  count = parseInt(count) + 1;

  localStorage.setItem("reviewCount", count);

  const counterElement = document.getElementById("reviewCount");
  if (counterElement) {
    counterElement.textContent = count;
  }
});
