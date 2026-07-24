// Scroll the view automatically to the newset Message!!

const chatBody = document.querySelector(".ChatBodyContainer");

function scrollToBottom() {
  if (chatBody) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// When page loads
window.addEventListener("load", () => {
  scrollToBottom();
});

// chat Page all Functionalities

const profilePage = document.getElementById("profilePage");
const profileNav = document.getElementById("profileNav");
const personNameNav = document.getElementById("personNameNav");
const closeBtnPw = document.getElementById("closeBtnPw");

// sectionPw2
/* Chat Messages History */
function openProfile() {
  profilePage.classList.remove("hidden");
}

// Close Profile
function closeProfile() {
  profilePage.classList.add("hidden");
}

// Toggle Profile
function toggleProfile() {
  profilePage.classList.toggle("hidden");
}

// Clicking name or avatar opens the profile sidebar
profileNav.addEventListener("click", openProfile);
personNameNav.addEventListener("click", openProfile);

// Search button closes the profile sidebar if open

closeBtnPw.addEventListener("click", closeProfile);

// ===================================

const searchMsgSec = document.getElementById("searchMsgSec");
const profileSearch = document.getElementById("profileSearch");
const profileSearch2 = document.getElementById("profileSearch2");
const closePart2Btn = document.getElementById("closePart2Btn");

function openPart2() {
  searchMsgSec.classList.remove("part2");
}
function closePart2() {
  searchMsgSec.classList.add("part2");
}
function togglePart2() {
  searchMsgSec.classList.toggle("part2");
}
closePart2Btn.addEventListener("click", closePart2);
profileSearch.addEventListener("click", toggleProfile);
profileSearch.addEventListener("click", togglePart2);
profileSearch2.addEventListener("click", togglePart2);

/* Chat List dialog Box */

const chatListdialogBx = document.getElementById("chatListdialogBx");
const openBtnCLD = document.getElementById("openChatListDialog");
const closeBtnCLD = document.getElementById("closeChatListDialog");
openBtnCLD.addEventListener("click", () => {
  chatListdialogBx.showModal();
});
closeBtnCLD.addEventListener("click", () => {
  chatListdialogBx.close();
});

chatListdialogBx.addEventListener("click", (event) => {
  if (event.target === chatListdialogBx) {
    chatListdialogBx.close();
  }
});

// document.getElementById("sendMsgBtn").addEventListener("click", () => {
//   console.log(formatter.format(new Date()));
// });

/* ---------------------------------------------------------------------------------------------------------------------------- */

/*   Add Msg To the Main Container and save in an array */

//  Search Page Toggle functionality
const attachBtn = document.getElementById("attachBtn");
const attachMenu = document.querySelector(".attachMenu");

attachBtn.addEventListener("click", () => {
  attachMenu.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  if (!attachMenu.contains(e.target) && !attachBtn.contains(e.target)) {
    attachMenu.classList.remove("show");
  }
});

//
const mainMoreBtn = document.getElementById("mainMoreBtn");
const mainMoreMenu = document.getElementById("mainMorebtn-Cw");
const subMoreBtn = document.getElementById("subMoreBtn");
const subMoreMenu = document.getElementById("subMorebtn-Cw");

document.addEventListener("click", () => {
  mainMoreMenu.classList.remove("displayMenuCw");
  subMoreMenu.classList.remove("displayMenuCw");
});

mainMoreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mainMoreMenu.classList.toggle("displayMenuCw");
});

subMoreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  subMoreMenu.classList.toggle("displayMenuCw");
});

mainMoreMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

subMoreMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
