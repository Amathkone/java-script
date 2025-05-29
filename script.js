Fonctions de manipulation de chaînes
// 1. Inverser une chaîne
function inverserChaine(chaine) {
  return chaine.split('').reverse().join('');
}

// 2. Compter les caractères
function compterCaracteres(chaine) {
  return chaine.length;
}

// 3. Mettre les mots en majuscule
function mettreMotsMajuscule(phrase) {
  return phrase.split(' ').map(mot => 
    mot.charAt(0).toUpperCase() + mot.slice(1)
  ).join(' ');
}


Fonctions de tableau
// 4. Rechercher le maximum et le minimum
function trouverMax(tableau) {
  return Math.max(...tableau);
}

function trouverMin(tableau) {
  return Math.min(...tableau);
}

// 5. Somme d'un tableau
function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}

// 6. Filtrer le tableau
function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}


Fonctions mathématiques
// 7. Factorielle
function factorielle(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 8. Vérification des nombres premiers
function estPremier(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 9. Suite de Fibonacci
function fibonacci(n) {
  const suite = [0, 1];
  
  for (let i = 2; i < n; i++) {
    suite[i] = suite[i-1] + suite[i-2];
  }
  
  return suite.slice(0, n);
}


Exemples d'utilisation
// Tests
console.log(inverserChaine("bonjour")); // "ruojnob"
console.log(compterCaracteres("hello")); // 5
console.log(mettreMotsMajuscule("bonjour tout le monde")); // "Bonjour Tout Le Monde"

const nombres = [3, 1, 4, 1, 5, 9];
console.log(trouverMax(nombres)); // 9
console.log(trouverMin(nombres)); // 1
console.log(sommeTableau(nombres)); // 23
console.log(filtrerTableau(nombres, x => x > 3)); // [4, 5, 9]

console.log(factorielle(5)); // 120
console.log(estPremier(17)); // true
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
