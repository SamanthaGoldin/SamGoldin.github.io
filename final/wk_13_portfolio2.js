let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));

fetch('../final/project.json')
.then(response => {
    return response.json();
}).then (project => {
    //console.log(projects);
    proj = projects;
    findProjectInJSON(projects);
   // parseData(projects);
}).catch(err =>{
    console.log(`error ${err}`);
})

function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

function buildPage(project){
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
}