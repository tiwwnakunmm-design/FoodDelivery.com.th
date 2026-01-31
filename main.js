// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initFooter();
  initMobileMenu();
  updateCartCount();
});

// ========== Header & Footer ==========
function initHeader() {
  const headerHTML = `
    <div class="header-container">
      <div class="header-content">
        <a href="index.html" class="logo">
          <div class="logo-icon">🍜</div>
          <span class="logo-text">FoodDelivery</span>
        </a>

        <nav class="nav-menu" id="nav-menu">
          <a href="index.html" class="nav-link">หน้าแรก</a>
          <a href="menu.html" class="nav-link">เมนูอาหาร</a>
          <a href="orders.html" class="nav-link">รายการสั่งซื้อ</a>
          <a href="profile.html" class="nav-link">โปรไฟล์</a>
        </nav>

        <div class="header-actions">
          <a href="cart.html" class="cart-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 2L7.17 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1h-4.17L15 2H9z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
            <span class="cart-count" id="cart-count">0</span>
          </a>
          <button class="mobile-menu-btn" id="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  `;
  
  const header = document.getElementById('main-header');
  if (header) {
    header.innerHTML = headerHTML;
  }
}

function initFooter() {
  const footerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo-icon">🍜</div>
            <span>FoodDelivery</span>
          </div>
          <p class="footer-desc">บริการสั่งอาหารออนไลน์ที่รวดเร็วและน่าเชื่อถือ</p>
          
        </div>

        <div class="footer-section">
          <h4 class="footer-title">เมนูด่วน</h4>
          <ul class="footer-links">
            <li><a href="index.html">หน้าแรก</a></li>
            <li><a href="menu.html">เมนูอาหาร</a></li>
            <li><a href="orders.html">รายการสั่งซื้อ</a></li>
            <li><a href="tracking.html">ติดตามออเดอร์</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">ช่วยเหลือ</h4>
          <ul class="footer-links">
            <li><a href="#">ศูนย์ช่วยเหลือ</a></li>
            <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
            <li><a href="#">เงื่อนไขการใช้งาน</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">ติดต่อเรา</h4>
          <ul class="footer-contact">
            <li>📞 065-921-9022</li>
            <li>📧 eprrequiem@gmail.com</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 FoodDelivery. All rights reserved.</p>
      </div>
    </div>
  `;
  
  const footer = document.getElementById('main-footer');
  if (footer) {
    footer.innerHTML = footerHTML;
  }
}

// ========== Mobile Menu ==========
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
}

// ========== Cart Management ==========
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(item) {
  const cart = getCart();
  const existingItem = cart.find(i => i.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  saveCart(cart);
  showNotification('เพิ่มสินค้าลงตะกร้าแล้ว', 'success');
}

function removeFromCart(itemId) {
  const cart = getCart().filter(item => item.id !== itemId);
  saveCart(cart);
}

function updateCartQuantity(itemId, quantity) {
  const cart = getCart();
  const item = cart.find(i => i.id === itemId);
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
}

function getCartTotal() {
  return getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById('cart-count');
  
  if (countElement) {
    countElement.textContent = totalItems;
  }
}

// ========== Order Management ==========
function getOrders() {
  return JSON.parse(localStorage.getItem('orders')) || [];
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function createOrder(orderData) {
  const order = {
    id: 'ORD' + Date.now(),
    ...orderData,
    date: new Date().toISOString(),
    status: 'pending'
  };
  
  saveOrder(order);
  return order;
}

function updateOrderStatus(orderId, status) {
  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  
  if (order) {
    order.status = status;
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}

// ========== User Management ==========
function isLoggedIn() {
  return localStorage.getItem('user') !== null;
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

function loginUser(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
}

function logoutUser() {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

// ========== Notifications ==========
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 16px 24px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transform: translateX(400px);
    transition: transform 0.3s ease;
    z-index: 9999;
    font-weight: 500;
    border-left: 4px solid ${type === 'success' ? '#10B981' : type === 'error' ? '#E63946' : '#FFD93D'};
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========== Format Helpers ==========
function formatPrice(price) {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB'
  }).format(price);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}
