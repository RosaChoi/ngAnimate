var app = angular.module("myContacts", ['ngAnimate']);

app.controller("contactController", function() {
  var contactCtrl = this;

  contactCtrl.showFrom = false;
  contactCtrl.showDetail = false;

  contactCtrl.people = [
    {
      name: "Momo Eskie",
      instagram: "@280momo",
      email: "momo@example.com",
      phone: 14157778888,
      address: "555 Eskimo Dr San Francisco, CA",
      favorite: true
    },
    {
      name: "Colt Steele",
      instagram: "@steele",
      email: "colt@example.com",
      phone: 14157773333,
      address: "44 Tehama St San Francisco, CA",
      favorite: true
    },
    {
      name: "Elie Schoppik",
      instagram: "@eschoppik",
      email: "elie@example.com",
      phone: 14157779999,
      address: "44 Tehama St San Francisco, CA",
      favorite: true
    },
    {
      name: "Zubair Desai",
      instagram: "@zubaird",
      email: "zubair@example.com",
      phone: 14157774444,
      address: "44 Tehama St San Francisco, CA",
      favorite: false
    },
    {
      name: "John Folyness",
      instagram: "@folyness",
      email: "folying@example.com",
      phone: 14157772222,
      address: "44 Tehama St San Francisco, CA",
      favorite: false
    },
    {
      name: "Martha Berner",
      instagram: "@martha",
      email: "martha@example.com",
      phone: 1415777,
      address: "1062 Delaware Street Denver, CO",
      favorite: false
    }
  ];

  contactCtrl.addNew = function() {
    contactCtrl.people.push({
      name: contactCtrl.name,
      instagram: contactCtrl.instagram,
      email: contactCtrl.email,
      phone: contactCtrl.phone,
      address: contactCtrl.address,
      favorite: contactCtrl.favorite,

    });
    contactCtrl.name = "";
    contactCtrl.instagram = "";
    contactCtrl.email = "";
    contactCtrl.phone = "";
    contactCtrl.address = "";
    contactCtrl.favorite = "";

  };

});
