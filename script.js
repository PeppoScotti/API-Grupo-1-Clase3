async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users); // llama a la función para mostrar los usuarios
    } catch (error) {
        console.error('Error buscando usuarios:', error);
    }
}

function displayUsers(users) {
    const tableBody = document.getElementById('tableBody');
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fetch users when the page loads
document.addEventListener('DOMContentLoaded', fetchUsers);
