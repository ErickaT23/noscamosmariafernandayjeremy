// guests.js

const guests = [
  { id: "1", name: "Familia Valle Dubón", passes: 3, gender: "mixto" },
  { id: "2", name: "Edgar Dubón y Rosa", passes: 2, gender: "mixto" },
  { id: "3", name: "Sucel Dubón", passes: 2, gender: "femenino" },
  { id: "4", name: "Ariselda Dubón", passes: 1, gender: "femenino" },
  { id: "5", name: "René Dubón y familia", passes: 6, gender: "mixto" },
  { id: "6", name: "Ricardo Dubón", passes: 2, gender: "masculino" },
  { id: "7", name: "Jeffrey Dubón", passes: 2, gender: "masculino" },
  { id: "8", name: "Brandon Dubón Y Lizbeth", passes: 2, gender: "mixto" },
  { id: "9", name: "Lety y familia", passes: 4, gender: "femenino" },
  { id: "10", name: "Blanca Artiaga", passes: 1, gender: "femenino" },
  { id: "11", name: "Alejandro Morales", passes: 4, gender: "masculino" },
  { id: "12", name: "Oscar de Leon", passes: 2, gender: "masculino" },
  { id: "13", name: "Alejandro Lima", passes: 2, gender: "masculino" },
  { id: "14", name: "Didier Velasquez", passes: 2, gender: "masculino" },
  { id: "15", name: "Hugo Corado e Irma Artiaga", passes: 2, gender: "mixto" },
  { id: "16", name: "Junior", passes: 2, gender: "masculino" },
  { id: "17", name: "Daniela", passes: 2, gender: "femenino" },
  { id: "18", name: "Claudia y Juan Carlos", passes: 3, gender: "mixto" },
  { id: "19", name: "Juan Carlos Almorza", passes: 1, gender: "masculino" },
  { id: "20", name: "Natalia Almorza", passes: 2, gender: "femenino" },
  { id: "21", name: "Frank Barahona", passes: 1, gender: "masculino" },
  { id: "22", name: "Luis Izeppi", passes: 2, gender: "masculino" },
  { id: "23", name: "Byron Bac", passes: 1, gender: "masculino" },
  { id: "24", name: "Juan Carlos González", passes: 2, gender: "masculino" },
  { id: "25", name: "Andy Vega", passes: 2, gender: "masculino" },
  { id: "26", name: "Iván Herrera", passes: 1, gender: "masculino" },
  { id: "27", name: "Edgar Alay", passes: 1, gender: "masculino" },
  { id: "28", name: "Fernando", passes: 2, gender: "masculino" },
  { id: "29", name: "Victor Cruz", passes: 2, gender: "masculino" },
  { id: "30", name: "Edna Palala", passes: 2, gender: "femenino" },
  { id: "31", name: "Rossana Ávila", passes: 2, gender: "femenino" },
  { id: "32", name: "Ohashi Lam", passes: 2, gender: "femenino" },
  { id: "33", name: "Karelyn Delgado", passes: 2, gender: "femenino" },
  { id: "34", name: "Stefany De León", passes: 2, gender: "femenino" },
  { id: "35", name: "Milton Hernández", passes: 2, gender: "masculino" },
  { id: "36", name: "Familia Felipe Raymundo", passes: 4, gender: "mixto" },
  { id: "37", name: "Eduardo Felipe & Ana", passes: 2, gender: "mixto" },
  { id: "38", name: "María Luisa Jimenez", passes: 1, gender: "femenino" },
  { id: "39", name: "Bryan Alexander Ramírez", passes: 1, gender: "masculino" },
  { id: "40", name: "Marleny Orellana", passes: 1, gender: "femenino" },
  { id: "41", name: "Yuli Orellana", passes: 1, gender: "femenino" },
  { id: "42", name: "Elvia Polanco", passes: 1, gender: "femenino" },
  { id: "43", name: "Amparo Orellana", passes: 1, gender: "femenino" },
  { id: "44", name: "Idalma Orellana", passes: 3, gender: "femenino" },
  { id: "45", name: "Sulma Morales", passes: 2, gender: "femenino" },
  { id: "46", name: "Rosa Pineda", passes: 3, gender: "femenino" },
  { id: "47", name: "Nelson Dardón & familia", passes: 3, gender: "mixto" },
  { id: "48", name: "Leonel Cortéz", passes: 1, gender: "masculino" },
  { id: "49", name: "Ana Ruth Lucero", passes: 2, gender: "femenino" },
  { id: "50", name: "Angelica Constanza", passes: 1, gender: "femenino" },
  { id: "51", name: "Wendy Vásquez", passes: 2, gender: "femenino" },
  { id: "52", name: "César & Stephanie", passes: 2, gender: "mixto" },
  { id: "53", name: "José Eduardo García", passes: 1, gender: "masculino" },
  { id: "54", name: "Maria Flores", passes: 2, gender: "femenino" },
  { id: "55", name: "Ma. Fernanda Solorzando", passes: 2, gender: "femenino" },
  { id: "56", name: "Allyson Velasquez", passes: 2, gender: "femenino" },
  { id: "57", name: "Mario Veliz", passes: 2, gender: "masculino" },
  { id: "58", name: "Nicole Montenegro", passes: 1, gender: "femenino" },
  { id: "59", name: "Nicolle Noriega", passes: 2, gender: "femenino" },
  { id: "60", name: "Jean Ferrari", passes: 2, gender: "masculino" },
  { id: "61", name: "Sergio Solares", passes: 2, gender: "masculino" },
  { id: "62", name: "Héctor Solorzano", passes: 2, gender: "masculino" },
  { id: "63", name: "Fernanda Santa Cruz", passes: 2, gender: "femenino" },
  { id: "64", name: "Samuel Nájera", passes: 2, gender: "masculino" },
  { id: "65", name: "Crista Velasquez", passes: 2, gender: "femenino" },
  { id: "66", name: "Erick del Cid & esposa", passes: 2, gender: "mixto" },
  { id: "67", name: "Matilde Morales", passes: 2, gender: "femenino" },
  { id: "68", name: "Sandy Gómez", passes: 2, gender: "femenino" },
  { id: "69", name: "Heidy Moreno", passes: 2, gender: "femenino" },
  { id: "70", name: "Alejandro Pérez", passes: 2, gender: "masculino" },
  { id: "71", name: "Gabriel Ortega", passes: 2, gender: "masculino" },
  { id: "72", name: "Andrea Alonzo", passes: 2, gender: "femenino" },
  { id: "73", name: "Rosa Rodriguez", passes: 2, gender: "femenino" },
  { id: "74", name: "Astrid Castillo", passes: 2, gender: "femenino" },
  { id: "75", name: "Luis Estrada", passes: 2, gender: "masculino" },
  { id: "76", name: "Helen Veliz", passes: 2, gender: "femenino" },
  { id: "77", name: "Invitación sin nombre, solo con pases", passes: 2, gender: "mixto" },
  { id: "78", name: "Invitación sin nombre, solo con pases", passes: 2, gender: "mixto" },
  { id: "79", name: "Invitación sin nombre, solo con pases", passes: 2, gender: "mixto" },
  { id: "80", name: "Invitación sin nombre, solo con pases", passes: 2, gender: "mixto" },
  { id: "81", name: "Invitación sin nombre, solo con pases", passes: 2, gender: "mixto" },
  { id: "82", name: "Eva Piedrasanta", passes: 2, gender: "femenino" },
  { id: "83", name: "Regina Rodas", passes: 2, gender: "femenino" },
  { id: "84", name: "Sonia Recinos", passes: 1, gender: "femenino" },
  { id: "85", name: "Te invitamos a nuestra boda", passes: 1, gender: "mixto" },
  { id: "86", name: "Te invitamos a nuestra boda", passes: 2, gender: "mixto" },
  { id: "87", name: "Te invitamos a nuestra boda", passes: 3, gender: "mixto" }
];

document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get("id");
  const guest = guests.find(g => g.id === guestId);
  
  
  const guestNameSection = document.getElementById('guest-name-section');
  const passesSection = document.getElementById('passes-section');
  
  
  if (guest) {
  // Mostrar número de pases
  if (passesSection) {
  passesSection.classList.add('visible');
  document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
  }
  
  
  // Mostrar nombre solo si no es una invitación genérica
  if (guest.name.includes("Invitación sin nombre")) {
  if (guestNameSection) guestNameSection.style.display = 'none';
  } else {
  let invitationText = `¡${guest.name}, `;
  
  
  if (guest.passes === 1) {
  invitationText += guest.gender === "femenino" ? "estás invitada!" : "estás invitado!";
  } else {
  invitationText += guest.gender === "femenino" ? "están invitadas!" : "están invitados!";
  }
  
  
  if (guestNameSection) {
  guestNameSection.classList.add('visible');
  document.getElementById('guest-name').textContent = invitationText;
  }
  }
  } else {
  // Invitado no encontrado
  if (guestNameSection) guestNameSection.classList.add('visible');
  document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
  const invitationInfo = document.querySelector('.invitation-info-section');
  if (invitationInfo) invitationInfo.style.display = 'none';
  }
  });

window.guests = guests;