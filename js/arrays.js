/* Crea una funció JavaScript que crei un array de 6 colors per nom (‘verd’, ‘vermell’, ‘groc’, ‘blau’, ‘negre’, ‘blanc’) i que:
    * digui si tots els colors són menors que ‘marró’  every / sort
    * et torni els colors que són menors que ‘marró’ filter?
    * et torni els darrers 2 colors (independentment de quants hi hagin abans) slice
    * afegeixi el color ‘turquesa’ push
    * elimini el color ‘verd’ (ha d’escriure en una pàgina Web) unshift  */
function arrayColors() {
    let colors = ['verd','vermell', 'groc', ' blau', 'negre', ' blanc'];

    // retornarà true si tots (every) els colors són estrictament menors que 'marro', i false en cas contrari.
    let sonMenors = colors.every(color => color < 'marro');
    document.write(`<h2>Tots els colors són menors que marró? </h2>`);
    document.write(`<h3>${sonMenors ? 'Si' : 'No'}</h3>`);

    // retornarà només els colors del array menors que marró (filtre)
    let colorsMenors = colors.filter(color => color < 'marro');
    document.write(`<h2>Color menors que marró: <h2>`);
    document.write(`<h3>${colorsMenors }</h3>`);

    // retorna els darres 2 colors (splice)
    let darrers = colors.slice(colors.length - 2);
    document.write(`<h2>Darrers 2 colors del array: <h2>`);
    document.write(`<h3>${darrers}</h3>`);

    // afegeixi el color 'turquesa' (push)
    colors.push(' turquesa');
    document.write(`<h2>Afegeix el color turquesa: </h2>`);
    document.write(`<h3> ${colors} </h3>`);

    // Eliminar el primer valor del array, el color verd (shift)
    colors.shift();
    document.write(`<h2>Elimina el color verd: </h2>`);
    document.write(`<h3> ${colors} </h3>`);
}

function metodesArray() {
    let emojis = ['✨', '🥑', '😍'];
    document.write(`<h1>Mètodes de l'objete Array</h1>`);
    // retorna el element a la posició del parametre
    let methodAt = emojis.at(1);
    document.write(`<h3>Array inicial: ${emojis} → Mètode at(): emojis.at(1) → Resultat: ${methodAt} </h3>`);

    let nouEmojis = ['🤖', '😾', '🤡'];
    // fa un nou array amb els arrays concatenats
    let newArray = emojis.concat(nouEmojis);
    document.write(`<h3>Array inicial: ${emojis} → Mètode concat(): emojis.concat(nouEmojis)  → Resultat: ${newArray} </h3>`);
    
    // retorna el objecte del array 
    let nouArray = new Array("🍎", " 🍐", " 🍌", " 🍓"); // array declarat amb constructor
    document.write(`<h3>Array inicial: ${nouArray} → Mètode constructor: emojis.constructor → Resultat: ${nouArray.constructor} </h3>`);
    
    // copia els elements del array a la posició 4 y reemplaça els elements de la posició 0 fins la 3
    document.write(`<h3>Array inicial: ${newArray} → Mètode copyWithin(): emojis.copyWithin(0, 4) → Resultat: ${newArray.copyWithin(0,3)} </h3>`);

    // entries posa una clau/index als elements
    document.write(`<h3>Array inicial: ${emojis} → Mètode entries(): emojis.entries() → Resultat: </h3>`);
    let entries = emojis.entries();
    for (let el of entries) {
        document.write(`<h3>key/value: ${el}</h3>`);
    }
    // every retornarà true si tots els elements compleixen la condició
    let noms = ['ana', ' juanma', ' maria', ' alba'];
    let every = noms.every(el => el.endsWith('a'));
    document.write(`<h3>Array inicial: ${noms} → Mètode every(): noms.every(el => el.endsWith('a')) → Resultat: ${every} </h3>`);
    
    // fill canvia tots els elements de array amb el nou value
    document.write(`<h3>Array inicial: ${emojis} → Mètode fill(): emojis.fill('👾') → Resultat: ${emojis.fill('👾')} </h3>`);
    
    // filter els num parells
    let num = [0, 3, 4, -3, 5, 6, 7, 20, 9];
    document.write(`<h3>Array inicial: ${num} → Mètode filter(): num.filter(n => n % 2 === 0) → Resultat: ${num.filter(n => n % 2 === 0)} </h3>`);

    // find el primer número negatiu
    document.write(`<h3>Array inicial: ${num} → Mètode find(): num.find(n => n < 0) → Resultat: ${num.find(n => n < 0)} </h3>`);
    
    // findIndex del primer número negatiu
    document.write(`<h3>Array inicial: ${num} → Mètode findIndex(): num.findIndex(n => n < 0) → Resultat: num[${num.findIndex(n => n < 0)}] </h3>`);
    
    // flat
    let array = [[0, 1, 2], [6, 5], [4]];
    let nou = array.flat();
    document.write(`<h3>Array inicial: [[0, 1, 2], [6, 5], [4]] → Mètode flat(): array.flat() → Resultat: ${nou} </h3>`);

    let paraules = ['Hola', 'Mon', 'JavaScript', 'flatMap']; // flapMap, recorre les paraules del array y retorna segon la función, la longitud de cada paraula en un nou array
    document.write(`<h3>Array inicial: ['Hola', 'Mon', 'JavaScript', 'flatMap']  → Mètode flatMap(): array.flatMap() → Resultat: ${paraules.flatMap(paraules => paraules.length)}</h3>`);

    document.write(`<h3>Array inicial: [${nouArray}] → Mètode forEach(): frutas.forEach(fruta  => { /*...*/ }); → Resultat: </h3>`);
    // forEach() itera sobre els elements de un array
    nouArray.forEach(fruta => {
        document.write(`<h3>${fruta}</h3>`);
    });

    // document.write(`<h3> from() </h3>`);
    // document.write(`<h3> includes() </h3>`);
    // document.write(`<h3> indexOf() </h3>`);
    // document.write(`<h3> isArray() </h3>`);
    // document.write(`<h3> join() </h3>`);
    // document.write(`<h3> keys() </h3>`);
    // document.write(`<h3> lastIndexOf() </h3>`);
    // document.write(`<h3> length() </h3>`);
    // document.write(`<h3> map() </h3>`);
    // document.write(`<h3> pop() </h3>`);
    // document.write(`<h3> prototype </h3>`);
    // document.write(`<h3> push() </h3>`);
    // document.write(`<h3> reduce() </h3>`);
    // document.write(`<h3> reduceRight() </h3>`);
    // document.write(`<h3> reverse() </h3>`);
    // document.write(`<h3> shift() </h3>`);
    // document.write(`<h3> slice() </h3>`);
    // document.write(`<h3> some() </h3>`);
    // document.write(`<h3> sort() </h3>`);
    // document.write(`<h3> splice() </h3>`);
    // document.write(`<h3> toString() </h3>`);
    // document.write(`<h3> unshift() </h3>`);
    // document.write(`<h3> valueOf() </h3>`);
}