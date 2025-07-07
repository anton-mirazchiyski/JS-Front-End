function create(words) {
   const contentElement = document.getElementById('content');

   words.forEach(word => {
      const divElement = document.createElement('div');
      const paragraphElement = document.createElement('p');

      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement);

      divElement.addEventListener('click', () => {
         paragraphElement.style.display = 'block';
      });

      contentElement.appendChild(divElement);
   });
}
