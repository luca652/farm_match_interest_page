import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = ["navbarLinks", "burgerButton"]

  connect() {
    this.navbarToggle();
  }

  navbarToggle() {
    const navbarLinks = this.navbarLinksTarget;

    if (window.innerWidth < 1024) {
      navbarLinks.classList.add("navbar__options--mobile");
      navbarLinks.classList.add("hidden");
    } else {
      navbarLinks.classList.remove("navbar__options--mobile");
      navbarLinks.classList.remove("hidden");
    }
  }
}
