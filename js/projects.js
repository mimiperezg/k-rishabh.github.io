import { projects } from "./data/projects.js";

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function createProjectCard(project) {
  const item = createElement("div", "project-grid__item");
  const card = createElement("article", "card project-card");

  const image = createElement("img", "card-img-top project-card__image");
  image.src = project.image;
  image.alt = project.alt;
  image.width = project.width;
  image.height = project.height;
  image.loading = "lazy";

  const body = createElement("div", "card-body d-flex flex-column");
  body.append(createElement("h2", "card-title h5", project.title));

  const tags = createElement("div", "d-flex flex-wrap gap-1 mb-3");
  project.tags.forEach((tag) => {
    tags.append(createElement("span", "badge project-card__tag", tag));
  });
  body.append(tags);

  body.append(createElement("p", "card-text", project.description));

  if (project.url) {
    const link = createElement(
      "a",
      "btn btn-sm btn-accent mt-auto align-self-start",
      "View project"
    );
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener";
    body.append(link);
  }

  card.append(image, body);
  item.append(card);
  return item;
}

export function initProjects() {
  const grid = document.querySelector(".project-grid");
  if (!grid) {
    return;
  }

  grid.append(...projects.map(createProjectCard));
}
