import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {

  //for view/home/index
  static targets = ["dropdownContent","openButton", "closeButton", "active"]

  //to add values

  static values = { open: Boolean }
  connect() {
    if (this.openValue){
      this.openDropDown()
      // debugger
      // this.activeTarget.classList.add("bgColor")
    }else{
      // console.log(this.activeTarget.value)
      this.closeDropDown()
    }
    // this.dropdownContentTarget.hidden = true
    // this.closeButtonTarget.hidden = true
    // console.log("connected to dropdown")
  }

  //when click on open drop down button
  openDropDown(){
    this.dropdownContentTarget.hidden = false
    try{
      this.closeButtonTarget.hidden = false
      this.openButtonTarget.hidden = true
    } catch{}
    try{
      this.activeTarget.classList.add("bgColor")
    }catch{}
  }

  //when click on close drop down button
  closeDropDown(){
    this.dropdownContentTarget.hidden = true
    try{
      this.closeButtonTarget.hidden = true
      this.openButtonTarget.hidden = false
    } catch{}
    try{
      this.activeTarget.classList.remove("bgColor")
    }catch{}
  }

  //toggle dropdown
  toggleDropdown(){
    if(this.dropdownContentTarget.hidden == true){
      this.openDropDown()
    }else{  
      this.closeDropDown()
    }
  }
}
