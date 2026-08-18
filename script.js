const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function updateHeaderShadow() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateHeaderShadow();
window.addEventListener("scroll", updateHeaderShadow, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq-list details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const firstName = data.get("first-name") || "";
    const lastName = data.get("last-name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const city = data.get("city") || "";
    const state = data.get("state") || "";
    const zip = data.get("zip") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(`Website contact request from ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent(
      [
        "New website contact request",
        "",
        `Name: ${firstName} ${lastName}`.trim(),
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Location: ${city}, ${state} ${zip}`.trim(),
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:toguntade@better-days-psychiatry.com?subject=${subject}&body=${body}`;
  });
}
