var sliderAlbahaca = document.getElementById("myRangeAlbahaca");
var outputAlbahaca = document.getElementById("demoAlbahaca");
outputAlbahaca.innerHTML = sliderAlbahaca.value;

sliderAlbahaca.oninput = function() {
    outputAlbahaca.innerHTML = `Week: ${this.value}`;
  document.getElementById("albahaca").src=`assets/images/albahaca/albahaca${this.value}.jpg`;

    if(this.value == 1){
        document.getElementById("albahacaD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
    }
    if(this.value == 2){
        document.getElementById("albahacaD").innerHTML = "Observation: 2";
    }
    if(this.value == 3){
        document.getElementById("albahacaD").innerHTML = "Observation: 3";
    }
    if(this.value == 4){
        document.getElementById("albahacaD").innerHTML = "Observation: 4";
    }
    if(this.value == 5){
        document.getElementById("albahacaD").innerHTML = "Observation: 5";
    }
    if(this.value == 6){
        document.getElementById("albahacaD").innerHTML = "Observation: 6";
    }
    if(this.value == 7){
        document.getElementById("albahacaD").innerHTML = "Observation: 7";
    }
    if(this.value == 8){
        document.getElementById("albahacaD").innerHTML = "Observation: 8";
    }
    if(this.value == 9){
        document.getElementById("albahacaD").innerHTML = "Observation: 9";
    }
    if(this.value == 10){
        document.getElementById("albahacaD").innerHTML = "Observation: 10";
    }
}

// berenjenablanca

var sliderBerenjenaBlanca = document.getElementById("myRangeBerenjenaBlanca");
var outputBerenjenaBlanca = document.getElementById("demoBerenjenaBlanca");
outputBerenjenaBlanca.innerHTML = sliderBerenjenaBlanca.value;

sliderBerenjenaBlanca.oninput = function() {
    outputBerenjenaBlanca.innerHTML = `Week: ${this.value}`;
    document.getElementById("berenjenaBlanca").src=`assets/images/berenjenaBlanca/berenjenaBlanca${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("berenjenaBlancaD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 2";
        }
        if(this.value == 3){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 3";
        }
        if(this.value == 4){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 4";
        }
        if(this.value == 5){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 5";
        }
        if(this.value == 6){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 6";
        }
        if(this.value == 7){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 7";
        }
        if(this.value == 8){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 8";
        }
        if(this.value == 9){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 9";
        }
        if(this.value == 10){
            document.getElementById("berenjenaBlancaD").innerHTML = "Observation: 10";
        }
    }

