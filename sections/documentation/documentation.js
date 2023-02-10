var softwaretext;
var electronicstext;
var structurestext;
var materialstext;
var physicstext;
var chemistrytext;
var healthtext;
var initialized = false;
softwaretext=[
]

electronicstext=[
]

structurestext=[
]

materialstext=[
]

physicstext=[
]

chemistrytext=[
    "10/02/2023 latex example 1",
]

healthtext=[
]

function retrieveSoftware(){
    const title = document.getElementById("title");
    title.textContent = 'Software docs';
    const desc = document.getElementById("desc");
    desc.textContent = 'No documents yet';

    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<softwaretext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${softwaretext[i]}`);
            publication.href = `../../documentation/software${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
        }
        initialized = true;
    }
}

function retrieveElectronics(){
    const title = document.getElementById("title");
    title.textContent = 'Electronics docs';
    const desc = document.getElementById("desc");
    desc.textContent = 'No documents yet';
    
    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<electronicstext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${electronicstext[i]}`);
            publication.href = `../../documentation/electronic${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
            initialized = true;
        }
    }
}

function retrieveStructures(){
    const title = document.getElementById("title");
    title.textContent = 'Structures docs';
    const desc = document.getElementById("desc");
    desc.textContent = 'No documents yet';

    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<structurestext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${structurestext[i]}`);
            publication.href = `../../documentation/structures${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
        }
        initialized = true;
    }
}

function retrieveMaterials(){
    const title = document.getElementById("title");
    title.textContent = 'Materials docs';
    const desc = document.getElementById("desc");
    desc.textContent = 'No documents yet';

    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<materialstext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${materialstext[i]}`);
            publication.href = `../../documentation/materials${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
        }
        initialized = true;
    }
}

function retrievePhysics(){
    const title = document.getElementById("title");
    title.textContent = 'Physics docs';
    const desc = document.getElementById("desc");
    desc.textContent = 'No documents yet';

    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<physicstext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${physicstext[i]}`);
            publication.href = `../../documentation/physics${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
        }
        initialized = true;
    }
}

function retrieveChemistry(){
    const title = document.getElementById("title");
    title.textContent = 'Chemistry docs';
    const desc = document.getElementById("desc");
    desc.textContent = '';

    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<chemistrytext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${chemistrytext[i]}`);
            publication.href = `../../documentation/chemistry${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
        }
        initialized = true;
    }
}

function retrieveHealth(){
    const title = document.getElementById("title");
    title.textContent = 'Health docs';
    const desc = document.getElementById("desc");
    desc.textContent = 'No documents yet';

    if(initialized){
        location.reload();
    } else{
        for (var i=0; i<healthtext.length; i++ ){
            const publication = document.createElement("a");
            const textNode = document.createTextNode(`${healthtext[i]}`);
            publication.href = `../../documentation/health${i}.pdf` 
            publication.appendChild(textNode);
            document.getElementById("content").appendChild(publication);
        }
        initialized = true;
    }
}