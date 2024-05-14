import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="close-notice"
export default class extends Controller {
  close() {
    this.element.remove();
  }
}
