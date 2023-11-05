// JavaScript for the accordion functionality
const accordions = document.querySelectorAll('.animate-button');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});








// JavaScript objects for products
var products = {
    Computer1: {
      name: "Laptop",
      image: "pc4.jfif",
      description: "Powerful laptops for work and play.",
      price: "500 000 &#8376;",
      salePrice: "300 000 &#8376;"
    },
    Computer2: {
      name: "Desktop Computer",
      image: "pc2.jfif",
      description: "High-performance desktops for all your needs.",
      price: "800 000 &#8376;",
      salePrice: "500 000 &#8376;"
    }
  };

  // Function to open a tab
  function openTab(evt, tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";
  }

  // Function to display product details in a tab
  function displayProduct(tabId) {
    var product = products[tabId];
    var productContainer = document.getElementById(tabId);
    var productHtml = `
      
      <div class="laptop1">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="price">${product.price}</span>
        <span class="saleprice">${product.salePrice}</span>
        <button class="btn btn-primary">Add to basket</button>
      </div>
    `;
    productContainer.innerHTML = productHtml;
  }





  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
      const notificationSound = document.getElementById('notification-sound');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
      notificationSound.play();
    })
  }