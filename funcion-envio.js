  function calcularCostoEnvio(direccionCliente) {
    // ¿El cliente está en San Nicolás dentro de un radio de 20km?
    let estaEnSanNicolas = direccionCliente.includes('San Nicolás');
    let estaEnRadio20km = false;  
    
    // Calcular el costo de envío
    if (estaEnSanNicolas) {
      return 0;  // El envío es gratuito
    } else {
      return 800;  // El costo de envío es $800
    }
  }
  