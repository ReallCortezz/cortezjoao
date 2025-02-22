document.addEventListener("DOMContentLoaded", function () {
    const certificadosContainer = document.querySelector(".certificados-container");
    const sobreSection = document.getElementById('sobre');
    const formacaoSection = document.getElementById('formacao');
    
    function mostrarCertificados() {
        certificadosContainer.innerHTML = "";
        certificadosContainer.style.transition = "all 1s ease-in-out";
        certificadosContainer.style.opacity = 0;

        setTimeout(() => {
            certificadosContainer.innerHTML = `
                <ul>
                    <li>Certificado de Programação - Curso Online</li>
                    <li>Certificado de Design Gráfico - Workshop</li>
                    <li>Certificado de Desenvolvimento Web - Bootcamp</li>
                </ul>
            `;
            certificadosContainer.style.opacity = 1;
        }, 500);
    }

    certificadosContainer.addEventListener("mouseover", mostrarCertificados);

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function animateOnScroll() {
        if (isElementInViewport(sobreSection)) {
            sobreSection.classList.add('animate__fadeIn');
        }

        if (isElementInViewport(formacaoSection)) {
            formacaoSection.classList.add('animate__fadeIn');
        }
    }

    document.addEventListener("scroll", animateOnScroll);

    animateOnScroll();
});
