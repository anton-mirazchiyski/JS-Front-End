function solve() {
   const productElements = document.getElementsByClassName('product');
   const textAreaElement = document.getElementsByTagName('textarea')[0];
   const checkoutButtonElement = document.querySelector('button.checkout');

   let totalPrice = 0;
   const boughtProducts = new Set();

   Array.from(productElements).forEach(productElement => {
      const addProductButtonElement = productElement.querySelector('button.add-product');

      addProductButtonElement.addEventListener('click', () => {
         addProductToCart(productElement);
      });
   });

   checkoutButtonElement.addEventListener('click', (e) => {
      textAreaElement.value += `You bought ${Array.from(boughtProducts).join(', ')} for ${totalPrice.toFixed(2)}.`;

      Array.from(document.getElementsByClassName('add-product')).forEach(buttonElement => buttonElement.disabled = 'True');
      e.target.disabled = 'True';
   });

   function addProductToCart(productElement) {
      const productName = productElement.querySelector('div.product-title').textContent;
      const productPrice = Number(productElement.querySelector('div.product-line-price').textContent);

      textAreaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      totalPrice += productPrice;
      boughtProducts.add(productName);
   }
}
