const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/NEXORA AUTOPLAY/gi, 'NEXA AI');
html = html.replace(/NEXORA AI/gi, 'NEXA AI');
html = html.replace(/NEXORA/gi, 'NEXA AI');

// Fix the local storage key back to snake_case if affected
html = html.replace(/NEXA AI_selected_game/gi, 'nexa_selected_game');

fs.writeFileSync('index.html', html);
console.log('Renamed successfully!');
