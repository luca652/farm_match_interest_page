import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="section"
export default class extends Controller {
  static targets = [ "whyFarmersSection",
                     "whyContractorsSection",
                     "howFarmersSection",
                     "howContractorsSection",
                     "farmersButton",
                     "contractorsButton",
                     "sectionBackground",
                     "circle"]

  selectSection(event) {
    const buttons =  [...this.farmersButtonTargets,
                      ...this.contractorsButtonTargets]

    buttons.forEach(button => {

      if (button.dataset.category !== event.currentTarget.dataset.category) {
        button.classList.remove("btn--tertiary");
        button.classList.add("btn--flip");
      } else {
        button.classList.add("btn--tertiary");
        button.classList.remove("btn--flip");
      }
    })

    this.loadSection(event.currentTarget.dataset.category)
  }

  loadSection(category) {
    const whySections = [this.whyFarmersSectionTarget,
                         this.whyContractorsSectionTarget ];
    const howSections = [this.howFarmersSectionTarget,
                         this.howContractorsSectionTarget];
    const background = this.sectionBackgroundTarget;
    const circles = this.circleTargets;

    whySections.forEach((section) => {
      if (section.id !== `why-${category}`) {
        section.classList.add("hidden");
      } else {
        section.classList.remove("hidden");
      }
    })

    howSections.forEach((section) => {
      if (section.id !== `how-${category}`) {
        section.classList.add("hidden");
      } else {
        section.classList.remove("hidden");
      }
    })

    if (category === "contractors") {
      background.classList.add("why-sign-up-contractors");
    } else {
      background.classList.remove("why-sign-up-contractors");
    }
  }
}
