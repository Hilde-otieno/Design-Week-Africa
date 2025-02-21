function openPopup() {
    document.getElementById('terms-popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('terms-popup').classList.add('hidden');
}



document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = {
        fullName: document.getElementById("award-full-name").value,
        category: document.getElementById("award-category").value,
        email: document.getElementById("award-email").value,
        projectBrief: document.getElementById("award-project-brief").value,
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/api/submit-form/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message); // Show success or error message
    } catch (error) {
        alert("Error submitting form. Please try again.");
    }
});
