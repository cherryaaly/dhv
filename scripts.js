document.addEventListener("DOMContentLoaded", () => {
    // Carrusel
    const carouselImages = document.querySelector(".carousel-images");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;

    function updateCarousel() {
        const imageWidth = images[0].clientWidth;
        carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);

    // Mapa
    let map;
    window.initMap = function () {
        const location = { lat: 20.5888, lng: -100.3923 };
        map = new google.maps.Map(document.getElementById("map"), {
            center: location,
            zoom: 14,
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: "Ubicación en Querétaro",
        });

        google.maps.event.addListener(marker, "click", () => {
            const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
            window.open(googleMapsUrl, "_blank");
        });

        google.maps.event.addListener(map, "click", (event) => {
            const clickedLocation = event.latLng;
            const googleMapsUrl = `https://www.google.com/maps?q=${clickedLocation.lat()},${clickedLocation.lng()}`;
            window.open(googleMapsUrl, "_blank");
        });
    };

    // Formulario
    document.getElementById("commentForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "El nombre es obligatorio.";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        if (email === "") {
            document.getElementById("emailError").textContent = "El correo es obligatorio.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById("emailError").textContent = "El correo no es válido.";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (message === "") {
            document.getElementById("messageError").textContent = "El mensaje es obligatorio.";
            isValid = false;
        } else {
            document.getElementById("messageError").textContent = "";
        }

        if (isValid) {
            alert("¡Comentario enviado exitosamente!");
        }
    });
});

 document.getElementById('commentForm').addEventListener('submit', function (event) {
            event.preventDefault();

            // Variables
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validación básica
            let isValid = true;

            if (name === "") {
                document.getElementById('nameError').textContent = "El nombre es obligatorio.";
                isValid = false;
            } else {
                document.getElementById('nameError').textContent = "";
            }

            if (email === "") {
                document.getElementById('emailError').textContent = "El correo es obligatorio.";
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('emailError').textContent = "El correo no es válido.";
                isValid = false;
            } else {
                document.getElementById('emailError').textContent = "";
            }

            if (message === "") {
                document.getElementById('messageError').textContent = "El mensaje es obligatorio.";
                isValid = false;
            } else {
                document.getElementById('messageError').textContent = "";
            }

            // Enviar si es válido
            if (isValid) {
                alert("¡Comentario enviado exitosamente!");
                // Aquí puedes integrar EmailJS o tu backend para enviar el correo
                console.log({ name, email, message });
            }
        });