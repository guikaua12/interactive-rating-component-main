const result = document.querySelector('#result');
const urlParams = new URLSearchParams(window.location.search);

const rating = urlParams.get('rating');
result.innerHTML = `You selected ${rating} out of 5`;

console.log(rating)