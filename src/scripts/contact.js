const contact = {

  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article")
    
    let contactName = document.createElement("h3")
    contactName.textContent = contactObject.name

    let contactPhone = document.createElement("p")
    contactPhone.textContent = contactObject.phone

    let contactAddress = document.createElement("p")
    contactAddress.textContent = contactObject.address

    contactArticle.appendChild(contactName)
    contactArticle.appendChild(contactPhone)
    contactArticle.appendChild(contactAddress)

    return contactArticle
  }
}

export default contact
