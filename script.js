// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: Form validation
  const form = document.querySelector("#contact form");
  form.addEventListener("submit", function (e) {
    const name = form.Name.value.trim();
    const email = form.Email.value.trim();
    const message = form.Message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default submission

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset(); // clear form
        successMsg.style.display = "block"; // show message
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 4000);
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
  });
});
