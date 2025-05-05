const container = document.querySelector(".container");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link"); // แก้ชื่อให้ถูก
console.log("JavaScript is loaded");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  if (container && loginLink && registerLink) {
    console.log("All required elements are found.");

    // Switch to Register form
    registerLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("active");
      console.log("Switched to Register form");
    });

    // Switch to Login form
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.remove("active");
      console.log("Switched to Login form");
    });
  } else {
    console.error("One or more DOM elements are missing. Please check your HTML structure.");
  }
});

window.onload = function() {
    const element = document.querySelector(".login-link"); // เปลี่ยน ".your-selector" เป็นคลาสหรือ id ของ Element ที่ต้องการ
    if (element) {
        element.addEventListener("click", () => {
            console.log("Element clicked");
        });
    } else {
        console.error("Element not found");
    }
};