let proj;
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    proj = data;       
    parseData(data);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });


  function parseData(data) {
    for (let i = 0; i < data.projects.length; i++) {
        document.getElementById("projects").innerHTML += `
            <a href="../final/${data.projects[i].subdomain}.html" class="project-link">
                <div class="project-card" id="${data.projects[i].subdomain}">
                    <img src="img/${data.projects[i].mainimg}" alt="${data.projects[i].name}">
                    <div class="project-info">
                        <h3>${data.projects[i].name}</h3>
                        <p class="subtitle">${data.projects[i].subtitle}</p>
                        <p>${data.projects[i].abstract}</p>
                    </div>
                </div>
            </a>`;
    }
}
  
    for(let button of document.querySelectorAll("#buttons button")){
        button.addEventListener("click", e=> {
            console.log(e.target.value);
            sortProjects(e.target.value);
        });
    }

    function sortProjects(button) {
      const allProjects = document.querySelectorAll('.project-card');
      
      // Show all projects if "all" is selected
      if (button === "all") {
          allProjects.forEach(project => project.style.display = "flex");
      } else {
          allProjects.forEach(project => {
              const projectCategory = proj.projects.find(p => p.subdomain === project.id).category;
              if (projectCategory.includes(button)) {
                  project.style.display = "flex";
              } else {
                  project.style.display = "none";
              }
          });
      }
  }
  


    /*function parseData(data){
    for(let i=0; i<data.projects.length; i ++){
    document.getElementById("projects").innerHTML += `
        <a href="../final/${data.projects[i].subdomain}.html">
        <div class="row project" id="${data.projects[i].subdomain}">
        <div class= "projimg">
        <img src="..final/images/Bandimere1(${i+1}).png">
        </div>
        <div class= "description">
        <h2>${data.projects[i].name}</h2>
        <p class= "subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p>
        </div>
        </div>
        </a>`;
        }
    }
*/