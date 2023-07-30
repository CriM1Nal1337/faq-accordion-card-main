const acordeonItems = document.querySelectorAll(".acordeon");

acordeonItems.forEach((item) => {
  const acordeonShow = item.querySelector(".acordeon-show");
  const paragrafh = item.querySelector(".paragrafh");

  acordeonShow.addEventListener("click", () => {
    toggleAcordeon(paragrafh, acordeonShow);
  });
});

function toggleAcordeon(paragrafh, acordeonShow) {
  if (!paragrafh.classList.contains("hide")) {
    closeAcordeon(paragrafh, acordeonShow);
  } else {
    closeAllAcordeons();
    openAcordeon(paragrafh, acordeonShow);
  }
}

function openAcordeon(paragrafh, acordeonShow) {
  paragrafh.classList.remove("hide");
  acordeonShow.querySelector(".icon").classList.add("rotate");
}

function closeAcordeon(paragrafh, acordeonShow) {
  paragrafh.classList.add("hide");
  acordeonShow.querySelector(".icon").classList.remove("rotate");
}

function closeAllAcordeons() {
  acordeonItems.forEach((item) => {
    const paragrafh = item.querySelector(".paragrafh");
    const acordeonShow = item.querySelector(".acordeon-show");
    closeAcordeon(paragrafh, acordeonShow);
  });
}