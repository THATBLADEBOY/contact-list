const contactCollection = {
    getContacts() {
      return fetch("http://localhost:8088/contacts")
      .then(response => response.json())
    },

    // This method will make a HTTP POST request to the API. Because a POST has a body with the data for the new item you want created, this method will take one argument which will be the object for the new food item we want to add to our collection in the API.
    postNewContact(newContactToSave) {
    // We want to return this fetch request so that at the point it is called, we can take advantage of the asynchronous nature of promises to wait for this to be done before getting the latest data and rerendering the DOM.
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