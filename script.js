const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (!url) return;

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de usuario";
  img.addEventListener("click", () => selectImage(img));
  gallery.appendChild(img);
  imageUrlInput.value = "";
});

deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  }
});

function selectImage(imgElement) {
  if (selectedImage) {
    selectedImage.classList.remove("selected");
  }
  selectedImage = imgElement;
  selectedImage.classList.add("selected");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Delete" && selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  }
});
