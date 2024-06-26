function mobileNumber() {
  var textElement = document.getElementById("mobileNumber");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}
// Array of project objects
const projects = [
  {
    language: "no",
    imageSrc: "images/calculator.png",
    altText: "Calculator",
    title: "Calculator",
    description:
      "Den enkle React kalkulatoren er en nettapplikasjon utviklet ved hjelp av React, et populært JavaScript-bibliotek for å bygge brukergrensesnitt. Denne kalkulatoren lar brukerne utføre grunnleggende aritmetiske operasjoner som addisjon, subtraksjon, multiplikasjon og divisjon. Den har et rent og intuitivt brukergrensesnitt med numeriske knapper for inndata, sammen med spesielle knapper for å tømme (C) inndataene og slette (DEL) individuelle tegn. Med sitt brukervennlige design forenkler denne kalkulatoren matematiske beregninger for brukere i ulike sammenhenger.",
    liveLink: "https://reactcalculatorkodehode.netlify.app",
    repoLink: "https://github.com/kokila-c/React-Calculator.git",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
  },
  {
    language: "en",
    imageSrc: "images/calculator.png",
    altText: "Calculator",
    title: "Calculator",
    description:
      "The Simple React Calculator is a web application built using React, a popular JavaScript library for building user interfaces. This calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It features a clean and intuitive user interface with number buttons for input, along with special buttons for reset (C) and delete (DEL) functionalities.",
    liveLink: "https://reactcalculatorkodehode.netlify.app",
    repoLink: "https://github.com/kokila-c/React-Calculator.git",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
  },
  {
    language: "no",
    imageSrc: "images/planner.png",
    altText: "planner project",
    title: "Familie-Månedlig Planlegger",
    description:
      "Denne planlegger er laget ved JavaScript, HTML og CSS. Cellene er redigerbare og kan markeres som fullført ved å klikke på dem, og gir en enkel og effektiv måte å organisere familiens aktiviteter på. Prosjektet fokuserer på brukervennlighet og tilbyr et intuitivt grensesnitt for å forenkle planleggingen og oppfølgingen av viktige hendelser og oppgaver.",
    liveLink: "https://kokila-c.github.io/Monthly-planner/",
    repoLink: "https://github.com/kokila-c/Monthly-planner",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    language: "en",
    imageSrc: "images/planner.png",
    altText: "planner project",
    title: "Family-Monthly planner",
    description:
      "Here is a family monthly planner that I have created using JavaScript, HTML, and CSS. The cells are editable and can be marked as completed by clicking on them, providing a simple and effective way to organize family activities. The project focuses on user-friendliness and offers an intuitive interface to simplify the planning and tracking of important events and tasks.",
    liveLink: "https://kokila-c.github.io/Monthly-planner/",
    repoLink: "https://github.com/kokila-c/Monthly-planner",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    language: "no",
    imageSrc: "images/snake game.png",
    altText: "snake Spill",
    title: "Snake Spill",
    description:
      "Spillet er et klassisk Snake-spill implementert ved hjelp av HTML, CSS og JavaScript. I dette spillet kontrollerer spilleren en orm som beveger seg rundt på spillbrettet og prøver å spise matbiter for å vokse seg lengre. Når ormen spiser mer mat, blir den lengre og spilleren tjener poeng. Imidlertid må spilleren unngå å kollidere ormens egen kropp, da dette vil resultere i at spillet er over.",
    liveLink: "https://kokila-c.github.io/snakeGame/",
    repoLink: "https://github.com/kokila-c/snakeGame.git",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    language: "en",
    imageSrc: "images/snake game.png",
    altText: "snake game",
    title: "Snake Game",
    description:
      "The game is a classic Snake game implemented using HTML, CSS, and JavaScript. In this game, the player controls a snake that moves around the game board, trying to eat food pellets to grow longer. As the snake eats more food, it becomes longer and the player earns points. However, the player must avoid colliding with the snake's own body, as this will result in game over. ",
    liveLink: "https://kokila-c.github.io/snakeGame/",
    repoLink: "https://github.com/kokila-c/snakeGame.git",
    technologies: ["JavaScript", "HTML", "CSS"],
  },

  {
    language: "no",
    imageSrc: "images/Drumkit (1).png",
    altText: "Drumkit med lyd buttons",
    title: "Drumkit",
    description:
      "Her er et trommesettprosjekt som jeg har laget ved hjelp av HTML, CSS og JavaScript. Når du trykker på tastene, utløses tilsvarende lyder, slik at brukerne kan spille musikk dynamisk. Jeg har også fokusert på å forbedre brukeropplevelsen med interaktive visuelle elementer og responsivt design.",
    liveLink: "https://kokila-c.github.io/drumkit/",
    repoLink: "https://github.com/kokila-c/drumkit",
    technologies: ["JavaScript", "HTML", "CSS"],
  },

  {
    language: "en",
    imageSrc: "images/Drumkit (1).png",
    altText: "Drumkit with sound buttons",
    title: "Drumkit",
    description:
      "Here is a drum kit project that I have created using HTML, CSS,and JavaScript. When you press the keys, corresponding sounds are triggered, allowing users to play music dynamically. I have also focused on enhancing the user experience with interactive visual elements and responsive design.",
    liveLink: "https://kokila-c.github.io/drumkit/",
    repoLink: "https://github.com/kokila-c/drumkit",
    technologies: ["JavaScript", "HTML", "CSS"],
  },

  // {
  //   language: "no",
  //   imageSrc: "images/mars-planet.png",
  //   altText: "mars planet",
  //   title: "Planet-Mars",
  //   description:
  //     "Her er et prosjekt om planeten Mars som vi har laget med HTML og CSS. Prosjektet inkluderer animasjon og overgangseffekter for å gi en engasjerende utforskning av den røde planeten. Utforsk Mars' unike egenskaper gjennom interaktive visuelle elementer, som gir en spennende og informativ opplevelse av vår nabo i solsystemet.",
  //   liveLink: "https://kokila-c.github.io/mars-assignment3/",
  //   repoLink: "https://github.com/kokila-c/mars-assignment3",
  //   technologies: ["HTML", "CSS"],
  // },

  // {
  //   language: "en",
  //   imageSrc: "images/mars-planet.png",
  //   altText: "mars planet",
  //   title: "Planet-Mars",
  //   description:
  //     "Here is a project about the planet Mars that I have created using HTML and CSS. The project includes animations and transition effects to provide an engaging exploration of the red planet. Explore Mars' unique features through interactive visual elements, providing an exciting and informative experience of our neighbor in the solar system.",
  //   liveLink: "https://kokila-c.github.io/mars-assignment3/",
  //   repoLink: "https://github.com/kokila-c/mars-assignment3",
  //   technologies: ["HTML", "CSS"],
  // },

  // {
  //   language: "no",
  //   imageSrc: "images/clock.png",
  //   altText: "clock project",
  //   title: "klokke",
  //   description:
  //     "Her er en enkel klokke-modell jeg har laget ved hjelp av HTML og CSS.  Prosjektet fokuserer på en minimalistisk design og tydelig lesbarhet for enkel og effektiv tidsvisning.",
  //   liveLink: "https://kokila-c.github.io/clock/",
  //   repoLink: "https://github.com/kokila-c/clock",
  //   technologies: ["HTML", "CSS"],
  // },
  // {
  //   language: "en",
  //   imageSrc: "images/clock.png",
  //   altText: "clock project",
  //   title: "Clock",
  //   description:
  //     "Here is a simple clock model I have created using HTML and CSS. The project focuses on a minimalist design and clear readability for easy and effective time display.",
  //   liveLink: "https://kokila-c.github.io/clock/",
  //   repoLink: "https://github.com/kokila-c/clock",
  //   technologies: ["HTML", "CSS"],
  // },

  // can add more projects as needed
];

// Function to generate HTML for each project
function generateProjectHTML(project) {
  return `
  <div class="grid-item">
      <img src="${project.imageSrc}" alt="${project.altText}" />
      <div class="description">
          <h3>${project.title}</h3>
          <p id="describe">${project.description}</p>
      </div>
      <div class="icons">
          <a href="${project.liveLink}">
              <img src="icons/livepageblue.png" alt="live link to git pages" />
          </a>
          <a href="${project.repoLink}">
              <img src="icons/gitblue.png" alt="Github codes" />
          </a>
          ${project.technologies
            .map(
              (tech) =>
                `<img src="icons/${tech.toLowerCase()}.png" alt="${tech}" />`
            )
            .join("")}
      </div>
  </div>
  `;
}

function renderProjects() {
  const language = document.documentElement.lang.toLowerCase(); // Get language from HTML lang attribute
  const projectsContainer = document.getElementById("projectsContainer");
  // Clear existing content
  projectsContainer.innerHTML = "";

  // Filter projects based on the language
  const filteredProjects = projects.filter(
    (project) => project.language === language
  );

  // Generate HTML for each project and append to container
  filteredProjects.forEach((project) => {
    const projectHTML = generateProjectHTML(project);
    projectsContainer.innerHTML += projectHTML;
  });
}

// Call renderProjects() when the window loads to populate the projects section with dynamically generated content
window.onload = renderProjects;
