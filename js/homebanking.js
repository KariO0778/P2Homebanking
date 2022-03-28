//Declaración de variables
nombreUsuario= "Karina Oviedo";
saldoCuenta= 4200;
limiteExtraccion= 3500;
codigoDeSeguridad= 2741;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function numeroValido (num){
    if (isNaN(num) === true || num <= 0) {
        return false;
    }else {
        return true;
    }
 }

function sumarDinero (monto) {
    saldoCuenta = saldoCuenta + monto;
   
}
function restarDinero (monto) {
    saldoCuenta = saldoCuenta - monto;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    nuevoLimiteDeExtraccion = prompt ("Ingrese el nuevo limite de extracción");
    limiteDeExtraccion = (parseInt(nuevoLimiteDeExtraccion));
        if(numeroValido(limiteDeExtraccion) == true) {
            limiteExtraccion = limiteDeExtraccion;
            actualizarLimiteEnPantalla();
            alert ("Nuevo limite de extracción: " + limiteExtraccion);
        }
        
}


function extraerDinero() {
    
    extraer = prompt ("Ingrese el monto que desea retirar");
    extraccion = parseInt (extraer);
    saldoAnterior = saldoCuenta;
        if( !numeroValido(extraccion)){
            alert("Número invalido");
            return;
        }    
        if (extraccion <= saldoCuenta && extraccion <=limiteExtraccion && extraccion % 100 === 0)  {    
            saldoCuenta = saldoCuenta - extraccion;
            actualizarSaldoEnPantalla();
            alert ("1.Has retirado: " + extraccion + "\n2.Saldo anterior: " + saldoAnterior + "\n3.Saldo actual: " + saldoCuenta);
        } else if (extraccion > saldoCuenta) {
            alert ("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero")
        } else if (extraccion > limiteExtraccion) {
           alert ("La cantidad de dinero que deseas extraer es mayos a tu limite de extracción") 
        } else if (extraccion % 100 !== 0) {
           alert ("Solo puedes extraer billetes de 100") 
    
      }
    }


function depositarDinero(monto) {
    monto = prompt("Ingrese monto a depositar");
    deposito = (parseInt (monto));
    saldoAnterior = saldoCuenta;

    if(numeroValido(deposito)== true){
        saldoCuenta = saldoCuenta + deposito;
        actualizarSaldoEnPantalla();
        alert ("Has depositado: " + deposito + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
    }
}


function pagarServicio() {
     servicio = prompt ("Ingrese el número que corresponde con el servicio que quieres pagar \n 1.Agua \n 2.Luz \n 3.Teléfono \n 4.Internet");
     numServicio =parseInt(servicio);
     saldoAnterior = saldoCuenta
     if (numeroValido(numServicio) <= 4){
        switch (servicio) {
            case "1":;
            precio = 350;
            if(precio<=saldoCuenta){
                saldoCuenta = saldoCuenta - precio;
                alert("Has pagado el servicio Agua: " + precio + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
                actualizarSaldoEnPantalla();
            }else{
                alert ("No hay suficiente saldo en su cuenta");
            }
        break;
            case "2":;
            precio = 425;
            if(precio<=saldoCuenta){
                saldoCuenta = saldoCuenta - precio;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Luz: " + precio + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
            }else{
                alert ("No hay suficiente saldo en su cuenta");
            }
        break;
            case "3":;
            precio = 210;
            if(precio<=saldoCuenta){
            saldoCuenta = saldoCuenta - precio;
            alert("Has pagado el servicio Internet: " + precio + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
            actualizarSaldoEnPantalla();
            }else{
            alert ("No hay suficiente saldo en su cuenta");
            }
        break;
            case "4":;
            precio = 570;
            if(precio<=saldoCuenta){
            saldoCuenta = saldoCuenta - precio;
            actualizarSaldoEnPantalla();
            alert("Has pagado el servicio Teléfono: " + precio + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
            }else{
            alert ("No hay suficiente saldo en su cuenta");
            }
        break;
            default: 
            alert("Numero de servicio incorrecto")
        } 
    }
  
}

function transferirDinero() {
    cuentaAmiga1 = 1234567;
    cuentaAmiga2 = 7654321;

    montoATransferir = prompt ("Ingrese el monto que desea transferir");
    transferir = parseInt(montoATransferir);
        if( !numeroValido(transferir)){
            alert("Número invalido");
            return;
        }    
        cuentaATransferir = prompt ("Ingrese el numero de la cuenta a la que desea transferir");
        transferirACuenta = parseInt (cuentaATransferir);
        
            if ( saldoCuenta >=transferir && (transferirACuenta === cuentaAmiga1 || transferirACuenta === cuentaAmiga2)) {
                saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - transferir;
                actualizarSaldoEnPantalla()
                alert ("Has transferido" + transferir + "\n Cuenta destino" + transferirACuenta);
            } else {
            alert ("No hay sufiente dinero en la cuenta para realizar la transferencia");
            }
}

function iniciarSesion() {
    ingresarContrasena = prompt ("ingrese su contraseña");
    contrasenaIngresada = parseInt(ingresarContrasena);
    
        if (contrasenaIngresada === codigoDeSeguridad) {
            alert("Bienvenido/a " + nombreUsuario + " ya puedes empezar a realizar operaciones");
        }else {
            saldoCuenta = 0;
            limiteExtraccion = 0;
            alert("Código incorrecto.Tu dinero ha sido retenido por cuestiones de seguridad");
            actualizarSaldoEnPantalla();
        }
}

iniciarSesion ();

function seguros () {
    seguro= prompt ( "Ingrese el numero del seguro que desea contratar \n 1.Hogar \n 2.Autos \ 3.Vida \n 4.Compras \n 5.Via publica");
    solicitarSeguro = parseInt (seguro);
        if (numeroValido(solicitarSeguro) <= 5){
            
            switch (seguro) {
                case "1":;
                valor = 150;
                if(valor <= saldoCuenta){
                    saldoCuenta = saldoCuenta - valor;
                    actualizarSaldoEnPantalla()
                    alert ("Usted a contratado el Seguro: Hogar");
                }else{
                    alert ("No hay suficiente saldo en su cuenta"); 
                }
             break;
                case "2":;
                valor = 100;
                if(valor <= saldoCuenta){
                    saldoCuenta = saldoCuenta - valor;
                    actualizarSaldoEnPantalla()
                    alert ("Usted a contratado el Seguro: Autos");
                }else{
                    alert ("No hay suficiente saldo en su cuenta"); 
                }
             break;
                case "3":;
                valor = 210;
                if(valor <= saldoCuenta){
                    saldoCuenta = saldoCuenta - valor;
                    actualizarSaldoEnPantalla()
                    alert ("Usted a contratado el Seguro: Vida");
                }else{
                    alert ("No hay suficiente saldo en su cuenta"); 
                }
             break;
                case "4":;
                valor = 170;
                if(valor <= saldoCuenta){
                    saldoCuenta = saldoCuenta - valor;
                    actualizarSaldoEnPantalla()
                    alert ("Usted a contratado el Seguro: Compras");
                }else{
                    alert ("No hay suficiente saldo en su cuenta"); 
                }
             break;
                case "5":;
                valor = 160;
                if(valor <= saldoCuenta){
                    saldoCuenta = saldoCuenta - valor;
                    actualizarSaldoEnPantalla()
                    alert ("Usted a contratado el Seguro: Via pública");
                }else{
                    alert ("No hay suficiente saldo en su cuenta"); 
                }
            break;
              default:
              alert("Numero de seguro incorrecto. Por cualquier duda consulte en su sucursal más cercana");
              
            } 
            
        } 

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}