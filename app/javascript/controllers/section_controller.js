import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="section"
export default class extends Controller {
  static targets = [ "whyFarmersSection",
                     "whyContractorsSection",
                     "howFarmersSection",
                     "howContractorsSection",
                     "farmersButton",
                     "contractorsButton",
                     "benefitsBackground",
                     "howItWorksBackground",
                     "circle"]

  selectSection(event) {
    const buttons =  [...this.farmersButtonTargets,
                      ...this.contractorsButtonTargets]

    buttons.forEach(button => {
      const selectedCategory = event.currentTarget.dataset.category;
      const buttonCategory = button.dataset.category;

      if (buttonCategory !== selectedCategory) {
        button.classList.remove(`tab--${buttonCategory}--selected`);
      } else {
        button.classList.add(`tab--${selectedCategory}--selected`);
      }
    })

    this.loadSection(event.currentTarget.dataset.category)
  }

  loadSection(category) {
    const whySections = [this.whyFarmersSectionTarget,
                         this.whyContractorsSectionTarget ];
    const howSections = [this.howFarmersSectionTarget,
                         this.howContractorsSectionTarget];
    const backgrounds = [this.benefitsBackgroundTarget,
                         this.howItWorksBackgroundTarget];
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


    backgrounds.forEach((background) => {
      if (category === "contractors") {
        background.classList.add("yellow-background");
      } else {
        background.classList.remove("yellow-background");
      }
    });
  }
}
