const NOMOR_WA_SHOP = "6281549511644";

// ==========================================
// DATA DAFTAR PRODUK MADEO SHOP
// ==========================================
const categoriesData = [
    {
        id: "platinum",
        title: "PLATINUM OTR2",
        icon: "💎",
        products: [
            { id: 1, name: "2.500 Platinum OTR2", price: 10000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/685dcb9f-95e0-4b83-bcb1-f4debe719335.jpg", keywords: "2.500 2500 platinum otr2" },
            { id: 2, name: "3.500 Platinum OTR2", price: 14000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/88bdde48-87dd-46c4-9e08-f3b47833d3ab.jpg", keywords: "3.500 3500 platinum otr2" },
            { id: 3, name: "5.500 Platinum OTR2", price: 18000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/2cfddf12-0209-4121-987f-1fa5da10210b.jpg", keywords: "5.500 5500 platinum otr2" },
            { id: 4, name: "8.500 Platinum OTR2", price: 24000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/90ab2932-f377-473c-86a5-4e193b7e1576.jpg", tag: "Best Value", keywords: "8.500 8500 platinum otr2" }
        ]
    },
    {
        id: "coins",
        title: "COINS OTR2",
        icon: "🪙",
        products: [
            { id: 5, name: "15 Juta Coins OTR2", price: 5000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/d4d92007-f5ae-4a74-b25a-409299503b68.jpg", keywords: "15 juta 15000000 coins otr2" },
            { id: 6, name: "25 Juta Coins OTR2", price: 9000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/4179def8-a06a-470d-89f7-47cffaee41e5.jpg", keywords: "25 juta 25000000 coins otr2" },
            { id: 7, name: "50 Juta Coins OTR2", price: 15000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/41c6e876-4737-4db8-bfe1-2d922543e076.jpg", tag: "Populer", keywords: "50 juta 50000000 coins otr2" },
            { id: 8, name: "80 Juta Coins OTR2", price: 20000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/e346596a-bd69-4477-ad6d-4bfc2acc3265.jpg", tag: "Best Value", keywords: "80 juta 80000000 coins otr2" }
        ]
    },
    {
        id: "truck",
        title: "TRUCK & RANK OTR2",
        icon: "🚛",
        products: [
            { id: 13, name: "ATLAS 537", price: 10000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/bf3b550a-af32-44e0-b98c-33ff564dddb3.jpg", keywords: "atlas 537 truck otr2" },
            { id: 14, name: "MAXIMUS", price: 10000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/4f176e86-1685-4204-9633-8f78571cb505.jpg", keywords: "maximus truck otr2" },
            { id: 15, name: "MAX RANK OTR2", price: 20000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/4cacf332-b85a-44b2-a593-b560473d2c0f.jpg", tag: "Best Value", keywords: "max rank otr2" }
        ]
    },
    {
        id: "ecu-a",
        title: "ECU CLASS A OTR2",
        icon: "⚡",
        products: [
            { id: 9, name: "ECU Class A OTR2 (x1)", price: 5000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/1bca68e4-d544-41dc-9b7d-b57bb38d0f59.jpg", keywords: "ecu class a otr2 1x" },
            { id: 10, name: "ECU Class A OTR2 (x5)", price: 20000, oldPrice: 25000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/2bdd77d9-7687-4f9d-9c84-ec030a167ad3.jpg", tag: "HEMAT Rp 5.000", keywords: "ecu class a otr2 5x hemat" }
        ]
    },
    {
        id: "ecu-b",
        title: "ECU CLASS B OTR2",
        icon: "⚙️",
        products: [
            { id: 11, name: "ECU Class B OTR2 (x1)", price: 3000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/e0708bc5-5029-4d9c-81c6-6ad87a0d68e7.jpg", keywords: "ecu class b otr2 1x" },
            { id: 12, name: "ECU Class B OTR2 (x5)", price: 12000, oldPrice: 15000, img: "https://i.supaimg.com/81685d48-59a5-4a2d-80dd-a3252e62e807/ea42a905-68e2-473a-a225-dcc237bc15ff.jpg", tag: "HEMAT Rp 3.000", keywords: "ecu class b otr2 5x hemat" }
        ]
    }
];

let cart = {};

// RENDER PRODUK AUTOMATIS
function renderProducts() {
    const container = document.getElementById('app-products');
    let html = '';

    categoriesData.forEach(cat => {
        html += `
        <section class="category-section" data-category="${cat.id}">
            <div class="section-title">
                <span class="icon-gem">${cat.icon}</span>
                <h3>${cat.title}</h3>
            </div>
            <div class="product-grid">
        `;

        cat.products.forEach(p => {
            const badgeClass = p.tag && p.tag.toLowerCase().includes('populer') ? 'tag-populer' : 'tag-best';
            const badgeHtml = p.tag ? `<span class="card-badge ${badgeClass}">${p.tag}</span>` : '';
            
            const priceHtml = p.oldPrice 
                ? `<div class="card-price-wrapper"><span class="old-price">Rp ${p.oldPrice.toLocaleString('id-ID')}</span><span class="card-price">Rp ${p.price.toLocaleString('id-ID')}</span></div>`
                : `<div class="card-price">Rp ${p.price.toLocaleString('id-ID')}</div>`;

            html += `
                <div class="product-card" id="card-${p.id}" data-name="${p.keywords}">
                    ${badgeHtml}
                    <div class="img-box">
                        <img src="${p.img}" alt="${p.name}">
                    </div>
                    <div class="card-body">
                        <h4>${p.name}</h4>
                        ${priceHtml}
                        <div class="card-action">
                            <button class="btn-add" onclick="addToCart(${p.id}, '${p.name}', ${p.price})">+ Tambah</button>
                            <div class="qty-control" id="qty-${p.id}">
                                <button class="btn-qty" onclick="changeQty(${p.id}, -1)">-</button>
                                <span class="qty-num" id="num-${p.id}">1</span>
                                <button class="btn-qty" onclick="changeQty(${p.id}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
            </div>
        </section>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderProducts);

// LOGIKA KERANJANG & ACTIONS
function addToCart(id, name, price) {
    cart[id] = { name: name, price: price, qty: 1 };
    updateUI(id);
}

function changeQty(id, delta) {
    if (cart[id]) {
        cart[id].qty += delta;
        if (cart[id].qty <= 0) {
            delete cart[id];
        }
    }
    updateUI(id);
}

function updateUI(id) {
    const card = document.getElementById(`card-${id}`);
    if (!card) return;

    const btnAdd = card.querySelector('.btn-add');
    const qtyControl = card.querySelector('.qty-control');
    const qtyNum = card.querySelector('.qty-num');

    if (cart[id]) {
        btnAdd.style.display = 'none';
        qtyControl.style.display = 'flex';
        qtyNum.innerText = cart[id].qty;
    } else {
        btnAdd.style.display = 'block';
        qtyControl.style.display = 'none';
    }

    updateCartBar();
}

function updateCartBar() {
    const bar = document.getElementById('checkoutBar');
    let totalItems = 0;
    let totalPrice = 0;

    for (let id in cart) {
        totalItems += cart[id].qty;
        totalPrice += cart[id].price * cart[id].qty;
    }

    if (totalItems > 0) {
        bar.style.display = 'flex';
        document.getElementById('totalItems').innerText = `${totalItems} Produk Dipilih`;
        document.getElementById('totalPrice').innerText = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    } else {
        bar.style.display = 'none';
    }
}

function filterCategory(cat, evt) {
    const pills = document.querySelectorAll('.nav-pill');
    pills.forEach(p => p.classList.remove('active'));
    evt.target.classList.add('active');

    const sections = document.querySelectorAll('.category-section');
    sections.forEach(sec => {
        if (cat === 'all' || sec.getAttribute('data-category') === cat) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
    });
}

function searchProduct() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        let name = card.getAttribute('data-name');
        if (name.includes(input)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// CHECKOUT DENGAN PESAN OTOMATIS DI WHATSAPP
function checkoutWA() {
    let message = "Halo MADEO SHOP, saya mau pesan item berikut:\n\n";
    let total = 0;

    for (let id in cart) {
        let subtotal = cart[id].price * cart[id].qty;
        message += `• ${cart[id].name} (${cart[id].qty}x) = Rp ${subtotal.toLocaleString('id-ID')}\n`;
        total += subtotal;
    }

    message += `\n------------------------------\n`;
    message += `*Total Pembayaran: Rp ${total.toLocaleString('id-ID')}*\n\n`;
    message += `Mohon diproses ya min, terima kasih!`;

    const targetUrl = `https://api.whatsapp.com/send?phone=${NOMOR_WA_SHOP}&text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank');
}
