$(document).ready(function() {

  $(".slovenia-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите, пожалуйста, Ваше имя",
        minlength: "Минимальное количество символов 2"
      },
      email: "Пожалуйста, введите корректный email"
    }
  });

  $(".subscribe__form--two").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите, пожалуйста, Ваше имя",
        minlength: "Минимальное количество символов 2"
      },
      email: "Пожалуйста, введите корректный email"
    }
  });



});