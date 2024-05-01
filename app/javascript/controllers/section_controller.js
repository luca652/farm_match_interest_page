import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="section"
export default class extends Controller {
  static targets = ["farmersButton", "contractorsButton", "farmersSection", "contractorsSection"]

  connect() {
    console.log("Eccomi!");
  }

  activateSection(event) {

    const buttons = [this.farmersButtonTarget, this.contractorsButtonTarget]

    buttons.forEach(button => {
      if (button !== event.currentTarget) {
        button.classList.remove("btn--active");
      }
      else {
        button.classList.add("btn--active");
      }
    });

    this.loadContent(event.currentTarget.id);
  }

  loadContent(id) {
    const sections = [this.farmersSectionTarget, this.contractorsSectionTarget]

    sections.forEach(section => {
      if (section.id !== `${id}-section`) {
        section.classList.add("hidden");
      } else { section.classList.remove("hidden");}
    });
  }
}
