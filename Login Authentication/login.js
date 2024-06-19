
let users = [];


const registerUser = (username, password) => {
  
  if (users.some(user => user.username === username)) {
    alert('Username already exists');
    return;
  }


  const newUser = { username, password };
  users.push(newUser);
  alert('Registration successful');
};


const loginUser = (username, password) => {
  
  const user = users.find(user => user.username === username && user.password === password);
  
  if (!user) {
    alert('Invalid username or password');
    return;
  }


  document.getElementById('loginForm').reset();
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('securedContent').classList.remove('hidden');
};


document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const regUsername = document.getElementById('regUsername').value;
  const regPassword = document.getElementById('regPassword').value;
  registerUser(regUsername, regPassword);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;
  loginUser(loginUsername, loginPassword);
});
