let proj;
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Corrected console log
    proj = data;       // Now assigning 'data' to 'proj'
    parseData(data);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });



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
function parseData(data) {
    for (let i = 0; i < data.projects.length; i++) {
      document.getElementById("projects").innerHTML += `
        <div class="project-card" id="${data.projects[i].subdomain}">
          <img src="img/${data.projects[i].mainimg}" alt="${data.projects[i].name}">
          <div class="project-info">
            <h3>${data.projects[i].name}</h3>
            <p class="subtitle">${data.projects[i].subtitle}</p>
            <p>${data.projects[i].abstract}</p>
          </div>
        </div>`;
    }
  }
  
    for(let button of document.querySelectorAll("#buttons button")){
        button.addEventListener("click", e=> {
            console.log(e.target.value);
            sortProjects(e.target.value);
        });
    }

    function sortProjects(button){
        if(button == "clear"){
            for(i=0; i<proj.projects.length; i++){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }
        }else if(button != undefined){
           for(i=0; i<proj.projects.length;i++){
                if(proj.projects[i].category.includes(button) == true){
                    document.getElementById(proj.projects[i].subdomain).style.display = "flex";
                }else{
                    document.getElementById(proj.projects[i].subdomain).style.display = "none";
                }
           }
        }else{
            console.log("error, button value is undefined");
        }
    }
