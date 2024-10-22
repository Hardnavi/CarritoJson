fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const containers = document.querySelectorAll('.flex-container1, .flex-container2');

    products.forEach((product, index) => {
      const productHTML = `
        <div class="caja">
          <img src="../FRONTEND STORE/Nueva carpeta/${product.image}" alt="" width="160rem" height="160rem">
          <div class="cabecera">${product.name} - ${product.price}$</div>
          <button class="view-product-btn">Ver producto</button>
        </div>
      `;

      if (index < 3) {
        containers[0].innerHTML += productHTML;
      } else if (index < 6) {
        containers[1].innerHTML += productHTML;
      } else if (index < 9) {
        containers[2].innerHTML += productHTML;
      } else if (index < 12) {
        containers[3].innerHTML += productHTML;
      } else {
        containers[4].innerHTML += productHTML;
      }
    });
  });