// 5-mode.js

function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Create paragraph
  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(welcomeParagraph);

  // Create Spooky button
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  document.body.appendChild(spookyButton);

  // Create Dark mode button
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  darkModeButton.addEventListener('click', darkMode);
  document.body.appendChild(darkModeButton);

  // Create Scream mode button
  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  screamModeButton.addEventListener('click', screamMode);
  document.body.appendChild(screamModeButton);
}

// Call the main function when the page is loaded
document.addEventListener('DOMContentLoaded', main);
