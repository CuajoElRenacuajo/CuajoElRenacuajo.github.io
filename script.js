//albahaca
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
        document.getElementById("albahacaD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Leaf Deterioration:</h3>
    <p>The basil shows slight deterioration on the leaves located on the plant's stem, with a yellowish and less uniform coloration.</p>

    <h3>Plant Expansion:</h3>
    <p>The plant is expanding towards the left.</p>

    <h2>Observed Modifications:</h2>
    <h3>New Shoots:</h3>
    <p>Small shoots are observed at the top of the plant.</p>

    <h3>General Condition:</h3>
    <p>Despite signs of deterioration, the plant maintains its shine and overall healthy appearance.</p>`;
    }
    if(this.value == 3){
        document.getElementById("albahacaD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Signs of Wilting:</h3>
    <p>The basil plant shows signs of wilting. Most of the leaves have lost their shine and fullness. Some leaves have holes and have turned yellowish.</p>

    <h2>Observed Modifications:</h2>
    <h3>New Leaf Production:</h3>
    <p>Despite the visible deterioration, the plant is producing new leaves. The overall fullness has decreased and the leaf color has shifted to a more yellowish tone.</p>`;
    }
    if(this.value == 4){
        document.getElementById("albahacaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The basil has improved its leaves, which were previously yellowing.
</p>
<h2>Observed Modifications:</h2>
<p>
    The plant has fully recovered, showing lush foliage with a bright, uniform green color.
</p>`;
    }
    if(this.value == 5){
        document.getElementById("albahacaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The basil shows signs of deterioration.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Development and Appearance:</strong><br>
    <strong>Leaves:</strong> A significant number of dimples and yellowing are present, although it still retains some shine.<br>
    <strong>Growth:</strong> It continues to grow at the top.
</p>`;
    }
    if(this.value == 6){
        document.getElementById("albahacaD").innerHTML = ``;
    }
    if(this.value == 7){
        document.getElementById("albahacaD").innerHTML = ``;
    }
    if(this.value == 8){
        document.getElementById("albahacaD").innerHTML = ``;
    }
    if(this.value == 9){
        document.getElementById("albahacaD").innerHTML = ``;
    }
    if(this.value == 10){
        document.getElementById("albahacaD").innerHTML = ``;
    }
}

// berenjenablanca

var sliderBerenjenaBlanca = document.getElementById("myRangeBerenjenaBlanca");
var outputBerenjenaBlanca = document.getElementById("demoBerenjenaBlanca");
outputBerenjenaBlanca.innerHTML = sliderBerenjenaBlanca.value;

sliderBerenjenaBlanca.oninput = function() {
    outputBerenjenaBlanca.innerHTML = `Week: ${this.value}`;
    document.getElementById("berenjenaBlanca").src=`assets/images/berenjenablanca/berenjenablanca${this.value}.jpg`;
    
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
            document.getElementById("berenjenaBlancaD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Increase in Size and Number of Branches:</h3>
    <p>The plant has experienced a significant increase in size and the number of branches, indicating vigorous development.</p>

    <h2>Observed Modifications:</h2>
    <h3>Uniform Color in Stems:</h3>
    <p>The stems display a uniform color, suggesting overall good health of the plant.</p>

    <h3>Denser Leaves:</h3>
    <p>The leaves have become more lush, giving the plant a denser and healthier appearance.</p>

    <h3>Growth of New Leaves:</h3>
    <p>At the base of the plant, new leaves are emerging, indicating continued expansion and vitality from its early stages.</p>`;
        }
        if(this.value == 3){
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Increased Thickness of Stems and Leaves:</h3>
    <p>An increase in the thickness of the stems and leaves is visible. The leaves are a vibrant green, indicating robust growth.</p>

    <h2>Observed Modifications:</h2>
    <h3>Continued Leaf Growth at the Base:</h3>
    <p>Leaves continue to grow at the base of the plant, suggesting sustained and healthy expansion.</p>

    <h3>Leaves with Holes:</h3>
    <p>Two leaves show some holes, which may indicate slight pest damage or adverse environmental conditions.</p>`;
        }
        if(this.value == 4){
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The leaves have tripled in size, indicating significant and vigorous growth of the plant.
</p>
<h2>Observed Modifications:</h2>
<p>
    Some upper leaves are broken, possibly due to adverse environmental factors or physical damage. The stem continues to produce new leaves, showing persistent and healthy growth. Pale green buds are emerging in the center of the plant, signaling the start of a new development stage. Some leaves are wilted with a pale green color, which could indicate health issues or nutritional deficiencies.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Flowering in the Center:</strong> In the center of the plant, buds have bloomed into purple flowers with a yellow center. This indicates an advanced stage in the plant's reproductive development.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Continuous Growth of Lush Leaves:</strong> The leaves remain very lush, indicating vigorous plant growth.<br>
    <strong>Vivid Green Leaf Color:</strong> The leaves maintain a vivid green color, reflecting the plant's overall health.<br>
    <strong>Large Holes in Leaves:</strong> Despite the lush foliage, some leaves have large holes, which may suggest damage from pests or environmental factors.<br>
    <strong>Growth of Leaf Buds at the Base:</strong> New leaf buds continue to emerge at the base of the plant, indicating sustained growth and ongoing development.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("berenjenaBlancaD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("berenjenaBlancaD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("berenjenaBlancaD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("berenjenaBlancaD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("berenjenaBlancaD").innerHTML = ``;
        }
    }

// berenjena

var sliderBerenjena = document.getElementById("myRangeBerenjena");
var outputBerenjena = document.getElementById("demoBerenjena");
outputBerenjena.innerHTML = sliderBerenjena.value;

sliderBerenjena.oninput = function() {
    outputBerenjena.innerHTML = `Week: ${this.value}`;
    document.getElementById("berenjena").src=`assets/images/berenjena/berenjena${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("berenjenaD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Leaf Growth:</h3>
    <p>We observe an increased number of leaves on the eggplant plant, including some that are just starting to open. The plant appears more lush, indicating healthy growth.</p>

    <h3>Observed Modifications:</h3>
    <h4>Bud Development:</h4>
    <p>The plant has two small purple buds, each with tiny spines. On these buds, slightly wilted petals can be seen, which could be a sign that the buds are beginning to bloom.</p>`;
        }
        if(this.value == 3){
            document.getElementById("berenjenaD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Growth and Lushness:</h3>
    <p>The eggplant plant has experienced significant growth, with leaves appearing more lush and healthy.</p>

    <h2>Observed Modifications:</h2>
    <h3>Flower Development:</h3>
    <p>Several lilac flowers have grown on the plant, adding a vibrant and attractive appearance. These flowers are a sign that the plant is in an active flowering phase, which is crucial for future fruit production.</p>

    <h3>Appearance of Buds and Fruits:</h3>
    <p>Two buds have been observed where the eggplant fruit is starting to emerge. The emerging fruits are a deep purple and have reached a considerable size. This development is a positive indication that the plant is progressing towards producing mature fruits.</p>`;
        }
        if(this.value == 4){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The eggplant has developed a larger, intensely purple fruit. This growth is a significant sign of the plant's maturity and development.
</p>
<h2>Observed Modifications:</h2>
<p>
    The plant has maintained its size but has developed more leaves, indicating continuous vegetative growth. The new leaves contribute to the plant's lushness. The plant continues to produce lilac flowers, showing it is in an active flowering phase. The stem appears quite thick, which is necessary to support the weight of the developing eggplant. This stem strengthening is crucial for maintaining the plant's stability. One bud remains stagnant without showing signs of blooming or fruit production, which may need to be monitored for potential issues.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The eggplant has been successfully harvested, marking an important milestone in the plant's growth cycle.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf Growth:</strong> The leaves of the eggplant plant have increased in size, indicating healthy vegetative development.<br>
    <strong>Development of Buds:</strong> Small purple buds are visible, though some appear wilted. This suggests an active flowering phase, although not all buds are thriving.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("berenjenaD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("berenjenaD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("berenjenaD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("berenjenaD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("berenjenaD").innerHTML = ``;
        }
    }

//chiles

var sliderChiles = document.getElementById("myRangeChiles");
var outputChiles = document.getElementById("demoChiles");
outputChiles.innerHTML = sliderChiles.value;

sliderChiles.oninput = function() {
    outputChiles.innerHTML = `Week: ${this.value}`;
    document.getElementById("chiles").src=`assets/images/chiles/chiles${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("chilesD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Stem and Leaf Development:</h3>
    <p>The green chili plant shows a thick stem and notable growth in the number of leaves.</p>

    <h2>Observed Modifications:</h2>
    <h3>Buds and Color:</h3>
    <p>Growing buds are observed, with some being white and others appearing as small green balls. The plant looks very healthy and nutritious.</p>`;
        }
        if(this.value == 3){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 4){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 5){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 6){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("chilesD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("chilesD").innerHTML = ``;
        }
    }

//germanchamoline

var sliderGermanChamoline = document.getElementById("myRangeGermanChamoline");
var outputGermanChamoline = document.getElementById("demoGermanChamoline");
outputGermanChamoline.innerHTML = sliderGermanChamoline.value;

sliderGermanChamoline.oninput = function() {
    outputGermanChamoline.innerHTML = `Week: ${this.value}`;
    document.getElementById("germanchamoline").src=`assets/images/germanchamoline/germanchamoline${this.value}.jpg`;
    
 
        if(this.value == 3){
            document.getElementById("germanchamolineD").innerHTML = `<p>German chamomile (Matricaria chamomilla) is an annual herbaceous plant from the Asteraceae family, known for its small daisy-like flowers with white petals and a yellow center. It is primarily cultivated in temperate climates and well-drained soils. German chamomile is valued for its medicinal properties, such as its ability to relieve digestive issues, promote relaxation, and improve sleep.</p>
                                <h2>Important Changes:</h2>
                                <p>
                                    The German chamomile plant has been recently added this week. It appears very lush and has yellowish touches on its leaves.
                                </p>
                            
                                <h2>Observed Modifications:</h2>
                                <p>
                                    The plant has an irregular shape and is in the process of adapting to the new environment.
                                </p>`;
            
        }
        if(this.value == 4){
            document.getElementById("germanchamolineD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The German chamomile plant has become visibly more lush and is spreading outwards.
</p>
<h2>Observed Modifications:</h2>
<p>
    The plant's color remains a strong green, reflecting healthy growth.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("germanchamolineD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant shows signs of weakening.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Size:</strong> The plant has decreased in size.<br>
    <strong>Color:</strong> There is a slight yellowing.<br>
    <strong>Lushness:</strong> The plant appears less lush.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("germanchamolineD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("germanchamolineD").innerHTML = ``;
        }
        
    }

//girasol

var sliderGirasol = document.getElementById("myRangeGirasol");
var outputGirasol = document.getElementById("demoGirasol");
outputGirasol.innerHTML = sliderGirasol.value;

sliderGirasol.oninput = function() {
    outputGirasol.innerHTML = `Week: ${this.value}`;
    document.getElementById("girasol").src=`assets/images/girasol/girasol${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("girasolD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Leaf Development:</h3>
    <p>The sunflower plant has shown increased development in its leaves.</p>

    <h2>Observed Modifications:</h2>
    <h3>Leaf Appearance:</h3>
    <p>The leaves have a uniform color and are in good condition. No significant changes or blooming have been observed.</p>`;
        }
        if(this.value == 3){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
    <p>The sunflower plant has begun to develop large buds.</p>

    <h2>Observed Modifications:</h2>
    <p>The plant generally shows increased leaf density and a strengthened stem, indicating healthy development.</p>`;
        }
        if(this.value == 4){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The sunflowers have bloomed, showcasing four beautiful flowers, with additional buds in development.
</p>
<h2>Observed Modifications:</h2>
<p>
    The stem has thickened but has started to lean slightly to the sides. Overall, the plant looks more lush.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant has increased in size and shows robust health.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Growth and Appearance:</strong><br>
    <strong>Stem:</strong> The stem has increased in width, now thicker and more resilient.<br>
    <strong>Buds and Flowers:</strong> More buds have appeared, and all previous sunflowers have fully bloomed.<br>
    <strong>Leaves:</strong> Some leaves show small dents, but the plant still exhibits overall good condition.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("girasolD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("girasolD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("girasolD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("girasolD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("girasolD").innerHTML = ``;
        }
    }

//habas

var sliderHabas = document.getElementById("myRangeHabas");
var outputHabas = document.getElementById("demoHabas");
outputHabas.innerHTML = sliderHabas.value;

sliderHabas.oninput = function() {
    outputHabas.innerHTML = `Week: ${this.value}`;
    document.getElementById("habas").src=`assets/images/habas/habas${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("habasD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("habasD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Leaf Development:</h3>
    <p>The leaves have grown more lush and strong, with a striking green color.</p>

    <h3>Stem Strengthening:</h3>
    <p>The stem has developed greater robustness, providing better support to the plant.</p>

    <h3>Appearance of New Leaves:</h3>
    <p>New leaf shoots have appeared, indicating healthy and continuous growth.</p>

    <h2>Observed Modifications:</h2>
    <h3>Foliage Expansion:</h3>
    <p>The plant has begun to develop more new leaves, increasing its density and leaf area.</p>`;
        }
        if(this.value == 3){
            document.getElementById("habasD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Size Increase:</h3>
    <p>The green bean plant has doubled in size, indicating vigorous and healthy growth.</p>

    <h2>Observed Modifications:</h2>
    <h3>Color and Appearance:</h3>
    <p>The plant displays a very healthy lime green color, reflecting its overall good condition. This vibrant color is a positive sign of its health and vitality.</p>

    <h3>Growth of New Shoots:</h3>
    <p>New leaf shoots are visible, contributing to the plant's increased lushness. The development of these new sprouts indicates an active growth and expansion phase.</p>`;
        }
        if(this.value == 4){
            document.getElementById("habasD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The green bean plant has significantly increased in height, indicating robust growth. Both the branches and the size of the leaves have improved, making the plant look more lush.
</p>
<h2>Observed Modifications:</h2>
<p>
    The leaves show some small holes, which could be a sign of pests or mechanical damage. Despite this, the leaves continue to grow and contribute to the overall lushness of the plant. Small leaf shoots are developing, indicating an active growth phase. These new sprouts will help the plant expand further and improve its density.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("habasD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Development of Buds:</strong> Small buds are forming and are about to bloom. These buds display a combination of lilac and white colors, indicating upcoming flowering.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Condition of Stems and Leaves:</strong> Some stems have begun to bend, possibly due to the weight of the leaves, which are lush. This bending may be a response to the dense growth and additional weight.<br>
    <strong>Stem Growth:</strong> The green bean plant has experienced notable growth in height, with the stem now appearing longer. This increase in height is a positive sign of development.<br>
    <strong>Color Change in Stem:</strong> The stem has changed to a purple hue in areas where the buds are growing. This color change may reflect the plant's developmental stage and its response to bud growth.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("habasD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("habasD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("habasD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("habasD").innerHTML = ``;
        }
    }

//hinojo

var sliderHinojo = document.getElementById("myRangeHinojo");
var outputHinojo = document.getElementById("demoHinojo");
outputHinojo.innerHTML = sliderHinojo.value;

sliderHinojo.oninput = function() {
    outputHinojo.innerHTML = `Week: ${this.value}`;
    document.getElementById("hinojo").src=`assets/images/hinojo/hinojo${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("hinojoD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Increased Lushness:</h3>
    <p>The fennel shows more lush growth with stems extending sideways.</p>

    <h3>Uniform Stem Color:</h3>
    <p>The stems have a uniform light green color.</p>

    <h2>Observed Modifications:</h2>
    <h3>Damaged Shoot:</h3>
    <p>One of the shoots is broken, displaying a yellow color and leaning towards the ground.</p>`;
        }
        if(this.value == 3){
            document.getElementById("hinojoD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Loss of Shoots:</h3>
    <p>The fennel has lost some shoots.</p>

    <h3>Green Color:</h3>
    <p>The plant maintains a very intense green color.</p>

    <h2>Observed Modifications:</h2>
    <h3>Increased Foliage:</h3>
    <p>There is increased foliage with delicate yet extensive leaves.</p>

    <h3>Generation of New Stems:</h3>
    <p>The plant is generating new stems.</p>

    <h3>Flexibility:</h3>
    <p>The plant shows significant flexibility in its structure.</p>`;
        }
        if(this.value == 4){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The fennel plant has begun to invade other plants and is even tangling with itself. It shows intense green coloration, while the stem has a whitish-green tone.
</p>
<h2>Observed Modifications:</h2>
<p>
    Despite its delicate appearance, the stems are thick and flexible. The plant has increased considerably in lushness, contributing to its tangling and expansion.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Increased Lushness and Size:</strong> The fennel has significantly increased in lushness and size, giving the plant a shape reminiscent of an outstretched hand.
</p>
<p>
    <strong>Bud Growth:</strong> An elongated, hairy bud of intense olive green is developing, indicating healthy growth.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Support:</strong> The support is helping to keep the plant stable and growing.
</p>
<p>
    <strong>Bud Development:</strong> The developing bud shows signs of proper and healthy growth.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("hinojoD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("hinojoD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("hinojoD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("hinojoD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("hinojoD").innerHTML = ``;
        }
    }

//jitomate

var sliderJitomate = document.getElementById("myRangeJitomate");
var outputJitomate = document.getElementById("demoJitomate");
outputJitomate.innerHTML = sliderJitomate.value;

sliderJitomate.oninput = function() {
    outputJitomate.innerHTML = `Week: ${this.value}`;
    document.getElementById("jitomate").src=`assets/images/jitomate/jitomate${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("jitomateD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("jitomateD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Size and Lushness Increase:</h3>
    <p>The tomato plant has grown larger, with branches now appearing visibly more lush and flexible.</p>

    <h3>Stem Maturation:</h3>
    <p>The stem exhibits a dark green color, indicating maturation and increased resilience of the plant.</p>

    <h2>Observed Modifications:</h2>
    <h3>Leaf Orientation:</h3>
    <p>The leaves seem to be inclined downwards.</p>

    <h3>Uniform Color:</h3>
    <p>The leaves show an even and consistent color.</p>`;
        }
        if(this.value == 3){
            document.getElementById("jitomateD").innerHTML = `<h2>Important Changes:</h2>
    <p>The tomato plant is showing yellow buds and has produced three miniature green tomatoes. The tomatoes have a uniform color and are very shiny.</p>

    <h2>Observed Modifications:</h2>
    <p>The buds are developing, and the miniature tomatoes have formed with an intense green color. The plant maintains a healthy appearance and uniform color.</p>`;
        }
        if(this.value == 4){
            document.getElementById("jitomateD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The tomato plant has grown larger, displaying a fluffier appearance and more branches.
</p>
<h2>Observed Modifications:</h2>
<p>
    Although some branches have fallen, the tomatoes have not shown further growth, remaining green and bright. There are also some yellowish flowers visible.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("jitomateD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The tomato plant has increased in size.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Development and Appearance:</strong><br>
    <strong>Leaves:</strong> Although lush and healthy green, the leaves appear somewhat wilted.<br>
    <strong>Fruits:</strong> More tomatoes are growing, and they have increased in size but still retain a green color.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("jitomateD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("jitomateD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("jitomateD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("jitomateD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("jitomateD").innerHTML = ``;
        }
    }

//marigold

var sliderMarigold = document.getElementById("myRangeMarigold");
var outputMarigold = document.getElementById("demoMarigold");
outputMarigold.innerHTML = sliderMarigold.value;

sliderMarigold.oninput = function() {
    outputMarigold.innerHTML = `Week: ${this.value}`;
    document.getElementById("marigold").src=`assets/images/marigold/marigold${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("marigoldD").innerHTML = ``;
        }
        if(this.value == 2){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Flower Development:</h3>
    <p>The African marigold plant shows a fluffy, brightly colored, and tidy flower. Several buds are observed, with one about to bloom.</p>

    <h2>Observed Modifications:</h2>
    <h3>General Appearance:</h3>
    <p>The leaves appear fluffier and maintain a vibrant shine.</p>

    <h3>Buds and Blooming:</h3>
    <p>Several buds are developing, with one on the verge of blooming.</p>`;
        }
        if(this.value == 3){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
    <p>The African marigold plant is in full bloom. The flowers have retained their fluffiness and have changed to a more yellowish tone in the center. One bud is blooming with a bright yellow color.</p>

    <h2>Observed Modifications:</h2>
    <p>The leaves remain fluffy and in good condition, maintaining a healthy appearance.</p>`;
        }
        if(this.value == 4){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The African marigold plant has increased in size, with buds blooming to reveal white edges and vibrant yellow centers.
</p>
<h2>Observed Modifications:</h2>
<p>
    Despite the encroachment of other plants, the African marigold appears quite healthy with consistent colors. The buds continue to grow, and the flowers show strong resilience.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant appears healthy and in good condition.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Growth and Appearance:</strong><br>
    <strong>Flowers:</strong> The flowers remain well-maintained, with only minimal yellow discoloration in the center.<br>
    <strong>Bud Development:</strong> There are still buds yet to open.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("marigoldD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("marigoldD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("marigoldD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("marigoldD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("marigoldD").innerHTML = ``;
        }
    }

//menta

var sliderMenta = document.getElementById("myRangeMenta");
var outputMenta = document.getElementById("demoMenta");
outputMenta.innerHTML = sliderMenta.value;

sliderMenta.oninput = function() {
    outputMenta.innerHTML = `Week: ${this.value}`;
    document.getElementById("menta").src=`assets/images/menta/menta${this.value}.jpg`;
    
        if(this.value == 3){
            document.getElementById("mentaD").innerHTML = `<p>
                                    Mint is a perennial aromatic plant from the Lamiaceae family. It is cultivated for its fragrant leaves, which are used both in cooking and in herbal medicine. Mint has square stems and opposite leaves, with a distinctive aroma due to the essential oils present in its cells. The flowers are usually small and can be purple or white.
                                </p>
                                <h2>Important Changes:</h2>
                                <p>The mint plant has been recently added. It shows good density and size, with a uniform color.</p>
                            
                                <h2>Observed Modifications:</h2>
                                <p>The plant has several stems of different sizes, but all appear healthy and well-developed.</p>`;
        }
        if(this.value == 4){
            document.getElementById("mentaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The mint plant has visibly increased in height and appears to be producing more new shoots.
</p>
<h2>Observed Modifications:</h2>
<p>
    The plant maintains a uniform color and shows thick stems, reflecting healthy growth.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("mentaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant shows significant recovery.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf Recovery:</strong> The leaves have grown larger and are in good condition.<br>
    <strong>Growth:</strong> The plant is extending upwards, with a lush and healthy green base.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("mentaD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("mentaD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("mentaD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("mentaD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("mentaD").innerHTML = ``;
        }
    }

//oregano

var sliderOregano = document.getElementById("myRangeOregano");
var outputOregano = document.getElementById("demoOregano");
outputOregano.innerHTML = sliderOregano.value;

sliderOregano.oninput = function() {
    outputOregano.innerHTML = `Week: ${this.value}`;
    document.getElementById("oregano").src=`assets/images/oregano/oregano${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("oreganoD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("oreganoD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Increased Lushness:</h3>
    <p>The oregano plant has become somewhat more lush.</p>

    <h2>Observed Modifications:</h2>
    <h3>Leaf Condition:</h3>
    <p>No significant changes in the structure or color of the leaves are observed. The plant maintains a healthy color and quality of leaves.</p>`;
        }
        if(this.value == 3){
            document.getElementById("oreganoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The oregano plant has increased its density and begun to expand laterally. It shows a neat color and presents new leaves at the base, giving it a bushy appearance.</p>

    <h2>Observed Modifications:</h2>
    <p>The oregano is becoming denser and bushier, with visible growth at its edges. The plant maintains a uniform and healthy color, with new leaves emerging at the base.</p>`;
        }
        if(this.value == 4){
            document.getElementById("oreganoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The oregano plant has become more lush and is growing laterally, with no significant height increase observed.
</p>
<h2>Observed Modifications:</h2>
<p>
    The oregano maintains a uniform color and continues to develop new leaves, but there have been no changes in height.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("oreganoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant appears visibly healthy and in good condition.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Expansion:</strong> It has expanded steadily.<br>
    <strong>Color and Stems:</strong> The plant maintains its healthy color. The stems are robust and thick.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("oreganoD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("oreganoD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("oreganoD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("oreganoD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("oreganoD").innerHTML = ``;
        }
    }

//pepino

var sliderPepino = document.getElementById("myRangePepino");
var outputPepino = document.getElementById("demoPepino");
outputPepino.innerHTML = sliderPepino.value;

sliderPepino.oninput = function() {
    outputPepino.innerHTML = `Week: ${this.value}`;
    document.getElementById("pepino").src=`assets/images/pepino/pepino${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("pepinoD").innerHTML = `<p>The cucumber (Cucumis sativus) is a vegetable from the Cucurbitaceae family, native to India. It is known for its refreshing taste and high water content, which accounts for about 95% of its weight, making it a highly hydrating food.</p>
                            
                                <h2>Important Changes:</h2>
                                <h3>Emergence of New Leaves and Shoots:</h3>
                                <p>In the emerging stems of the cucumber plant, the development of new leaves in the form of buds and small shoots in a spiral shape can be observed. These signs indicate active and healthy growth of the plant.</p>
                            
                                <h3>Use of Support:</h3>
                                <p>Since the cucumber is a climbing plant, support has been provided to help sustain the vertical growth of the plant and prevent the stems from trailing on the ground.</p>
`;
        }
        if(this.value == 2){
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Growth and Lushness:</h3>
    <p>The cucumber plant has grown significantly and has become more lush. This vigorous growth is a positive sign of its development.</p>

    <h3>Observed Modifications:</h3>
    <h4>Leaf Condition:</h4>
    <p>Some of the leaves show various holes and small yellowish areas. These signs may indicate the presence of pests or a nutrient deficiency.</p>

    <h4>Use of Support:</h4>
    <p>Thanks to the provided support, the cucumber plant has started to attach itself with its tendrils. This helps to keep the plant upright and facilitates vertical growth.</p>

    <h4>Bud Development:</h4>
    <p>Along the plant's body, we can observe small buds with yellow petals. These buds indicate that the plant is in an active flowering phase.</p>`;
        }
        if(this.value == 3){
            document.getElementById("pepinoD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Vine Development:</h3>
    <p>Although the cucumber plant has not increased in size, the number of vines clinging to the support net has increased. These vines are longer and have a paler color than before.</p>

    <h2>Observed Modifications:</h2>
    <h3>Leaf Condition:</h3>
    <p>The leaves have improved considerably in health, although some parts still show yellowing. This suggests that they are recovering.</p>

    <h3>Bud Blooming:</h3>
    <p>The buds have started to bloom, showing small, bright yellow flowers. Additionally, there are other buds about to bloom, distributed throughout the cucumber plant.</p>`;
        }
        if(this.value == 4){
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The cucumber plant has produced its first fruit, a significant milestone in its growth cycle. The fruit is medium-sized, with a very intense green color and some small scratches. This development marks an important point in the plant's maturity.
</p>
<h2>Observed Modifications:</h2>
<p>
    The plant has increased in size and has extended significantly over the support net. The vines appear visibly thicker, indicating structural strengthening. The leaves seem wilted, possibly due to the weight of the fruit. Although they show signs of stress, the fact that the plant is bearing fruit suggests it is progressing well in its development.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("pepinoD").innerHTML = `
Cucumbers
<h2>Important Changes:</h2>
<p>
    The first cucumber harvest has recently been achieved, marking a significant milestone in the plant's growth cycle.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf Growth:</strong> The leaves have increased in size, and the plant looks more lush, indicating good vegetative development.<br>
    <strong>Leaf Condition:</strong> Some leaves show slight yellow spots and small holes, which may indicate pest issues or nutrient deficiencies.<br>
    <strong>Vines:</strong> The vines are firm and well-attached to the support mesh, providing stability to the plant.<br>
    <strong>Development of Buds:</strong> New small yellow buds are visible, suggesting ongoing flowering and the potential for future fruits.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("pepinoD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("pepinoD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("pepinoD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("pepinoD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("pepinoD").innerHTML = ``;
        }
    }

//pimiento

var sliderPimiento = document.getElementById("myRangePimiento");
var outputPimiento = document.getElementById("demoPimiento");
outputPimiento.innerHTML = sliderPimiento.value;

sliderPimiento.oninput = function() {
    outputPimiento.innerHTML = `Week: ${this.value}`;
    document.getElementById("pimiento").src=`assets/images/pimiento/pimiento${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("pimientoD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Development:</h3>
    <p>New plants have grown. The leaves are wrinkled and very glossy, and they have begun to develop small buds and tiny white flowers.</p>

    <h2>Observed Modifications:</h2>
    <h3>Size and Lushness:</h3>
    <p>Although it is slightly smaller than the orange pepper, it shows more lushness.</p>`;
        }
        if(this.value == 3){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 4){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 5){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 6){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("pimientoD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("pimientoD").innerHTML = ``;
        }
    }

//romanchamoline

var sliderRomanChamoline = document.getElementById("myRangeRomanChamoline");
var outputRomanChamoline = document.getElementById("demoRomanChamoline");
outputRomanChamoline.innerHTML = sliderRomanChamoline.value;

sliderRomanChamoline.oninput = function() {
    outputRomanChamoline.innerHTML = `Week: ${this.value}`;
    document.getElementById("romanchamoline").src=`assets/images/romanchamoline/romanchamoline${this.value}.jpg`;
    
       
        if(this.value == 3){
            document.getElementById("romanchamolineD").innerHTML = `<p>Roman chamomile (Chamaemelum nobile) is a perennial herbaceous plant. It is primarily used in traditional medicine and in making infusions due to its calming and digestive properties.</p>
                                <h2>Important Changes:</h2>
                                <p>
                                    The Roman chamomile plant was one of the recently added plants. It appears very lush, with predominant upward growth.
                                </p>
                            
                                <h2>Observed Modifications:</h2>
                                <p>
                                    Some of the stems protrude and slightly touch the ground, indicating vertical and compact growth.
                                </p>`;
        }
        if(this.value == 4){
            document.getElementById("romanchamolineD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The Roman chamomile plant has not shown significant improvements.
</p>
<h2>Observed Modifications:</h2>
<p>
    The plant remains in good condition with an even, intense color, but without any drastic changes.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("romanchamolineD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant remains healthy with no drastic changes.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Growth:</strong> It is more lush and spreading outwards.<br>
    <strong>Color:</strong> Maintains an intense, even green color.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("romanchamolineD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("romanchamolineD").innerHTML = ``;
        }

    }

//romero

var sliderRomero = document.getElementById("myRomero");
var outputRomero = document.getElementById("demoRomero");
outputRomero.innerHTML = sliderRomero.value;

sliderRomero.oninput = function() {
    outputRomero.innerHTML = `Week: ${this.value}`;
    document.getElementById("romero").src=`assets/images/romero/romero${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("romeroD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("romeroD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Growth of New Shoots:</h3>
    <p>Small shoots are observed growing at the top of the rosemary, indicating the plant's continued development.</p>

    <h2>Observed Modifications:</h2>
    <h3>Color and Health:</h3>
    <p>Rosemary maintains a vibrant and healthy color, suggesting that the plant is in good overall condition.</p>

    <h3>Interaction with Other Plants:</h3>
    <p>Rosemary has started to interfere or mix with nearby plants, which could potentially affect its future growth or development.</p>`;
        }
        if(this.value == 3){
            document.getElementById("romeroD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Expansion of Rosemary:</h3>
    <p>The rosemary plant appears more extended due to the removal of surrounding plants that were covering it. This has allowed the plant to expand and grow more expansively.</p>

    <h2>Observed Modifications:</h2>
    <h3>Expansive Growth:</h3>
    <p>The plant is showing a wider and more expansive growth, indicating a positive recovery and development following the removal of nearby competition.</p>`;
        }
        if(this.value == 4){
            document.getElementById("romeroD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The rosemary plant has experienced a slight increase in size. Although it remains a small shrub, it shows moderate expansion and greater density in its growth.
</p>
<h2>Observed Modifications:</h2>
<p>
    The rosemary has developed more branches on its initial stem, indicating healthy growth. The plant now has a denser and more extended structure, showing robust and continuous development.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("romeroD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General State:</strong> The rosemary is in a healthy state. Although there haven't been significant changes, the shrub shows steady and consistent growth.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Stem Development:</strong> The rosemary stem has slightly increased in height and appears more lush. The plant continues to develop well, with uniform growth and a good overall condition.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("romeroD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("romeroD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("romeroD").innerHTML = ``;
        }
    }

//sage

var sliderSage = document.getElementById("mySage");
var outputSage = document.getElementById("demoSage");
outputSage.innerHTML = sliderSage.value;

sliderSage.oninput = function() {
    outputSage.innerHTML = `Week: ${this.value}`;
    document.getElementById("sage").src=`assets/images/sage/sage${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("sageD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("sageD").innerHTML = ``;
        }
        if(this.value == 3){
            document.getElementById("sageD").innerHTML = ``;
        }
        if(this.value == 4){
            document.getElementById("sageD").innerHTML = ``;
        }
        if(this.value == 5){
            document.getElementById("sageD").innerHTML = ``;
        }
        if(this.value == 6){
            document.getElementById("sageD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("sageD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("sageD").innerHTML = ``;
        }
    }

//shiso

var sliderShiso = document.getElementById("myShiso");
var outputShiso = document.getElementById("demoShiso");
outputShiso.innerHTML = sliderShiso.value;

sliderShiso.oninput = function() {
    outputShiso.innerHTML = `Week: ${this.value}`;
    document.getElementById("shiso").src=`assets/images/shiso/shiso${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("shisoD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("shisoD").innerHTML = ` <h2>Important Changes:</h2>
    <h3>Size Increase:</h3>
    <p>The plant has significantly increased in size, surpassing the purple shiso.</p>

    <h3>Leaf Condition:</h3>
    <p>The leaves appear slightly wrinkled but maintain a vibrant green color.</p>

    <h3>Stem Color:</h3>
    <p>The stems are thick and a darker green color.</p>

    <h3>Leaf Damage:</h3>
    <p>Some leaves show pronounced holes.</p>

    <h2>Observed Modifications:</h2>
    <h3>Continued Growth:</h3>
    <p>The plant continues to show signs of growth, with developing leaves.</p>`;
        }
        if(this.value == 3){
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>

    <h3>Important Changes:</h3>
    <h4>Stable Size:</h4>
    <p>The plant maintains the same size as before.</p>

    <h3>Observed Modifications:</h3>
    <h4>Leaf Color:</h4>
    <p>The leaves have a yellowish-green tone at the initial parts.</p>

    <h2>Purple Shiso</h2>

    <h3>Important Changes:</h3>
    <h4>Size:</h4>
    <p>It has reached the same size as the green shiso.</p>

    <h3>Observed Modifications:</h3>
    <h4>Color Variation:</h4>
    <p>The color of the leaves has varied, with some having lighter purple tones.</p>`;
        }
        if(this.value == 4){
            document.getElementById("shisoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The plant has maintained its size, but the leaves appear slightly droopy.
</p>
<h2>Observed Modifications:</h2>
<p>
    The green shiso and purple shiso plants have moved closer together.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>
<h3>Important Changes:</h3>
<p>
    <strong>Size Increase:</strong> The green shiso has increased in size, especially towards the left side.
</p>
<p>
    <strong>Leaf Coloring:</strong> The upper leaves show a lighter green compared to the darker green of the lower leaves.
</p>
<p>
    <strong>Invasion:</strong> The green shiso has encroached on the red shiso.
</p>
<h3>Observed Modifications:</h3>
<p>
    <strong>Leaf Size:</strong> The leaves are visibly larger.
</p>
<h2>Red Shiso</h2>
<h3>Important Changes:</h3>
<p>
    <strong>General Condition:</strong> No significant changes in size or color are observed.
</p>
<p>
    <strong>Lushness:</strong> It appears more lush but has been encroached upon by the green shiso.
</p>
<h3>Observed Modifications:</h3>
<p>
    <strong>Impact of Green Shiso:</strong> The encroachment by the green shiso has affected its growth.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("shisoD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("shisoD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("shisoD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("shisoD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("shisoD").innerHTML = ``;
        }
    }

//tomillofaustini

var sliderTomilloFaustini = document.getElementById("myTomilloFaustini");
var outputTomilloFaustini = document.getElementById("demoTomilloFaustini");
outputTomilloFaustini.innerHTML = sliderTomilloFaustini.value;

sliderTomilloFaustini.oninput = function() {
    outputTomilloFaustini.innerHTML = `Week: ${this.value}`;
    document.getElementById("tomillofaustini").src=`assets/images/tomillofaustini/tomillofaustini${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("tomillofaustiniD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Height Increase:</h3>
    <p>The plant has experienced a slight increase in height. Growth remains in the same direction with no significant changes in its general appearance.</p>

    <h2>Observed Modifications:</h2>
    <h3>Structure and Appearance:</h3>
    <p>The plant continues with its usual structure, with no notable changes in color or lushness. It maintains its previous shape and characteristics.</p>`;
        }
        if(this.value == 3){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
    <p>The Thymus faustini thyme plant has been recently planted. The soil is moist, and the plant appears healthy and lush.</p>

    <h2>Observed Modifications:</h2>
    <p>New small leaves are growing at the tips of the thyme, indicating good initial development. The plant looks vigorous and in a healthy state.</p>`;
        }
        if(this.value == 4){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The plant's branches have experienced significant height growth. However, the number of leaves has decreased, and the plant shows less density compared to previous stages.
</p>
<h2>Observed Modifications:</h2>
<p>
    Despite the reduced density in the upper branches, the base of the plant remains more lush. The plant's color is uneven, and the stems appear visibly thicker.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant shows overall improvement and is in a healthier state.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Foliage:</strong> The plant is more lush.<br>
    <strong>Leaves:</strong> The leaves exhibit notable growth and have a uniform color.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("tomillofaustiniD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("tomillofaustiniD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("tomillofaustiniD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("tomillofaustiniD").innerHTML = ``;
        }
    }

//tomillomesa

var sliderTomilloMesa = document.getElementById("myTomilloMesa");
var outputTomilloMesa = document.getElementById("demoTomilloMesa");
outputTomilloMesa.innerHTML = sliderTomilloMesa.value;

sliderTomilloMesa.oninput = function() {
    outputTomilloMesa.innerHTML = `Week: ${this.value}`;
    document.getElementById("tomillomesa").src=`assets/images/tomillomesa/tomillomesa${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("tomillomesaD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Height Increase:</h3>
    <p>The table thyme plant has increased in height.</p>

    <h2>Observed Modifications:</h2>
    <h3>Leaf and Stem Condition:</h3>
    <p>The leaves maintain a greenish color. The stem is greenish-yellow, and the plant shows greater lushness.</p>`;
        }
        if(this.value == 3){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The thyme plant was recently planted. It appears lush, with the soil still moist and the plant in a relatively healthy state.</p>

    <h2>Observed Modifications:</h2>
    <p>The plant exhibits green and vibrant colors, indicating healthy growth. The moisture in the soil suggests a good environment for initial development.</p>`;
        }
        if(this.value == 4){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The thyme plant has experienced a significant leaf drop. Although the branches continue to grow, there are areas with sparse foliage.
</p>
<h2>Observed Modifications:</h2>
<p>
    Despite the leaf loss, the base of the plant remains lush. The stem has a yellowish-green color, and new branch growth is evident, although the overall density has decreased in some areas.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Condition:</strong> The plant appears visibly healthier and is more lush.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaves:</strong> The leaves have partially recovered their previous state. Some areas show a yellowish tone, while the base leaves are a darker green.<br>
    <strong>Stems:</strong> There is uneven height among the stems, with some being significantly taller than others.
</p>`;
        }
        if(this.value == 6){
            document.getElementById("tomillomesaD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("tomillomesaD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("tomillomesaD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("tomillomesaD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("tomillomesaD").innerHTML = ``;
        }
    }

//tropaeolum

var sliderTropaeolum = document.getElementById("myTropaeolum");
var outputTropaeolum = document.getElementById("demoTropaeolum");
outputTropaeolum.innerHTML = sliderTropaeolum.value;

sliderTropaeolum.oninput = function() {
    outputTropaeolum.innerHTML = `Week: ${this.value}`;
    document.getElementById("tropaeolum").src=`assets/images/tropaeolum/tropaeolum${this.value}.jpg`;
    
        if(this.value == 1){
            document.getElementById("tropaeolumD").innerHTML = `Cambios Importantes:
Color Verde Vivo: La albahaca presenta un color verde vivo que indica buena salud y vitalidad.
Frondosidad: La planta se muestra frondosa, con un crecimiento denso y exuberante.
Modificaciones Observadas:
Crecimiento de Hojas: Se observan nuevas hojas en desarrollo.
Salud de la Planta: Las hojas se visualizan gruesas y robustas, lo cual es un indicativo de que la planta está absorbiendo bien los nutrientes y el agua.
`;
        }
        if(this.value == 2){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
    <h3>Recovery and Improvement:</h3>
    <p>The Tropaeolum majus plant has shown significant recovery. The colors of the plant have become more vibrant, and its leaves have visibly improved in health and appearance. The stem has strengthened, acquiring a light pink hue.</p>

    <h2>Observed Modifications:</h2>
    <h3>Lushness and Color Improvement:</h3>
    <p>The plant has improved in lushness and color. The leaves now appear healthier, and the stem shows significant strengthening. The plant continues to exhibit signs of positive growth and development.</p>`;
        }
        if(this.value == 3){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
    <p>
        The Tropaeolum majus plant has developed rapidly, showing such exuberant growth that it resembles a weed. It is extremely lush, with several thick stems that have turned a yellowish-green color.
    </p>

    <h2>Observed Modifications:</h2>
    <p>
        Some leaves are wilted, and the plant continues to extend beyond the planter, invading other plants in the garden.
    </p>`;
        }
        if(this.value == 4){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
<p>
    The Tropaeolum majus plant is in very good condition and has begun to spread out.
</p>
<h2>Observed Modifications:</h2>
<p>
    The leaves are very vibrant and lush. The plant is invading the space of other plants.
</p>`;
        }
        if(this.value == 5){
            document.getElementById("tropaeolumD").innerHTML = `Estado General:
La planta muestra un crecimiento expansivo y constante frondosidad.
Modificaciones Observadas:
Expansión: La planta se está extendiendo por los jardines, ocupando más espacio.
Frondosidad: Presenta una frondosidad continua y numerosos tallos.
Hojas: Se observan pequeñas hojas saliendo, pero sin capullos ni flores visibles.
Invadido: Ha invadido la planta de berenjena.
`;
        }
        if(this.value == 6){
            document.getElementById("tropaeolumD").innerHTML = ``;
        }
        if(this.value == 7){
            document.getElementById("tropaeolumD").innerHTML = ``;
        }
        if(this.value == 8){
            document.getElementById("tropaeolumD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("tropaeolumD").innerHTML = ``;
        }
        if(this.value == 10){
            document.getElementById("tropaeolumD").innerHTML = ``;
        }
    }



