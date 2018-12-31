import contactCollection from "./contactCollection"
import contactList from "./contactList"

const contactForm = {

  createAndAppendForm () {
 
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Add a Contact! :)"

    let contactNameField = document.createElement("fieldset")

    let contactNameLabel = document.createElement("label")
    contactNameLabel.textContent = "Name"
    contactNameLabel.setAttribute("for", "contact__name")
    let contactNameInput = document.createElement("input")
    contactNameInput.setAttribute("id", "contact__name")
    contactNameInput.setAttribute("name", "contact__name")

    contactNameField.appendChild(contactNameLabel)
    contactNameField.appendChild(contactNameInput)

    let contactAddressField = document.createElement("fieldset")

    let contactAddressLabel = document.createElement("label")
    contactAddressLabel.textContent = "Address"
    contactAddressLabel.setAttribute("for", "contact__Address")
    let contactAddressInput = document.createElement("input")
    contactAddressInput.setAttribute("id", "contact__Address")
    contactAddressInput.setAttribute("name", "contact__Address")

    contactAddressField.appendChild(contactAddressLabel)
    contactAddressField.appendChild(contactAddressInput)

    let contactPhoneField = document.createElement("fieldset")

    let contactPhoneLabel = document.createElement("label")
    contactPhoneLabel.textContent = "Phone"
    contactPhoneLabel.setAttribute("for", "contact__Phone")
    let contactPhoneInput = document.createElement("input")
    contactPhoneInput.setAttribute("id", "contact__Phone")
    contactPhoneInput.setAttribute("name", "contact__Phone")

    contactPhoneField.appendChild(contactPhoneLabel)
    contactPhoneField.appendChild(contactPhoneInput)

    let submitButton = document.createElement("button")
    submitButton.textContent = "Add contact"
    submitButton.setAttribute("class", "contact__save")


    submitButton.addEventListener("click", this.handleAddNewcontact)


    let contactFormFragment = document.createDocumentFragment()
    contactFormFragment.appendChild(formHeader)
    contactFormFragment.appendChild(contactNameField)
    contactFormFragment.appendChild(contactAddressField)
    contactFormFragment.appendChild(contactPhoneField)
    contactFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector(".form")
    formArticle.appendChild(contactFormFragment)

  },
  
  handleAddNewcontact (event) {
    let inputcontactName = document.querySelector("#contact__name").value
    let inputcontactAddress = document.querySelector("#contact__Address").value
    let inputcontactPhone = document.querySelector("#contact__Phone").value


    let newcontact = {
      name: inputcontactName,
      address: inputcontactAddress,
      phone: inputcontactPhone
    }

    contactCollection.postNewContact(newcontact)
    .then(response => {
      contactList.makeList()
    })
  }
}

export default contactForm