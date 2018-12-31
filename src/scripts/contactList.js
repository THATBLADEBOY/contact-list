import contactCollection from "./contactCollection";

import contact from "./contact";

const contactList = {
  makeList(){
    contactCollection.getContacts()
    .then(allContacts => {
      console.log(allContacts)

      let contactDocFragment = document.createDocumentFragment();
      allContacts.forEach(contactItem => {
        let contactHtml = contact.contactBuilder(contactItem)
        contactDocFragment.appendChild(contactHtml)
      })
      
      let outputArticle = document.querySelector(".output")
      
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(contactDocFragment)
    })
  }
}

export default contactList