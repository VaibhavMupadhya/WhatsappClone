/* Prototype */
/*
allContacts = {
  vaibhav: {
    userName: "Vaibhav.m.upadhya",
    Phone: 9972949986,
    userHistory: [1, 2, 4, 5],
  },
  aishu: {
    userName: "Vaibhav.m.upadhya",
    Phone: 9972949986,
    contactHistory: [
      {
        text: "MsgInput.value",
        // img : "Future"
        timing: "formatter.format(new Date())",
        // status : "Viewd/not"
      },
    ],
  },
};
*/
// console.log(allContacts.aishu.contactHistory[0].text);
// // allContacts.a3 = {
// //   userName: "Aishu.V.upadhya",
// //   Phone: 9972949986,
// // };
// // console.log(allContacts.a3.userName);

// const createBtn = document.getElementById("createBtn");
// createBtn.addEventListener("click", () => {});

// ==================================================================
allContacts = {
  aishu: {
    userName: "Vaibhav.m.upadhya",
    Phone: 9972949986,
    contactHistory: [
      {
        text: "MsgInput.value",
        // img : "Future"
        timing: "formatter.format(new Date())",
        // status : "Viewd/not"
      },
    ],
  },
};
// create contact

const CName = document.getElementById("CName");
const Cmobile = document.getElementById("Cmobile");
const createBtn = document.getElementById("createBtn");

// msg sending
const sendMsg = document.getElementById("sendMsg");
const sendBtn = document.getElementById("sendBtn");

createBtn.addEventListener("click", () => {
  if (CName.value && Cmobile.value) {
    createContact(CName.value, Cmobile.value);
  }
});

sendBtn.addEventListener("click", () => {
  if (sendMsg.value) {
    sendingMsg(sendMsg.value);
  }
});

function createContact(name, mobile) {
  allContacts[name] = {
    userName: name,
    Phone: mobile,
    contactHistory: [],
  };
}

function sendingMsg(txt) {
  let newText = {
    text: txt,
    time: "2:30pm",
  };

  allContacts.aishu.contactHistory.push(newText);
}
