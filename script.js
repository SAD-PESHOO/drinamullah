

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Appointment form submission
  const appointmentForm = document.getElementById("appointment-form");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Appointment booked successfully!");
      appointmentForm.reset();
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! We will contact you soon.");
      contactForm.reset();
    });
  }
  
  // Auto-close other FAQs when one is opened
  const allFaqs = document.querySelectorAll("details");
  allFaqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      allFaqs.forEach((otherFaq) => {
        if (otherFaq !== faq) {
          otherFaq.removeAttribute("open");
        }
      });
    });
  });
  