function search() {
   const listItemElements = document.querySelectorAll('#towns > li');
   const searchInputElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   const towns = Array.from(listItemElements);

   towns.forEach(town => {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
   });

   let matchesCount = 0;

   for (let i = 0; i < towns.length; i++) {
      const currentTown = listItemElements[i].textContent;

      if (currentTown.includes(searchInputElement.value)) {
         listItemElements[i].style.fontWeight = 'bold';
         listItemElements[i].style.textDecoration = 'underline';
         matchesCount++;
      }
   }

   resultElement.textContent = `${matchesCount} matches found`;
}
