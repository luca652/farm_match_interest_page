import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="section"
export default class extends Controller {
  static targets = [ "whyCategoryTitle",
                     "howCategoryTitle",
                     "whyFarmersSection",
                     "whyContractorsSection",
                     "howFarmersSection",
                     "howContractorsSection",
                     "contractorsButton" ]

  toggleSection(event) {

    const sections = [this.whyFarmersSectionTarget,
                      this.whyContractorsSectionTarget,
                      this.howFarmersSectionTarget,
                      this.howContractorsSectionTarget ];
    const button = event.target;

    sections.forEach(section => {
      if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
      } else { section.classList.add("hidden");}
    });

    this.toggleTitle();
  }

  toggleTitle(id) {
    const titles = [this.whyCategoryTitleTarget, this.howCategoryTitleTarget];
    const button = this.contractorsButtonTarget;

    titles.forEach(title => {
      if (title.innerHTML === "FARMERS") {
        title.innerHTML = "AGRI CONTRACTORS";
        title.style.backgroundColor = "var(--color-tertiary)";
        button.style.color = "var(--color-text-header)";
        button.style.backgroundColor = "var(--color-tertiary)";
      } else {
        title.innerHTML = "FARMERS";
        title.style.backgroundColor = "var(--color-primary)";
        button.style.color = "var(--color-white)";
        button.style.backgroundColor = "var(--color-primary)";
      }
    });
  };
}
