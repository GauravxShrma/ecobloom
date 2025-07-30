document.addEventListener('DOMContentLoaded', function() {

    // --- Active Nav Link ---
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav .nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });


    // --- Tree Planting Counter (Homepage only) ---
    const treeCountElement = document.getElementById('tree-count');
    if (treeCountElement) {
        let treesPlanted = 0;
        const treeInterval = setInterval(() => {
            treesPlanted += Math.floor(Math.random() * 3) + 1;
            treeCountElement.textContent = treesPlanted;
            if (treesPlanted > 1000) {
                clearInterval(treeInterval);
            }
        }, 2500);
    }


    // --- Image Gallery (Homepage only) ---
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        const galleryImages = gallery.querySelectorAll('img');
        const nextBtn = gallery.querySelector('.next-btn');
        let currentImageIndex = 0;

        function updateGallerySelection() {
            galleryImages.forEach((img, index) => {
                img.classList.toggle('active', index === currentImageIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
                updateGallerySelection();
            });
        }

        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentImageIndex = index;
                updateGallerySelection();
            });
        });
    }


    // --- Search Page Functionality ---
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsContainer = document.getElementById('search-results');

    if (searchInput && searchButton && searchResultsContainer) {
        // A mock database of all products
        const allProducts = [
            { name: 'Terracotta Pot', price: '$12.99', img: 'https://images.unsplash.com/photo-1599102838323-de282b9a3594?q=80&w=1974&auto=format&fit=crop', category: 'pot' },
            { name: 'Ceramic Planter', price: '$19.99', img: 'https://images.unsplash.com/photo-1614594975525-e4d1424a721a?q=80&w=1974&auto=format&fit=crop', category: 'pot' },
            { name: 'Hanging Pot', price: '$24.99', img: 'https://images.unsplash.com/photo-1600421539353-8b5b934052ad?q=80&w=1974&auto=format&fit=crop', category: 'pot' },
            { name: 'Biodegradable Peat Pot', price: '$9.99', img: 'https://images.unsplash.com/photo-1586581123559-8d7450884a77?q=80&w=1974&auto=format&fit=crop', category: 'pot' },
            { name: 'Pruning Shears', price: '$22.50', img: 'https://images.unsplash.com/photo-1619642751215-72d224155934?q=80&w=1974&auto=format&fit=crop', category: 'cutter' },
            { name: 'Gardening Scissors', price: '$15.00', img: 'https://images.unsplash.com/photo-1620257983636-ba44244de438?q=80&w=1974&auto=format&fit=crop', category: 'cutter' },
            { name: 'Heavy Duty Loppers', price: '$35.99', img: 'https://images.unsplash.com/photo-1563295985-202a73e65347?q=80&w=2128&auto=format&fit=crop', category: 'cutter' },
            { name: 'Organic Fertilizer', price: '$18.00', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop', category: 'fertilizer' }
        ];

        function performSearch() {
            const query = searchInput.value.toLowerCase();
            const results = allProducts.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );

            displayResults(results);
        }

        function displayResults(results) {
            searchResultsContainer.innerHTML = ''; // Clear previous results
            if (results.length === 0) {
                searchResultsContainer.innerHTML = '<p>No products found.</p>';
                return;
            }

            results.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <button>Add to Cart</button>
                `;
                searchResultsContainer.appendChild(card);
            });
        }

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }

    // --- Feather Icons ---
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
