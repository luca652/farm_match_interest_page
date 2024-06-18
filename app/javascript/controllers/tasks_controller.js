import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tasks"
export default class extends Controller {
  static targets = ["tasksHeader", "Agri", "Forestry", "Plant", "Farm"]

  showRelevantTasks(event) {
    const header = this.tasksHeaderTarget
    const agriTasks = this.AgriTarget
    const forestryTasks = this.ForestryTarget
    const plantTasks = this.PlantTarget
    const farmTasks = this.FarmTarget
    const allCategories = [header, agriTasks, forestryTasks, plantTasks, farmTasks]
    const role = event.currentTarget.value

    allCategories.forEach((category) => {
      category.classList.add("hidden");
    })

    if (role === "Farmer")
      allCategories.forEach((category) => {
        category.classList.toggle("hidden");
      })
    else if (role === "Agri Contractor") {
      header.classList.remove("hidden");
      agriTasks.classList.remove("hidden");
      forestryTasks.classList.remove("hidden");
      plantTasks.classList.remove("hidden");
    }
    else if (role === "Farm Worker") {
      farmTasks.classList.remove("hidden");
    } else {
      allCategories.forEach((category) => {
        category.classList.add("hidden");
      })
    }
  }
}
