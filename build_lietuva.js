const fs = require('fs');

let html = fs.readFileSync('pasaulis.html', 'utf8');

// Title & headers
html = html.replace('<title>Geografijos testas</title>', '<title>Lietuvos geografijos testas</title>');
html = html.replace('<h1>🌍 Geografijos testas</h1>', '<h1>🇱🇹 Lietuvos geografijos testas</h1>\n<div style="margin-bottom: 20px;"><a href="index.html" style="color:white; text-decoration:none; background:#34495e; padding:10px 20px; border-radius:5px;">&larr; Atgal į meniu</a></div>');

// Types
html = html.replace(/<div class="type-grid">[\s\S]*?<\/div>\s*<\/div>\s*<h2>Pasirinkite testo ilgį:<\/h2>/, `<div class="type-grid">
            <div>
                <input type="checkbox" id="type-upe" class="type-checkbox" checked>
                <label for="type-upe" class="type-label">🌊 Upės</label>
            </div>
            <div>
                <input type="checkbox" id="type-ezeras" class="type-checkbox" checked>
                <label for="type-ezeras" class="type-label">💧 Ežerai</label>
            </div>
            <div>
                <input type="checkbox" id="type-marios" class="type-checkbox" checked>
                <label for="type-marios" class="type-label">⛵ Marios</label>
            </div>
            <div>
                <input type="checkbox" id="type-aukstuma" class="type-checkbox" checked>
                <label for="type-aukstuma" class="type-label">⛰️ Aukštumos</label>
            </div>
        </div>
    </div>
    <h2>Pasirinkite testo ilgį:</h2>`);

// Type Map function
html = html.replace(/const typeMap = \{[\s\S]*?\};/, `const typeMap = {
            'type-upe': 'Upė',
            'type-ezeras': 'Ežeras',
            'type-marios': 'Marios',
            'type-aukstuma': 'Aukštuma'
        };`);

// Map center
html = html.replace("const map = L.map('map').setView([20, 0], 2);", "const map = L.map('map').setView([55.3, 23.9], 7);");

// Locations
const newLocations = `const locations = [
    // --- UPĖS ---
    { name: "Nemunas", type: "Upė", points: [[53.94,23.97],[54.02,23.97],[54.11,24.01],[54.26,24.11],[54.40,24.04],[54.51,24.03],[54.60,24.00],[54.78,24.14],[54.82,24.04],[54.85,23.88],[54.91,23.93],[55.03,23.58],[55.08,23.36],[55.08,22.95],[55.07,22.75],[55.10,22.35],[55.20,21.67],[55.30,21.32]] },
    { name: "Merkys", type: "Upė", points: [[54.34,25.68],[54.45,25.30],[54.43,24.96],[54.40,24.64],[54.20,24.31],[54.16,24.18]] },
    { name: "Neris", type: "Upė", points: [[54.80,25.75],[54.74,25.43],[54.69,25.28],[54.73,25.04],[54.82,24.83],[54.89,24.67],[55.03,24.36],[54.98,24.15],[54.90,23.88]] },
    { name: "Šventoji", type: "Upė", points: [[55.72,26.15],[55.64,25.86],[55.51,25.10],[55.33,24.81],[55.15,24.63],[55.08,24.33]] },
    { name: "Nevėžis", type: "Upė", points: [[55.57,24.69],[55.43,24.23],[55.29,23.97],[55.16,23.83],[54.93,23.77]] },
    { name: "Mūša", type: "Upė", points: [[56.23,23.25],[56.16,23.51],[56.12,23.82],[56.09,24.08],[56.03,24.37]] },
    { name: "Dubysa", type: "Upė", points: [[55.87,23.10],[55.75,23.01],[55.51,23.17],[55.32,23.40],[55.25,23.47],[55.07,23.44]] },
    { name: "Venta", type: "Upė", points: [[55.77,22.46],[55.95,22.38],[56.10,22.33],[56.18,22.18],[56.33,22.25]] },
    { name: "Jūra", type: "Upė", points: [[55.69,22.02],[55.60,22.06],[55.45,22.13],[55.29,22.15],[55.15,22.06],[55.05,22.13]] },
    { name: "Minija", type: "Upė", points: [[55.87,21.82],[55.78,21.57],[55.58,21.40],[55.44,21.43],[55.35,21.28]] },

    // --- EŽERAI ---
    { name: "Drūkšiai", type: "Ežeras", points: [[55.62,26.61]] },
    { name: "Tauragnas", type: "Ežeras", points: [[55.44,25.90]] },
    { name: "Lakajai", type: "Ežeras", points: [[55.22,25.74]] },
    { name: "Dusia", type: "Ežeras", points: [[54.29,23.68]] },
    { name: "Žuvintas", type: "Ežeras", points: [[54.46,23.58]] },
    { name: "Vištytis", type: "Ežeras", points: [[54.43,22.73]] },
    { name: "Lūkstas", type: "Ežeras", points: [[55.71,22.32]] },
    { name: "Asveja", type: "Ežeras", points: [[55.03,25.50]] },

    // --- MARIOS ---
    { name: "Kuršių marios", type: "Marios", points: [[55.44,21.10],[55.30,21.05],[55.15,20.95],[54.95,20.65],[55.55,21.14]] },
    { name: "Kauno marios", type: "Marios", points: [[54.88,24.02],[54.85,24.12],[54.82,24.23],[54.78,24.26]] },

    // --- AUKŠTUMOS ---
    { name: "Žemaičių aukštuma", type: "Aukštuma", points: [[55.69,22.28]] },
    { name: "Sūduvos aukštuma", type: "Aukštuma", points: [[54.43,23.23]] },
    { name: "Dzūkų aukštuma", type: "Aukštuma", points: [[54.29,24.47]] },
    { name: "Medininkų aukštuma", type: "Aukštuma", points: [[54.55,25.64]] },
    { name: "Aukštaičių aukštuma", type: "Aukštuma", points: [[55.49,25.53]] }
];`;

html = html.replace(/const locations = \[[\s\S]*?\];/m, newLocations);

// Points Calculation
const newCalc = `function calculatePoints(distance, type) {
        const km = distance / 1000;
        let multiplier = 1;

        if (type === 'Marios') multiplier = 1.5;
        if (type === 'Upė') multiplier = 1.2;
        if (type === 'Aukštuma') multiplier = 2.5;

        if (km <= 8 * multiplier) return 100;
        if (km <= 15 * multiplier) return 90;
        if (km <= 25 * multiplier) return 80;
        if (km <= 40 * multiplier) return 60;
        if (km <= 60 * multiplier) return 40;
        if (km <= 80 * multiplier) return 20;
        if (km <= 100 * multiplier) return 5;
        return 0;
    }`;

html = html.replace(/function calculatePoints\(distance, isInside = false\) {[\s\S]*?\}/, newCalc);

// Click Event Logic
const clickEventRegex = /map\.on\('click', function\(e\) \{[\s\S]*?nextBtn\.style\.display = "inline-block";\n    \}\);/;

const newClickEvent = `map.on('click', function(e) {
        if (isAnswered) return;

        isAnswered = true;
        const target = examQuestions[currentIdx];
        const clickLatLng = e.latlng;

        const userMarker = L.marker(clickLatLng).addTo(map).bindPopup("Tavo spėjimas").openPopup();
        activeMarkers.push(userMarker);

        let earnedPoints = 0;
        let distance = Infinity;
        let closestPoint = null;

        // Randame artimiausią tašką prie tikslo (upės kelias, ežeras ar aukštuma)
        target.points.forEach(point => {
            const polyPoint = L.latLng(point[0], point[1]);
            const dist = clickLatLng.distanceTo(polyPoint);
            if (dist < distance) {
                distance = dist;
                closestPoint = polyPoint;
            }
        });

        // Parodyti teisingą atsakymą priklausomai nuo tipo
        if (target.type === 'Upė' || target.type === 'Marios') {
            const polyline = L.polyline(target.points, {color: 'green', weight: 4, opacity: 0.8}).addTo(map).bindPopup(target.name);
            activeMarkers.push(polyline);
        } else {
            const correctMarker = L.circleMarker(closestPoint, {
                color: 'green',
                radius: 10
            }).addTo(map).bindPopup(target.name);
            activeMarkers.push(correctMarker);
        }

        const line = L.polyline([clickLatLng, closestPoint], {color: 'blue', dashArray: '5, 10'}).addTo(map);
        activeMarkers.push(line);

        earnedPoints = calculatePoints(distance, target.type);
        const km = (distance / 1000).toFixed(0);

        if (earnedPoints === 100) {
            feedbackText.innerHTML = \`🎯 Puikiai! Atstumas tik \${km} km. (+\${earnedPoints} tšk.)\`;
            feedbackText.className = "correct";
        } else if (earnedPoints >= 40) {
            feedbackText.innerHTML = \`📍 Visai neblogai! Atstumas \${km} km. (+\${earnedPoints} tšk.)\`;
            feedbackText.className = "partial";
        } else {
            feedbackText.innerHTML = \`❌ Per toli - \${km} km nuo artimiausio \${target.name} taško. (+\${earnedPoints} tšk.)\`;
            feedbackText.className = "incorrect";
        }

        results.push({
            location: target.name,
            type: target.type,
            points: earnedPoints,
            distance: km,
            isInside: earnedPoints === 100
        });

        score += earnedPoints;
        maxScore += 100;
        scoreEl.innerText = Math.round(score);
        maxScoreEl.innerText = maxScore;

        const avg = (score / maxScore * 100).toFixed(1);
        avgScoreEl.innerText = avg;

        nextBtn.style.display = "inline-block";
    });`;

html = html.replace(clickEventRegex, newClickEvent);

fs.writeFileSync('lietuva.html', html, 'utf8');
console.log('Sėkmingai atnaujinta lietuva.html!');
