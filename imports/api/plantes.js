import { Mongo } from 'meteor/mongo';
// exportation de la base de données
export const Plantes = new Mongo.Collection('plantes');
// Plantes.attachSchema(Schemas.plante);
