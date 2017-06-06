import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// importation de la base de données
import { Plantes } from '../imports/api/plantes.js';

import './main.html';

Template.liste_plantes.helpers({
  // récupération de la base de données
  plantes() {
    return Plantes.find({});
  },
});

Template.liste_plantes.events({
  'click #bouton_ajout'() {
    // encodage brut : à améliorer
    Plantes.insert({ nom : "Polyana", frequence : 3, dernier_arrosage : new Date() });
  }
});

Template.plante.helpers({
  statut(){
    let maintenant = new Date();
    let dernier_arrosage = new Date(this.dernier_arrosage);
    let ecart_brut = Math.abs(maintenant.getTime() - dernier_arrosage.getTime());
    let ecart_jours = Math.ceil(ecart_brut / (1000 * 3600 * 24));
    if(ecart_jours == this.frequence){return "list-group-item-warning"}
    //else if(ecart_jours > this.frequence){return "list-group-item-danger"})
    else{return "list-group-item-success"}
  }
});

Template.plante.events({
  'click .glyphicon-tint'(){
    console.log(1);
  },
  'click .specimen'(){
    console.log(2);
  }
});
