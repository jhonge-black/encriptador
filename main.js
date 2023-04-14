function encriptar() {
    let texto = (document.getElementById("texto").value).toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let textoCifrado = texto
      .replace(/a/g, "°")
      .replace(/b/g,"#")
      .replace(/c/g, "1")
      .replace(/d/g,"2")
      .replace(/e/g, "3")
      .replace(/f/g,"4")
      .replace(/g/g, "5")
      .replace(/h/g,"6")
      .replace(/i/g,"7")
      .replace(/j/g,"8")
      .replace(/k/g,"9")
      .replace(/l/g,"0")
      .replace(/m/g,"A")
      .replace(/n/g,"B")
      .replace(/o/g,"C")
      .replace(/p/g,"D")
      .replace(/q/g,"E")
      .replace(/r/g,"F")
      .replace(/s/g,"G")
      .replace(/t/g,"H")
      .replace(/u/g,"I")
      .replace(/w/g,"J")
      .replace(/x/g,"K")
      .replace(/y/g,"L")
      .replace(/z/g,"M");

      
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imagen.src = "./img/cerrado.png";
    } 
    else {
     
      imagen.src = "./img/warning.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = " Por favor ingresar, el texto que deseas encriptar";
      
    }
  
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
    .replace(/°/g,"a")
    .replace(/#/g,"b")
    .replace(/1/g,"c")
    .replace(/2/g,"d")
    .replace(/3/g,"e")
    .replace(/4/g,"f")
    .replace(/5/g,"g")
    .replace(/6/g,"h")
    .replace(/7/g,"i")
    .replace(/8/g,"j")
    .replace(/9/g,"k")
    .replace(/0/g,"l")
    .replace(/A/g,"m")
    .replace(/B/g,"n")
    .replace(/C/g,"o")
    .replace(/D/g,"p")
    .replace(/E/g,"q")
    .replace(/F/g,"r")
    .replace(/G/g,"s")
    .replace(/H/g,"t")
    .replace(/I/g,"u")
    .replace(/J/g,"w")
    .replace(/K/g,"x")
    .replace(/L/g,"y")
    .replace(/M/g,"z");
    
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./img/ok.png";
      } else {
        imagen.src = "./img/warning.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Por favor, ingresar el texto que deseas  desencriptar";
        
        
      }
  }
  
