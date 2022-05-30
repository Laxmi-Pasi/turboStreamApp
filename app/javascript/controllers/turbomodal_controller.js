import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodal"
export default class extends Controller {
  // connect() {
  //   console.log("connected to turbomodal");
  // }

  //submit end action method for new post 
  submitEnd(e){
    // console.log(e.detail.success)
    if(e.detail.success){
      this.HideModal()
    }
  }

  // to hide modal while form submitted successfully

  HideModal()
  {
    this.element.remove();
  }
}
