/* 
 Módulo 11 [Wikipedia]

El método denominado módulo 11 detecta errores en un solo dígito e intercambios 
simples o dobles. Se basa en aplicar un factor de chequeo ponderado a cada 
dígito del número original. El cálculo se realiza como sigue:1​

    1. A cada dígito del número base se le asigna un factor de chequeo 
       ponderado. Dicho factor será 2 para el dígito menos significativo (el 
       que está más a la derecha) y, en orden, 3, 4, 5, 6, 7 para los 
       siguientes. Si hubiera más de 6 dígitos la secuencia se repetiría de modo
       que el séptimo dígito se multiplicaría por 2, el octavo por 3, etc.

    2. Cada dígito del número base se multiplica por el factor de chequeo asignado.

    3. Se suman los resultados de todas las multiplicaciones.

    4. Al resultado de la suma se le calcula el módulo 11 (de ahí el nombre del 
    método), es decir, el resto de la división entera entre 11.

    5. A 11 se le resta el módulo calculado en el punto anterior. Si el
       resultado de la resta es < 10, dicho resultado es el dígito de control 
       que buscábamos. Si el resultado es 11 el dígito de control es 0 y si el 
       resultado es 10 el dígito de control resultante es 1.
 */

function valida(){
    rut = document.getElementById('inRut').value.trim();
    if(rut == ""){
        window.alert("Campo vacío, favor ingresar RUT válido");
        return false;
    }
    sumaResultados = 0;
    factorChequeo = 2;
    dvIngresado = rut.substring((rut.length-1),rut.length);
    for(i=rut.length - 2 ; i >= 0; i--)
    {
        if(factorChequeo == 8){
            factorChequeo = 2;
        }
        sumaResultados = sumaResultados + (rut.charAt(i) * factorChequeo);
        factorChequeo++;
    }
    mod11 = sumaResultados%11;
    var dvResultado = 11-mod11;
    if(dvResultado==11)
        dvResultado = 0;
    if(dvResultado==10)
        dvResultado = 'k';
    
    if(!(dvResultado == dvIngresado))
    {
        window.alert("RUT no válido");
        return false;
    }
}