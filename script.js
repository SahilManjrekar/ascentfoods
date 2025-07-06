// Product data
const products = [
  {
    id: 1,
    name: "Frozen Green Peas",
    category: "frozen",
    price: 3.99,
    unit: "lb",
    image: "images/green peas.png",
    description:
      "Farm-fresh green peas, naturally sweet and tender. Perfect for curries, pulao, or soups.",
    origin: "Local Farms, Washington",
    nutrition: ["Residuse free", "Long shelf life", "easy to cook", "no prep needed ", "Vitamin C", "Antioxidants"],
    details:
      "Farm-fresh green peas, naturally sweet and tender. Perfect for curries or soups.",
  },

  {
    id: 2,
    name: "Frozen Corn Cobs",
    category: "frozen",
    price: 4.99,
    unit: "gallon",
    image: "images/corn.png",
    description: "Juicy, sweet corn cobs—just steam or grill for a quick snack",
    origin: "local farms",
    nutrition: ["Residuse free","Size 12-16 cm","no artificial colour", "Protein", "Vitamin C", "Properly packed"],
    details:
      "Juicy, sweet corn cobs—just steam or grill for a quick snack.Properly frozen. Perfect for salads or grilling.",
  },
 {
    id: 3,
    name: "Frozen Corn Kernels",
    category: "frozen",
    price: 4.99,
    unit: "pack of 6",
    image: "images/corn kernels.png",
    description: "Tender corn kernels packed with juicy sweetness—ready to cook or toss into dishes.",
    origin: "local farms",
    nutrition: ["diiferent pacakging sizes","Fiber", "Protein", "Zero prep"],
    details:
      "Tender corn kernels packed with juicy sweetness—ready to cook or toss into dishes. Perfect for salads or grilling.",
  },
 {
    id:4,
    name: "Frozen Mix Vegetable",
    category: "frozen",
    price: 3.49,
    unit: "16 oz",
    image: "images/mix vegetable.png",
    description: "A vibrant mix of frozen vegetables—easy, quick, and nutritious meals.",
    origin: "local farms",
    nutrition: ["Carrot, Green beans ,Cauli flower", "longer shelf life", "different packaging sizes"],
    details:
      "A mixture of carrots, cauliflower, green beans properly packed with no preservatives added ",
  },
  
   {
    id:5,
    name: "Frozen Residuse Free Okra & Baby Okra ",
    category: "frozen",
    price: 4.99,
    unit: "pack of 6",
    image: "images/ladyfinger.jpg",
    description: "Crisp, tender okra ideal for classic Indian curries and stir-fries.",
    origin: "local farms",
    nutrition: ["No preservatives","Fiber", "Protein", "Vitamin K"],
    details:
      "Crisp, tender okra ideal for classic Indian curries and stir-fries. Perfect for salads or grilling.",
  },

  {
    id: 10,
    name: "Frozen Makhana",
    category: "frozen",
    price: 5.99,
    unit: "loaf",
    image: "images/makhana.jpg",
    description: "Light, crunchy makhana roasted to perfection—great for guilt-free snacking.",
    origin: "local farms",
    nutrition: ["longer shelf life", "Complex Carbs", "no pestcides", "Probiotics"],
    details:
      "Light, crunchy makhana roasted to perfection—great for guilt-free snacking. Perfect for salads or grilling.",
  },
  
   {
    id: 7,
    name: "Frozen Alphonso /Totapuri Mango Pulp",
    category: "pulp",
    price: 4.99,
    unit: "gallon",
    image: "images/mango pulp.png",
    description: "Sweet, pulpy mangoes perfect for shakes, desserts, or jams.",
    origin: "local farms",
    nutrition: ["fresh ","longer shelf life","No preservatives","fridge-friendly"],
    details:
      "Rich mango pulp with tropical flavor—great for smoothies and juices. Perfect for sweets and toppings.",
  },

  {
    id: 8,
    name: "Frozen Strawberry Pulp",
    category: "pulp",
    price: 4.99,
    unit: "pack of 6",
    image: "images/strawberry.png",
    description: "Sweet, pulpy strawberries perfect for shakes, desserts, or jams.",
    origin: "local farms",
    nutrition: ["longer shelf life","No preservatives","fridge-friendly"],
    details:
      "Sweet, pulpy strawberries perfect for shakes, desserts, or jams. Perfect for sweets and toppings.",
  },

  {
    id: 9,
    name: "Frozen Gauva Pulp",
    category: "pulp",
    price: 4.99,
    unit: "pack of 6",
    image: "images/gauva juice.png",
    description: "Rich guava pulp with tropical flavor—great for smoothies and juices.",
    origin: "local farms",
    nutrition: ["longer shelf life","No preservatives","No added colours"],
    details:
      "Rich guava pulp with tropical flavor—great for smoothies and juices. Perfect for sweets and toppings.",
 }
 /* 
  {
    id: 2,
    name: "Frozen Spinach Cubes",
    category: "bakery",
    price: 2.49,
    unit: "bunch",
    image: "images/spinach.png",
    description: "	Convenient cubes of rich, leafy spinach—full of nutrients and flavor.",
    origin: "local farms",
    nutrition: ["No pesticides used", "Vitamin K", "Folate","minimal waste,"],
    details:
      "	Convenient cubes of rich, leafy spinach—full of nutrients and flavor.",
  }, 
  /*{
    id: 6,
    name: "Carrots",
    category: "bakery",
    price: 1.99,
    unit: "each",
    image: "images/carrot.png",
    description: "Bright, crunchy carrots full of natural sweetness—great raw or cooked.",
    origin: "local farms",
    nutrition: ["longer shelf life","Vitamin C", "Vitamin A", "Potassium"],
    details:
      "Bright, crunchy carrots full of natural sweetness—great raw or cooked. Perfect for salads or soups.",
  },*/
  /* {
    id: 7,
    name: "brocoli",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/brocoli.png",
    description: "Fresh-cut broccoli florets—rich in fiber and antioxidants.",
    origin: "Local Farms",
    nutrition: ["diiferent pacakging sizes","quick steaming option","Fiber", "Protein", "B Vitamins"],
    details:
      "Fresh-cut broccoli florets—rich in fiber and antioxidants. Perfect for salads or grilling.",
  },

  {
    id: 8,
    name: "Shraded Coconut",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/shraded cocnut.png",
    description: "	Finely shredded fresh coconut—ideal for sweets, curries, or toppings.",
    origin:"local farms",
    nutrition: ["diiferent pacakging sizes","Fiber","long shell life"],
    details:
      "Finely shredded fresh coconut—ideal for sweets, curries, or toppings. Perfect for salads or grilling. ",
  },*/
   
  
  /* {
    id: 10,
    name: "Cauliflower",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/cauliflower.png",
    description: "Hearty multigrain bagels with seeds and whole grains. Freshly baked daily.",
    origin: "local farms",
    nutrition: ["Ready to cook","Fiber", "long shell life",],
    details:
      "Our multigrain bagels are made with a blend of seven whole grains and seeds. They're boiled and then baked for that authentic bagel texture.",
  },*/
 /* {
    id: 13,
    name: "Green Beans",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/beans.png",
    description: "Garden-fresh green beans—full of crunch and color. Perfect for stir-fries.",
    origin: "local farms",
    nutrition: ["Ready to cook", "Protein", "good storage life"],
    details:
      "Garden-fresh green beans—full of crunch and color.",
  },*/
  
  /* { id: 14,
    name: "Onion Shallots",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/onions.png",
    description: "	Aromatic, flavorful shallots perfect for enhancing sauces and gravies.",
    origin: "local farms",
    nutrition: ["No pesticides", "Vitamin B6", "Long Shelf life"],
    details:
      "	Aromatic, flavorful shallots perfect for enhancing sauces and gravies.",
  },
  { id: 15,
    name: "Frozen Green/red Chilli",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/chilli.png",
    description: "	Spicy green and red chillies—frozen fresh to lock in heat and flavor.",
    origin: "local farms",
    nutrition: [" hygenically Packed","longer shelf life", "Capsaicin"],
    details:
      "Spicy green and red chillies—frozen fresh to lock in heat and flavor. Perfect for salads or grilling.",
  },
     { id: 16,
    name: "Ginger",
    category: "frozen",
    price: 4.99,
    unit: "pack of 6",
    image: "images/ginger.png",
    description: "Pungent, zesty ginger—ideal for teas, marinades, and cooking.",
    origin: "local farms",
    nutrition: ["Zero mess","Fiber", "Magnesium"],
    details:
      "Pungent, zesty ginger—ideal for teas, marinades, and cooking. Perfect for salads or grilling.",  
  },
    { id: 17,
    name: "Alphonso Mangoes",
    category: "fruits",
    price: 4.99,
    unit: "pack of 6",
    image: "images/alphonso mangoes.jpg",
    description: "Sweet, juicy Alphonso mangoes—the king of fruits in every bite.",
    origin:"local farms",
    nutrition: ["longer shelf life","No preservatives","great for desserts", "Protein", "B Vitamins"],
    details:
      "Sweet, juicy Alphonso mangoes—the king of fruits in every bite.",
  },
   { id: 18,
    name: "Totapuri Mangoes",
    category: "fruits",
    price: 4.99,
    unit: "pack of 6",
    image: "images/totapuri mangoes.jpeg",
    description: "Tangy-sweet Totapuri mangoes—perfect for pickles and refreshing juices.",
    origin: "local farms",
    nutrition: ["longer shelf life","No preservatives","Fiber", "Protein", "B Vitamins"],
    details:
      "Tangy-sweet Totapuri mangoes—perfect for pickles and refreshing juices.",
  },
   {
    id: 19,
    name: "Drum Sticks",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/drumsticks.jpg",
    description: "Tender drumsticks—essential for sambhar and South Indian recipes.",
    origin: "local farms",
    nutrition: ["longer shelf life","No preservatives","Fiber", "Protein", "B Vitamins"],
    details:
      "Tender drumsticks—essential for sambhar and South Indian recipes. Perfect for salads or grilling.",
  },
   {
    id: 20,
    name: "Frozen Pelled Garlic",
    category: "frozen",
    price: 4.99,
    unit: "pack of 6",
    image: "images/garlic.png",
    description: "Peeled, frozen garlic cloves—ready to use and full of bold flavor.",
    origin: "local farms",
    nutrition: ["longer shelf life","No preservatives","Vitamin B6", ],
    details:
      "	Peeled, frozen garlic cloves—ready to use and full of bold flavor.",
  },
   {
    id: 21,
    name: "Frozen Karela",
    category: "bakery",
    price: 4.99,
    unit: "pack of 6",
    image: "images/bitter guard.png",
    description: "Sliced bitter gourd with all its natural benefits—frozen fresh.",
    origin:"local farms",
    nutrition: ["longer shelf life","No preservatives", "ready-to-use"],
    details:
      "Sliced bitter gourd with all its natural benefits—frozen fresh. Perfect for salads or grilling.",
  },*/
  
]

// DOM Elements
const productsGrid = document.querySelector(".products-grid")
const filterButtons = document.querySelectorAll(".filter-btn")
const modal = document.getElementById("product-modal")
const modalContent = document.getElementById("modal-product-details")
const closeModal = document.querySelector(".close-modal")
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navMenu = document.querySelector(".nav-menu")
const searchForm = document.getElementById("search-form")
const searchInput = document.getElementById("search-input")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Display all products initially
  displayProducts("all")

  // Setup event listeners
  setupEventListeners()

  // Add scroll animation
  addScrollAnimation()
})

// Display products based on category
function displayProducts(category) {
  // Clear the products grid
  productsGrid.innerHTML = ""

  // Filter products based on category
  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  // Create and append product cards
  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-id", product.id)

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 60)}...</p>
        </div>
    `

  // Add click event to show product details
  card.addEventListener("click", () => {
    showProductDetails(product)
  })

  return card
}

// Search products
function searchProducts(query) {
  // Convert query to lowercase for case-insensitive search
  query = query.toLowerCase().trim()

  if (!query) {
    // If search is empty, show all products
    displayProducts("all")
    return
  }

  // Filter products based on search query
  const searchResults = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
  })

  // Clear the products grid
  productsGrid.innerHTML = ""

  // Show search results info
  const searchInfo = document.createElement("div")
  searchInfo.className = "search-results-info"

  if (searchResults.length > 0) {
    searchInfo.innerHTML = `Found ${searchResults.length} result${searchResults.length > 1 ? "s" : ""} for "${query}" <span class="search-reset">Clear search</span>`
  } else {
    // No results found
    const noResults = document.createElement("div")
    noResults.className = "no-results"
    noResults.innerHTML = `
      <h3>No products found for "${query}"</h3>
      <p>Try a different search term or browse our categories</p>
      <button class="btn">Clear search</button>
    `
    productsGrid.appendChild(noResults)
  }

  // Add search info to the top of the products grid
  if (searchResults.length > 0) {
    productsGrid.appendChild(searchInfo)

    // Add click event to reset search
    document.querySelector(".search-reset").addEventListener("click", () => {
      searchInput.value = ""
      displayProducts("all")

      // Reset filter buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active")
        if (btn.getAttribute("data-filter") === "all") {
          btn.classList.add("active")
        }
      })
    })
  }

  // Display search results
  searchResults.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })

  // If no results, add click event to the clear button
  if (searchResults.length === 0) {
    document.querySelector(".no-results .btn").addEventListener("click", () => {
      searchInput.value = ""
      displayProducts("all")

      // Reset filter buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active")
        if (btn.getAttribute("data-filter") === "all") {
          btn.classList.add("active")
        }
      })
    })
  }
}

// Show product details in modal
function showProductDetails(product) {
  modalContent.innerHTML = `
        <div class="product-details">
            <div class="product-details-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details-info">
                <h2>${product.name}</h2>
                <div class="product-details-origin">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${product.origin}</span>
                </div>
                <p>${product.details}</p>
                <div class="product-details-nutrition">
                    <h3>Nutrition Highlights:</h3>
                    <div class="nutrition-list">
                        ${product.nutrition.map((item) => `<span class="nutrition-item">${item}</span>`).join("")}
                    </div>
                </div>
            </div>
        </div>
    `

  // Show the modal
  modal.style.display = "block"

  // Prevent scrolling on the body
  document.body.style.overflow = "hidden"
}

// Setup all event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      // Get the filter value
      const filter = button.getAttribute("data-filter")

      // Display products based on filter
      displayProducts(filter)
    })
  })

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })

  // Search form submission
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const query = searchInput.value
    searchProducts(query)

    // Reset active filter button
    filterButtons.forEach((btn) => btn.classList.remove("active"))
  })

  // Real-time search (optional)
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value

    // Only search if query has at least 3 characters or is empty
    if (query.length >= 3 || query.length === 0) {
      searchProducts(query)

      // Reset active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
    }
  })
}

// Add scroll animation to elements
function addScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observe all product cards
  document.querySelectorAll(".product-card").forEach((card) => {
    observer.observe(card)
    card.classList.add("animate-on-scroll")
  })

  // Observe section titles
  document.querySelectorAll(".section-title").forEach((title) => {
    observer.observe(title)
    title.classList.add("animate-on-scroll")
  })
}

// Add CSS for scroll animations
const style = document.createElement("style")
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.show {
        opacity: 1;
        transform: translateY(0);
    }
`
document.head.appendChild(style)
