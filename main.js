(function () {

  'use strict';

  var customerDiv = document.querySelector('.customers');


  function buildCustomers(customerData) {
    for (var i = 0; i < customerData.length; i++) {

      var customerIndividual = document.createElement('div');


      var customerPhoto = document.createElement('IMG');
      customerPhoto.setAttribute('src', customerData[i].picture.large);
      customerPhoto.classList.add("customerPhoto");
      customerIndividual.appendChild(customerPhoto);

      var customerName = document.createElement('div');
      customerName.innerHTML = customerData[i].name.first + " " +   customerData[i].name.last;
      customerName.classList.add("customerName");
      customerIndividual.appendChild(customerName);

      var customerEmail = document.createElement('div');
      customerEmail.innerHTML = customerData[i].email;
      customerEmail.classList.add("customerEmail");
      customerIndividual.appendChild(customerEmail);

      var customerAdress = document.createElement('div');
      customerAdress.innerHTML = customerData[i].location.street;
      customerAdress.classList.add("customerAdress");
      customerIndividual.appendChild(customerAdress);

      var customerCity = document.createElement('div');
      customerCity.innerHTML = customerData[i].location.city + ", " +   customerData[i].location.state + " " + customerData[i].location.postcode;
      customerCity.classList.add("customerCity");
      customerIndividual.appendChild(customerCity);

      var customerPhone = document.createElement('div');
      customerPhone.innerHTML = customerData[i].cell;
      customerPhone.classList.add("customerPhone");
      customerIndividual.appendChild(customerPhone);

      var customerDob = document.createElement('div');
      customerDob.innerHTML = customerData[i].dob;
      customerDob.classList.add("customerDob");
      customerIndividual.appendChild(customerDob);


      customerDiv.appendChild(customerIndividual);

  }
}

  $.ajax({
      url: 'https://randomuser.me/api/?results=12',
      dataType: 'json',

      success: function(data) {
        console.log(data.results);

        buildCustomers(data.results);

      }


  });

})();
