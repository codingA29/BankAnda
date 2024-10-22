// Fungsi Login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    } else {
        alert("Email atau Password salah!");
    }
}

// Fungsi Register
function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password tidak cocok!");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registrasi berhasil!");
    window.location.href = "index.html";
}

// Fungsi untuk Logout
function logout() {
    localStorage.clear(); // Menghapus data pengguna
    alert("Anda berhasil logout.");
    window.location.href = "index.html"; // Kembali ke halaman login
}

// Fungsi untuk Menampilkan Data Pengguna
function showUserInfo() {
    const email = localStorage.getItem("email");
    const balance = localStorage.getItem("balance") || 0;

    alert(`Email: ${email}\nSisa Saldo: ${balance}`);
}

// Fungsi untuk Menambahkan Pemasukan dan Pengeluaran
document.getElementById("income").addEventListener("input", updateBalance);
document.getElementById("expense").addEventListener("input", updateBalance);

function updateBalance() {
    const income = parseFloat(document.getElementById("income").value) || 0;
    const expense = parseFloat(document.getElementById("expense").value) || 0;
    const balance = income - expense;

    document.getElementById("balance").value = balance;
    localStorage.setItem("balance", balance); // Simpan saldo di localStorage
}

let balance = 0;
let historyList = [];
let isHistoryVisible = false;

function addIncome() {
    let income = parseFloat(document.getElementById('income').value);
    if (!isNaN(income) && income > 0) {
        balance += income;
        document.getElementById('balance').value = balance.toFixed(2);
        addToHistory(`Pemasukan: +${income.toFixed(2)}`);
    } else {
        alert("Masukkan nilai pemasukan yang valid");
    }
    document.getElementById('income').value = ''; // reset input field
}

function addExpense() {
    let expense = parseFloat(document.getElementById('expense').value);
    if (!isNaN(expense) && expense > 0) {
        balance -= expense;
        document.getElementById('balance').value = balance.toFixed(2);
        addToHistory(`Pengeluaran: -${expense.toFixed(2)}`);
    } else {
        alert("Masukkan nilai pengeluaran yang valid");
    }
    document.getElementById('expense').value = ''; // reset input field
}

function addToHistory(entry) {
    historyList.push(entry);
}

function toggleHistory() {
    let mainContent = document.getElementById('main-content');
    let historySection = document.getElementById('history-section');
    let historyUl = document.getElementById('history-list');
    
    // Toggle history visibility
    isHistoryVisible = !isHistoryVisible;

    if (isHistoryVisible) {
        // Hide main content
        mainContent.style.display = 'none';
        
        // Display history
        historyUl.innerHTML = ''; // Clear existing history
        historyList.forEach(function(item) {
            let li = document.createElement('li');
            li.textContent = item;
            historyUl.appendChild(li);
        });
        historySection.style.display = 'block';
    } else {
        // Show main content
        mainContent.style.display = 'flex';
        historySection.style.display = 'none';
    }
}


