console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    var objectToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( objectToSend );
  }); //end addButton on click
}); // end doc ready

function getKoalas() {
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalaList',
    type: 'GET',
    success: function( data ){
      console.log( 'got some koalas: ', data );
      $('#viewKoalas').empty();
      for (var i = 0; i < data.length; i++) {
        console.log('hopefully appending koalas');
        $('#viewKoalas').append('<tr>' + '<th>'+ data[i].name + '</th>' +  '<th>'+ data[i].age + '</th>' + '<th>'+ data[i].gender + '</th>' + '<th>'+ data[i].ready_for_transfer + '</th>' + '<th>'+ data[i].notes + '</th>' + '</tr>');
      }
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalaList',
    type: 'POST',
    data: newKoala,
    success: function( data ){
      console.log( 'got some koalas: ', data );
    } // end success
  }); //end ajax
}
