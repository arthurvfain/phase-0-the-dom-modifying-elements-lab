const yourName = `Arthur`;
document.getElementById('main').remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = `${yourName} is the champion`;
document.body.appendChild(newHeader);