const products = [
    // Electronics
    { id: 1, name: "AeroPod Pro Max", price: 3499, category: "Electronics", rating: 4.9, stock: 12, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", description: "Studio-grade sound with active noise cancellation." },
    { id: 2, name: "Nebula Ultra Watch", price: 7999, category: "Electronics", rating: 4.8, stock: 8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", description: "Titanium case and advanced health sensors." },
    { id: 9, name: "Prism RGB Monitor", price: 18999, category: "Electronics", rating: 4.8, stock: 10, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80", description: "27-inch 4K HDR monitor with ultra-thin bezels." },
    { id: 10, name: "Sonic Boom Speaker", price: 5499, category: "Electronics", rating: 4.7, stock: 15, image: "https://images.unsplash.com/photo-1589003020613-466014ba570e?w=500&q=80", description: "360-degree high-fidelity wireless sound." },
    { id: 26, name: "Lunar Laptop Pro", price: 85000, category: "Electronics", rating: 4.9, stock: 5, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80", description: "Ultrathin design with an 8-core processor." },
    { id: 38, name: "Orbit 4K Webcam", price: 6999, category: "Electronics", rating: 4.7, stock: 14, image: "https://images.unsplash.com/photo-1587829741301-dc798b83aca2?w=500&q=80", description: "Ultra HD streaming with dual noise-canceling mics." },

    // Gadgets
    { id: 8, name: "Orbital VR Headset", price: 24999, category: "Gadgets", rating: 4.5, stock: 5, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80", description: "Immersive 8K VR experience." },
    { id: 11, name: "Cyber Pad Pro", price: 12999, category: "Gadgets", rating: 4.4, stock: 7, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80", description: "The ultimate digital notepad for creatives." },
    { id: 12, name: "Drone X-Phantom", price: 45000, category: "Gadgets", rating: 4.9, stock: 3, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&q=80", description: "4K video recording with 30-minute flight time." },
    { id: 13, name: "Infinity Smart Pen", price: 2499, category: "Gadgets", rating: 4.2, stock: 20, image: "https://images.unsplash.com/photo-1585336139118-132f08537060?w=500&q=80", description: "Digitalize your handwritten notes instantly." },
    { id: 27, name: "Nano Projector", price: 15000, category: "Gadgets", rating: 4.6, stock: 12, image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80", description: "Portable 1080p projector for movie nights." },
    { id: 35, name: "Aura Smart Ring", price: 19999, category: "Gadgets", rating: 4.8, stock: 9, image: "https://images.unsplash.com/photo-1624634289419-48283594199c?w=500&q=80", description: "Next-gen health tracking in a sleek titanium ring." },

    // Accessories
    { id: 3, name: "Lumina mechanical V2", price: 2899, category: "Accessories", rating: 4.7, stock: 20, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80", description: "Hot-swappable switches with premium keycaps." },
    { id: 7, name: "ZenFlow Desk Pad", price: 1499, category: "Accessories", rating: 4.6, stock: 50, image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500&q=80", description: "Minimalist felt desk pad for a clean workspace." },
    { id: 14, name: "Leather Tech Case", price: 1999, category: "Accessories", rating: 4.8, stock: 25, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80", description: "Handcrafted genuine leather organizer." },
    { id: 15, name: "Titanium Keycap Set", price: 3499, category: "Accessories", rating: 4.9, stock: 10, image: "https://images.unsplash.com/photo-1618384881928-df9cc0fc3192?w=500&q=80", description: "Ultra-durable custom keycaps for pros." },
    { id: 28, name: "Magnetic Phone Stand", price: 1299, category: "Accessories", rating: 4.5, stock: 40, image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&q=80", description: "Sleek aluminum stand for all smartphones." },
    { id: 36, name: "Nitro Wireless Pad", price: 2499, category: "Accessories", rating: 4.6, stock: 30, image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500&q=80", description: "Fast 15W wireless charging for multiple devices." },

    // Lifestyle
    { id: 16, name: "Terra Coffee Brewer", price: 8999, category: "Lifestyle", rating: 4.7, stock: 12, image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?w=500&q=80", description: "Precision brewing for the perfect morning cup." },
    { id: 17, name: "Aura Diffuser", price: 2299, category: "Lifestyle", rating: 4.5, stock: 30, image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=500&q=80", description: "Essential oil diffuser with color-changing LED." },
    { id: 18, name: "Solar Outdoor Lantern", price: 1599, category: "Lifestyle", rating: 4.3, stock: 40, image: "https://images.unsplash.com/photo-1542731112-5367b7e61e09?w=500&q=80", description: "Eco-friendly lighting for your garden." },
    { id: 19, name: "Weighted Calm Blanket", price: 5999, category: "Lifestyle", rating: 4.8, stock: 15, image: "https://images.unsplash.com/photo-1584444432873-633c2765ca06?w=500&q=80", description: "Improve sleep quality with calming pressure." },
    { id: 29, name: "Hydro Wellness Bottle", price: 2999, category: "Lifestyle", rating: 4.7, stock: 25, image: "https://images.unsplash.com/photo-1602143399827-bd95ef6f072f?w=500&q=80", description: "Insulated smart bottle with hydration reminders." },

    // Home Decor
    { id: 20, name: "Minimalist Wall Clock", price: 1899, category: "Home Decor", rating: 4.6, stock: 20, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80", description: "Silent sweep movement, nordic design." },
    { id: 21, name: "Velvet Accent Chair", price: 12500, category: "Home Decor", rating: 4.9, stock: 5, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80", description: "Elegant luxury seating for your living room." },
    { id: 22, name: "Ceramic Vase Set", price: 2499, category: "Home Decor", rating: 4.4, stock: 18, image: "https://images.unsplash.com/photo-1581781870027-04212e231e96?w=500&q=80", description: "Set of 3 hand-glazed decorative vases." },
    { id: 23, name: "Smart Herb Garden", price: 6999, category: "Home Decor", rating: 4.7, stock: 10, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&q=80", description: "Indoor gardening made easy with LED light." },
    { id: 30, name: "Abstract Canvas Art", price: 4500, category: "Home Decor", rating: 4.8, stock: 8, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80", description: "Hand-painted abstract art for modern homes." },
    { id: 37, name: "Vibe Desk Lamp", price: 3999, category: "Home Decor", rating: 4.6, stock: 15, image: "https://images.unsplash.com/photo-1534073828943-f801091bb270?w=500&q=80", description: "Dimmable LED lamp with touch controls." },

    // Sports
    { id: 24, name: "Hyper Grip Yoga Mat", price: 2999, category: "Sports", rating: 4.8, stock: 25, image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&q=80", description: "Non-slip professional yoga surface." },
    { id: 25, name: "Titan Dumbbell Set", price: 4999, category: "Sports", rating: 4.7, stock: 15, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80", description: "Adjustable weights from 2kg to 10kg." },
    { id: 31, name: "Pro Speed Jump Rope", price: 999, category: "Sports", rating: 4.5, stock: 50, image: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=500&q=80", description: "Steel cable jump rope for cardio training." },
    { id: 32, name: "Ultra Bounce Basketball", price: 1999, category: "Sports", rating: 4.6, stock: 30, image: "https://images.unsplash.com/photo-1519861531070-83d75bd33410?w=500&q=80", description: "Official size and weight for pro-level play." },
    { id: 33, name: "Stealth Fitness Tracker", price: 4500, category: "Sports", rating: 4.7, stock: 15, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80", description: "Tracks steps, heart rate, and sleep quality." },
    { id: 34, name: "Aerobic Step Platform", price: 3499, category: "Sports", rating: 4.4, stock: 20, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80", description: "Adjustable height for home workouts." }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('user')) || null;

// Navigation
function navigateTo(section) {
    const sections = ['home', 'products', 'details', 'cart', 'checkout', 'auth'];
    sections.forEach(s => {
        const el = document.getElementById(`${s}-section`);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`${section}-section`);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0, 0);

    if (section === 'products') renderProducts(products);
    if (section === 'cart') renderCart();
    if (section === 'auth') updateAuthUI();
}

// Auth Logic
function toggleAuth(mode) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (mode === 'signup') {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    } else {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }
}

function handleAuth(event, type) {
    event.preventDefault();
    const name = type === 'signup' ? event.target.elements[0].value : 'User';
    currentUser = { name: name.split(' ')[0] };
    localStorage.setItem('user', JSON.stringify(currentUser));
    updateAuthUI();
    alert(`Success! Welcome to Globe, ${currentUser.name}`);
    navigateTo('home');
}

function toggleUserMenu() {
    if (!currentUser) {
        navigateTo('auth');
        return;
    }
    document.getElementById('user-menu').classList.toggle('hidden');
}

function updateAuthUI() {
    const userNameEl = document.getElementById('user-name');
    const menuNameEl = document.getElementById('menu-name');
    const userMenu = document.getElementById('user-menu');

    if (currentUser) {
        userNameEl.innerText = currentUser.name;
        menuNameEl.innerText = `Hello, ${currentUser.name}`;
    } else {
        userNameEl.innerText = "Login";
        if (userMenu) userMenu.classList.add('hidden');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    updateAuthUI();
    navigateTo('home');
}

// Theme Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Rendering Products
function renderProducts(productsToRender) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="viewProduct(${product.id})">
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <div class="rating"><i class="fas fa-star" style="color:#fdcc0d"></i> ${product.rating}</div>
                <p class="product-price">₹${product.price}</p>
                <button class="btn btn-primary" style="width:100%" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Filters
function applyFilters() {
    const category = document.getElementById('category-filter').value;
    const sort = document.getElementById('sort-filter').value;

    let filtered = products;
    if (category !== 'all') {
        filtered = products.filter(p => p.category === category);
    }

    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    renderProducts(filtered);
}

// Cart Management
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        if (existing.quantity < product.stock) {
            existing.quantity++;
        } else {
            alert('Out of stock!');
            return;
        }
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    alert(`${product.name} added to cart!`);
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function renderCart() {
    const container = document.getElementById('cart-container');
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 50px;">Your cart is empty.</p>';
        return;
    }

    const { subtotal, tax, discount, total } = calculateTotals();

    container.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div class="glass" style="padding:1.5rem; border-radius:24px">
                ${cart.map(item => `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.05)">
                        <div style="display:flex; gap:1rem; align-items:center">
                            <img src="${item.image}" style="width:60px; height:60px; border-radius:12px; object-fit:cover">
                            <div>
                                <h4>${item.name}</h4>
                                <p style="color:var(--text-secondary)">₹${item.price}</p>
                            </div>
                        </div>
                        <div style="display:flex; gap:1rem; align-items:center">
                            <button class="btn" style="padding: 5px 12px; background:#e2e8f0" onclick="changeQty(${item.id}, -1)">-</button>
                            <span style="font-weight:600">${item.quantity}</span>
                            <button class="btn" style="padding: 5px 12px; background:#e2e8f0" onclick="changeQty(${item.id}, 1)">+</button>
                            <button class="btn" style="color:#ef4444" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="glass" style="padding:1.5rem; height: fit-content; border-radius:24px">
                <h3>Order Summary</h3>
                <div style="margin: 1.5rem 0">
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem"><span>Subtotal</span><span>₹${subtotal}</span></div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem"><span>Tax (18%)</span><span>₹${tax}</span></div>
                    ${discount > 0 ? `<div style="display:flex; justify-content:space-between; margin-bottom:0.8rem; color:#10b981"><span>Discount (10%)</span><span>-₹${discount}</span></div>` : ''}
                    <hr style="margin:1rem 0; border:0; border-top:1px solid rgba(0,0,0,0.1)">
                    <div style="display:flex; justify-content:space-between; font-weight:700; font-size:1.3rem"><span>Total</span><span>₹${total}</span></div>
                </div>
                <button class="btn btn-primary" style="width:100%" onclick="navigateTo('checkout')">Proceed to Checkout</button>
            </div>
        </div>
    `;
}

function calculateTotals() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const discount = subtotal > 2000 ? Math.round(subtotal * 0.1) : 0;
    const total = subtotal + tax - discount;
    return { subtotal, tax, discount, total };
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (delta > 0 && item.quantity >= item.stock) {
        alert('Max stock reached');
        return;
    }

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCart();
        renderCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    renderCart();
}

// Product Details
function viewProduct(id) {
    const product = products.find(p => p.id === id);
    const content = document.getElementById('product-details-container');

    content.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; align-items: center;">
            <div class="glass" style="border-radius:32px; padding:10px">
                <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:24px; display:block">
            </div>
            <div>
                <p class="product-category" style="color:#2563eb; font-weight:600">${product.category}</p>
                <h1 style="font-size:3rem; margin:1rem 0">${product.name}</h1>
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem">
                    <span style="font-size:1.5rem; color:#fdcc0d"><i class="fas fa-star"></i> ${product.rating}</span>
                    <span style="color:var(--text-secondary)">| ${product.stock} units available</span>
                </div>
                <p style="font-size:1.1rem; color:var(--text-secondary); margin-bottom:2rem">${product.description}</p>
                <div class="product-price" style="font-size:2.5rem; color:var(--text-primary)">₹${product.price}</div>
                <div style="display:flex; gap:1rem; margin-top:2rem">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn" style="background:#e2e8f0" onclick="navigateTo('products')">Back to Shop</button>
                </div>
            </div>
        </div>
    `;
    navigateTo('details');
}

// Checkout Logic
function renderCheckout() {
    const container = document.getElementById('checkout-container');
    const { subtotal, tax, discount, total } = calculateTotals();

    container.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
            <div class="glass" style="padding:2.5rem; border-radius:32px">
                <h3>Delivery Information</h3>
                <form id="checkout-form" onsubmit="handleOrder(event)" style="margin-top:1.5rem">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" class="form-input" required placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-input" required placeholder="john@example.com">
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" pattern="[0-9]{10}" class="form-input" required placeholder="10-digit mobile number">
                    </div>
                    <div class="form-group">
                        <label>Shipping Address</label>
                        <textarea class="form-input" required rows="3" placeholder="Street, City, ZIP Code"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width:100%; margin-top:1rem">Confirm Order</button>
                </form>
            </div>
            <div class="glass" style="padding:2.5rem; height:fit-content; border-radius:32px">
                <h3>Payment Summary</h3>
                <div style="margin: 2rem 0">
                    ${cart.map(item => `
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem">
                            <span>${item.name} (x${item.quantity})</span>
                            <span style="font-weight:600">₹${item.price * item.quantity}</span>
                        </div>
                    `).join('')}
                    <hr style="margin:1.5rem 0; border:0; border-top:1px solid rgba(0,0,0,0.1)">
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem"><span>Subtotal</span><span>₹${subtotal}</span></div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem"><span>Tax (18%)</span><span>₹${tax}</span></div>
                    ${discount > 0 ? `<div style="display:flex; justify-content:space-between; margin-bottom:0.8rem; color:#10b981"><span>Discount</span><span>-₹${discount}</span></div>` : ''}
                    <div style="display:flex; justify-content:space-between; font-weight:700; font-size:1.6rem; margin-top:1.5rem"><span>Payable</span><span>₹${total}</span></div>
                </div>
            </div>
        </div>
    `;
}

function handleOrder(e) {
    e.preventDefault();
    alert('Thank you for shopping with Globe! Your order has been placed successfully.');
    cart = [];
    updateCart();
    navigateTo('home');
}

// Initial Call
updateCart();
updateAuthUI();
initTheme();

// Navbar Scroll Effect
window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
};
