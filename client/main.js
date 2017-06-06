import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.liste_plantes.helpers({
  plantes: [
    { nom : 'Polyana', frequence : 3, dernier_arrosage : 'Tue Jun 06 2017 11:19:20 GMT+0200 (CEST)' },
    { nom : 'Polyana', frequence : 3, dernier_arrosage : 'Tue Jun 06 2017 11:19:20 GMT+0200 (CEST)' },
    { nom : 'Polyana', frequence : 3, dernier_arrosage : 'Tue Jun 06 2017 11:19:20 GMT+0200 (CEST)' },
  ],
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
