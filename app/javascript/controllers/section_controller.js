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

    console.log(buttons);
    buttons.forEach(button => {
      const selectedCategory = event.currentTarget.dataset.category;
      const buttonCategory = button.dataset.category;

      if (buttonCategory !== selectedCategory) {
        button.classList.remove(`tab--${buttonCategory}--selected`);
        // button.classList.add(`tab--${selectedCategory}--selected`);
      } else {
        button.classList.add(`tab--${selectedCategory}--selected`);
        // button.classList.remove("tab--farmers--selected");
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
      background.classList.add("benefits-of-joining-contractors");
    } else {
      background.classList.remove("benefits-of-joining-contractors");
    }
  }
}
