document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector("select")
  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });
});

//map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.872185, 2.354224],
    zoom: 10
  });

  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}

//form
var selector = document.getElementById("phone");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(phone);

const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    }
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
  ]);



