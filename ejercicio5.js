
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

// Remover "Dani" y "Juan"
people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);

// Mover "Luis" al inicio
people.splice(people.indexOf("Luis"), 1);
people.unshift("Luis");

// Agregar tu nombre al final
people.push("TuNombre");

// Imprimir "Maria" y salir del ciclo
for (let person of people) {
    console.log(person);
    if (person === "Maria") break;
}

// Mostrar el índice de "Maria" y la lista final
console.log(people.indexOf("Maria"));
console.log(people);
