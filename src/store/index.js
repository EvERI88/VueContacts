import { defineStore } from "pinia";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: [],
    isLoggedIn: true,
    message: " ",
    category: "Все",
    filterContact: [],
  }),
  getters: {
    getCategory: (state) => state.category,
    getFilterContact: (state) => state.filterContact,
    getMessage: (state) => state.message,
    getisLoggedIn: (state) => state.isLoggedIn,
    getContacts: (state) => state.contacts,
    getContactById: (state) => (id) => {
      const filtered = JSON.parse(localStorage.getItem("contacts"));
      const contact = [];
      filtered.forEach((el) => {
        if (el.id == id) {
          contact.push(el);
        }
      });
      return contact;
    },
  },
  actions: {
    addContact(newContact) {

      if(!newContact.category){
        newContact.category = 'Все'
      }

      const sendData = (newContact) => {
        fetch("", {// путь
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
        })
          .then((response) => response.json())
          .then((data) => {console.log(data)})
          .catch((error) => console.error(error));
      };

      this.contacts.push(newContact);
      this.message = "save";
      localStorage.setItem("message", this.message);
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      
    },
    initContats(contacts) {
      this.contacts = contacts ? contacts : [];
    },
    editContact(newContact) {
      const filtered = JSON.parse(localStorage.getItem("contacts"));
      this.message = "edit";
      localStorage.setItem("message", this.message);
      for (let i = 0; i < filtered.length; i++) {
        const element = filtered[i];
        if (element.id === newContact.id) {
          filtered[i] = newContact;
          localStorage.setItem("contacts", JSON.stringify(filtered));
        }
      }
    },
    removeContact(id) {
      const filtered = JSON.parse(localStorage.getItem("contacts"));
      this.message = "remove";
      localStorage.setItem("message", this.message);
      for (let i = 0; i < filtered.length; i++) {
        const element = filtered[i];
        if (element.id === id) {
            filtered.splice(i, 1);
            localStorage.setItem("contacts", JSON.stringify(filtered));
          
        }
      }
    },
    filterContact(category) {
      const contacts = JSON.parse(localStorage.getItem("contacts"))
      if(!contacts){
        return
      }
      if (category == "Все") {
        const someUsers = contacts
        this.contacts = someUsers;
      } else {
        const someUsers = contacts.filter((item) => item.category == category);
        this.contacts = someUsers;
      }
    },
    messageShow(message) {
      message.value = localStorage.getItem("message");
      setInterval(() => {
        message.value = "";
        localStorage.removeItem("message");
      }, 3000);
    },
  },
});
