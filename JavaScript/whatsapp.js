// Menu Button functionality

const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close all menus first
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("show");
    });

    // Open the clicked button's menu
    const menuId = btn.dataset.menu;
    const menu = document.getElementById(menuId);

    menu.classList.toggle("show");
  });
});

// Close all menus when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.remove("show");
  });
});

//=========================================================================================

// Switching Through All main pages (-btn) functionality

const buttons = document.querySelectorAll(".icon-button");
const containers = document.querySelectorAll(".all");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // media-btn opens a dialog separately via onclick, skip page switching for it
    const targetId = button.getAttribute("data-target");
    if (!targetId || targetId === "container-media") return;
    containers.forEach((container) => container.classList.remove("active"));
    const targetContainer = document.getElementById(targetId);
    if (targetContainer) {
      targetContainer.classList.add("active");
    }
  });
});

//=========================================================================================

function newPage(btn, chatContainer) {
  btn.addEventListener("click", () => {
    const allContainers = document.querySelectorAll(".all");
    allContainers.forEach((layer) => layer.classList.remove("active"));
    chatContainer.classList.add("active");
  });
}

// New chat-button functionality

const chatBtn = document.getElementById("newChat-btn");
const newChatContainer = document.getElementById("container-newChat");
newPage(chatBtn, newChatContainer);

// return button
const reverseBtn = document.getElementById("reverse-btn");
const containerMsgPage = document.getElementById("container-msg");
newPage(reverseBtn, containerMsgPage);

//  New contact Button Functionality

const newContactBtn = document.getElementById("new-contact");
const newContactPage = document.getElementById("container-newContactPage");
newPage(newContactBtn, newContactPage);

const newContactBtn2 = document.getElementById("new-contactEp");
newPage(newContactBtn2, newContactPage);

// return from contact page opened via empty state panel → go back to msg view
// return from contact page opened via new chat → go back to new chat
// We track the caller so the back button goes to the right place
let contactOpenedFrom = newChatContainer;

document.getElementById("new-contact").addEventListener("click", () => {
  contactOpenedFrom = newChatContainer;
});
newContactBtn2.addEventListener("click", () => {
  contactOpenedFrom = containerMsgPage;
});

// return
const contactReverseBtn = document.getElementById("contact-reverse-btn");
contactReverseBtn.addEventListener("click", () => {
  const allContainers = document.querySelectorAll(".all");
  allContainers.forEach((layer) => layer.classList.remove("active"));
  contactOpenedFrom.classList.add("active");
});

// New Group-Button functionality
const groupBtn = document.getElementById("newGroup-btn");
const newGroupContainer = document.getElementById("container-newGroup");
newPage(groupBtn, newGroupContainer);

/* Not available right now!{
  
// New List-Button Functionality

const ListBtn = document.getElementById("newList-btn");
const newListContainer = document.getElementById("container-newList");
newPage(ListBtn, newListContainer); 

}*/

// New Call-Button Functionality
const callBtn = document.getElementById("newCall-btn");
const newCallContainer = document.getElementById("container-newCall");
newPage(callBtn, newCallContainer);

// Status Privacy Button Functionality

const SPrivacyBtn = document.getElementById("SPrivacyBtn");
const containerSPrivacy = document.getElementById("container-statusPrivacy");
newPage(SPrivacyBtn, containerSPrivacy);

// Media Dialog Functionality

const dialog = document.getElementById("newChatDialog");
const button = document.getElementById("media-btn");

function showLoginDialog() {
  dialog.showModal();
}

function closeLoginDialog() {
  dialog.close();
}

//======================================================================================================================================================================================

/*  New Contact Functionality  */

// The Process of storing contact details in storage is starts here!

let UserName1Nc = document.getElementById("firstName-NC");
let UserName2Nc = document.getElementById("lastName-NC");
let phoneNoNc = document.getElementById("phoneNo-NC");
const submitBtnNC = document.getElementById("submit-btn-NC");
const cancelBtnNC = document.getElementById("clear-btn-NC");

// get the saved all chats from local storage

let contactList = JSON.parse(localStorage.getItem("chats")) || [];

submitBtnNC.addEventListener("click", () => {
  if (
    UserName1Nc.value !== "" &&
    UserName2Nc.value !== "" &&
    phoneNoNc.value !== ""
  ) {
    let newContact = {
      Fname: UserName1Nc.value,
      Lname: UserName2Nc.value,
      phone: phoneNoNc.value,
    };
    contactList.push(newContact);
    console.log(contactList);
    // save contact details to local storage
    localStorage.setItem("chats", JSON.stringify(contactList));
    location.reload();
  }
});

cancelBtnNC.addEventListener("click", () => {
  UserName1Nc.value = "";
  UserName2Nc.value = "";
  phoneNoNc.value = "";
});

// The Process of storing contact details in storage is ends here!

let allChats = document.getElementById("All-chats");

for (let i = 0; i < contactList.length; i++) {
  let newChat = document.createElement("div");
  newChat.classList = "chats-box";
  newChat.innerHTML = `
          <div class="chat">
              <div class="chat-profile">
                <img src="/imgs/profile-user-svgrepo-com.svg" alt="profilePhoto" />
              </div>
              <div class="chat-name-box">
                <h3>${contactList[i].Fname + " " + contactList[i].Lname}</h3>
                <p>Hello...</p>
              </div>
              <div class="chat-silent-pin-box">
                <div class="recent-time">yesterday</div>
              </div>
          </div>
            `;
  allChats.appendChild(newChat);
}
