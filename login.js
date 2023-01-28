// JavaScript Document
const SignUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");

SignUpBtn.addEventListener("click", (e) => {
	e.preventDefault();
	formsWrapper.classList.add("change");
	
});
signInBtn.addEventListener("click", (e) => {
	e.preventDefault();
	formsWrapper.classList.remove("change");
});