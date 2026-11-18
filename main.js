/* Shared site behaviour. Navigation/footer links are maintained here. */
const SITE_LINKS = [
  { label: "मुखपृष्ठ", href: "index.html", key: "home" },
  { label: "हमारी ओर से", href: "pages/hamari-aur-se.html", key: "about" },
  { label: "दीमक कहानी प्रतियोगिता", href: "pages/kahani-pratiyogita.html", key: "competition" },
  { label: "साहित्य", href: "pages/sahitya.html", key: "literature" },
  { label: "प्रतिक्रिया", href: "pages/pratikriya.html", key: "feedback" }
];

function siteBasePath() {
  return location.pathname.includes("/pages/") ? "../" : "";
}

function renderSharedLayout() {
  const base = siteBasePath();
  const pageKey = document.body.dataset.page || "home";
  const headerHost = document.querySelector("[data-site-header]");
  const footerHost = document.querySelector("[data-site-footer]");

  if (headerHost) {
    const nav = SITE_LINKS.map(item =>
      `<a href="${base}${item.href}" ${item.key === pageKey ? 'aria-current="page"' : ""}>${item.label}</a>`
    ).join("");
    headerHost.innerHTML = `
      <div class="topline"><div class="container"><span>एक स्वतंत्र हिंदी वेब पत्रिका</span><span>प्रथम अंक · 30 नवम्बर 2026</span></div></div>
      <header class="site-header"><div class="container header-inner">
        <a class="brand" href="${base}index.html" aria-label="दीमक मुखपृष्ठ">
          <img class="brand-logo" src="${base}assets/images/logo.png" alt="दीमक पत्रिका का लोगो">
          <span class="brand-text">
          <span class="brand-name">दीमक पत्रिका</span>
          <span class="brand-tagline">सामाजिक-सांस्कृतिक जड़ता की परख</span>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">☰ मेन्यू</button>
        <nav class="primary-nav" id="primary-nav" aria-label="मुख्य नेविगेशन">${nav}</nav>
      </div></header>`;
    const toggle = headerHost.querySelector(".menu-toggle");
    const menu = headerHost.querySelector(".primary-nav");
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (footerHost) {
    const links = SITE_LINKS.map(item => `<a href="${base}${item.href}">${item.label}</a>`).join("");
    footerHost.innerHTML = `
      <footer class="site-footer"><div class="container">
        <div class="footer-top">
          <div><div class="footer-brand">दीमक पत्रिका</div>
            <p class="footer-desc">सामाजिक-सांस्कृतिक जड़ता की परख — हिंदी में साहित्य, विचार और रचनात्मक अभिव्यक्ति का मंच।</p>
          </div>
          <nav class="footer-links" aria-label="फुटर नेविगेशन">${links}</nav>
        </div>
        <div class="footer-bottom"><span>© 2026 दीमक पत्रिका। सर्वाधिकार सुरक्षित।</span><span>प्रथम अंक · 30 नवम्बर 2026</span></div>
      </div></footer>`;
  }
}

document.addEventListener("DOMContentLoaded", renderSharedLayout);
