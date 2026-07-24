// 1. Grab the trigger button and all setup pages
const editImgPageBtn = document.getElementById("editImgPageBtn");
const editImgPageBtn2 = document.getElementById("editImgPageBtn2");
const MainPageStg = document.getElementById("Main-Page-Stg");
const allStgPages = document.querySelectorAll(".Stg-Pages");

// 2. Define the reusable page switcher function
function switchSettingsPage(targetPageId) {
  allStgPages.forEach((page) => {
    if (page.id === targetPageId) {
      page.classList.remove("sPages"); // Show the target page
    } else {
      page.classList.add("sPages"); // Hide all other pages
    }
  });
}

editImgPageBtn.addEventListener("click", () => {
  switchSettingsPage("editProfile-Page-Stg");
});

editImgPageBtn2.addEventListener("click", () => {
  switchSettingsPage("editProfile-Page-Stg");
});

// Edit Profile Page Btn

const reverseBtnStg = document.getElementById("reverse-btnStg");
reverseBtnStg.addEventListener("click", () => {
  // MainPageStg.classList.remove("sPages");
  switchSettingsPage("Main-Page-Stg");
});

/* Insert An Image As Your Profile Picture */

const uploadBtn = document.getElementById("uploadBtn");
const removeBtn = document.getElementById("removeBtn");
const hiddenFileInput = document.getElementById("hiddenFileInput");
const imagePreviewContainer1 = document.getElementById("imagePreviewContainer");
let profilePhotoBox = document.querySelector(".profilePhotoBox");

// 1. Open device file picker
uploadBtn.addEventListener("click", () => {
  hiddenFileInput.click();
});

// 2. Show the selected image
hiddenFileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageObjectURL = URL.createObjectURL(file);
    imagePreviewContainer1.innerHTML = `<img id="preview" src="${imageObjectURL}" style="max-width: 100%; max-height: 300px;" />`;
  }
});

// 3. Remove the image when the remove button is clicked
removeBtn.addEventListener("click", () => {
  // Clear the visual preview container
  imagePreviewContainer1.innerHTML = "";

  // CRITICAL: Reset the file input value to empty
  hiddenFileInput.value = "";
});
