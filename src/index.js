import "./styles.css";
import LinkImage from "./icons/open-in-new.svg";

class ProjectCard {
  constructor(desc, title, color) {
    this.desc = desc;
    this.title = title;
    this.color = color;
  }

  build() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("project-card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("project-image");
    cardImage.style.backgroundColor = this.color;

    const cardDescDiv = document.createElement("div");
    cardDescDiv.classList.add("project-description-container");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("project-title");
    cardTitle.textContent = this.title;

    const cardDesc = document.createElement("p");
    cardDesc.classList.add("project-description");
    cardDesc.textContent = this.desc;

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container", "project-link");

    const githubLink = document.createElement("a");
    githubLink.title = "GitHub Repository";
    githubLink.href = "https://github.com/nickross999";
    githubLink.target = "_blank";
    const githubPic = new Image();
    githubPic.src =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    const githubIcon = document.createElement("img");
    githubIcon.classList.add("github", "icon");
    githubIcon.src = githubPic.src;
    githubLink.appendChild(githubIcon);

    const siteLink = document.createElement("a");
    siteLink.title = "Link";
    siteLink.href = "https://www.google.com";
    siteLink.target = "_blank";
    const sitePic = new Image();
    sitePic.src = LinkImage;
    const siteIcon = document.createElement("img");
    siteIcon.classList.add("site", "icon");
    siteIcon.src = sitePic.src;
    siteLink.appendChild(siteIcon);

    linkContainer.appendChild(githubLink);
    linkContainer.appendChild(siteLink);

    cardDescDiv.appendChild(cardTitle);
    cardDescDiv.appendChild(cardDesc);
    cardDescDiv.appendChild(linkContainer);

    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardDescDiv);

    return cardDiv;
  }
}

class ProjectContainer {
  constructor() {
    this.projectContainer = document.querySelector(".projects");
    this.projectList = [];
  }

  addProject(desc, title, color) {
    const newProject = new ProjectCard(desc, title, color);
    this.projectList.push(newProject);
  }

  buildCards() {
    this.projectList.forEach((project) => {
      this.projectContainer.appendChild(project.build());
    });
  }
}

const projects = new ProjectContainer();
projects.addProject(
  "Short description of the project. Just a couple of sentences will do.",
  "Project name",
  "red"
);
projects.addProject(
  "Short description of the project. Just a couple of sentences will do.",
  "Project name",
  "blue"
);
projects.addProject(
  "Short description of the project. Just a couple of sentences will do.",
  "Project name",
  "green"
);
projects.addProject(
  "Short description of the project. Just a couple of sentences will do.",
  "Project name",
  "purple"
);
projects.addProject(
  "Short description of the project. Just a couple of sentences will do.",
  "Project name",
  "yellow"
);
projects.addProject(
  "Short description of the project. Just a couple of sentences will do.",
  "Project name",
  "pink"
);

projects.buildCards();
