
/* Je déclare une classe Document. 
Je commence par le mot-clé class suivi du nom de ma classe Document.
Le nom de la classe doit obligatoirement commencer par une majuscule 
*/
class Document {
    // Je déclare les paramètres du constructeur de ma classe Document.
    constructor(titre, nombrePage, auteur){
        // Je définis les propriétés dans le constructeur.
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
        
    }

     // Je définis les méthodes.

    description() {
        console.log("le titre du document est : " , this.titre);
        console.log("le nombre de pages du document est : " , this.nombrePage);
        console.log("l'auteur du document est : " , this.auteur);

    }

    // je vais créer les méthodes getTitre et getAuteur pour accéder aux propriétés titre et auteur de ma classe Document.
    getTitre() {
        // la méthode getTitre retourne la valeur de la propriété titre de ma classe Document.
        return this.titre;
    }

    getAuteur() {
        // la méthode getAuteur retourne la valeur de la propriété auteur de ma classe Document.

        return this.auteur;
    }
    // je vais créer une méthode description pour afficher les propriétés de ma classe Document.
    description() {
        console.log("le titre du document est : " , this.getTitre());
        console.log("l'auteur du document est : " , this.getAuteur());
    }

    // je vais créer la méthde getNombrePage pour accéder à la propriété nombrePage de ma classe Document.
    getNombrePage() {
        // la méthode getNombrePage retourne la valeur de la propriété nombrePage de ma classe Document.
        return this.nombrePage;
    }
}


//Création d'une instance de la classe Document.
//document1 est une instance (exemplaire)de la classe Document.

let document1 = new Document("Bao vas a Sada", 12, "Sada");

let documentCss = new Document("Aprendre le css", 200, "Jean Dupont");

let documentJavaScript = new Document("Aprendre le JavaScript", 300, "Maire Emille");

let documentPython = new Document("Aprendre le Python", 400, "Pierre Dupont");

let documentHtml = new Document("Aprendre le Html", 100, "kevin Dupont");

document1.description();
documentCss.description();
documentJavaScript.description();
documentPython.description();
documentHtml.description();

let titreDocumentCss = documentCss.getTitre();
console.log(" titreDocumentCss: ", titreDocumentCss);

let auteurDocumentCss = documentCss.getAuteur();
console.log(" auteurDocumentCss: ", auteurDocumentCss);

let nombrePageDocumentCss = documentCss.getNombrePage();
console.log(" nombrePageDocumentCss: ", nombrePageDocumentCss);

/*
============
Extension de la classe Document
============
Il s'agit de créer des classes "enfant" issues de la classe "mère"
*La classe Document est la classe "mère".
Pour créer la classe "enfant",j'utilise deux mot-clés : "class" et  "extends"
*/


class Livret extends Document {
    //je definis les propriétés de la classe Livret dans le constructeur de la classe Livret.
    constructor(titre, nombrePage, auteur) {
        //je fais appel a super qui est une fonction qui permet d'appeler le constructeur de la classe supérieure "mère" Document.
        super(titre, nombrePage, auteur);

        //Propriétés spécifique à la classe Livret (enfant)
        this.maisonEdition = maisonEdition;
    }
     convertirPdf(){
    console.log("**Je convertis le livret en pdf.");
  }
} 


//Je crée un objet de la classe Livret.
let livret = new Livret("Le petit prince", 5, "Antoine de Saint-Exupéry", "Éditions des Archipels");
//J'affiche les methodes
livret.getAuteur();