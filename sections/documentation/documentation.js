var softwaretext;
var electronicstext;
var structurestext;
var mechanicstext;
var phyhsicstext;
var chemistrytext;
var healthtext;
var initialized = false;
softwaretext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

electronicstext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

structurestext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

mechanicstext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

phyhsicstext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

chemistrytext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

healthtext=[
    "20/12/2022 latex example 1",
    "15/01/2023 hello mama",
]

function retrieveSoftware(){
    const title = document.getElementById("title");
    title.textContent = 'Software docs';
    const desc = document.getElementById("desc");
    desc.textContent = '';

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
    desc.textContent = '';
    
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
