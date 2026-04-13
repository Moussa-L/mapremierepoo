
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
}


//Création d'une instance de la classe Document.
//document1 est une instance (exemplaire)de la classe Document.

let document1 = new Document("Le Petit Prince", 96, "Antoine de Saint-Exupéry");
document1.description();