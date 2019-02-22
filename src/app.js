/* src/app.js */


// Styles
// require('normalize.css');
import 'styles/_app.scss';

// var page = '';

$(document).ready(() => {
  // console.log('Ready!');
  $('.aside__hamburger').click(function(){
    $(".aside").toggleClass("open");
    $(".aside__hamburger").toggleClass("open");
  });
  $('main').click(function(){
    $(".aside").removeClass("open");
    $(".aside__hamburger").removeClass("open");
  });

  const abc = ['abc', 'cde', 'efd'];
  require('scripts/demo');
});
