//Скрипт плавной прокрутки до якоря
$(document).ready(function(){
  $("nav.list").on("click","a", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
  //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
  //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
  //анимируем переход на расстояние - top за 800 мс
    $('body,html').animate({scrollTop: top}, 800);
  //передаем якорь в адресную строку
    location.hash = $(this).attr('href');
  });
})