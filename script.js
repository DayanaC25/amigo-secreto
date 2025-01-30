let friends = []; // Array para almacenar los nombres

// Función para agregar un amigo a la lista
function addFriend() {
  const friendName = document.getElementById('friendName').value;

  // Validar si el campo de texto está vacío
  if (friendName.trim() === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre al array
  friends.push(friendName);

  // Actualizar la lista visible
  updateFriendList();

  // Limpiar el campo de entrada
  document.getElementById('friendName').value = "";
}

// Función para actualizar la lista visual de amigos
function updateFriendList() {
  const listElement = document.getElementById('friendsList');
  listElement.innerHTML = ''; // Limpiar la lista antes de agregarla de nuevo

  friends.forEach(friend => {
    const listItem = document.createElement('li');
    listItem.textContent = friend;
    listElement.appendChild(listItem);
  });
}

// Función para hacer el sorteo
function drawSecretFriend() {
  if (friends.length === 0) {
    alert("Por favor, añade al menos un amigo a la lista.");
    return;
  }

  // Seleccionar un nombre aleatorio
  const randomIndex = Math.floor(Math.random() * friends.length);
  const selectedFriend = friends[randomIndex];

  // Mostrar el resultado
  const resultElement = document.getElementById('result');
  resultElement.textContent = `El amigo secreto es: ${selectedFriend}`;
}