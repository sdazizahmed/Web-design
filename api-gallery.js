const gallery = document.getElementById("apiGallery");

async function loadImages() {
  try {
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
    const data = await response.json();

    data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.download_url;
      img.alt = `Photo by ${item.author}`;
      gallery.appendChild(img);
    });
  } catch (err) {
    console.error("Error loading images", err);
    gallery.textContent = "Failed to load images.";
  }
}

loadImages();
