
var body = document.querySelector('body');
var TEX = "";

function Darki(){
 document.body.className = "dark";
}

function Lith(){
 document.body.className = "light";
}

function Texto(clicked_id){
    if (clicked_id == 1){
        TEX = `Sou um jovem brasileiro de São José do Rio Preto,
               nascido em 2006. Tenho formação em tecnico    em 
               tecnico em eletronica pela escola        tecnica
               Philadelpho Gouvêa Netto. Alem de ter   formação
               em diversos cursos da escola virtual      alura`;
               document.getElementById('demo').style.border = "1px solid #000000";

    }if(clicked_id == 2){
        TEX = `TCC Eletronica: NSM - Navori Shopping Machine,2023
               Link:RAMDOM.LINK.ALEATORIO.COM.BR
                `;
        document.getElementById('demo').style.border = "1px solid #000000";

    }if(clicked_id==3){
        TEX = `Sou um jovem brasileiro de São José do Rio Preto,
               nascido em 2006. Tenho formação em tecnico    em 
               tecnico em eletronica pela escola        tecnica
               Philadelpho Gouvêa Netto. Alem de ter   formação
               em diversos cursos da escola virtual      alura`;
               document.getElementById('demo').style.border = "1px solid #000000";
    }
    document.getElementById('demo').innerHTML= TEX;
    console.log(document.getElementById('demo').innerHTML);
    console.log(clicked_id);
}



