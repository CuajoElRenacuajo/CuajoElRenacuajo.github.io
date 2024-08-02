//albahaca
var sliderAlbahaca = document.getElementById("myRangeAlbahaca");
var outputAlbahaca = document.getElementById("demoAlbahaca");
outputAlbahaca.innerHTML = sliderAlbahaca.value;

sliderAlbahaca.oninput = function() {
    outputAlbahaca.innerHTML = `Week: ${this.value}`;
  document.getElementById("albahaca").src=`assets/images/albahaca/albahaca${this.value}.jpg`;

    if(this.value == 1){
        document.getElementById("albahacaD").innerHTML = `<p>Basil (Ocimum basilicum) is an aromatic and culinary herb that belongs to the Lamiaceae family. It is widely known and used in cooking for its distinctive aroma and flavor, as well as for its medicinal properties.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Vibrant Green Color:</strong> Basil displays a vibrant green color indicating good health and vitality.</p>
                                <p><strong>Lushness:</strong> The plant appears lush, with dense and exuberant growth.</p>`;
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
        document.getElementById("albahacaD").innerHTML = `Albahaca
Estado General:
La planta muestra una mejoría general.
Modificaciones Observadas:
Hojas: Las hojas han mejorado, aunque algunas tienen hoyuelos.
Frondosidad: Continúa siendo frondosa con un color verde uniforme y un brillo saludable.
`;
    }
    if(this.value == 7){
        document.getElementById("albahacaD").innerHTML = `<h2>General State:</h2>
    <p>The basil plant is vibrant and bushy, with a striking color and in excellent overall condition.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaves: The leaves are in perfect condition, displaying great bushiness.</p>
    <p>Growth: New leaves are growing at the top of the stem.</p>`;
    }
    if(this.value == 8){
        document.getElementById("albahacaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The basil plant appears visibly healthy.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The plant continues to look healthy and lush.</p>

    <p>Leaves: The leaves are in perfect condition, with their shine intact.</p>`;
    }
    if(this.value == 9){
        document.getElementById("albahacaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The basil shows a color that varies between yellowish and greenish.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The plant shows signs of holes in some leaves, but it continues to develop.</p>
    <p>Leaves: Despite the signs of deterioration, the plant continues to produce new leaves, maintaining a bushy appearance.</p>`;
    }
    if(this.value == 10){
        document.getElementById("albahacaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has shown remarkable recovery and growth.</p>

    <h2>Observed Modifications:</h2>
    <p>Foliage and Color: There is increased lushness and the growth of small new leaf shoots. The plant has eliminated previous blemishes and presents a bright lime green color.</p>`;
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
            document.getElementById("berenjenaBlancaD").innerHTML = `<p>The white eggplant is a variety of eggplant with a white, shiny skin. It has a smooth, creamy flesh with a milder and less bitter taste compared to other eggplants. It is ideal for various dishes such as roasts, stews, and salads, and its tender texture absorbs flavors well.</p>

                                <h2>Important Changes:</h2>
                                <h3>Height and Foliage:</h3>
                                <p>The white eggplant plant has reached a notable height and has very lush leaves of a striking green color, indicating healthy growth.</p>`;
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
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Flower Color Change:</strong> The flowers have changed to a brownish color, indicating that they may be starting to wilt.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Thickening of Stems:</strong> The stems have increased in thickness, providing more solid support for the plant's growth.<br>
    <strong>Leaf Condition:</strong> Although the leaves are large and lush, some show signs of damage such as spots and marks. Despite this, the overall color remains vibrant and intense.<br>
    <strong>Leaf Size Increase:</strong> The leaves have significantly increased in size and are very lush.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
    <p>New Flower Buds: The flowers have begun to sprout again, displaying a whitish-purple color, indicating an active flowering stage.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaf Damage: Despite their size, the leaves show several holes as if they have been bitten. This damage might be related to the presence of pests.</p>

    <p>Leaf Growth: The leaves have grown considerably in size and thickness, extending beyond the planter and showing robust development.</p>`;
        }
        if(this.value == 8){
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
    <p>Leaf Damage: The leaves are extremely perforated but still maintain their green color. This damage suggests a persistent issue with pests or deficiencies.</p>

    <h2>Observed Modifications:</h2>
    <p>Absence of Flowers: No buds or flowers are visible on the plant, indicating a lack of development in the flowering stage.</p>

    <p>Overall Condition of the Plant: The white eggplant plant shows no signs of improvement.</p>`;
        }
        if(this.value == 9){
            document.getElementById("berenjenaBlancaD").innerHTML = `<h2>Important Changes:</h2>
    <p>Development of Buds: Small buds with a light green color have been observed, suggesting the plant is beginning to enter a flowering stage.</p>

    <h2>Observed Modifications:</h2>
    <p>Coloration of Lower Leaves: The lower leaves show a yellowish color at the edges, which could indicate a nutrient deficiency or watering issues.</p>
    <p>Increase in Size and Number of Leaves: The plant has experienced a noticeable increase in both the size and number of leaves, replacing the damaged leaves that were filled with holes.</p>`;
        }
        if(this.value == 10){
            document.getElementById("berenjenaBlancaD").innerHTML = ` <h2>Important Changes:</h2>
    <p>Plant Growth: The plant has grown considerably, becoming very bushy. However, despite its development, the flower buds did not produce white eggplants, and the fruiting process was not completed.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaf Condition: The leaves have large holes, indicating severe damage.</p>`;
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
            document.getElementById("berenjenaD").innerHTML = `<p>The eggplant (Solanum melongena) is an herbaceous plant from the Solanaceae family, cultivated for its edible fruits. Native to Asia, its fruit varies in color from dark purple to white, with a smooth, shiny skin. The flesh is spongy and has a slightly bitter taste when raw, which mellows when cooked.</p>

                                <h2>Important Changes:</h2>
                                <h3>Active Development:</h3>
                                <p>The eggplant is currently in an active development phase, where the growth of its leaves and the formation of new shoots can be observed.</p>`;
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
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Expansion and Lushness:</strong> The eggplant plant has shown significant growth, expanding and becoming more lush.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf Growth:</strong> The plant's leaves have increased in size, indicating healthy vegetative development. However, some leaves have holes, possibly due to pests or diseases. Despite these damages, the leaves maintain a vibrant green color, reflecting overall good health.<br>
    <strong>Flowering Start:</strong> The plant has begun to flower, with several buds still to open, displaying a lilac hue.<br>
    <strong>Fruit Development:</strong> A small eggplant is growing healthily with an intense purple color.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The eggplant plant has become very lush, with a significant increase in the number of leaves. This dense growth is a positive sign of the plant's health and vitality.</p>

    <h2>Observed Modifications:</h2>
    <p>The leaves show signs of discoloration and have holes, which could indicate the presence of pests or nutritional deficiencies. Despite these issues, the plant continues to grow vigorously.</p>
    <p>Two eggplants have formed on the plant. One is noticeably larger and appears ready for harvest, while the other is smaller and still developing. The maturity of the larger fruit is a good indicator that the plant is in a productive phase.</p>
    <p>The leaves seem to be shading the eggplants from the sun. This shading may protect the fruits from direct sun exposure, but it is also important to ensure they receive enough light for proper development.</p>`;
        }
        if(this.value == 8){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
    <p>Increase in Leaf Density: The eggplant plant has increased its leaf density, with a denser growth of leaves causing them to extend beyond its planting space and intermingle with other plants.</p>

    <h2>Observed Modifications:</h2>
    <p>Pest Infestation: The plant has been attacked by pests. The leaves and eggplants show visible damage, with bites and scars of green color deviating from the normal purple color of the eggplants. This infestation has caused significant damage to both the foliage and the fruits.</p>

    <p>Condition of the Leaves: Despite the pest attack, the leaves have become more lush. However, some are extending beyond the planting area, causing them to mix with leaves from other crops.</p>

    <p>Development of Buds and Flowers: The plant displays a greater number of buds, and some have started to bloom with a purple hue. This development indicates that the plant remains in an active flowering phase despite the pest issues.</p>

    <p>Growth and Damage to Fruits: Two small eggplants are observed growing, but both have been affected by the pest and show bites. Despite their growth, the fruits are impacted, which could affect their quality and size.</p>`;
        }
        if(this.value == 9){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
    <p>Increase in Size and Foliage: The eggplant has reached a larger size and increased foliage. Despite the continued presence of small pests, the plant has shown robust development.</p>

    <h2>Observed Modifications:</h2>
    <p>Fruit Harvest: Two eggplants have been successfully harvested. One of them is in the growth process, slightly touching the ground due to its weight. This growing eggplant displays a very bright purple color, indicating good health and fruit development.</p>
    <p>Pest Status: Although the plant is still affected by small pests, the overall growth and foliage of the plant have improved significantly.</p>`;
        }
        if(this.value == 10){
            document.getElementById("berenjenaD").innerHTML = `<h2>Important Changes:</h2>
    <p>Leaf Condition: Although the eggplant leaves show signs of deterioration, such as slight color changes and the appearance of holes, some are still growing. The leaves also have dry areas, indicating stress or health issues with the plant.</p>

    <h2>Observed Modifications:</h2>
    <p>Buds and Flowers: Vibrant lilac buds and flowers can be seen. The presence of flowers indicates that the plant remains in an active production phase despite the issues with the leaves.</p>

    <p>Fruit Development: The plant displays three eggplants in development. While the fruits are growing, they show slight damage and yellowish hues. These signs might indicate problems with the plant, possibly related to environmental conditions or the overall health of the plant.</p>`;
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
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant shows vigorous and healthy development.</p>
    <h2>Observed Modifications:</h2>
    <p>The plant is lush with a strong stem. It already has buds and flowers, indicating good maturity and health.</p>.
`;
        }
        if(this.value == 2){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>Increase in bud size.</p>
    <h2>Observed Modifications:</h2>
    <p>Some buds are flowering into peppers. More flowers have appeared, although the plant has lost some lower leaves.</p>`;
        }
        if(this.value == 3){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>Development of a large pepper.</p>
    <h2>Observed Modifications:</h2>
    <p>The pepper is slightly deformed but bright and healthy. There is a slight color change in the stem, possibly due to the large size of the pepper.</p>`;
        }
        if(this.value == 4){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>Increase in plant lushness and size.</p>
    <h2>Observed Modifications:</h2>
    <p>New pepper buds are developing, with small green balls protruding. The largest pepper has increased in size and looks healthy.</p>`;
        }
        if(this.value == 5){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant maintains its good condition.</p>
    <h2>Observed Modifications:</h2>
    <p>The plant continues developing buds with light green and white tones.</p>`;
        }
        if(this.value == 6){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>Increase in the number of buds.</p>
    <h2>Observed Modifications:</h2>
    <p>Buds are in the process of becoming peppers, showing a dark and shiny green color. The plant shows increased lushness.</p>`;
        }
        if(this.value == 7){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has produced some peppers that have been harvested.</p>
    <h2>Observed Modifications:</h2>
    <p>The plant is larger and lush, but some leaves are chewed. It has been invaded by another plant, although it remains stable and in development.</p>`;
        }
        if(this.value == 8){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has become more lush.</p>
    <h2>Observed Modifications:</h2>
    <p>It maintains a dark green color with shiny leaves, although some appear chewed.</p>`;
        }
        if(this.value == 9){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>Initiation of new flowering.</p>
    <h2>Observed Modifications:</h2>
    <p>Some leaves appear dark and wilted. The plant is heavily invaded by other plants.</p>`;
        }
        if(this.value == 10){
            document.getElementById("chilesD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant shows stability and the growth of red, shiny peppers.</p>
    <h2>Observed Modifications:</h2>
    <p>The plant has developed well despite the limited available space.</p>`;
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
            document.getElementById("germanchamolineD").innerHTML = `<h2>Estado General:</h2>
<p>
    La planta ha desaparecido casi en su totalidad, dejando solo una pequeña parte visible en la base.
</p>
<h2>Modificaciones Observadas:</h2>
    <p><strong>Tallaje:</strong> La planta contiene muy pocos tallos.</p>
    <p><strong>Hojas:</strong> La cantidad de hojas ha disminuido considerablemente.</p>
    <p><strong>Crecimiento:</strong> Solo queda el crecimiento en la base de la planta, que se mantiene firme a pesar de la falta de tallos.</p>
`;
        }
        if(this.value == 7){
            document.getElementById("germanchamolineD").innerHTML = `<h2>Important Changes:</h2>
    <p>The German chamomile plant has experienced significant deterioration. Currently, only a weak stem remains without leaves, and it has not produced any buds during its development. The plant has withered.</p>`;
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
            document.getElementById("girasolD").innerHTML = `<p>The sunflower (Helianthus annuus) is a plant from the Asteraceae family. It is characterized by its large yellow flower that follows the sun as it moves across the sky throughout the day. In addition to its ornamental use, sunflowers are cultivated for their seeds, which are edible and used in sunflower oil production.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Similar Size:</strong> Both sunflower plants are of the same size.</p>
                                <p><strong>Additional Support:</strong> Each plant has support that aids in its growth.</p>`;
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
            document.getElementById("girasolD").innerHTML = `<h2>General State:</h2>
<p>
    The sunflowers are in a transitional phase, showing some signs of deterioration while new buds are developing.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Petals:</strong> The sunflowers have started to lose their petals.
</p>
<p>
    <strong>Buds:</strong> Several new buds have grown and are about to bloom.
</p>
<p>
    <strong>Leaves:</strong> The leaves show slight deterioration, with some exhibiting holes.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
    <p>The sunflower plant has experienced significant expansion in its blooming, with a considerable increase in the number of flowers.</p>

    <h2>Observed Modifications:</h2>
    <p>Blooming: There has been a notable proliferation of new flowers, while several flowers have reached maturity and are starting to wilt.</p>
    <p>Stem: The stem shows flexible growth, adapting in different directions, suggesting an ability to adapt and structural development.</p>`;
        }
        if(this.value == 8){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
    <p>The sunflowers continue to bloom, although some are nearing the end of their cycle.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The plant appears healthy and robust.</p>

    <p>Stems: The stems have a thick and flexible structure, indicating good plant health.</p>`;
        }
        if(this.value == 9){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has increased its flower production despite the invasion of competing plants.</p>

    <h2>Observed Modifications:</h2>
    <p>Flowers and Stem: More sunflowers have developed compared to those that have finished their cycle. The new sunflowers have a bright yellow color, although the upper stems show slight discoloration. The plant remains resilient despite being heavily invaded.</p>`;
        }
        if(this.value == 10){
            document.getElementById("girasolD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has bloomed and extended along the sides.</p>

    <h2>Observed Modifications:</h2>
    <p>Flowers and Leaves: Sunflowers in full bloom are observed, along with others that are wilting. The leaves are gradually falling, and some sunflowers have lost their petals. Despite the invasive plants, many sunflowers bloomed, and the plant extended towards the sides.</p>`;
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
            document.getElementById("habasD").innerHTML = `<p>Green beans are a legume originating from the Middle East. They are cultivated for their small, rounded fruits, which can be green or yellow. They are nutritious, rich in proteins, fiber, vitamins, and minerals. Green beans are used in soups, stews, and salads, and require a temperate climate for cultivation.</p>

                                <h2>Important Changes:</h2>
                                <h3>Sprouts:</h3>
                                <p>This first weak they still havent sprouted</p>`;
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
            document.getElementById("habasD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>First Harvest:</strong> The first green bean pod has been produced, marking the beginning of the harvest cycle. This is a significant milestone in the plant's development.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf and Flower Loss:</strong> Some leaves and flowers have fallen off, reducing the plant's overall lushness. This could be a natural response to the plant's life cycle or environmental conditions.<br>
    <strong>Leaf Condition:</strong> Some leaves show pitting and have yellowed tips, which may indicate issues such as nutritional deficiencies, pests, or adverse growing conditions.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("habasD").innerHTML = `<h2>Important Changes:</h2>
    <p>The number of leaves on the green bean plant has decreased significantly. Out of the three plants, only one is in better condition, showing healthy green colors and dark green stems, along with a large pod.</p>

    <h2>Observed Modifications:</h2>
    <p>The other two plants are in poor condition. Their leaves are wilted and show a yellowish tint with spots, indicating possible stress, nutritional deficiencies, or pests. Despite these issues, these plants still have between 4 and 6 pods.</p>`;
        }
        if(this.value == 8){
            document.getElementById("habasD").innerHTML = ``;
        }
        if(this.value == 9){
            document.getElementById("habasD").innerHTML = `<h2>Important Changes:</h2>
    <p>General Deterioration: Significant deterioration has been observed in the green bean plants. The number of leaves has decreased, showing a mix of green and yellow tones.</p>

    <h2>Observed Modifications:</h2>
    <p>Condition of the Leaves: The leaves show signs of being nibbled, suggesting the presence of pests. Additionally, the green bean pods have turned a brownish color, indicating they may be overripe or in poor condition.</p>`;
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
            document.getElementById("hinojoD").innerHTML = `<p>Sweet fennel is a perennial herbaceous plant from the Apiaceae family. Native to the Mediterranean, it is cultivated for its feathery leaves and anise-flavored seeds. It is used in cooking to season various dishes and in traditional medicine for digestive issues. It requires a warm climate and well-drained soil.</p>

                                <h2>Important Changes:</h2>
                                <h3>Airy and Light Appearance:</h3>
                                <p>Sweet fennel has an elegant and distinctive structure due to its finely divided leaves, giving it a character similar to an open hand with elongated fingers.</p>
                            
                                <h3>Growth of New Stems:</h3>
                                <p>New stems are observed emerging at the base of the plant.</p>`;
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
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Size Increase:</strong> The fennel plant has tripled the size of its initial stalk.
</p>
<p>
    <strong>Space Invasion:</strong> The flexible stalks are encroaching upon and affecting the blooming of the white eggplant plant.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Coloration of Stems and Leaves:</strong> The stems are a light green color, while the leaves are a dark green.
</p>
<p>
    <strong>Impact on Other Plants:</strong> Despite its delicate appearance, the fennel is invading more than four other plants in the same garden.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Growth and Expansion: The fennel continues to grow significantly and is using other plants for support.</p>

    <p>Coverage of Other Plants: It is covering the rosemary plant and has started to touch the ground.</p>

    <h2>Observed Modifications:</h2>
    <p>Lack of Blooming: No blooming is visible on the plant.</p>

    <p>Exceeding Support: The fennel has considerably surpassed its original support structure.</p>`;
        }
        if(this.value == 8){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
    <p>General Appearance: The fennel plant shows visible signs of delicate and irregular stability due to the large number of stems it possesses.</p>

    <p>Leaf Density: The density of the plant is so high that it makes it difficult to observe nearby plants.</p>

    <h2>Observed Modifications:</h2>
    <p>Irregular Growth: The stems grow irregularly and appear very curved.</p>

    <p>Uniform Color: The plant maintains a uniform color, with no notable variations in tone.</p>`;
        }
        if(this.value == 9){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The fennel plant has reached a stage of vegetative expansion, where it continues to grow in size and thickness. The stems have significantly increased in diameter and the leaf density has risen, giving the plant a more lush appearance.</p>

    <h2>Observed Modifications:</h2>
    <p>The fennel shows sustained growth, with an increase in foliage mass and stem thickness. Although no new flowers or significant structural changes have been observed, the plant is using its space and available support to expand.</p>`;
        }
        if(this.value == 10){
            document.getElementById("hinojoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Branch Growth: The fennel developed a large number of branches that spread out and occupied the space of other plants.</p>
    
    <p>Impact on Other Plants: The expansion of the branches prevented the growth of nearby plants, affecting their development.</p>

    <h2>Observed Modifications:</h2>
    <p>Decrease in Density: Although the plant spread over the ground, its density decreased.</p>

    <p>General Health: Despite its delicate appearance, the fennel remained healthy and demonstrated remarkable resilience to environmental conditions.</p>`;
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
            document.getElementById("jitomateD").innerHTML = `<p>Tomatos (Solanum lycopersicum) are a variety of tomato distinguished primarily by their red color and sweeter flavor compared to other types of tomatoes. They are often used in cooking to prepare sauces, salads, and other dishes.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Considerable Size:</strong> The tomatos plant has reached a considerable size.</p>
                                <p><strong>Support:</strong> The plant has a support structure that helps it stay upright and avoid deformities.</p>`;
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
            document.getElementById("jitomateD").innerHTML = `<h2>General State:</h2>
<p>
    <strong>Fruits:</strong> There is an increase in the number of developing tomatoes, which are starting to show a reddish pigment, indicating the beginning of their ripening process.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf Density:</strong> The leaves have developed greater density and volume, contributing to a more robust appearance of the plant.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("jitomateD").innerHTML = `<h2>General State:</h2>
    <p>The tomatoes continue to grow and are displaying a bright green color, progressing towards the maturation stage.</p>

    <h2>Observed Modifications:</h2>
    <p>Impact of Invasive Plants: Although there are invasive plants around, they have not significantly affected the growth and production of the tomatoes.</p>`;
        }
        if(this.value == 8){
            document.getElementById("jitomateD").innerHTML = ` <h2>Important Changes:</h2>
    <p>The tomatoes show varied development in terms of ripeness, with some already ripe and others in the process of changing color.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The plant is lush and exhibits robust growth.</p>

    <p>Environment: The plant has grown well despite competition from nearby invasive plants.</p>`;
        }
        if(this.value == 9){
            document.getElementById("jitomateD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has successfully completed the tomato ripening stage.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The tomatoes have reached a deep red color, indicating the completion of ripening. The plant's stems are robust and flexible, which led to the addition of a rope support to improve stability.</p>
    <p>Leaves and Support: The use of the support provides greater resistance to the plant, contributing to its overall stability and health.</p>`;
        }
        if(this.value == 10){
            document.getElementById("jitomateD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has achieved significant extension and growth in its fruits.</p>

    <h2>Observed Modifications:</h2>
    <p>Fruits and Stems: Several tomatoes are ready for harvest, while others are still in their green phase. The stems show flexibility and strength, supported by additional staking. Some wilted leaves and yellowing of the stems are observed.</p>`;
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
            document.getElementById("marigoldD").innerHTML = `<h2>General State:</h2>
<p>
    The African Marigold plant shows mixed development, with new flowers in full bloom and signs of deterioration in older flowers.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Bud and Flower Development:</strong> Remaining buds have bloomed into beautiful, fluffy flowers with a vibrant white color. Older flowers have begun to wilt, turning brown and decreasing in size.
</p>
<p>
    <strong>Invasive Plants:</strong> There is a slight invasion of other plants, which has reduced the available space for the African Marigold and may be affecting its growth and development.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
    <p>The flowers of the African Marigold are in overall good condition.</p>

    <h2>Observed Modifications:</h2>
    <p>Flower Condition: Some flowers are wilting, indicating the end of their cycle.</p>
    <p>Invasive Plants: The increase in invasive plants has been notable, though it has not hindered the development of new buds.</p>
    <p>Buds: Several buds ready to bloom are still visible.</p>`;
        }
        if(this.value == 8){
            document.getElementById("marigoldD").innerHTML = ` <h2>Important Changes:</h2>
    <p>The flowers of the African marigold plant have begun to wilt.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The flowers show signs of wilting, and no new buds have formed.</p>

    <p>Environment: The plant is being overtaken by other plants, which may be affecting its development.</p>`;
        }
        if(this.value == 9){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant shows significant recovery in its floral development.</p>

    <h2>Observed Modifications:</h2>
    <p>Flowers and Buds: All wilted flowers have disappeared. Currently, white flowers with white hues and numerous buds are observed, indicating healthy development despite competition from invasive plants.</p>`;
        }
        if(this.value == 10){
            document.getElementById("marigoldD").innerHTML = `<h2>Important Changes:</h2>
    <p>The lifecycle of the flower is clearly observable.</p>

    <h2>Observed Modifications:</h2>
    <p>Flowering Cycle: The bud is visible, followed by a flower with a yellowish hue, and finally, wilting. Although it is difficult to distinguish due to the presence of other plants, the plant continued to bloom throughout the process.</p>`;
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
            document.getElementById("mentaD").innerHTML = `<h2>Estado General:</h2>
<p>
    La planta ha experimentado una pérdida significativa de hojas, con el tallo visible en gran parte de la planta. A pesar de esta pérdida, se observan signos de recuperación en forma de nuevas hojas emergiendo en la base y en la parte media de la planta.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("mentaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The mint plant has shown notable recovery. While it does not have an abundance of leaves, it has experienced significant growth in new stems.</p>

    <h2>Observed Modifications:</h2>
    <p>Growth of Stems: The plant has developed thicker stems.</p>
    <p>New Leaves: New mint leaves are sprouting from the newly grown stems.</p>`;
        }
        if(this.value == 8){
            document.getElementById("mentaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The mint has shown notable recovery, evidenced by an increase in density and the development of new leaves. The plant has improved in color and thickness.</p>

    <h2>Observed Modifications:</h2>
    <p>Space: Despite the recovery, there is an invasion of its space by other plants.</p>`;
        }
        if(this.value == 9){
            document.getElementById("mentaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The mint plant has experienced a setback in its growth.</p>

    <h2>Observed Modifications:</h2>
    <p>Growth of Stems and Leaves: There is a decrease in the number of stems and leaves. However, two strong stems continue to develop with small emerging leaves.</p>`;
        }
        if(this.value == 10){
            document.getElementById("mentaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has experienced a new loss of leaves.</p>

    <h2>Observed Modifications:</h2>
    <p>Recovery and Growth: Despite the loss of leaves, the stem remains firm and is starting to show new leaf shoots.</p>`;
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
            document.getElementById("oreganoD").innerHTML = `<p>Oregano is an aromatic herb widely used in cooking and traditional medicine. Its scientific name is Origanum vulgare. It is native to Europe but is now cultivated in various parts of the world.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Lush Growth:</strong> The oregano plant has grown densely and abundantly.</p>`;
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
            document.getElementById("oreganoD").innerHTML = `<h2>Estado General:</h2>
<p>
    El orégano se encuentra en un excelente estado, mostrando un crecimiento vigoroso y expansivo.
</p>
<h2>Modificaciones Observadas:</h2>
<p>
    <strong>Frondosidad:</strong> El orégano se ve visiblemente frondoso, con un aumento constante en su densidad.
</p>
<p>
    <strong>Color:</strong> Su color es llamativo y vibrante.
</p>
<p>
    <strong>Crecimiento:</strong> Está por invadir otras plantas a su alrededor debido a su expansión.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("oreganoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The oregano has shown notable growth and considerable bushiness. The plant is in the process of covering a large portion of its growing area.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaf Coloration: Some leaves exhibit yellowish tones, suggesting changes in the plant's health or potential deficiencies.</p>`;
        }
        if(this.value == 8){
            document.getElementById("oreganoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Leaves: Some leaves show spots or contrasts, indicating possible problems or the presence of pests.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The oregano continues to show good lushness, but is being invaded by nearby plants.</p>`;
        }
        if(this.value == 9){
            document.getElementById("oreganoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The oregano has been partially covered by invasive plants, making separation difficult.</p>

    <h2>Observed Modifications:</h2>
    <p>Mix with Invasive Plants: The mix with invasive plants is noticeable, complicating separation due to similar colors. A large number of dimples are observed on the oregano leaves.</p>`;
        }
        if(this.value == 10){
            document.getElementById("oreganoD").innerHTML = ` <h2>Important Changes:</h2>
    <p>The oregano has undergone significant expansion.</p>

    <h2>Observed Modifications:</h2>
    <p>Growth and Condition: The plant has grown considerably despite competition with invasive plants. Although many leaves have dents, the plant continues to spread.</p>`;
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
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>Significant Growth:</strong> The cucumber plant has grown considerably in size and foliage, becoming more lush.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Leaf Condition:</strong> Some leaves have started to wilt, which may indicate a need to check watering conditions or the presence of pests.<br>
    <strong>Tendril Development:</strong> The tendrils continue to climb, and additional supports have been provided due to the increased weight of the plant.<br>
    <strong>Bud Blooming:</strong> The buds have bloomed with an intense yellow color, and more small buds have appeared, indicating an active flowering phase.<br>
    <strong>Fruit Growth:</strong> A cucumber has grown that is very slender and long, showing healthy fruit development.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The cucumber plant continues to grow and expand. This vigorous growth has led the plant to extend into areas without support, demonstrating its ability to expand even in the absence of additional supporting structures.</p>

    <h2>Observed Modifications:</h2>
    <p>Several leaves are observed to be wilting. It is important to note that these are the initial leaves that have accompanied the cucumber plant since its planting, which may indicate a natural cycle of aging and replacement of foliage.</p>
    <p>An interesting event has occurred where one of the vines has intertwined with a cucumber fruit, deforming it into an irregular, elongated, and thin shape. Despite these changes, the blooming continues with a very vibrant hue, indicating a healthy and active flowering phase. Additionally, new buds are emerging, suggesting that the plant is in a continuous reproductive phase and promising future fruit production.</p>`;
        }
        if(this.value == 8){
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Change in Growth Direction: The cucumber plant has stopped extending sideways due to the lack of support for climbing. Instead of continuing in that direction, the plant has started spreading along the ground, extending out of the planter. To manage this expansion, additional supports have been added to guide the plant's growth.</p>

    <h2>Observed Modifications:</h2>
    <p>Development of Additional Supports: Extra supports have been installed to help the plant adapt to its new growth direction and provide the necessary support for the vines that can no longer climb.</p>

    <p>Condition of Leaves and Vines: A strip of leaves has wilted, including some buds and vines. This deterioration may be due to inadequate support and the change in growth direction. The affected leaves appear visibly more drooped.</p>

    <p>Deformation of Cucumber: The developing cucumber has reached a larger size but shows deformities due to previous interactions with the vines. The deformation may be a result of inadequate support and disorganized growth.</p>

    <p>Emergence of New Buds: Despite the previous issues, new buds have emerged, indicating that the plant remains in an active phase of flowering and fruit production.</p>`;
        }
        if(this.value == 9){
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Relocation and Growth Redirection:
       The cucumber plant has been relocated and is now properly directed. The part that was extending out of the planter has been trimmed, allowing the plant to integrate properly with the available support.</p>

    <h2>Observed Modifications:</h2>
    <p>Adaptation to Support: After the relocation, the plant has started to adjust correctly to the provided support. This adjustment has allowed the plant to grow in the desired direction and optimize its space within the planter.</p>
    <p>Cucumber Harvest: The cucumber has been successfully harvested.</p>
    <p>Condition of Buds: The buds have bloomed, showing a bright yellow hue. This flowering indicates that the plant is in an active production phase and is awaiting the formation of new fruits.</p>
    <p>Condition of Leaves: Some leaves have withered, which is a natural sign of aging or stress. Additionally, some leaves are drooping, possibly due to a lack of adequate support.</p>`;
        }
        if(this.value == 10){
            document.getElementById("pepinoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The cucumber plant is in a slightly wilted state. Most of the leaves are drooping, some with yellowish discoloration and others completely dried. Despite this deterioration, the base of the plant remains healthy, and some healthy leaves are still standing.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaf and Stem Condition: The stem shows a yellowish color, which may indicate problems such as nutritional deficiencies or environmental stress. The fallen and dried leaves also suggest that the plant has experienced adverse conditions.</p>

    <p>Development of the Buds: The buds did not flower beyond the two cucumbers that were harvested. The lack of additional flowering might be a sign that the plant is in decline or has reached the end of its productive cycle.</p>

    <p>Condition of Healthy Leaves: Despite the overall issues, some healthy leaves remain on the plant. These leaves indicate that parts of the plant are still functioning well and contributing to its stability.</p>`;
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
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant appears healthy and lush.</p>
    <h2>Observed Modifications:</h2>
    <p>New leaf shoots and small green buds are visible.</p>`;
        }
        if(this.value == 2){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Growth of new leaves.</p>
    <h2>Observed Modifications:</h2>
    <p>The leaves have a strong green color, are glossy, and wrinkled due to growth. Some buds are flowering.</p>`;
        }
        if(this.value == 3){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Development of a healthy, large bell pepper.</p>
    <h2>Observed Modifications:</h2>
    <p>The bell pepper is a yellow-green color, thick, and large. The stems have changed color, likely due to thickening to support the greater weight.</p>`;
        }
        if(this.value == 4){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant is facing a pest issue.</p>
    <h2>Observed Modifications:</h2>
    <p>The leaves are being eaten, which has changed their color.</p>`;
        }
        if(this.value == 5){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Decrease in the plant's lushness.</p>
    <h2>Observed Modifications:</h2>
    <p>The leaves show significant deterioration and some twigs are missing. However, the buds remain healthy.</p>`;
        }
        if(this.value == 6){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Significant improvement in the plant.</p>
    <h2>Observed Modifications:</h2>
    <p>New leaves have grown back, showing a very lush plant with vibrant green color. Some leaves are still chewed and some pest presence is observed.</p>`;
        }
        if(this.value == 7){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Formation of a large, healthy bell pepper.</p>
    <h2>Observed Modifications:</h2>
    <p>Despite pest problems, the plant continues to produce bell peppers, indicating good overall development.</p>`;
        }
        if(this.value == 8){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has been freed from pests.</p>
    <h2>Observed Modifications:</h2>
    <p>The plant is lush, with vibrant color, and the stem has strengthened. The twigs have wrapped around the main stem. New buds are emerging.</p>`;
        }
        if(this.value == 9){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Increase in plant size and lushness.</p>
    <h2>Observed Modifications:</h2>
    <p>Although the lower leaves are torn, the plant maintains good color, indicating good health. New leaves are growing.</p>`;
        }
        if(this.value == 10){
            document.getElementById("pimientoD").innerHTML = `<h2>Important Changes:</h2>
    <p>Presence of three large and healthy bell peppers.</p>
    <h2>Observed Modifications:</h2>
    <p>Despite some leaf deterioration due to a return of pests, the plant has shown resilience and durability.</p>`;
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
            document.getElementById("romanchamolineD").innerHTML = `<h2>Estado General:</h2>
<p>
    La planta ha disminuido drásticamente y muestra un aspecto notablemente deteriorado.
</p>
<h2>Modificaciones Observadas:</h2>
    <p><strong>Frondosidad:</strong> No muestra signos de frondosidad.</p>
    <p><strong>Tallaje:</strong> Solo contiene unas pocas ramitas en el tallo.</p>
`;
        }
        if(this.value == 7){
            document.getElementById("romanchamolineD").innerHTML = `<h2>Important Changes:</h2>
    <p>The Roman chamomile plant is no longer present in the cultivation area, suggesting that it has completely withered. During its growth process, it did not show any signs of bud development, which could indicate that the growing conditions were not suitable for its development.</p>`;
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
            document.getElementById("romeroD").innerHTML = `<p>Rosemary is a perennial plant from the Lamiaceae family, native to the Mediterranean. It is an aromatic shrub that can grow up to 2 meters in height, with narrow leaves and flowers ranging from blue to white. It is known for its culinary, medicinal, and aromatherapy uses. Rosemary prefers warm climates and well-drained soils.</p>

                                <h2>Important Changes:</h2>
                                <h3>Plant Development:</h3>
                                <p>The rosemary plant is in an initial growth stage, with a relatively small size. Currently, the plant has approximately 8 small branches.</p>`;
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
            document.getElementById("romeroD").innerHTML = `<h2>Important Changes:</h2>
<p>
    <strong>General Development:</strong> Rosemary has started to spread outwards, with a branch about to emerge from the planter. Despite the presence of other plants around it, this has not negatively impacted its development.
</p>
<h2>Observed Modifications:</h2>
<p>
    <strong>Expansion and Growth:</strong> The plant is spreading out and appears more lush in the center. It has also experienced an increase in height, indicating healthy and continuous growth.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("romeroD").innerHTML = `<h2>Important Changes:</h2>
    <p>Vertical Growth: The rosemary has continued to grow, increasing by a few centimeters in height.</p>

    <h2>Observed Modifications:</h2>
    <p>Color Change: Some branches have begun to show a yellowish tint, which could indicate stress or deficiency.</p>

    <p>Competition with Other Plants: The plant is heavily invaded by nearby species, which might be affecting its development.</p>`;
        }
        if(this.value == 8){
            document.getElementById("romeroD").innerHTML = `<h2>Important Changes:</h2>
    <p>Color Change: The stem has changed to a yellowish-green hue.</p>

    <h2>Observed Modifications:</h2>
    <p>Invasion of Other Plants: Surrounding plants have continued to grow, making it difficult to see the condition of the rosemary.</p>

    <p>Expansion and Growth: Rosemary continues to expand and grow, adopting an irregular shape.</p>`;
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
            document.getElementById("sageD").innerHTML = `<p>Sage, (Salvia officinalis), aromatic herb of the mint family (Lamiaceae) cultivated for its pungent edible leaves. Sage is native to the Mediterranean region and is used fresh or dried as a flavouring in many foods, particularly in stuffings for poultry and pork and in sausages.</p>
            
            <h2>Important Changes:</h2>
    <p>The sage plant is in excellent condition, displaying vibrant and uniform color.</p>
    <h2>Observed Modifications:</h2>
    <p>New leaf shoots are growing, indicating good development.</p>`;
        }
        if(this.value == 2){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant's lushness has increased.</p>
    <h2>Observed Modifications:</h2>
    <p>The color remains consistent and the plant continues to grow vigorously, despite being surrounded by invasive plants.</p>`;
        }
        if(this.value == 3){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>No distinctive changes have been observed this week.</p>
    <h2>Observed Modifications:</h2>
    <p>The lower part of the plant is the lushest, with new leaves growing and expanding.</p>`;
        }
        if(this.value == 4){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>Signs of wilting have appeared on some leaves, both upper and lower.</p>
    <h2>Observed Modifications:</h2>
    <p>The upper and lower leaves are showing symptoms of wilting, which may indicate some stress or deficiency in the plant.</p>`;
        }
        if(this.value == 5){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has been largely covered by invasive plants, making detailed observation difficult.</p>
    <h2>Observed Modifications:</h2>
    <p>Despite the competition, the plant remains healthy and lush, maintaining a healthy color.</p>`;
        }
        if(this.value == 6){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has experienced a notable increase in its lushness.</p>
    <h2>Observed Modifications:</h2>
    <p>The large number of leaves makes it hard to see the stem. No signs of buds or flowering have been observed, but leaf growth has been significant.</p>`;
        }
        if(this.value == 7){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant continues to grow and slightly increase in size despite competition with other plant species.</p>
    <h2>Observed Modifications:</h2>
    <p>Some leaves have holes, possibly due to insects or pests.</p>`;
        }
        if(this.value == 8){
            document.getElementById("sageD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has increased in height, showing good vertical development.</p>
    <h2>Observed Modifications:</h2>
    <p>The leaves have a gummy texture with white particles, along with slight deterioration and some holes. Throughout this process, no bud growth has been observed, but the plant has proven to be resilient, adapting well despite the competition with surrounding invasive plants.</p>`;
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
            document.getElementById("shisoD").innerHTML = `<p>Shiso is a herbaceous plant from the Lamiaceae family, native to Asia, and is especially valued in Japanese, Chinese, and Korean cuisine. Also known as perilla or perilla leaf, this plant is characterized by its oval-shaped, serrated leaves. There are two main varieties: green and red.</p>

                                <h2>Green Shiso:</h2>
                                <p>Green shiso has a fresh, herbaceous flavor, similar to mint and basil. It is commonly used in salads, sushi, and as a garnish for fish and meat dishes.</p>
                            
                                <h2>Red Shiso:</h2>
                                <p>Red shiso has a more earthy and sweet-sour flavor, with leaves that tend to be red or dark purple. It is less common in daily cooking and is more often used for decoration and adding color to dishes.</p>`;
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
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>
<h3>Important Changes:</h3>
<p>
    <strong>Coloration and General State:</strong> It shows a lime green color. Some central leaves are wilted and have holes.
</p>
<p>
    <strong>Invasion:</strong> It has been invaded by other plants, such as fennel.
</p>
<h3>Observed Modifications:</h3>
<p>
    <strong>Impact of the Environment:</strong> It has not grown further and has been affected by competition with other plants.
</p>
<h2>Red Shiso</h2>
<h3>Important Changes:</h3>
<p>
    <strong>Growth Status:</strong> No additional significant growth has been observed.
</p>
<p>
    <strong>Leaf Coloration:</strong> Some leaves have begun to discolor to a lighter green.
</p>
<p>
    <strong>Visibility of Stems:</strong> The stems are now more visible.
</p>
<h3>Observed Modifications:</h3>
<p>
    <strong>Condition of Leaves:</strong> The leaves have holes.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>
    <h3>Important Changes:</h3>
    <p>Size Increase: The green shiso has significantly increased in size, with a notable growth in the size and robustness of its leaves.</p>
    <p>Leaf Condition: Most of the leaves now have more holes and are struggling for space due to competition with other plants.</p>

    <h3>Observed Modifications:</h3>
    <p>Plant Condition: Despite the growth, the green shiso continues to face issues with space and competition from other plants.</p>

    <h2>Red Shiso</h2>
    <h3>Important Changes:</h3>
    <p>Size Increase: The red shiso has increased in size, particularly in the area with more available space, especially on the right side.</p>
    <p>Leaf Condition: The leaves exhibit a combination of purple and green colors, with several holes.</p>

    <h3>Observed Modifications:</h3>
    <p>Further observations pending.</p>`;
        }
        if(this.value == 8){
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>

    <h3>Important Changes:</h3>
    <p>Size Increase: The plant has increased significantly in size. The leaves appear brighter and healthier.</p>

    <p>Leaf Condition: The holes in the leaves have decreased. However, the plant continues to invade the purple shiso.</p>

    <h3>Observed Modifications:</h3>
    <p>Pest Impact: The pest is interfering with the optimal growth of the green shiso.</p>

    <h2>Red Shiso</h2>

    <h3>Important Changes:</h3>
    <p>Size Expansion: It has spread to the right but does not show significant growth in size.</p>

    <p>Leaf Condition: The discoloration of the leaves is more visible, with shades between green and purple.</p>

    <h3>Observed Modifications:</h3>
    <p>Competition with Green Shiso: The purple shiso continues to be affected by the invasion of the green shiso.</p>`;
        }
        if(this.value == 9){
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>
    <h2>Important Changes:</h2>
    <p>The green shiso has grown considerably in height. The leaves appear strong, fluffy, and large. Despite being invaded by other plants, the green shiso continues to expand.</p>

    <h2>Observed Modifications:</h2>
    <p>The plant continues to develop despite the competition and limited space.</p>

    <h2>Red Shiso</h2>
    <h2>Important Changes:</h2>
    <p>The red shiso is slowly expanding towards the right side in search of more space. The leaves have changed to a combination of green and purple tones.</p>

    <h2>Observed Modifications:</h2>
    <p>The red shiso is adapting to the limited space, with changes in leaf coloration.</p>`;
        }
        if(this.value == 10){
            document.getElementById("shisoD").innerHTML = `<h2>Green Shiso</h2>
    <h2>Important Changes:</h2>
    <p>Overcoming the Invasion: The green shiso has managed to overcome the invasion of other plants, standing out for its health and lushness.</p>
    
    <p>Development: Despite the challenges, the green shiso has grown considerably, showing healthy and robust foliage.</p>

    <h2>Observed Modifications:</h2>
    <p>Color and Condition: The leaves maintain a vibrant green color and a fluffy texture. The green shiso has demonstrated remarkable recovery and expansion capabilities.</p>

    <h2>Red Shiso</h2>
    <h2>Important Changes:</h2>
    <p>Space Adaptation: Although the red shiso initially had a larger size, it has been overtaken by the green shiso. The plant has extended towards the right side in search of more space.</p>
    
    <p>Color Change: The leaves of the red shiso have changed to a predominantly green hue, though they retain their original shine.</p>

    <h2>Observed Modifications:</h2>
    <p>Condition and Growth: Despite the invasion by the green shiso, the red shiso continues to show vibrant color and has maintained growth towards the available space.</p>`;
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
            document.getElementById("tomillofaustiniD").innerHTML = `<p>Thyme (Thymus faustini) is a small perennial plant that grows compactly, reaching a height of 15-30 cm. Its leaves are oval, green, and aromatic, and the flowers, which appear in clusters, are small and pale pink or white. This thyme is used in Mediterranean cuisine as a seasoning and also possesses antimicrobial and digestive properties.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Height and Lushness:</strong> Thymus faustini is taller than table thyme and shows great lushness.</p>`;
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
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Estado General:</h2>
<p>
    La planta ha mostrado un notable crecimiento en tamaño y robustez. El color de las hojas y los tallos ha intensificado, evidenciando una mayor adaptación y vigor. El desarrollo general de la planta indica una buena salud y crecimiento.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
    <p>There has been an increase in the presence of invasive plants in the surrounding area, which has affected the available space around the thyme plant.</p>

    <h2>Observed Modifications:</h2>
    <p>The Thyme (Thymus faustini) plant has not experienced any drastic changes.</p>`;
        }
        if(this.value == 8){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has grown in height and density, appearing more robust.</p>

    <h2>Observed Modifications:</h2>
    <p>The color of the leaves and stems is uniform, reflecting a healthy state.</p>`;
        }
        if(this.value == 9){
            document.getElementById("tomillofaustiniD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has not experienced any drastic changes recently.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaves and Blending: There is an increased amount of leaves, but the plant still has uniform colors and is slowly blending with nearby plants.</p>`;
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
            document.getElementById("tomillomesaD").innerHTML = `<p>Thyme is a perennial aromatic plant from the Lamiaceae family. It is primarily cultivated for its leaves, which are used as a seasoning in cooking and in traditional medicine for their aromatic properties and health benefits.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Lush Growth:</strong> The thyme plant is dense and abundant.</p>`;
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
            document.getElementById("tomillomesaD").innerHTML = `<h2>Estado General:</h2>
<p>
    La planta de tomillo de mesa ha experimentado un crecimiento notable, mostrando un aspecto saludable y frondoso.
</p>
<h2>Modificaciones Observadas:</h2>
<p>
    <strong>Frondosidad:</strong> La planta se ha expandido desuniformemente, pero con una mayor cantidad de hojas en los tallos, dándole un aspecto frondoso.
</p>
<p>
    <strong>Color:</strong> El color de las hojas es uniforme, indicativo de buena salud.
</p>`;
        }
        if(this.value == 7){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The thyme has significantly increased in size.</p>

    <h2>Observed Modifications:</h2>
    <p>Size and Bushiness: The plant has experienced significant growth, resulting in increased bushiness.</p>
    <p>Branches: The stems are now longer and thicker, contributing to a more robust structure.</p>`;
        }
        if(this.value == 8){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The Thyme Mesa has experienced an increase in lushness, with irregular expansion. The stems show a very light green color.</p>

    <h2>Observed Modifications:</h2>
    <p>Stems: The stems have a light green color, indicating healthy development.</p>`;
        }
        if(this.value == 9){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has increased its spread, although its bushiness has decreased.</p>

    <h2>Observed Modifications:</h2>
    <p>Growth and Twigs: The thyme has spread irregularly, showing a large number of twigs. However, its bushiness has decreased.</p>`;
        }
        if(this.value == 10){
            document.getElementById("tomillomesaD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has lost many of its leaves.</p>

    <h2>Observed Modifications:</h2>
    <p>Leaf Density and Color: Despite being bushy, the plant shows a significant loss of leaves. The stems have changed to a yellowish-green color.</p>`;
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
            document.getElementById("tropaeolumD").innerHTML = `<p>Tropaeolum majus is a perennial herbaceous plant, commonly grown as an annual. It is characterized by its round, heart-shaped leaves and showy flowers in colors such as red, orange, or yellow.</p>

                                <h2>Important Changes:</h2>
                                <p><strong>Overall Structure:</strong> The plant shows a reddish stem and a limited number of leaves.</p>
                                <p><strong>Leaf Development:</strong> The leaves have a greenish hue with damaged edges, and new small leaves are beginning to appear.</p>`;
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
            document.getElementById("tropaeolumD").innerHTML = `<h2>Estado General:</h2>
<p>
    La planta se ha extendido por todo el jardín y muestra un crecimiento generalizado.
</p>
<h2>Modificaciones Observadas:</h2>
<p><strong>Florecimiento:</strong> Ha florecido una pequeña flor de color anaranjado con un toque rojizo en el centro.</p>
<p><strong>Tallaje y Hojas:</strong> Los tallos son gruesos y las hojas son frondosas, mostrando diferentes tonalidades.</p>
`;
        }
        if(this.value == 7){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
    <p>The only flower that grew has completed its cycle and has withered.</p>

    <h2>Observed Modifications:</h2>
    <p>The plant continues to spread across the garden.</p>

    <p>New leaves have developed, displaying color variations between green and yellow.</p>`;
        }
        if(this.value == 8){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
    <p>The Tropaeolum majus has experienced significant expansion and has extended beyond the planter it is in.</p>

    <h2>Observed Modifications:</h2>
    <p>General Condition: The plant shows great density with numerous stems and a yellow-green color.</p>
    <p>Leaves: Although the plant is lush, some leaves have started to wilt.</p>`;
        }
        if(this.value == 9){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant continues to expand, but there are no significant changes in its development.</p>

    <h2>Observed Modifications:</h2>
    <p>Growth and Condition: The plant continues to spread with new leaf growth, although some leaves have started to wither.</p>`;
        }
        if(this.value == 10){
            document.getElementById("tropaeolumD").innerHTML = `<h2>Important Changes:</h2>
    <p>The plant has lost most of its leaves.</p>

    <h2>Observed Modifications:</h2>
    <p>Current State: Few leaves remain with a whitish color, while the plant was previously lush. Only the stems are still visible.</p>`;
        }
    }



