const contactCollection = {
    getContacts() {
      return fetch("http://localhost:8088/contacts")
      .then(response => response.json())
    },

    postNewContact(newContactToSave) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactToSave)
    })
  }
  }
  
  export default contactCollection