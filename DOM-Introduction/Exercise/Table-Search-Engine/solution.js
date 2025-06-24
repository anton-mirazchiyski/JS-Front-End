function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableBodyRowElements = document.querySelectorAll('tbody > tr');
      const searchInputElement = document.getElementById('searchField');

      const tableRows = Array.from(tableBodyRowElements);

      if (searchInputElement.value === '') {
         return;
      }

      tableRows.forEach(row => {
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         } 
      });

      for (const row of tableRows) {
         const tableData = Array.from(row.children);
         
         for (const data of tableData) {
            if (data.textContent.includes(searchInputElement.value)) {
               row.classList.add('select');
               break;
            }
         }
      }

      searchInputElement.value = '';
   }
}
