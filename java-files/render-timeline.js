fetch("data-folder/timeline.json")
  .then(res => res.json())
  .then(data => renderTimeline(data));

function renderTimeline(items) {
  const container = document.getElementById("timeline-container");
  const maxVisible = 3;
  const visibleItems = items.slice(0, maxVisible);
  const hiddenItems = items.slice(maxVisible);

  visibleItems.forEach(item => {
    container.appendChild(createTimelineItem(item));
  });

  if (hiddenItems.length > 0) {
    const seeMoreBtn = document.createElement("button");
    seeMoreBtn.textContent = "See more";
    seeMoreBtn.className = "see-more-button";

    let expanded = false;

    seeMoreBtn.onclick = () => {
      if (!expanded) {
        hiddenItems.forEach(item => {
          container.appendChild(createTimelineItem(item));
        });
        seeMoreBtn.textContent = "See less";
        expanded = true;
      } else {
        const allItems = container.querySelectorAll(".timeline-item");
        allItems.forEach((el, i) => {
          if (i >= maxVisible) el.remove();
        });
        seeMoreBtn.textContent = "See more";
        expanded = false;
      }
    };

    container.parentElement.appendChild(seeMoreBtn);
  }
}

function createTimelineItem(item) {
  const div = document.createElement("div");
  div.className = "timeline-item";
  div.innerHTML = `
    <h3>${item.date}</h3>
    <p>${item.event}</p>
  `;
  return div;
}
