import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {

  static targets = ["navbarLinks", "burgerButton"]

  connect() {
    this.navbarToggle();
  }

  navbarToggle() {
    const navbarLinks = this.navbarLinksTarget;

    if (window.innerWidth < 930) {
      navbarLinks.classList.add("navbar__options--mobile");
      navbarLinks.classList.add("hidden");
    } else {
      navbarLinks.classList.remove("navbar__options--mobile");
      navbarLinks.classList.remove("hidden");
    }
  }

  menuToggle() {
    const navbarLinks = this.navbarLinksTarget;
    if (navbarLinks.classList.contains("hidden")) {
      navbarLinks.classList.remove("hidden");
    } else {
      navbarLinks.classList.add("hidden");
    }
  }
}
