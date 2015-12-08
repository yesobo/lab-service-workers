

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

$(function() {
  $('#loadButton').click(function() {
    fetch('./countries.json')
    .then(function(response) {
       return response.text();
    })
    .then(function(text) {
      var countries = JSON.parse(text);
      console.log('Request successful', countries);
      var select = $('#countries');
      $.each(countries,function(key, value)
      {
          select.append('<option value=' + value.code + '>' + value.name + '</option>');
      });
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
  })
  $('#clearButton').click(function() {
    $('#countries')
    .find('option')
    .remove()
    .end();
  })
})


// Examine the text in the response
// response.json().then(function(data) {
//   // console.log(data);
// });
// .catch(function(err) {
//   console.log('Fetch Error :-S', err);
// });
