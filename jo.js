let Array = ["Olma", "Banan", "Uzum", "Gilos"];

alert("Array uzunligi: " + Array.length);

let confirmDelet = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz. Rozimisiz?");

if (confirmDelet) {
    Array.pop();
}

console.log(Array);
