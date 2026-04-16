// ─── DATA ────────────────────────────────────────────────────────────────────
const products = [
  {name:"Fone Gamer M25",price:"R$ 69,00",priceNum:69,oldPrice:"R$ 99,90",rating:5,reviews:47,image:"assets/fone-m25-gamer.jpg",tag:"Mais Vendido",stock:8,viewers:15,description:"O Fone M25 possui baixa latência para jogos competitivos, som surround 7.1 e microfone com cancelamento de ruído.",specs:["Surround 7.1","Baixa Latência","Mic c/ Cancelamento","Até 6h de bateria"],paymentLink:"https://deflow.exchange/pay/ef094af0be50cda7",customerReviews:[{name:"Lucas",stars:5,text:"Muito bom para o preço, o som é limpo.",date:"02/04/2026"},{name:"Ana",stars:5,text:"Chegou rápido e a bateria dura muito.",date:"28/03/2026"},{name:"Rafael S.",stars:4,text:"Ótimo custo-benefício, recomendo!",date:"15/03/2026"}]},
  {name:"Fone Bluetooth i12 TWS",price:"R$ 35,00",priceNum:35,oldPrice:"R$ 59,90",rating:4,reviews:83,image:"assets/fone-bluetooth-i12.jpg",tag:"-42%",stock:12,viewers:9,description:"Fones compactos com conexão Bluetooth 5.0 estável. Perfeitos para ouvir música no dia a dia.",specs:["Bluetooth 5.0","Auto Power-On","Até 4h de bateria","Case carregador incluso"],paymentLink:"https://deflow.exchange/pay/d3882585f2883052",customerReviews:[{name:"Carla",stars:4,text:"Simples e funcional. Vale o custo benefício.",date:"05/04/2026"},{name:"Pedro H.",stars:5,text:"Pareamento rápido e som limpo. Recomendo!",date:"01/04/2026"},{name:"Juliana F.",stars:4,text:"Muito bom, pelo preço vale muito.",date:"20/03/2026"}]},
  {name:"Teclado RGB Pro",price:"R$ 159,00",priceNum:159,oldPrice:"R$ 219,90",rating:5,reviews:64,image:"assets/teclado-rgb-pro.jpg",tag:"-32%",stock:10,viewers:18,description:"Teclado mecânico com switches azuis, iluminação RGB customizável e anti-ghosting completo.",specs:["Switches Azuis","RGB Customizável","Anti-Ghosting","Layout ABNT2"],paymentLink:"https://deflow.exchange/pay/9cbb582f13915724",customerReviews:[{name:"Gamer99",stars:5,text:"Clique bem satisfatório e cores lindas!",date:"03/04/2026"},{name:"Carla B.",stars:5,text:"Ótima qualidade de construção.",date:"25/03/2026"},{name:"Diego M.",stars:4,text:"Bom teclado, pelo preço é excelente.",date:"18/03/2026"}]},
  {name:"Teclado Wireless",price:"R$ 219,00",priceNum:219,oldPrice:"R$ 299,90",rating:5,reviews:31,image:"assets/teclado-wireless.jpg",tag:"-38%",stock:6,viewers:5,description:"Liberdade sem fios! Teclado ultra fino com bateria recarregável e resposta instantânea.",specs:["Wireless 2.4GHz","Ultra Fino","Bateria Recarregável","Resposta Instantânea"],paymentLink:"https://deflow.exchange/pay/a68d25a13ae56484",customerReviews:[{name:"Roberto",stars:5,text:"Excelente para produtividade e clean setup.",date:"08/04/2026"},{name:"Bianca T.",stars:5,text:"Lindo demais, combinou perfeito com meu setup.",date:"30/03/2026"},{name:"Gustavo N.",stars:5,text:"Wireless sem delay nenhum.",date:"22/03/2026"}]},
  {name:"Mouse Gamer Black",price:"R$ 99,00",priceNum:99,oldPrice:"R$ 149,90",rating:4,reviews:56,image:"assets/mouse-gamer-black.jpg",tag:"-34%",stock:9,viewers:12,description:"Mouse ergonômico com 7 botões programáveis e ajuste de DPI até 7200.",specs:["Sensor 7200 DPI","7 Botões Programáveis","Ergonômico","Cabo trançado 1.8m"],paymentLink:"https://deflow.exchange/pay/f72d5ac01b9e55ea",customerReviews:[{name:"Vitor",stars:4,text:"Peso ideal e pegada muito boa.",date:"06/04/2026"},{name:"Isabela R.",stars:5,text:"Ergonômico e bonito, o RGB é show de bola.",date:"29/03/2026"},{name:"André L.",stars:4,text:"Bom mouse, cabo de boa qualidade.",date:"21/03/2026"}]},
  {name:"Attack Shark X11",price:"R$ 149,00",priceNum:149,oldPrice:"R$ 219,90",rating:5,reviews:38,image:"assets/attack-shark-x11.jpg",tag:"-41%",stock:7,viewers:8,description:"Mouse super leve (63g) com sensor PixArt PAW3311 de alta performance.",specs:["Sensor PAW3311","63g ultraleve","Tri-mode Wireless","Dock RGB incluso"],paymentLink:"https://deflow.exchange/pay/91a34b8a07b028ee",customerReviews:[{name:"Felipe",stars:5,text:"Incrível, muito leve mesmo. Mudou meu jogo.",date:"07/04/2026"},{name:"Larissa D.",stars:5,text:"Levíssimo e super preciso, vale cada centavo.",date:"31/03/2026"},{name:"Bruno P.",stars:5,text:"Nível de mouse caro por metade do preço. Insano!",date:"24/03/2026"}]}
];

const offers = [
  {name:"Fone Gamer M25",from:"R$ 99,90",to:"R$ 69,00",save:"R$ 30,90",discount:"31%",image:"assets/fone-m25-gamer.jpg",link:"https://deflow.exchange/pay/ef094af0be50cda7"},
  {name:"Mouse Gamer Black",from:"R$ 119,90",to:"R$ 79,00",save:"R$ 40,90",discount:"34%",image:"assets/mouse-gamer-black.jpg",link:"https://deflow.exchange/pay/f72d5ac01b9e55ea"},
  {name:"Teclado RGB Pro",from:"R$ 219,90",to:"R$ 149,00",save:"R$ 70,90",discount:"32%",image:"assets/teclado-rgb-pro.jpg",link:"https://deflow.exchange/pay/9cbb582f13915724"}
];

const combos = [
  {name:"Kit Setup Completo",desc:"Teclado Wireless + Attack Shark X11 + Fone Gamer M25",from:"R$ 619,70",to:"R$ 323,80",save:"Economize R$ 295,90",image:"assets/teclado-wireless.jpg",link:"https://deflow.exchange/pay/765af52785190aea"},
  {name:"Kit Precisão & Áudio",desc:"Attack Shark X11 + Fone Bluetooth i12 TWS",from:"R$ 279,80",to:"R$ 130,60",save:"Economize R$ 149,20",image:"assets/attack-shark-x11.jpg",link:""}
];

const benefits = [
  {icon:"truck",title:"Frete Nacional",desc:"Entrega para todo o Brasil em até 12 dias úteis."},
  {icon:"shield",title:"Garantia Estendida",desc:"Proteção completa contra defeitos de fabricação."},
  {icon:"credit-card",title:"Pagamento Seguro",desc:"Compra 100% segura via Pix."},
  {icon:"headphones",title:"Suporte 24/7",desc:"Atendimento dedicado sempre disponível."},
  {icon:"rotate-ccw",title:"Reembolso em 7 dias",desc:"Devolução fácil com reembolso garantido em até 7 dias."},
  {icon:"trophy",title:"Qualidade Premium",desc:"Produtos testados e certificados."}
];

const socialReviews = [
  {name:"Lucas A.",avatar:"LA",rating:5,text:"Embalagem impecável, tudo funcionando 100%. Produto de qualidade!",product:"Teclado RGB Pro"},
  {name:"Marcos R.",avatar:"MR",rating:5,text:"Melhor preço que encontrei no mercado atual. Recomendo demais.",product:"Fone Bluetooth i12"},
  {name:"João P.",avatar:"JP",rating:5,text:"O teclado mecânico mudou minha gameplay. Top!",product:"Teclado Wireless"},
  {name:"Beatriz W.",avatar:"BW",rating:5,text:"Comprei o i12 e a bateria dura o dia todo. Ótimo custo-benefício.",product:"Fone Bluetooth i12"},
  {name:"Daniel M.",avatar:"DM",rating:5,text:"Site confiável, compra rápida via Pix. Chegou certinho.",product:"Mouse Gamer Black"},
  {name:"Vitor R.",avatar:"VR",rating:5,text:"GGTech é a melhor descoberta do ano. Produtos excelentes!",product:"Attack Shark X11"},
  {name:"Felipe T.",avatar:"FT",rating:5,text:"Design dos fones é muito bonito ao vivo. Qualidade surpreendente.",product:"Fone M25 Gamer"},
  {name:"Pedro S.",avatar:"PS",rating:5,text:"O teclado sem fio e o attack shark x11 é muito bom. Recomendo!",product:"Kit Gamer"}
];

const trustPolicies = [
  {icon:"shield-check",title:"Compra 100% Segura",desc:"Todos os pagamentos são processados com criptografia de ponta a ponta. Seus dados ficam protegidos em todas as etapas da transação."},
  {icon:"lock",title:"Privacidade Garantida",desc:"Seus dados pessoais nunca são compartilhados com terceiros. Seguimos as diretrizes da LGPD (Lei Geral de Proteção de Dados)."},
  {icon:"file-check",title:"Nota Fiscal Eletrônica",desc:"Todos os produtos acompanham nota fiscal. Transparência total em cada compra realizada na GGTECH."},
  {icon:"badge-check",title:"Produtos Originais",desc:"Trabalhamos apenas com fornecedores verificados. Cada produto passa por inspeção de qualidade antes do envio."},
  {icon:"rotate-ccw",title:"Troca Facilitada",desc:"Recebeu um produto com defeito? Fazemos a troca sem custo adicional. Entre em contato pelo WhatsApp."},
  {icon:"alert-triangle",title:"Transparência Total",desc:"Prazos reais: entrega em até 12 dias úteis. Sem promessas falsas. Acompanhe seu pedido em tempo real pelo código de rastreio."}
];

const contactItems = [
  {icon:"message-circle",title:"WhatsApp",value:"(16) 99407-2005",desc:"Atendimento rápido",href:"https://wa.me/5516994072005"},
  {icon:"instagram",title:"Instagram",value:"@ggtech.o.f",desc:"Siga-nos",href:"https://www.instagram.com/ggtech.o.f?igsh=MWd6NzMzb2V5Z2Fobg=="},
  {icon:"mail",title:"E-mail",value:"contato@ggtech.com.br",desc:"Resposta em até 24h",href:"mailto:contato@ggtech.com.br"},
  {icon:"clock",title:"Horário",value:"Seg-Sex: 9h–18h",desc:"Sáb: 9h–13h",href:null}
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function starsHTML(rating, total) {
  let h = '';
  for (let i = 0; i < 5; i++) h += `<svg class="${i < rating ? 'filled' : 'empty'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${i < rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  if (total !== undefined) h += `<span class="count">(${total})</span>`;
  return h;
}

function generateOrderId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "GG-";
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function formatCPF(v) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return d.slice(0,3)+"."+d.slice(3);
  if (d.length <= 9) return d.slice(0,3)+"."+d.slice(3,6)+"."+d.slice(6);
  return d.slice(0,3)+"."+d.slice(3,6)+"."+d.slice(6,9)+"-"+d.slice(9);
}
function formatPhone(v) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return "("+d.slice(0,2)+") "+d.slice(2);
  return "("+d.slice(0,2)+") "+d.slice(2,7)+"-"+d.slice(7);
}
function formatCEP(v) {
  const d = v.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 5) return d;
  return d.slice(0,5)+"-"+d.slice(5);
}

// ─── RENDER PRODUCTS ─────────────────────────────────────────────────────────
let liveViewers = products.map(p => p.viewers);

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card reveal" onclick="openProduct(${i})" style="transition-delay:${i*100}ms">
      <div class="img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" width="800" height="800">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
        <div class="overlay"><span>Ver Detalhes</span></div>
      </div>
      <div class="info">
        <div class="stars">${starsHTML(p.rating, p.reviews)}</div>
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <div class="viewers">
          <span><i data-lucide="eye" style="width:0.75rem;height:0.75rem"></i> <span id="pv${i}">${liveViewers[i]}</span> vendo agora</span>
          <span class="stock-warn">⚠️ ${p.stock} em estoque</span>
        </div>
        <div class="price-row">
          <div>
            <span class="old-price">${p.oldPrice}</span>
            <p class="price">${p.price}</p>
          </div>
          <span class="buy-btn"><i data-lucide="shopping-cart" style="width:1rem;height:1rem"></i> Comprar</span>
        </div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// ─── RENDER OFFERS ───────────────────────────────────────────────────────────
function renderOffers() {
  const grid = document.getElementById("offersGrid");
  grid.innerHTML = offers.map((o, i) => {
    const pIdx = products.findIndex(p => p.name === o.name);
    return `
    <div class="offer-card reveal" style="transition-delay:${i*120}ms">
      <div class="discount-badge">-${o.discount}</div>
      <div class="save-badge">Economize ${o.save}</div>
      <div class="img-wrap"><img src="${o.image}" alt="${o.name}" loading="lazy" width="800" height="800"></div>
      <div class="info">
        <h3>${o.name}</h3>
        <div class="price-block"><span class="from">${o.from}</span><span class="to">${o.to}</span></div>
        <div class="btns">
          <button class="btn-details" onclick="openProduct(${pIdx})"><i data-lucide="eye" style="width:1rem;height:1rem"></i> Ver Detalhes</button>
          <a href="${o.link}" target="_blank" rel="noopener noreferrer" class="btn-buy">Comprar <i data-lucide="arrow-right" style="width:1rem;height:1rem"></i></a>
        </div>
      </div>
    </div>`;
  }).join('');
  lucide.createIcons();
}

// ─── RENDER COMBOS ───────────────────────────────────────────────────────────
function renderCombos() {
  const grid = document.getElementById("combosGrid");
  grid.innerHTML = combos.map((c, i) => `
    <div class="combo-card reveal" style="transition-delay:${i*150}ms">
      <div class="img-wrap">
        <img src="${c.image}" alt="${c.name}" loading="lazy" width="800" height="600">
        <div class="img-overlay"></div>
      </div>
      <div class="save-tag"><i data-lucide="sparkles" style="width:0.875rem;height:0.875rem"></i> ${c.save}</div>
      <div class="bottom">
        <h3>${c.name}</h3>
        <p class="combo-desc">${c.desc}</p>
        <div class="price-row">
          <div><span class="from">${c.from}</span><p class="to">${c.to}</p></div>
          <div class="action-btns">
            <button class="btn-details" onclick="openCombo(${i})"><i data-lucide="eye" style="width:1rem;height:1rem"></i> Detalhes</button>
            <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="btn-buy">Comprar <i data-lucide="arrow-right" style="width:1rem;height:1rem"></i></a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// ─── RENDER BENEFITS ─────────────────────────────────────────────────────────
function renderBenefits() {
  const grid = document.getElementById("benefitsGrid");
  grid.innerHTML = benefits.map((b, i) => `
    <div class="benefit-card reveal" style="transition-delay:${i*80}ms">
      <div class="icon-wrap"><i data-lucide="${b.icon}" style="width:1.5rem;height:1.5rem"></i></div>
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    </div>
  `).join('');
  lucide.createIcons();
}

// ─── RENDER REVIEWS ──────────────────────────────────────────────────────────
function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  grid.innerHTML = socialReviews.map((r, i) => `
    <div class="review-card reveal" style="transition-delay:${i*60}ms">
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem">
        <div class="avatar">${r.avatar}</div>
        <div style="min-width:0">
          <p style="font-size:0.875rem;font-weight:700;color:var(--fg)">${r.name}</p>
          <div class="verified"><i data-lucide="check-circle" style="width:0.75rem;height:0.75rem"></i> Compra verificada</div>
        </div>
      </div>
      <div class="stars" style="margin-bottom:0.75rem">${starsHTML(r.rating)}</div>
      <p style="font-size:0.875rem;color:var(--muted-fg);line-height:1.6">"${r.text}"</p>
      <p style="margin-top:0.75rem;font-size:0.75rem;color:var(--primary);opacity:0.7;font-weight:500">${r.product}</p>
    </div>
  `).join('');
  lucide.createIcons();
}

// ─── RENDER POLICIES ─────────────────────────────────────────────────────────
function renderPolicies() {
  const grid = document.getElementById("policiesGrid");
  grid.innerHTML = trustPolicies.map((p, i) => `
    <div class="benefit-card reveal" style="transition-delay:${i*80}ms">
      <div class="icon-wrap"><i data-lucide="${p.icon}" style="width:1.5rem;height:1.5rem"></i></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');

  const banner = document.getElementById("trustBanner");
  banner.innerHTML = `
    <div class="item"><div class="item-icon"><i data-lucide="shield" style="width:1.5rem;height:1.5rem"></i></div><div style="text-align:left"><p style="font-size:0.875rem;font-weight:700;color:var(--fg)">7 Dias de Garantia</p><p style="font-size:0.75rem;color:var(--muted-fg)">Reembolso integral</p></div></div>
    <div class="divider"></div>
    <div class="item"><div class="item-icon"><i data-lucide="truck" style="width:1.5rem;height:1.5rem"></i></div><div style="text-align:left"><p style="font-size:0.875rem;font-weight:700;color:var(--fg)">Entrega em até 12 Dias</p><p style="font-size:0.75rem;color:var(--muted-fg)">Para todo o Brasil</p></div></div>
    <div class="divider"></div>
    <div class="item"><div class="item-icon"><i data-lucide="lock" style="width:1.5rem;height:1.5rem"></i></div><div style="text-align:left"><p style="font-size:0.875rem;font-weight:700;color:var(--fg)">LGPD Compliant</p><p style="font-size:0.75rem;color:var(--muted-fg)">Dados protegidos</p></div></div>
    <div class="divider"></div>
    <div class="item"><div class="item-icon"><i data-lucide="badge-check" style="width:1.5rem;height:1.5rem"></i></div><div style="text-align:left"><p style="font-size:0.875rem;font-weight:700;color:var(--fg)">500+ Clientes</p><p style="font-size:0.75rem;color:var(--muted-fg)">Satisfação garantida</p></div></div>
  `;
  lucide.createIcons();
}

// ─── RENDER CONTACT ──────────────────────────────────────────────────────────
function renderContact() {
  const grid = document.getElementById("contactGrid");
  grid.innerHTML = contactItems.map((c, i) => `
    <div class="contact-card reveal" style="transition-delay:${i*80}ms">
      <div class="icon-wrap"><i data-lucide="${c.icon}" style="width:1.5rem;height:1.5rem"></i></div>
      <h3>${c.title}</h3>
      ${c.href ? `<a class="link" href="${c.href}" target="_blank" rel="noopener noreferrer">${c.value}</a>` : `<p style="font-size:0.875rem;color:var(--primary);font-weight:600">${c.value}</p>`}
      <p class="sub">${c.desc}</p>
    </div>
  `).join('');
  lucide.createIcons();
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
let currentProduct = null;
let currentPaymentLink = '';

function openProduct(idx) {
  currentProduct = products[idx];
  currentPaymentLink = currentProduct.paymentLink;
  const m = document.getElementById("productModal");
  document.getElementById("modalDetail").classList.remove("hidden");
  document.getElementById("modalCheckout").classList.add("hidden");
  document.getElementById("modalImg").src = currentProduct.image;
  document.getElementById("modalImg").alt = currentProduct.name;
  document.getElementById("modalTag").textContent = currentProduct.tag;
  document.getElementById("modalTag").style.display = currentProduct.tag ? '' : 'none';
  document.getElementById("modalName").textContent = currentProduct.name;
  document.getElementById("modalStars").innerHTML = starsHTML(currentProduct.rating, currentProduct.reviews);
  document.getElementById("modalDesc").textContent = currentProduct.description;
  document.getElementById("modalSpecs").innerHTML = currentProduct.specs.map(s => `<span>${s}</span>`).join('');
  document.getElementById("modalOldPrice").textContent = currentProduct.oldPrice;
  document.getElementById("modalPrice").textContent = currentProduct.price;
  document.getElementById("modalViewers").textContent = currentProduct.viewers;
  document.getElementById("modalStock").textContent = currentProduct.stock;

  const reviewsEl = document.getElementById("modalReviews");
  reviewsEl.innerHTML = `<h4><i data-lucide="message-square"></i>Avaliações dos Clientes</h4>` +
    currentProduct.customerReviews.map(r => `
      <div class="modal-review">
        <div class="header">
          <div class="user">
            <div class="user-avatar">${r.name.charAt(0)}</div>
            <span class="user-name">${r.name}</span>
            <span class="verified"><i data-lucide="check-circle"></i> Compra verificada</span>
          </div>
          <span class="date">${r.date}</span>
        </div>
        <div class="stars" style="margin-bottom:0.5rem">${starsHTML(r.stars)}</div>
        <p>${r.text}</p>
      </div>
    `).join('');

  m.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function openCombo(idx) {
  const c = combos[idx];
  currentPaymentLink = c.link;
  currentProduct = {name:c.name,image:c.image,price:c.to,oldPrice:c.from,tag:c.save,rating:5,reviews:0,description:c.desc,specs:[],stock:5,viewers:3,paymentLink:c.link,customerReviews:[]};
  const m = document.getElementById("productModal");
  document.getElementById("modalDetail").classList.remove("hidden");
  document.getElementById("modalCheckout").classList.add("hidden");
  document.getElementById("modalImg").src = c.image;
  document.getElementById("modalImg").alt = c.name;
  document.getElementById("modalTag").textContent = c.save;
  document.getElementById("modalTag").style.display = '';
  document.getElementById("modalName").textContent = c.name;
  document.getElementById("modalStars").innerHTML = '';
  document.getElementById("modalDesc").textContent = c.desc;
  document.getElementById("modalSpecs").innerHTML = '';
  document.getElementById("modalOldPrice").textContent = c.from;
  document.getElementById("modalPrice").textContent = c.to;
  document.getElementById("modalViewers").textContent = '3';
  document.getElementById("modalStock").textContent = '5';
  document.getElementById("modalReviews").innerHTML = '';
  m.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeModal() {
  document.getElementById("productModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function showCheckout() {
  document.getElementById("modalDetail").classList.add("hidden");
  document.getElementById("modalCheckout").classList.remove("hidden");
  document.getElementById("checkoutImg").src = currentProduct.image;
  document.getElementById("checkoutName").textContent = currentProduct.name;
  document.getElementById("checkoutPrice").textContent = currentProduct.price;
  document.getElementById("checkoutOrderId").textContent = generateOrderId();
  document.getElementById("checkoutSubtotal").textContent = currentProduct.price;
  document.getElementById("checkoutTotal").textContent = currentProduct.price;
  // Clear form
  ["inpNome","inpCpf","inpTel","inpCep","inpEnd"].forEach(id => document.getElementById(id).value = '');
  document.querySelectorAll(".input-group.error").forEach(el => el.classList.remove("error"));
  document.querySelectorAll(".input-error").forEach(el => el.remove());
  lucide.createIcons();
}

function hideCheckout() {
  document.getElementById("modalCheckout").classList.add("hidden");
  document.getElementById("modalDetail").classList.remove("hidden");
}

// ─── CHECKOUT FORM ───────────────────────────────────────────────────────────
document.getElementById("inpCpf").addEventListener("input", function() { this.value = formatCPF(this.value); });
document.getElementById("inpTel").addEventListener("input", function() { this.value = formatPhone(this.value); });
document.getElementById("inpCep").addEventListener("input", function() { this.value = formatCEP(this.value); });

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelectorAll(".input-error").forEach(el => el.remove());
  document.querySelectorAll(".input-group.error").forEach(el => el.classList.remove("error"));

  let valid = true;
  function showErr(grpId, msg) {
    valid = false;
    const grp = document.getElementById(grpId);
    grp.classList.add("error");
    const err = document.createElement("p");
    err.className = "input-error";
    err.textContent = msg;
    grp.parentNode.insertBefore(err, grp.nextSibling);
  }

  const nome = document.getElementById("inpNome").value.trim();
  const cpf = document.getElementById("inpCpf").value.replace(/\D/g, "");
  const tel = document.getElementById("inpTel").value.replace(/\D/g, "");
  const cep = document.getElementById("inpCep").value.replace(/\D/g, "");
  const end = document.getElementById("inpEnd").value.trim();

  if (!nome || nome.length < 3) showErr("grpNome", "Nome completo é obrigatório");
  if (cpf.length !== 11) showErr("grpCpf", "CPF inválido");
  if (tel.length < 10) showErr("grpTel", "Telefone inválido");
  if (cep.length !== 8) showErr("grpCep", "CEP inválido");
  if (!end || end.length < 5) showErr("grpEnd", "Endereço é obrigatório");

  if (valid) {
    window.open(currentPaymentLink, "_blank", "noopener,noreferrer");
  }
});

// ─── NAV ─────────────────────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navCta = document.getElementById("navCta");

window.addEventListener("scroll", function() {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}, {passive: true});

// Show CTA on desktop
if (window.innerWidth >= 640) navCta.style.display = "inline-flex";

hamburgerBtn.addEventListener("click", function() {
  const isOpen = mobileMenu.classList.contains("open");
  if (isOpen) {
    mobileMenu.classList.remove("open");
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
    setTimeout(() => mobileMenu.classList.add("open"), 10);
  }
});

function closeMobile() {
  mobileMenu.classList.remove("open");
  mobileMenu.style.display = "none";
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ─── LIVE VIEWERS ────────────────────────────────────────────────────────────
setInterval(() => {
  liveViewers = products.map(p => Math.max(3, p.viewers + Math.floor(Math.random() * 11) - 5));
  products.forEach((_, i) => {
    const el = document.getElementById("pv" + i);
    if (el) el.textContent = liveViewers[i];
  });
}, 3000);

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  renderProducts();
  renderOffers();
  renderCombos();
  renderBenefits();
  renderReviews();
  renderPolicies();
  renderContact();
  lucide.createIcons();
  initReveal();
});
