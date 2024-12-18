(function () {
    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
        if (distance) {
            const conversion = distance * 1.609344.toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
        }
        else {
            answer.innerHTML = '<h2> Please provide a number!</h2>';
        }


    });
})();

(function () {

    'use strict';

    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function (event) {
        var key = event.code;
        if (key === 'KeyK') {
            convertType = 'kilmeters';
            heading.innerHTML = 'Kilometer to Miles Converter ';
            intro.innerHTML = 'Type in a number of kilometer and click the button to convert the distance to miles.';
        } else if (key === "KeyM") {
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter ';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distanc';
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        if (distance) {
            if (convertType === 'miles') {
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;

            } else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTMl = `${distance} kilometers converts to ${converted} miles `;
            }
        }
        else {
            answerDiv.innerHTML = '<h2>Please provide a number</h2>';
        }
    });
})();
