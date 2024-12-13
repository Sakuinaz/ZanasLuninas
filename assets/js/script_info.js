// Pagrindiniai elementai
const form = document.getElementById('contactForm');
const resultDiv = document.getElementById('result');
const submitButton = document.getElementById('submitButton');

// Naudojama vidurkio spalvų logika
function getAverageColor(average) {
    if (average >= 8) return 'green'; // Žalia
    if (average >= 5) return 'orange'; // Oranžinė
    return 'red'; // Raudona
}

// Duomenų tikrinimas
function validateInput(fieldId, regex, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!regex.test(field.value)) {
        alert(errorMessage);
        field.focus();
        return false;
    }
    return true;
}

// Mygtuko paspaudimo funkcija
submitButton.addEventListener('click', function () {
    // Patikrinti el. paštą
    const isValidEmail = validateInput(
        'email',
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Įveskite galiojantį el. pašto adresą.'
    );
    if (!isValidEmail) return;

    // Patikrinti telefono numerį (Lietuvos telefono numerio formatas)
    const isValidPhone = validateInput(
        'phone',
        /^\+370\d{8}$/,
        'Įveskite teisingą telefono numerį (formatas: +370xxxxxxxx).'
    );
    if (!isValidPhone) return;

    // Patikrinti adresą (bent 5 simboliai)
    const isValidAddress = validateInput(
        'address',
        /^.{5,}$/,
        'Adresas turi būti bent 5 simbolių ilgio.'
    );
    if (!isValidAddress) return;

    // Gauti įvesties duomenis
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);
    const score4 = parseFloat(document.getElementById('score4').value);
    const score5 = parseFloat(document.getElementById('score5').value);

    // Apskaičiuoti pažymių vidurkį
    const average = ((score1 + score2 + score3 + score4 + score5) / 5).toFixed(2);
    const averageColor = getAverageColor(average);

    // Sukurti duomenų objektą
    const userData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        scores: [score1, score2, score3, score4, score5],
        average,
    };

    // Išvesti objektą naršyklės terminale
    console.log(userData);

    // Atvaizduoti rezultatą tinklalapyje
    resultDiv.innerHTML = `
        <p><strong>Vardas:</strong> ${userData.firstName}</p>
        <p><strong>Pavardė:</strong> ${userData.lastName}</p>
        <p><strong>El. Paštas:</strong> ${userData.email}</p>
        <p><strong>Telefonas:</strong> ${userData.phone}</p>
        <p><strong>Adresas:</strong> ${userData.address}</p>
        <p style="color: ${averageColor};"><strong>Pažymių Vidurkis:</strong> ${userData.average}</p>
        <p><strong>Formatuotas Vidurkis:</strong> ${userData.firstName} ${userData.lastName} (${userData.email}): ${userData.average}</p>
    `;
});
