import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
      console.log("debounce connected");
    //this.element.textContent = "Hello World!"
  }

  static targets = ["form"]

  search(){
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() =>{
      this.formTarget.requestSubmit()
    }, 500)
  }
}