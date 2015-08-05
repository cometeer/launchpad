/* global Session, Template, Meteor, Documents, Mongo */

Documents = new Mongo.Collection("documents");

if (Meteor.isClient) {
  Template.editorWindow.helpers({
    currentFile: function (title) {
      return Documents.findOne({ title: title });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
