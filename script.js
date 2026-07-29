document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(
    "section, .box_contatos"
  );

  elementosAnimados.forEach((elemento) => {
    elemento.classList.add("fade-in");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elementosAnimados.forEach((elemento) => observer.observe(elemento));
});
