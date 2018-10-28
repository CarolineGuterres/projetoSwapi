$(document).ready( () =>{
$('.char').click(function(){
  const id = $(this).attr('id')

$.ajax({
  method: 'GET',
  url: 'https://swapi.co/api/people/' + id,
  success: function (response){
     listaInfo(response)},
    error: function (erro){
      console.log('Por favor, tente novamente');
    }
  })


function listaInfo(info) {
$('.name').empty();
    $('.charInfo').empty();
    $('.name').append('<h1><b>'+info.name+'</b></h1>');
  $('.charInfo').append('<div class="form-group">' +
    '<p>Height : '+ info.height +'</p>'+
    '<p>Mass: '+ info.mass +'</p>'+
    '<p>Eye Color : '+ info.eye_color +'</p>' +
    '<p>Gender : '+ info.gender +'</p>');
  if(info.species == 'https://swapi.co/api/species/1/'){
    var propriedade = 'Human';
     $('.charInfo').append('<div class="form-group">' +
    '<p>Species : '+ propriedade +'</p>') }  
    if(info.species == 'https://swapi.co/api/species/2/'){
    var propriedade = 'Droid';
     $('.charInfo').append('<div class="form-group">' +
    '<p>Species : '+ propriedade +'</p>') }    
    if(info.species == 'https://swapi.co/api/species/3/'){
    var propriedade = 'Wookiee';
     $('.charInfo').append('<div class="form-group">' +
    '<p>Species : '+ propriedade +'</p>') }   
    } 
})
});
