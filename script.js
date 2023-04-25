// Obtener el icono de información y el contenedor de información
var infoIcon = document.querySelector('#info-icon-container i');
var infoContainer = document.querySelector('#info-container');

// Mostrar u ocultar el contenedor de información al hacer clic en el icono de información
infoIcon.addEventListener('click', function() {
    if (infoContainer.style.display === 'none') {
        infoContainer.style.display = 'block';
    } else {
        infoContainer.style.display = 'none';
    }
});


$(document).ready(function() {
  // reglas de validación para cada campo
  $("#report-form").validate({
    rules: {
      name: {
        required: true
      },
      publicaciones: {
        required: true,
        number: true
      },
      horas: {
        required: true,
        number: true
      },
      visits: {
        required: true,
        number: true
      },
      bibleCourse: {
        required: true,
        number: true
      },
      videos: {
        required: true,
        number: true
      },
      supervisor: {
        required: true
      },
      notes: {
        required: false
      }
    },
    messages: {
      name: {
        required: "Por favor, ingrese su nombre completo"
      },
      publicaciones: {
        required: "Por favor, ingrese el número de publicaciones",
        number: "Por favor, ingrese un número válido"
      },
      horas: {
        required: "Por favor, ingrese el número de horas",
        number: "Por favor, ingrese un número válido"
      },
      revisitas: {
        required: "Por favor, ingrese el número de revisitas",
        number: "Por favor, ingrese un número válido"
      },
      bibleCourse: {
        required: "Por favor, ingrese el número de cursos bíblicos",
        number: "Por favor, ingrese un número válido"
      },
      videos: {
        required: "Por favor, ingrese el número de videos",
        number: "Por favor, ingrese un número válido"
      },
      supervisor: {
        required: "Por favor, seleccione un superintendente de servicio"
      }
    },
    errorElement: "span",
    errorPlacement: function(error, element) {
      error.addClass("invalid-feedback");
      $(error).insertBefore(element);
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass(errorClass).removeClass(validClass);
      $(element).closest(".form-group").addClass("has-error");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass(errorClass).addClass(validClass);
      $(element).closest(".form-group").removeClass("has-error");
    },
     submitHandler: function(form) {
      //aca puedes validar si el formulario es valido o no
    // some other code
    // maybe disabling submit button
    // then:
    $(form).submit();
  }
  });
  
  // evento click del botón enviar
  $("#submit-btn").click(function() {
    if ($("#report-form").valid()) {
      // código para enviar el formulario
    }
  });
});

