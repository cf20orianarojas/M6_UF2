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
    document.write(`<h2>Mètode at():</h2>`);
    document.write(`<h3>Array inicial: ${emojis} → ex: emojis.at(1) → Resultat: ${methodAt} </h3>`);

    let nouEmojis = ['🤖', '😾', '🤡'];
    // fa un nou array amb els arrays concatenats
    let newArray = emojis.concat(nouEmojis);
    document.write(`<h2>Mètode concat():</h2>`);
    document.write(`<h3>Array inicial: ${emojis} → ex: emojis.concat(nouEmojis)  → Resultat: ${newArray} </h3>`);
    
    // retorna el objecte del array 
    let nouArray = new Array("🍎", " 🍐", " 🍌", " 🍓"); // array declarat amb constructor
    document.write(`<h2>constructor:</h2>`);
    document.write(`<h3>Array inicial: ${nouArray} → ex: emojis.constructor → Resultat: ${nouArray.constructor} </h3>`);
    
    // copia els elements del array a la posició 4 y reemplaça els elements de la posició 0 fins la 3
    document.write(`<h2>Mètode copyWithin():</h2>`);
    document.write(`<h3>Array inicial: ${newArray} → ex: emojis.copyWithin(0, 4) → Resultat: ${newArray.copyWithin(0,3)} </h3>`);

    // entries posa una clau/index als elements
    document.write(`<h2>Mètode entries():</h2>`);
    document.write(`<h3>Array inicial: ${emojis} → ex: emojis.entries() → Resultat: </h3>`);
    let entries = emojis.entries();
    for (let el of entries) {
        document.write(`<h3>key/value: ${el}</h3>`);
    }
    // every retornarà true si tots els elements compleixen la condició
    let noms = ['ana', ' juanma', ' maria', ' alba'];
    let every = noms.every(el => el.endsWith('a'));
    document.write(`<h2>Mètode every():</h2>`);
    document.write(`<h3>Array inicial: ${noms} → ex: noms.every(el => el.endsWith('a')) → Resultat: ${every} </h3>`);
    
    // fill canvia tots els elements de array amb el nou value
    document.write(`<h2>Mètode fill():</h2>`);
    document.write(`<h3>Array inicial: ${emojis} → ex: emojis.fill('👾') → Resultat: ${emojis.fill('👾')} </h3>`);
    
    // filter els num parells
    let num = [0, 3, 4, -3, 5, 6, 7, 20, 9];
    document.write(`<h2>Mètode filter():</h2>`);
    document.write(`<h3>Array inicial: ${num} → ex: num.filter(n => n % 2 === 0) → Resultat: ${num.filter(n => n % 2 === 0)} </h3>`);

    // find el primer número negatiu
    document.write(`<h2>Mètode find():</h2>`);
    document.write(`<h3>Array inicial: ${num} → ex: num.find(n => n < 0) → Resultat: ${num.find(n => n < 0)} </h3>`);
    
    // findIndex del primer número negatiu
    document.write(`<h2>Mètode findIndex():</h2>`);
    document.write(`<h3>Array inicial: ${num} → ex: num.findIndex(n => n < 0) → Resultat: num[${num.findIndex(n => n < 0)}] </h3>`);
    
    // flat
    let array = [[0, 1, 2], [6, 5], [4]];
    let nou = array.flat();
    document.write(`<h2>Mètode flat():</h2>`);
    document.write(`<h3>Array inicial: [[0, 1, 2], [6, 5], [4]] → ex: array.flat() → Resultat: ${nou} </h3>`);

    let paraules = ['Hola', 'Mon', 'JavaScript', 'flatMap']; // flapMap, recorre les paraules del array y retorna segon la función, la longitud de cada paraula en un nou array
    document.write(`<h2>Mètode flatMap():</h2>`);
    document.write(`<h3>Array inicial: ['Hola', 'Mon', 'JavaScript', 'flatMap']  → ex: array.flatMap() → Resultat: ${paraules.flatMap(paraules => paraules.length)}</h3>`);

    document.write(`<h2> Mètode forEach():</h2>`);
    document.write(`<h3>Array: [${nouArray}] → ex: frutas.forEach(fruta  => { /*...*/ }); → Resultat: </h3>`);
    // forEach() itera sobre els elements de un array
    nouArray.forEach(fruta => {
        document.write(`<h3>${fruta}</h3>`);
    });

    // retorna un array de un objete
    let obj = 'Hola mon!';
    document.write(`<h2>Mètode from():</h2>`);
    document.write(`<h3>Objecte inicial: ${obj} → ex: Array.from(obj) → Resultat: [${Array.from(obj)}] </h3>`);

    // El mètode includes determina si un array inclou un determinat, retornant true o false.
    let inclou = nouArray.includes('😭');
    document.write(`<h2>Mètode includes():</h2>`);
    document.write(`<h3>Array: [${nouArray}] → ex: array.includes('😭') → Resultat: ${inclou} </h3>`);

    // El mètode indexOf trobar la posició d'un element dins d'un array. Si l'element no existeix, retorna -1.
    let index = nouArray.indexOf(' 🍌');
    document.write(`<h2>Mètode indexOf():</h2>`);
    document.write(`<h3>Array: [${nouArray}] → ex: array.indexOf('🍌') → Resultat: ${index} </h3>`);
    
    // Comprova si un objecte és un array
    let esArray = Array.isArray(noms);
    document.write(`<h2>Mètode isArray():</h2>`);
    document.write(`<h3>Array [${noms}] → ex: Array.isArray(noms) → Resultat: ${esArray} </h3>`);

    // El mètode join() retorna un array com a cadena de text. Es pot especificar qualsevol separador, per defecte és la coma (,).
    let join = noms.join('...');
    document.write(`<h2>Mètode join():</h2>`);
    document.write(`<h3>Array [${noms}] → ex: array.join('...') → Resultat: ${join} </h3>`);

    // keys() retorna un objeto iterador de Array con las claves de un array
    let keys = nouEmojis.keys();
    document.write(`<h2>Mètode keys():</h2>`);
    document.write(`<h3>Array: [${nouEmojis}] → ex: → Resultat: </h3>`);
    for(let key of keys) {
        document.write(`<h3>Key: ${key}</h3>`);
    }

    // lastIndexOf() retorna l'últim índex (posició) d'un valor especificat.
    let fruites = ['poma', 'pinya', 'mango', 'poma', 'maduixa'];
    let lastIndex = fruites.lastIndexOf('poma');
    document.write(`<h2>Mètode lastIndexOf():</h2>`);
    document.write(`<h3>Array: [${fruites}] → ex: fruites.lastIndexOf('poma') → Resultat: ${lastIndex} </h3>`);

    // length retorna la longitud del array
    document.write(`<h2>Mètode length:</h2>`);
    document.write(`<h3>Array: [${fruites}] → ex: fruites.length → Resultat: ${fruites.length} </h3>`);

    // map() crea un nou array amb els elements transformats
    let numeros = [1, 2, 3, 4];
    let map = numeros.map(n => n * 2);
    document.write(`<h2>Mètode map():</h2>`);
    document.write(`<h3>Array: [${numeros}] → ex: numeros.map(n => n * 2) → Resultat: [${map}] </h3>`);

    // pop() elimina o retorna el darrer element del array
    document.write(`<h2>Mètode pop():</h2>`);
    document.write(`<h3>Array: [${nouArray}] → ex: array.pop() → Resultat: ${nouArray.pop()} nou array: [${nouArray}] </h3>`);
    
    // prototype permet afegir noves propietats i mètodes a els arrays.
    Array.prototype.prototypeEx = function() {
        for(let i = 0; i < this.length; i++) {
            this[i] = this[i].toUpperCase();
        }
    };
    noms.prototypeEx();
    document.write(`<h2>prototype:</h2>`);
    document.write(`<h3>Array: [ana, juanma, maria, alba] → ex: Array.prototype.prototypeEx = function() { /* this[i].toUpperCase */ }  → Resultat: [${noms}] </h3>`);
    
    // afegeix un nou element al final de l'array 
    document.write(`<h2>Mètode push():</h2>`);
    nouEmojis.push('😭');
    document.write(`<h3>Array: ['🤖', '😾', '🤡'] → ex: emojis.push('😭') → Resultat: [${nouEmojis}] </h3>`);
    
    // Redueix els elements de un array a un unic valor
    document.write(`<h2>Mètode reduce():</h2>`);
    // aquesta funció suma tots els elements del array i utilitza un acumulador per a contar tot 
    let reduce = numeros.reduce((count, n) => {
        return count + n;
    }, 0);
    document.write(`<h3>Array: [${numeros}] → ex: numeros.reduce((count, n) => { return count + n; },0); → Resultat: total ${reduce} </h3>`);

    // document.write(`<h3> → reduceRight() → Resultat:  </h3>`);
    // document.write(`<h3> → reverse() → Resultat:  </h3>`);
    // document.write(`<h3> → shift() → Resultat:  </h3>`);
    // document.write(`<h3> → slice() → Resultat:  </h3>`);
    // document.write(`<h3> → some() → Resultat:  </h3>`);
    // document.write(`<h3> → sort() → Resultat:  </h3>`);
    // document.write(`<h3> → splice() → Resultat:  </h3>`);
    // document.write(`<h3> → toString() → Resultat:  </h3>`);
    // document.write(`<h3> → unshift() → Resultat:  </h3>`);
    // document.write(`<h3> → valueOf() → Resultat:  </h3>`);
}