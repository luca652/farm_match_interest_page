import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="section"
export default class extends Controller {
  static targets = [ "whyFarmersSection",
                     "whyContractorsSection",
                     "howFarmersSection",
                     "howContractorsSection",
                     "farmersButton",
                     "contractorsButton",
                     "sectionBackground"]

  selectSection(event) {
    const buttons =  [this.farmersButtonTarget,
                      this.contractorsButtonTarget]

    buttons.forEach(button => {
      if (button !== event.currentTarget) {
        button.classList.remove("btn--tertiary");
        button.classList.add("btn--flip");
      } else {
        button.classList.add("btn--tertiary");
        button.classList.remove("bnt--flip");
      }
    })

    this.loadSection(event.currentTarget.id)
  }

  loadSection(id) {
    const whySections = [this.whyFarmersSectionTarget,
                         this.whyContractorsSectionTarget ];
    const howSections = [this.howFarmersSectionTarget,
                         this.howContractorsSectionTarget];
    const background = this.sectionBackgroundTarget;

    whySections.forEach((section) => {
      if (section.id !== `why-${id}`) {
        section.classList.add("hidden");
      } else {
        section.classList.remove("hidden");
      }
    })

    howSections.forEach((section) => {
      if (section.id !== `how-${id}`) {
        section.classList.add("hidden");
      } else {
        section.classList.remove("hidden");
      }
    })

    if (id === "contractors") {
      background.classList.add("why-sign-up-contractors");
    } else {
      background.classList.remove("why-sign-up-contractors");
    }
  }
}
