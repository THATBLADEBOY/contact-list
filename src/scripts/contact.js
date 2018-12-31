//Given a single food object, this component builds out the HTML and returns it
const contact = {

  // This method takes one argument, which we expect to be an object that represents a food and will have the following structure:
  // {
  //   name: "name value",
  //   expiration: "expiration value",
  //   type: "type value"
  // }

  // Given this object, the method will build HTML elements and append them appropriately so that it will look like this:
  // <article>
  //   <h3>name value</h3>
  //   <p>expiration value</p>
  //   <p>type value</p>
  // </article>

  // This HTML is then returned to the point from where this method was called
  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article")
    
    let contactName = document.createElement("h3")
    contactName.textContent = contactObject.name

    let contactPhone = document.createElement("p")
    contactPhone.textContent = contactObject.phone

    let contactAddress = document.createElement("p")
    contactAddress.textContent = contactObject.type

    contactArticle.appendChild(contactName)
    contactArticle.appendChild(contactPhone)
    contactArticle.appendChild(contactAddress)

    return contactArticle
  }
}

export default contact
