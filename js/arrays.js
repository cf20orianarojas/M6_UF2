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

    // Eliminar el primer valor del array, eñ color verd (shift)
    colors.shift();
    document.write(`<h2>Elimina el color verd: </h2>`);
    document.write(`<h3> ${colors} </h3>`);
}