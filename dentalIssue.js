import { issues } from "./db/issues.js";

document.addEventListener("DOMContentLoaded", () => {
  const dentalIssueContainer = document.querySelector(".dental-issue-list");
  const dentalIssueTemplate = document.querySelector("#dental-issue-template");

  issues.forEach((issue) => {
    //cloning the template
    const issueTemplateClone = dentalIssueTemplate.content.cloneNode(true);
    //   edit the element
    issueTemplateClone.querySelector(".dental-issue-img").src = issue.img;
    issueTemplateClone.querySelector(".issue-title").textContent =
      issue.treatment;

    dentalIssueContainer.appendChild(issueTemplateClone);
  });
});
