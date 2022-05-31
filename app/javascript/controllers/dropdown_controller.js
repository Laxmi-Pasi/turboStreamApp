import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {

  //for view/home/index
  static targets = ["dropdownContent", ,"openButton", "closeButton"]

  connect() {
    this.dropdownContentTarget.hidden = true
    this.closeButtonTarget.hidden = true
    // console.log("connected to dropdown")
  }

  //when click on open drop down button
  openDropDown(){
    this.dropdownContentTarget.hidden = false
    this.closeButtonTarget.hidden = false
    this.openButtonTarget.hidden = true
  }

  //when click on close drop down button
  closeDropDown(){
    this.closeButtonTarget.hidden = true
    this.dropdownContentTarget.hidden = true
    this.openButtonTarget.hidden = false
  }
}
