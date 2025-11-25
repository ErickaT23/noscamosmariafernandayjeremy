// database.js (sin type="module")
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyB14ygYNykR40-PEUPuG3nztjf6sZOcSdQ",
  authDomain: "mariayjavier-4ff9a.firebaseapp.com",
  databaseURL: "https://mariayjavier-4ff9a-default-rtdb.firebaseio.com",
  projectId: "mariayjavier-4ff9a",
  storageBucket: "mariayjavier-4ff9a.firebasestorage.app",
  messagingSenderId: "8499851730",
  appId: "1:8499851730:web:5c172840e23397d8e2580b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exportar funciones globales
window.guardarDeseo = function(nombre, mensaje) {
  return push(ref(db, "buenos-deseos/"), {
    nombre,
    mensaje,
    timestamp: new Date().toISOString()
  });
};

window.escucharDeseos = function(callback) {
  const wishesRef = ref(db, "buenos-deseos/");
  onValue(wishesRef, (snapshot) => {
    const lista = [];
    snapshot.forEach((child) => {
      lista.push(child.val());
    });
    callback(lista);
  });
};
window.toggleWishes = function () {
  const wishesDiv = document.getElementById("wishes-container");

  if (wishesDiv.classList.contains("visible")) {
    wishesDiv.classList.remove("visible");
    wishesDiv.classList.add("hidden");
    return;
  }

  if (wishesDiv.dataset.loaded === "true") {
    wishesDiv.classList.remove("hidden");
    wishesDiv.classList.add("visible");
    return;
  }

  onValue(ref(db, "buenos-deseos/"), (snapshot) => {
    requestIdleCallback(() => {
      wishesDiv.innerHTML = "";

      snapshot.forEach((childSnapshot) => {
        const wish = childSnapshot.val();
        const wishElement = document.createElement("p");
        wishElement.innerHTML = `<strong>${wish.nombre}:</strong> ${wish.mensaje}`;
        wishesDiv.appendChild(wishElement);
      });

      wishesDiv.dataset.loaded = "true";
      wishesDiv.classList.remove("hidden");
      wishesDiv.classList.add("visible");
    });
  });
};

