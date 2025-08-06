document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    let errors = [];

    // Simple validation
    if (name === "") {
      errors.push("Please enter your name.");
    }
    if (email === "") {
      errors.push("Please enter your email.");
    } else if (!validateEmail(email)) {
      errors.push("Please enter a valid email address.");
    }
    if (message === "") {
      errors.push("Please enter your message.");
    }

    // Show errors or success
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Thank you for contacting us! We will get back to you soon.");
      form.reset();
    }
  });

  // Email validation regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
