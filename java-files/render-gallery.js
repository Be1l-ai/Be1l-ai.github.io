fetch("data-folder/gallery.json")
  .then(res => res.json())
  .then(data => renderGallery(data));

function renderGallery(items) {
  const container = document.getElementById("gallery-container");
  const maxVisible = 3;
  const visibleItems = items.slice(0, maxVisible);

  visibleItems.forEach(item => {
    container.appendChild(createGalleryCard(item));
  });

}

function createGalleryCard(item) {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `
    <div class="cover">
      <p>${item.cover}</p>
    </div>
    <div class="inside">
      <img src="${item.image}" alt="Gallery Image">
    </div>
  `;
  return div;
}
