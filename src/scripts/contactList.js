import contactCollection from "./contactCollection";

import contact from "./contact";

const contactList = {
  makeList(){
    contactCollection.getContacts()
    .then(allContacts => {
      console.log(allContacts)

      let contactDocFragment = document.createDocumentFragment();

      // 2. Iterate over data and build HTML for each item
      // We loop over the array of objects returned from our API and for each obect, we make a call to the foodBuilder method in the food module. This method takes a food object as an argument and returns an HTML component. Once we have that HTML, we append it to our document fragment so that it is slowly built up. By the end of the forEach loop, our document fragment contains all the HTML for all our data.
      allContacts.forEach(contactItem => {
        let contactHtml = contact.contactBuilder(contactItem)
        contactDocFragment.appendChild(contactHtml)
      })
      
      // 3. Append the HTML to the DOM
      // We get a reference to a HTML element with the class "output" and append our document fragment to that element. Because the HTML element with class "output" is already on the DOM, the HTML in the document fragment is appended to the DOM.
      let outputArticle = document.querySelector(".output")
      
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(contactDocFragment)
    })
  }
}

export default contactList