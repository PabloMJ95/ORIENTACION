document.addEventListener("DOMContentLoaded", function () {
    let answers = {};

    function saveAnswers() {
        document.querySelectorAll("input[type='radio']:checked").forEach((input) => {
            answers[input.name] = input.value;
        });
    }

    document.querySelector("#submit").addEventListener("click", function () {
        saveAnswers();
        
        let nombre = document.querySelector("#nombre").value;
        let email = document.querySelector("#email").value;

        if (!nombre || !email) {
            alert("Por favor, ingresa tu nombre y correo.");
            return;
        }

        let data = {
            nombre: nombre,
            email: email,
            respuestas: answers
        };

        fetch("guardar_respuestas.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === "success") {
                alert("Respuestas guardadas correctamente.");
                window.location.href = "results.html";
            } else {
                alert("Error al guardar respuestas.");
            }
        })
        .catch(error => console.error("Error:", error));
    });
});