import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="section"
export default class extends Controller {
  static targets = [ "whyCategoryTitle",
                     "howCategoryTitle",
                     "whyFarmersSection",
                     "whyContractorsSection",
                     "howFarmersSection",
                     "howContractorsSection" ]

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

    this.toggleTitle(button.id);
  }

  toggleTitle(id) {
    const titles = [this.whyCategoryTitleTarget, this.howCategoryTitleTarget];

    titles.forEach(title => {
      if (title.innerHTML === "FARMERS") {
        title.innerHTML = "AGRI CONTRACTORS";
        title.style.backgroundColor = "var(--color-tertiary)";
      } else {
        title.innerHTML = "FARMERS";
        title.style.backgroundColor = "var(--color-primary)";
      }
    });
  };
}
