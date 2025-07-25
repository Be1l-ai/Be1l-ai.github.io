fetch("data-folder/bucket-list.json")
  .then(res => res.json())
  .then(data => renderBucketList(data));

function renderBucketList(items) {
  const container = document.getElementById("bucket-list-container");

  const maxVisible = 3; // Show this many initially
  const visibleItems = items.slice(0, maxVisible);

  // Render initial visible items
  visibleItems.forEach((item, i) => {
    container.appendChild(createBucketItem(item, i));
  });

}

function createBucketItem(item, i) {
  const div = document.createElement("div");
  div.className = "bucket-list-item";
  div.innerHTML = `
    <div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
    <div class="checkbox-wrapper">
      <input type="checkbox" class="check" id="check-${i}">
      <label for="check-${i}" class="label">
        <svg width="25" height="25" viewBox="0 0 95 95">
          <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
          <g transform="translate(0,-952.36222)">
            <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
              stroke="black" stroke-width="3" fill="none" class="path1"></path>
          </g>
        </svg>
      </label>
    </div>
  `;
  return div;
}
