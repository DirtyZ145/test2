const container = document.querySelector(".container");
const Loginlink = document.querySelector(".login-link");
const Registerlink = document.querySelector(".register-link"); // แก้ชื่อให้ถูก
console.log("JavaScript is loaded");
Registerlink.addEventListener('click', () => {
    container.classList.add("active");
});

Loginlink.addEventListener('click', () => {
    container.classList.remove("active");
});
