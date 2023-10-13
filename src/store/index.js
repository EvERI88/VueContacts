import { defineStore } from "pinia";

export const useContactsStore = defineStore("contacts", {
  state: () => ({contacts:[
    {
      id: Date.now(),
      name: "Василий",
      phone: "+7(999)-999-99-99",
      email: "tesetmail@mail.ru",
      registrationDate: new Date().toDateString(),
    },
    {
      id: Date.now(),
      name: "Сергей",
      phone: "+7(888)-888-88-88",
      email: "333tesetmail@mail.ru",
      registrationDate: new Date().toDateString(),
    },
    {
      id: Date.now(),
      name: "Петр",
      phone: "+7(777)-777-77-77",
      email: "444tesetmail@mail.ru",
      registrationDate: new Date().toDateString(),
    }
  ]},
  {
    contact:[]
  }),
  getters: {
    getContacts: (state) => state.contacts,
    getContactById: (state) => (id) => {
      return state.contacts.find( x=> x.id === id)
  }
  },
  actions: {
    addContact(contacts) {
      if(contacts)
      this.contacts.push(contacts);
      localStorage.setItem('contacts', JSON.stringify(this.contacts))
    },
    initContats(contacts) {
      this.contacts = contacts ?? [];
    },
    showLocal(contacts){
      if (contacts) {
        this.contacts = JSON.parse(localStorage.getItem("contacts"));
      } else {
        this.contacts = this.getContacts;
      }
    },
  },
});
