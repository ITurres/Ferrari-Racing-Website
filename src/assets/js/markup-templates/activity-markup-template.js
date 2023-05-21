function createActivityMarkupTemplate(activity) {
  return `<div
    class="activity--wrapper d-flex align-items-center justify-content-between"
  >
    <i class="activity-icon ${activity.faClass}"></i>
    <span class="activity-name">${activity.name}</span>
    <p class="activity-about">${activity.about}</p>
  </div>`;
}

export default createActivityMarkupTemplate;
