// Get all HTML Elements

const ChatBodyContainer = document.getElementById("ChatBodyContainerId");
const sendMsgBtn = document.getElementById("sendMsgBtn");
const MsgInput = document.getElementById("MsgInput");
const clearChatBtn = document.getElementById("clearChat");
// Load all chat's History

let contact1 = JSON.parse(localStorage.getItem("messageHistory")) || [];

for (let i = 0; i < contact1.length; i++) {
  let newMsg = document.createElement("div");
  newMsg.classList = "sentMsgBox";
  newMsg.innerHTML = `
            <div class="sentMsgBox BothMsgBox">
                  <div class="sentMsg BothMsg">
                    <p>${contact1[i].text}</p>
                    <div class="timingSeenBx">
                      <span class="sentTime">${contact1[i].timing}</span>
                      <div class="seen">
                        <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
            `;
  ChatBodyContainer.appendChild(newMsg);
}

// Sent Time recorder Function
const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

// Send a New Message and add the sent Msg to History(Array)

sendMsgBtn.addEventListener("click", () => {
  if (MsgInput.value != "") {
    let newMsg = {
      text: MsgInput.value,
      // img : "Future"
      timing: formatter.format(new Date()),
      // status : "Viewd/not"
    };
    contact1.push(newMsg);
    console.log(contact1);
    // save contact details to local storage
    localStorage.setItem("messageHistory", JSON.stringify(contact1));

    let newMsgTag = document.createElement("div");
    newMsgTag.classList = "sentMsgBox";
    newMsgTag.innerHTML = `
              <div class="sentMsgBox BothMsgBox">
                  <div class="sentMsg BothMsg">
                    <p>${newMsg.text}</p>
                    <div class="timingSeenBx">
                      <span class="sentTime">${newMsg.timing}</span>
                      <div class="seen">
                        <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
    
            `;
    ChatBodyContainer.appendChild(newMsgTag);
    ChatBodyContainer.scrollTop = ChatBodyContainer.scrollHeight;
    MsgInput.value = "";
  }
});

// Clear All Chat Or Delete All chat History

const clearChatDialog = document.getElementById("clearChatDialog");

clearChatBtn.addEventListener("click", () => {
  clearChatDialog.showModal();
});
// close
cancelClearBtn.addEventListener("click", () => {
  clearChatDialog.close();
});
//

confirmClearBtn.addEventListener("click", () => {
  // Clear chat logic here
  contact1 = [];
  localStorage.setItem("messageHistory", JSON.stringify(contact1));
  location.reload();
  clearChatDialog.close();
});
