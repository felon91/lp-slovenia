$(document).ready(function() {
  const params = {
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
  };

  $(".slovenia-form").validate(params);
  $(".slovenia-form-two").validate(params);
  $(".slovenia-form-three").validate(params);


});