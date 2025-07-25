// darkart.js
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".artwork-item img");

    galleryItems.forEach(img => {
        img.addEventListener("click", () => {
            showModal(img.src, img.alt);
        });
    });

    const showModal = (src, alt) => {
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<img src="${src}" alt="${alt}">`;
        document.body.appendChild(modal);

        modal.addEventListener("click", () => {
            modal.remove();
        });

        requestAnimationFrame(() => {
            modal.style.display = "flex";
        });
    };
});
