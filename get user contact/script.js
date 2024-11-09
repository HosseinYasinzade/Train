const user1 = {
  name: "Hossein",
  contact: {
    phone: "09992223344",
  },
};

const user2 = {
  name: "Hassan",
};

function getUserContact(user) {
  if (user.contact && user.contact.phone) {
    return user.contact.phone;
  } else {
    return "Phone number not defied";
  }
}

console.log(getUserContact(user1));
console.log(getUserContact(user2));
