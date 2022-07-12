const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comment");
const checkbox = document.getElementById("input-checkbox");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (mail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const commentsValue = comments.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  const required = 30;
  const left = required - commentsValue.length;
  if (left === 30) {
    setError(comments, "Comments is required");
  } else if (left > 0) {
    setError(comments, `${left} more characters required`);
  } else {
    setSuccess(comments);
  }

  if (!checkbox.checked) {
    setError(checkbox, "Can't proceed as you didn't agree to the terms!");
  } else {
    setSuccess(checkbox);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
