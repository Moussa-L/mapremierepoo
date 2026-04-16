/*
============
Extension de la classe Télévision
============
Il s'agit de créer des classes "enfant" issues de la classe "mère"
*La classe Télévision est la classe "mère".
Pour créer la classe "enfant",j'utilise deux mot-clés : "class" et  "extends"
*/
class Television {
  
  constructor(taille, couleur, poids, fabricant){
    // je définnis les propriétés dans le constructeur.
    this.taille = taille;
    this.couleur = couleur;
    this.poids = poids;
    this.fabricant = fabricant;
  }
  
  // Je définis les méthodes.
   description() {
     
     console.log("la taile de la télévision est :" , this.taille);
     console.log("la couleur de la télévision est :" , this.couleur);
     console.log("le poids de la télévision est :" , this.poids);
     console.log("le fabricant est :" , this.fabricant);
     
   }
  
  //Methodes de l'objet
  
  allumer() {
    console.log("la télé est allumer"); 
  }  
  
  eteindre() {
    console.log("La télé est éteinte");
  }
  
  getTaille() {
    return this.taille;
  }
  
  getCouleur() {
    return this.couleur;
  }
  
  getPoids() {
    return this.poids;
  }
  
  getFabricant() {
    return this.fabricant;
  }
  
}

let television1 = new Television("32pouces", "noir", "25kg", "Philips");
television1.description();
television1.eteindre();
television1.allumer();

class Ecran extends Television {
    constructor(resolution, wifi, nombrePortHdmi, eteindreAuto, nombrePortUsb) {
      
    super(resolution, wifi, nombrePortHdmi, eteindreAuto, nombrePortUsb);
      
  }
  
}

let Ecran1 = new Ecran ("2560x1440 pixels", "RSMA", 300, "5"); 


