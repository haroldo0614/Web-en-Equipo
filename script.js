document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    // Aquí puedes realizar acciones con los valores, como enviarlos a través de una solicitud HTTP o realizar alguna otra acción.
    // Por ahora, simplemente mostraremos una alerta con los valores.
    alert("Nombre: " + nombre + "\nCorreo: " + correo + "\nMensaje: " + mensaje);
  });