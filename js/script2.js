
    // ========================== DATA ==========================
    const aboutData = [
      {
        icon: "fas fa-chart-line",
        title: "Industry Expertise",
        desc: "• Accurate & Reliable Solutions<br>• Expert Technical Team<br>• PAN India Service Support<br>• Cost-Effective Services<br>• Customer-Centric Approach"
      },
      {
        icon: "fas fa-certificate",
        title: "Authorized Partner",
        desc: "Official distributor for Fluke, Mextech, Metravi, Amprobe, Raytek – certified premium quality instruments."
      },
      {
        icon: "fas fa-shipping-fast",
        title: "Ready Stock & Quick Delivery",
        desc: "Rapid dispatch with extensive inventory of testing gear. Most orders shipped within 24-48 hours."
      },
      {
        icon: "fas fa-headset",
        title: "Technical Support",
        desc: "Dedicated support team for installation guidance, troubleshooting, and after-sales service."
      },
      {
        icon: "fas fa-award",
        title: "Quality Assurance",
        desc: "All instruments come with manufacturer warranty and calibration certificates as per industry standards."
      },
      {
        icon: "fas fa-handshake",
        title: "Customer First",
        desc: "Building long-term relationships through transparency, reliability, and exceptional service."
      }
    ];

    const servicesData = [
      {
        icon: "fas fa-temperature-high",
        title: "Calibration Services",
        desc: "Dry blocks (SUD series), IR black body, PRTs and on-site support."
      },
      {
        icon: "fas fa-microchip",
        title: "Electrical Testing",
        desc: "ELCB testers, loop/PSC, high voltage testers, clamp meters."
      },
      {
        icon: "fas fa-cloud-sun",
        title: "Environmental Monitoring",
        desc: "WiFi data loggers, temp+RH, CO2/O2 cold chain solutions."
      },
      {
        icon: "fas fa-flask",
        title: "Pharmaceutical Instruments",
        desc: "Temperature mapping, validation, and monitoring for pharma compliance."
      },
      {
        icon: "fas fa-industry",
        title: "Industrial Instruments",
        desc: "Industrial testing and measuring instruments for manufacturing and QC."
      }
    ];

    // ========================== PRODUCTS DATA WITH SUB-CATEGORIES ==========================
    const productsData = [
      // ===== PRESSURE TRANSMITTERS / SWITCHES / GAUGES =====
      {
        name: "M5200/U5200 Pressure Sensors",
        category: "pressure",
        subcategory: "pressure-sensors",
        desc: "Range: -1 to 1000 bar. High accuracy pressure sensors for industrial applications",
        img: "assets/images/M5200U5200 Pressure Sensors.png"      
      },
      {
        name: "85 CV Flush Mount Pressure Transmitter",
        category: "pressure",
        subcategory: "pressure-transmitters",
        desc: "Flush mount pressure transmitter for hygienic and industrial applications.",
        img: "assets/images/85 CV Flush Mount Pressure Transmitter.png"      
      },
      {
        name: "TE Position Sensors & Transmitters",
        category: "pressure",
        subcategory: "position-sensors",
        desc: "LVDT, RVDT & TILT sensors for precise position measurement.",
        img: "assets/images/TE Position Sensors & Transmitters.png"      
      },
      {
        name: "TX 430 Pressure Gauge & Switch",
        category: "pressure",
        subcategory: "pressure-gauges",
        desc: "Digital pressure gauge and differential pressure switch.",
        img: "assets/images/TX 430 Pressure Gauge & Switch.png"      
      },
      {
        name: "DPS Series Pressure Switch",
        category: "pressure",
        subcategory: "pressure-switches",
        desc: "Differential pressure switch for industrial monitoring.",
        img: "assets/images/DPS Series Pressure Switch.png"      
      },
      // ===== HUMIDITY & TEMPERATURE SENSORS =====
      {
        name: "HygroFlex1 Humidity Transmitter",
        category: "humidity",
        subcategory: "humidity-transmitters",
        desc: "Range: 0...100%rh / 0...50°C. Low cost humidity & temperature transmitter.",
        img: "/assets/images/HygroFlex1 Humidity Transmitter.png"      
      },
      {
        name: "HygroPalm Series Handheld",
        category: "humidity",
        subcategory: "handheld-meters",
        desc: "Range: 0...100%rh / -50...200°C. Portable humidity & temperature meter.",
        img: "/assets/images/HygroPalm Series Handheld.png"      
      },
      {
        name: "HF 3 Series Humidity Transmitter",
        category: "humidity",
        subcategory: "humidity-transmitters",
        desc: "Range: 0...100%rh / -40...60°C. For BMS & HVAC applications.",
        img: "/assets/images/HF 3 Series Humidity Transmitter.png"      
      },
      {
        name: "HF 4/5 Series High Accuracy",
        category: "humidity",
        subcategory: "humidity-transmitters",
        desc: "Range: 0...100%rh / -40...200°C. High accuracy humidity & temperature transmitter.",
        img: "/assets/images/HF 45 Series High Accuracy.png"      
      },
      {
        name: "MP100A/MP400A Metrological Probes",
        category: "humidity",
        subcategory: "metrological-probes",
        desc: "Range: 0...100%rh / -40...60°C. Precision metrological probes.",
        img: "/assets/images/MP100A-MP400A Metrological Probes.png"      
      },
      {
        name: "HygroGen2 Humidity Calibrator",
        category: "humidity",
        subcategory: "humidity-calibrators",
        desc: "Range: 5...95% rh / 5...60°C. Portable humidity generator for calibration.",
        img: "/assets/images/HygroGen2 Humidity Calibrator.png"      
      },
      // ===== FLOW & VELOCITY TRANSMITTERS =====
      {
        name: "Flow & Velocity Transmitters",
        category: "flow",
        subcategory: "flow-transmitters",
        desc: "Range: 0...224 m/s / 0...47880 m³/hr. For air and gas flow measurement.",
        img: "/assets/images/FlowVelocityTransmitters.png"      
      },
      {
        name: "Low Cost Air Velocity Probes",
        category: "flow",
        subcategory: "velocity-probes",
        desc: "Range: 0...2 / 10 / 15 / 20 m/s. Economical air velocity measurement.",
        img: "/assets/images/LowCostAirVelocityProbes.png"      
      },
      {
        name: "Moisture In Oil Transmitters",
        category: "flow",
        subcategory: "moisture-transmitters",
        desc: "Range: 0...1 aw / 0...100°C / 0...100 ppm. For transformer oil monitoring.",
        img: "/assets/images/MoistureInOilTransmitters.png"      
      },
      {
        name: "Dewpoint Transmitters",
        category: "flow",
        subcategory: "dewpoint-transmitters",
        desc: "Range: Td -80...30°C. Precise dewpoint measurement for industrial gases.",
        img: "/assets/images/DewpointTransmitters.png"      
      },
      {
        name: "LD 500/510 Leak Detector",
        category: "flow",
        subcategory: "leak-detectors",
        desc: "Detects smallest leaks (0.1 l/min) even over long distances.",
        img: "/assets/images/LD500510LeakDetector.png"      
      },
      // ===== DIFFERENTIAL PRESSURE =====
      {
        name: "Series S2000 Low Cost DP Gauge",
        category: "differential",
        subcategory: "dp-gauges",
        desc: "Range: 0...2500 mmWC. Low cost differential pressure gauge.",
        img: "/assets/images/SeriesS2000LowCostDPGauge.png"      
      },
      {
        name: "Series A1/A2/A3/A4 Digital DP Gauge",
        category: "differential",
        subcategory: "dp-gauges",
        desc: "Range: 0...1500 mmWC. Digital differential pressure gauge / transmitter / controller.",
        img: "/assets/images/SeriesA1A2A3A4DigitalDPGauge.png"      
      },
      {
        name: "Series 251 DP Switch & Transmitter",
        category: "differential",
        subcategory: "dp-switches",
        desc: "Range: 0...1000 pa / 0...500 psi. Differential pressure switch and transmitter.",
        img: "/assets/images/Series251DPSwitchTransmitter.png"      
      },
      {
        name: "Airflow Capture Hood",
        category: "differential",
        subcategory: "airflow-hoods",
        desc: "Range: 23 to 2531 CFM (40 to 4300 m³/h). For HVAC air balance measurement.",
        img: "/assets/images/AirflowCaptureHood.png"      
      },
      // ===== GAS DETECTORS & SENSORS =====
      {
        name: "Gas Detector & Sensors",
        category: "gas",
        subcategory: "gas-detectors",
        desc: "Hydrogen, Hydrogen Sulphide, Oxygen, Air Quality Monitor, Ammonia/Ethylene detectors.",
        img: "/assets/images/GasDetectorSensors.png"      
      },
      {
        name: "pH / Conductivity / Dissolved Oxygen Systems",
        category: "gas",
        subcategory: "ph-systems",
        desc: "COD / BOD / TOC / TSS systems for water and wastewater analysis.",
        img: "/assets/images/pHConductivityDissolvedOxygenSystems.png"      
      },
      // ===== CO2 & IAQ =====
      {
        name: "eSENSE / aSENSE Wall & Duct Mount",
        category: "gas",
        subcategory: "co2-sensors",
        desc: "Range: 0...10%. CO2 and temperature transmitters for wall and duct mounting.",
        img: "/assets/images/eSENSEaSENSEWallDuct Mount.png"      
      },
      {
        name: "Handheld CO2 Meters & Sensor Modules",
        category: "gas",
        subcategory: "co2-meters",
        desc: "Range: 0...2000 ppm & up to 3.2%. Portable CO2 measurement solutions.",
        img: "/assets/images/HandheldCO2MetersSensorModules.png"      
      },
      {
        name: "Handheld Indoor Air Quality Meter & Manometer",
        category: "gas",
        subcategory: "iaq-meters",
        desc: "For indoor air quality monitoring and differential pressure measurement.",
        img: "/assets/images/HandheldIndoorAirQualityMeterManometer.png"      
      },
      // ===== DATA LOGGERS =====
      {
        name: "Elitech Data Loggers",
        category: "data-logger",
        subcategory: "temperature-loggers",
        desc: "Loge1, Rc-5, Rc4-hc. Temperature and humidity data logging for cold chain.",
        img: "/assets/images/ElitechDataLoggers.png"      
      },
      // ===== CALIBRATION =====
      {
        name: "Temperature Mapping Study",
        category: "calibration",
        subcategory: "temperature-mapping",
        desc: "Temperature mapping study for cold rooms, warehouses, and stability chambers.",
        img: "/assets/images/TemperatureMappingStudy.png"      
      },
      {
        name: "SUD-30X Cold Dry Block",
        category: "calibration",
        subcategory: "dry-block-calibrators",
        desc: "-30°C to 100°C, stability ±0.01°C, industrial grade.",
        img: "/assets/images/SUD30XColdDryBlock.png"      
      },
      {
        name: "SUD-300 Hot Dry Block",
        category: "calibration",
        subcategory: "dry-block-calibrators",
        desc: "50°C to 300°C, fast heating, portable.",
        img: "/assets/images/SUD300HotDryBlock.png"      
      }
    ];

    // ========================== PROJECTS / RECENT DEPLOYMENTS ==========================
    const projectsArr = [
      {
        name: "HVAC & Clean Room Monitoring",
        img: "/assets/images/HVAC & Clean Room Monitoring.png",
        desc: "Complete HVAC and clean room monitoring solution with differential pressure transmitters, airflow capture hoods, and CO2 sensors.",
        client: "Pharmaceutical Clean Room Facility"
      },
      {
        name: "Filter Monitoring & Laminar Flow Control",
        img: "/assets/images/Filter Monitoring & Laminar Flow Control.png",
        desc: "Filter status monitoring and laminar flow control using differential pressure switches and transmitters in clean room environments.",
        client: "Biotech & Life Sciences"
      },
      {
        name: "Compressed Air System Monitoring",
        img: "/assets/images/Compressed Air System Monitoring.png",
        desc: "Monitoring and measurement of compressed air systems using flow transmitters, dewpoint transmitters, and leak detectors.",
        client: "Industrial Manufacturing Unit"
      },
      // {
      //   name: "Transformer Oil Monitoring",
      //   img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&q=80",
      //   desc: "Moisture in oil transmitters and dewpoint measurement for transformer oil monitoring and predictive maintenance.",
      //   client: "Power Generation & Distribution"
      // },
      // {
      //   name: "Ship Engine Monitoring",
      //   img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&q=80",
      //   desc: "Monitoring of ship engines using pressure transmitters, temperature sensors, and flow measurement instruments.",
      //   client: "Marine & Shipping Industry"
      // },
      // {
      //   name: "Oil Filtration Plant Monitoring",
      //   img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&auto=format&q=80",
      //   desc: "Moisture and dewpoint monitoring for oil filtration plants to ensure oil quality and equipment reliability.",
      //   client: "Oil & Gas Sector"
      // },
      // {
      //   name: "Air Pressure Pipeline Monitoring",
      //   img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&q=80",
      //   desc: "Monitoring of air pressure pipelines using differential pressure gauges, switches, and transmitters.",
      //   client: "Pneumatic Systems & Automation"
      // },
      // {
      //   name: "SF6 Gas Monitoring",
      //   img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&q=80",
      //   desc: "SF6 gas monitoring using pressure transmitters and gas detection sensors for high-voltage switchgear.",
      //   client: "Electrical Power Transmission"
      // },
      // {
      //   name: "Reefer Vehicle Temperature Mapping",
      //   img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&q=80",
      //   desc: "Temperature mapping study inside reefer vehicles to evaluate temperature distribution and identify hot/cold spots during transportation.",
      //   client: "Pharmaceutical & Cold Chain Logistics"
      // },
      // {
      //   name: "Deep Freezer Temperature Mapping",
      //   img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&auto=format&q=80",
      //   desc: "Temperature mapping in deep freezers to assess temperature uniformity and ensure proper storage conditions.",
      //   client: "Pharmaceutical & Healthcare"
      // },
      // {
      //   name: "Warehouse Temperature Mapping",
      //   img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&q=80",
      //   desc: "Comprehensive temperature mapping to identify variations and ensure uniform environmental conditions across warehouse storage areas.",
      //   client: "Pharmaceutical & Logistics Warehouse"
      // },
      // {
      //   name: "Cold Room Temperature Mapping",
      //   img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&q=80",
      //   desc: "Precision temperature mapping for cold rooms to verify temperature uniformity, monitor critical storage conditions, and maintain product quality.",
      //   client: "Cold Storage & Healthcare Facility"
      // },
      // {
      //   name: "Temperature Mapping Study",
      //   img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&auto=format&q=80",
      //   desc: "Accurate temperature mapping using calibrated data loggers to evaluate temperature distribution, identify hot and cold spots, and support regulatory compliance.",
      //   client: "Pharmaceutical Manufacturing Facility"
      // },
      // {
      //   name: "Visi Cooler Temperature Mapping",
      //   img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&q=80",
      //   desc: "Temperature mapping in visi coolers and refrigeration units to evaluate temperature uniformity and ensure suitable storage conditions.",
      //   client: "Food, Beverage & Pharmaceutical"
      // },
      // {
      //   name: "Food Processing QC",
      //   img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&q=80",
      //   desc: "Complete environmental monitoring system with WiFi loggers for FSSAI compliance.",
      //   client: "Food Manufacturing Unit"
      // },
      // {
      //   name: "Hospital Laboratory",
      //   img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&auto=format&q=80",
      //   desc: "Temperature mapping and calibration equipment for NABL accredited diagnostic laboratory.",
      //   client: "Multi-Specialty Hospital"
      // },
      // {
      //   name: "Automotive Testing",
      //   img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&q=80",
      //   desc: "Electrical testing equipment and multimeters for vehicle testing facility.",
      //   client: "Auto Component Manufacturer"
      // }
    ];

    const docsDB = [
      {
        title: "Product Brochure 2026",
        category: "Product Catalogue",
        content: "Complete product range including pressure transmitters, humidity sensors, flow meters, and data loggers.",
        pdfLink: "/assets/documents/Broucher-July2026.pdf",
        icon: "fas fa-file-pdf"
      },
      {
        title: "Calibration Scope",
        category: "Technical Documentation",
        content: "Complete calibration scope with accreditation details.",
        pdfLink: "#",
        icon: "fas fa-file-pdf"
      },
      {
        title: "Company Profile",
        category: "Company Profile",
        content: "Company overview and product portfolio of Tanishka Enterprises.",
        pdfLink: "#",
        icon: "fas fa-building"
      },
      {
        title: "HVAC & Clean Room Applications",
        category: "Application Notes",
        content: "Solutions for HVAC, clean room monitoring, filter monitoring, and laminar flow control.",
        pdfLink: "#",
        icon: "fas fa-wind"
      }
    ];

    // ========================== RENDER FUNCTIONS ==========================
    function renderAbout() {
      document.getElementById("aboutGrid").innerHTML = aboutData
        .map(item => `
          <div class="card">
            <i class="${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        `).join("");
    }

    function renderServices() {
      document.getElementById("servicesGrid").innerHTML = servicesData
        .map(service => `
          <div class="card">
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
          </div>
        `).join("");
    }

    let activeFilter = "all";
    let activeSubFilter = "all";
    let activeQuery = "";

    function productCard(p) {
      const label = p.category.replace(/-/g, " ");
      return `
        <article class="card product">
          <img src="${p.img}" alt="${p.name}" class="product-card-img" width="400" height="300" loading="lazy" onerror="this.src='assets/logo.png'">
          <div class="product-body">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="tags">
              <span class="product-category-badge">${label}</span>
              <span class="product-subcategory-badge">${p.subcategory.replace(/-/g, " ")}</span>
              
            </div>
            <button type="button" class="enquire-btn" data-product="${p.name}">Enquire now <i class="fas fa-arrow-right"></i></button>
          </div>
        </article>`;
    }

    function renderProducts() {
      const q = activeQuery.trim().toLowerCase();
      const list = productsData.filter(p =>
        (activeFilter === "all" || p.category === activeFilter) &&
        (activeSubFilter === "all" || p.subcategory === activeSubFilter) &&
        (!q || (p.name + " " + p.desc + " " + p.category + " " + p.subcategory).toLowerCase().includes(q))
      );
      const grid = document.getElementById("productsGrid");
      grid.innerHTML = list.length ? list.map(productCard).join("") : `
        <div class="empty-state">
          <h3>No match in our listed range</h3>
          <p>We can often source instruments that are not listed here. Tell us what you need.</p>
          <button type="button" class="btn-primary enquire-btn-lg" data-product="${activeQuery.replace(/"/g, "")}">Ask about it</button>
        </div>`;
      document.getElementById("resultCount").textContent =
        list.length + (list.length === 1 ? " instrument" : " instruments");
      syncUrl();
      if (window.gsap && list.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.from("#productsGrid .product", { y: 18, opacity: 0, duration: 0.4, stagger: 0.04, clearProps: "all" });
      }
    }

    function syncUrl() {
      const p = new URLSearchParams();
      if (activeFilter !== "all") p.set("cat", activeFilter);
      if (activeSubFilter !== "all") p.set("type", activeSubFilter);
      if (activeQuery.trim()) p.set("q", activeQuery.trim());
      const qs = p.toString();
      history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
    }

    function readUrlState() {
      const p = new URLSearchParams(location.search);
      const cat = p.get("cat");
      if (cat && productsData.some(x => x.category === cat)) activeFilter = cat;
      const type = p.get("type");
      if (type && productsData.some(x => x.subcategory === type && x.category === activeFilter)) activeSubFilter = type;
      activeQuery = p.get("q") || "";
      const input = document.getElementById("productSearch");
      if (input) input.value = activeQuery;
      if (p.has("cat") || p.has("q")) setTimeout(() => document.getElementById("products").scrollIntoView(), 1300);
    }

    function prefillEnquiry(text) {
      const ta = document.querySelector("#contact textarea[name='message']");
      ta.value = text ? `Hello, I would like a quote for: ${text}.\nQuantity / range: ` : "";
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => ta.focus({ preventScroll: true }), 600);
    }

    function initProductTools() {
      let t;
      document.getElementById("productSearch").addEventListener("input", e => {
        clearTimeout(t);
        t = setTimeout(() => { activeQuery = e.target.value; renderProducts(); }, 180);
      });
      document.getElementById("productsGrid").addEventListener("click", e => {
        const btn = e.target.closest("[data-product]");
        if (btn) prefillEnquiry(btn.dataset.product);
      });
    }

    // ========================== FAQ + STRUCTURED DATA ==========================
    const faqData = [
      { q: "Which instruments do you supply?", a: "We supply pharmaceutical and industrial testing and measuring instruments, including pressure transmitters, humidity and temperature sensors, flow and velocity transmitters, differential pressure gauges, gas detectors, data loggers and dry block calibrators." },
      { q: "Do you provide calibration and temperature mapping?", a: "Yes. We offer calibration using dry blocks, IR black bodies and PRTs, with on-site support, and temperature mapping studies for cold rooms, warehouses, deep freezers, stability chambers and reefer vehicles." },
      { q: "Which brands do you work with?", a: "We are an authorized distributor for Fluke, Mextech, Metravi, Amprobe and Raytek, and also supply brands such as Elitech, Rotronic, E+E, Yokogawa and Tzone." },
      { q: "How quickly can you deliver?", a: "Most orders from stock are shipped within 24 to 48 hours. Delivery time for special-order instruments depends on the brand and model." },
      { q: "Do instruments come with certificates and warranty?", a: "Instruments come with the manufacturer warranty and calibration certificates as per industry standards. Our team also helps with installation guidance and after-sales support." },
      { q: "Where are you based and do you serve other cities?", a: "Our office is in Ambernath, Thane, Maharashtra. We provide PAN India service support." },
      { q: "How do I get a quote?", a: "Use the enquiry form on this page, call +91 82088 94822, or message us on WhatsApp with the instrument name, range and quantity." }
    ];

    function renderFaq() {
      document.getElementById("faqList").innerHTML = faqData
        .map(f => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
    }

    function injectSchema() {
      const base = "https://tanishkaenterprise.in/";
      const add = obj => {
        const el = document.createElement("script");
        el.type = "application/ld+json";
        el.textContent = JSON.stringify(obj);
        document.head.appendChild(el);
      };
      add({
        "@context": "https://schema.org", "@type": "ItemList", name: "Testing and measuring instruments",
        itemListElement: productsData.map((p, i) => ({
          "@type": "ListItem", position: i + 1,
          item: { "@type": "Product", name: p.name, description: p.desc, category: p.category.replace(/-/g, " "), image: p.img,
                  url: base + "?cat=" + p.category + "#products", seller: { "@id": base + "#business" } }
        }))
      });
      add({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqData.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      });
    }

    function initScrollspy() {
      const links = [...document.querySelectorAll(".nav-links a[href^='#']")];
      const map = new Map(links.map(l => [l.getAttribute("href").slice(1), l]));
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && map.has(e.target.id)) {
            links.forEach(l => l.classList.remove("active"));
            map.get(e.target.id).classList.add("active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    }

    function initToTop() {
      const btn = document.getElementById("toTop");
      window.addEventListener("scroll", () => btn.classList.toggle("show", scrollY > 700), { passive: true });
      btn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
    }

    function setupFilters() {
      const categories = ["all", ...new Set(productsData.map(p => p.category))];
      const btnContainer = document.getElementById("filterButtons");

      btnContainer.innerHTML = categories
        .map(cat => `
          <button class="filter-btn ${activeFilter === cat ? "active" : ""}" data-cat="${cat}">
            ${cat === 'all' ? 'All' : cat.replace(/-/g, ' ')}
          </button>
        `).join("");

      document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
          activeFilter = button.dataset.cat;
          activeSubFilter = "all";
          renderProducts();
          setupFilters();
          setupSubFilters();
        });
      });
    }

    function setupSubFilters() {
      const subFilterSection = document.getElementById("subFilterSection");
      const subBtnContainer = document.getElementById("subFilterButtons");

      if (activeFilter === "all") {
        subFilterSection.hidden = true;
        return;
      }

      const subcategories = ["all", ...new Set(
        productsData
          .filter(p => p.category === activeFilter)
          .map(p => p.subcategory)
      )];

      if (subcategories.length <= 1) {
        subFilterSection.hidden = true;
        return;
      }

      subFilterSection.hidden = false;

      subBtnContainer.innerHTML = subcategories
        .map(sub => `
          <button class="sub-filter-btn ${activeSubFilter === sub ? "active" : ""}" data-sub="${sub}">
            ${sub === "all" ? "All types" : sub.replace(/-/g, ' ')}
          </button>
        `).join("");

      document.querySelectorAll(".sub-filter-btn").forEach(button => {
        button.addEventListener("click", () => {
          activeSubFilter = button.dataset.sub;
          renderProducts();
          setupSubFilters();
        });
      });
    }

    function renderDocSidebar() {
      const categories = [...new Set(docsDB.map(doc => doc.category))];
      const html = categories.map(category => `
        <div class="doc-cat">
          <h3><i class="fas fa-folder-open"></i> ${category}</h3>
          <ul class="doc-list">
            ${docsDB.filter(doc => doc.category === category)
              .map(doc => `
                <li data-doc-title="${doc.title}">
                  <i class="${doc.icon}"></i>
                  ${doc.title}
                </li>
              `).join("")}
          </ul>
        </div>
      `).join("");

      document.getElementById("docCategories").innerHTML = html;
      attachDocEvents();
    }

    function attachDocEvents() {
      document.querySelectorAll(".doc-list li").forEach(li => {
        li.addEventListener("click", () => {
          document.querySelectorAll(".doc-list li").forEach(x => x.classList.remove("active"));
          li.classList.add("active");
          document.getElementById("dtlSidebar").classList.remove("mobile-open");
          const title = li.getAttribute("data-doc-title");
          const doc = docsDB.find(d => d.title === title);
          if (!doc) return;

          document.getElementById("docsPreview").innerHTML = `
            <div class="doc-preview">
              <div class="preview-icon"><i class="${doc.icon}"></i></div>
              <h3>${doc.title}</h3>
              <p><strong>${doc.category}</strong></p>
              <p>${doc.content}</p>
              <div>
                <button class="btn-primary" onclick="downloadDocument('${doc.title}')">
                  <i class="fas fa-download"></i> Download PDF
                </button>
              </div>
            </div>
          `;
        });
      });
    }

    function downloadDocument(title) {
      const doc = docsDB.find(d => d.title === title);
      if (doc && doc.pdfLink && doc.pdfLink !== "#") {
        const link = document.createElement('a');
        link.href = doc.pdfLink;
        link.download = doc.title.replace(/\s+/g, '-') + '.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showNotification(`Downloading: ${doc.title}`, 'success');
      } else {
        showNotification('PDF file not available. Please contact us.', 'error');
      }
    }

    function searchDocsFilter() {
      const query = document.getElementById("searchDocs").value.toLowerCase();
      document.querySelectorAll(".doc-list li").forEach(li => {
        li.style.display = li.innerText.toLowerCase().includes(query) ? "flex" : "none";
      });
    }

    function renderProjects() {
      document.getElementById("projectsGrid").innerHTML = projectsArr
        .map(project => `
          <article class="card project-card" tabindex="0">
            <img src="${project.img}" alt="${project.name}" loading="lazy" onerror="this.src='assets/logo.png'">
            <div class="project-overlay"><p>${project.desc}</p></div>
            <h3>${project.name}</h3>
          </article>
        `).join("");
    }

    function initMobileUI() {
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

      hamburger.addEventListener("click", () => {
        const open = navLinks.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", open);
        hamburger.querySelector("i").className = open ? "fas fa-times" : "fas fa-bars";
      });

      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
          hamburger.querySelector("i").className = "fas fa-bars";
        });
      });

      const toggle = document.getElementById("mobileCatToggle");
      const sidebar = document.getElementById("dtlSidebar");

      if (toggle) {
        toggle.addEventListener("click", () => {
          sidebar.classList.toggle("mobile-open");
        });
      }
    }

    // ========================== CONTACT FORM ==========================
    document.addEventListener("DOMContentLoaded", () => {
      const forms = document.querySelectorAll(".email-form");

      forms.forEach((form) => {
        form.addEventListener("submit", async function (e) {
          e.preventDefault();

          const submitBtn = form.querySelector(".btn-primary");
          const btnText = form.querySelector(".btn-text");
          const formMessage = form.querySelector(".formMessage");

          const name = form.querySelector('[name="name"]').value.trim();
          const email = form.querySelector('[name="email"]').value.trim();
          const company = form.querySelector('[name="company"]').value.trim();
          const message = form.querySelector('[name="message"]').value.trim();

          formMessage.innerHTML = "";

          if (!name || !email || !message) {
            formMessage.innerHTML = "❌ Please fill all required fields.";
            formMessage.style.color = "#b42318";
            return;
          }

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email)) {
            formMessage.innerHTML = "❌ Please enter valid email.";
            formMessage.style.color = "#b42318";
            return;
          }

          submitBtn.disabled = true;
          btnText.innerHTML = "Sending...";

          try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("company", company);
            formData.append("message", message);
            formData.append("_captcha", "false");
            formData.append("_subject", "New Enquiry from Tanishka Enterprises Website");
            formData.append("_template", "table");

            const response = await fetch("https://formsubmit.co/ajax/vikashshamco986@gmail.com", {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" }
            });

            if (response.ok) {
              formMessage.innerHTML = "✅ Message sent successfully!";
              formMessage.style.color = "#067647";
              form.reset();
            } else {
              formMessage.innerHTML = "❌ Failed to send message.";
              formMessage.style.color = "#b42318";
            }
          } catch (error) {
            console.error(error);
            formMessage.innerHTML = "⚠️ Network error.";
            formMessage.style.color = "#b42318";
          }

          submitBtn.disabled = false;
          btnText.innerHTML = "Send Enquiry";
        });
      });
    });

    // ========================== NOTIFICATION ==========================
    function showNotification(message, type) {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 1rem;
        left: 1rem;
        max-width: 420px;
        margin-left: auto;
        padding: .9rem 1.25rem;
        border-radius: 12px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        ${type === 'success'
          ? 'background: #dcfce7; color: #166534; border: 1px solid #86efac;'
          : 'background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5;'}
      `;
      notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    }

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100px); opacity: 0; }
      }
    `;
    document.head.appendChild(styleSheet);

    // ========================== GSAP ANIMATIONS ==========================
    function initAdvancedAnimations() {
      if (typeof gsap === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(ScrollTrigger);

      // One orchestrated hero entrance
      gsap.timeline({ delay: 1.1, defaults: { ease: "power3.out" } })
        .from(".hero h1", { y: 40, opacity: 0, duration: 0.9 })
        .from(".hero-lead, .hero-actions", { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.5")
        .from(".stat-card", { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

      // Cards reveal in batches as they scroll into view
      ScrollTrigger.batch(".card", {
        start: "top 90%",
        once: true,
        onEnter: els => gsap.from(els, { y: 28, opacity: 0, duration: 0.6, stagger: 0.07, ease: "power2.out", clearProps: "all" })
      });
    }

    // Re-run card reveal for freshly filtered products
    function refreshScroll() { if (window.ScrollTrigger) ScrollTrigger.refresh(); }

    // ========================== LOADING SCREEN ==========================
    function hideLoadingScreen() {
      setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
      }, 900);
    }

    // ========================== INIT ==========================
    document.addEventListener("DOMContentLoaded", () => {
      hideLoadingScreen();
      renderProjects();
      renderAbout();
      renderServices();
      readUrlState();
      renderProducts();
      renderFaq();
      injectSchema();
      initProductTools();
      initScrollspy();
      initToTop();
      setupFilters();
      setupSubFilters();
      renderDocSidebar();
      initMobileUI();
      initAdvancedAnimations();
      initCounters();
      initMarquees();
      initNavbar();

      document.getElementById("searchDocs").addEventListener("input", searchDocsFilter);
    });

    // ========================== COUNTERS ==========================
    function initCounters() {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const run = el => {
        const target = +el.dataset.target;
        if (reduce) { el.textContent = target + "+"; return; }
        const start = performance.now(), dur = 5600;
        const tick = now => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (p === 1 ? "+" : "");
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
      }, { threshold: 0.6 });
      document.querySelectorAll(".counter").forEach(c => io.observe(c));
    }

    // ========================== MARQUEE + NAVBAR ==========================
    function initMarquees() {
      document.querySelectorAll(".brands-track, .clients-track").forEach(track => {
        [...track.children].forEach(n => {
          const c = n.cloneNode(true);
          c.setAttribute("aria-hidden", "true");
          track.appendChild(c);
        });
      });
    }

    function initNavbar() {
      const nav = document.getElementById("navbar");
      const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // ========================== AI CHAT ==========================
    const API_URL = "https://tanishka-ai-agent.onrender.com/chat";
    const SESSION_ID = "session_" + Math.random().toString(36).slice(2, 10);

    const toggle = document.getElementById("mj-toggle");
    const win = document.getElementById("mj-window");
    const closeBtn = document.getElementById("mj-close");
    const messages = document.getElementById("mj-messages");
    const input = document.getElementById("mj-input");
    const sendBtn = document.getElementById("mj-send");

    let isOpen = false;

    toggle.addEventListener("click", () => { isOpen ? closeChat() : openChat(); });
    closeBtn.addEventListener("click", closeChat);

    function openChat() {
      isOpen = true;
      win.classList.add("open");
      input.focus();
      if (messages.children.length === 0) {
        addBotMessage("👋 Welcome to **Tanishka Enterprises**!\n\nI can help you with:\n• Pharmaceutical Testing Instruments\n• Industrial Measuring Instruments\n• Pressure Transmitters & Sensors\n• Humidity & Temperature Sensors\n• Calibration Services\n\nHow can I assist you today?");
      }
    }

    function closeChat() {
      isOpen = false;
      win.classList.remove("open");
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) sendMessage();
    });

    async function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      input.value = "";
      addUserMessage(text);
      const typing = showTyping();

      const wakeupTimer = setTimeout(() => {
        typing.innerHTML = '<span></span><span></span><span></span> <span style="font-size:8px;color:#64748b;margin-left:3px;">AI is waking up...</span>';
      }, 4000);

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, session_id: SESSION_ID })
        });

        clearTimeout(wakeupTimer);
        typing.remove();

        const data = await res.json();
        if (data.error) {
          addBotMessage("⚠️ Error: " + data.error);
        } else {
          addBotMessage(data.reply || "Sorry, I couldn't process that.");
        }
      } catch (err) {
        clearTimeout(wakeupTimer);
        typing.remove();
        addBotMessage("⚠️ Cannot connect to AI server.");
      }
    }

    function addUserMessage(text) {
      const el = document.createElement("div");
      el.className = "mj-bubble user";
      el.textContent = text;
      messages.appendChild(el);
      scrollBottom();
    }

    function addBotMessage(text) {
      const el = document.createElement("div");
      el.className = "mj-bubble bot";
      el.innerHTML = formatText(text);
      messages.appendChild(el);
      scrollBottom();
    }

    function showTyping() {
      const el = document.createElement("div");
      el.className = "mj-typing";
      el.innerHTML = "<span></span><span></span><span></span>";
      messages.appendChild(el);
      scrollBottom();
      return el;
    }

    function formatText(text) {
      return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/•/g, "•")
        .replace(/\n/g, "<br>");
    }

    function scrollBottom() {
      messages.scrollTop = messages.scrollHeight;
    }

    // ========================== POPUP ==========================
    window.addEventListener("load", () => {
      if (sessionStorage.getItem("popupSeen")) return;
      setTimeout(() => {
        document.getElementById("popupOverlay").classList.add("show");
        sessionStorage.setItem("popupSeen", "1");
      }, 20000);
    });

    document.getElementById("closePopup").addEventListener("click", () => {
      document.getElementById("popupOverlay").classList.remove("show");
    });

    document.getElementById("popupOverlay").addEventListener("click", e => {
      if (e.target.id === "popupOverlay") e.target.classList.remove("show");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        document.getElementById("popupOverlay").classList.remove("show");
        if (typeof closeChat === "function") closeChat();
      }
    });
