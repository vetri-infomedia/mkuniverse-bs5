/**
 * Novelia - Author & Bookstore Portfolio
 * Interactive JavaScript powered by Bootstrap 5
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize standard Bootstrap tooltips & popovers if present
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  // Bookstore Featured Price Variable (in Indian Rupees - ₹)
  let bookstorePrice = 299;

  // Update bookstore section price displays
  document.querySelectorAll('.bookstore-price-val').forEach(el => {
    el.textContent = bookstorePrice;
  });

  // State Management
  const state = {
    activeFilter: 'all',
    readerFontSize: 18,
    readerTheme: 'ivory'
  };

  // Sample Book Data
  const booksData = [
    {
      id: 'book-1',
      title: 'The Last Chapter',
      genre: 'Contemporary Fiction',
      category: 'contemporary',
      price: bookstorePrice,
      rating: 4.9,
      reviewsCount: 2420,
      cover: 'images/book_last_chapter.jpg',
      badge: 'Bestseller',
      summary: 'A breathtaking story of memory, regret, and the courage to rewrite one’s destiny. When a mysterious manuscript surfaces in a seaside cottage, two estranged siblings must unravel their family’s darkest secrets before time runs out.',
      format: 'Hardcover',
      pages: 432,
      publisher: 'Novelia Publishing',
      isbn: '978-0-123456-78-9'
    },
    {
      id: 'book-2',
      title: 'Whispers of the Heart',
      genre: 'Romance & Drama',
      category: 'romance',
      price: 399,
      rating: 4.8,
      reviewsCount: 1850,
      cover: 'images/book_whispers.jpg',
      badge: 'Popular',
      summary: 'Set against the misty highlands of Scotland, two souls torn apart by circumstance reunite under extraordinary conditions. A heart-wrenching tale about second chances and unspoken truths.',
      format: 'Paperback',
      pages: 368,
      publisher: 'Aurelian Press',
      isbn: '978-0-987654-32-1'
    },
    {
      id: 'book-3',
      title: 'Beyond the Pages',
      genre: 'Inspirational',
      category: 'inspirational',
      price: 549,
      rating: 5.0,
      reviewsCount: 940,
      cover: 'images/book_beyond_pages.jpg',
      badge: 'Editor’s Choice',
      summary: 'An evocative memoir-style exploration of how literature shapes our empathy, sharpens our minds, and connects us across centuries of human experience.',
      format: 'Hardcover',
      pages: 312,
      publisher: 'Novelia Publishing',
      isbn: '978-0-543210-98-7'
    },
    {
      id: 'book-4',
      title: 'The Silent Witness',
      genre: 'Mystery Thriller',
      category: 'mystery',
      price: 449,
      rating: 4.7,
      reviewsCount: 1320,
      cover: 'images/book_silent_witness.jpg',
      badge: 'New Release',
      summary: 'A high-stakes thriller involving a disgraced journalist who stumbles upon an unsolved 1920s cold case buried deep within a forgotten city archive.',
      format: 'Paperback',
      pages: 400,
      publisher: 'Aurelian Press',
      isbn: '978-0-765432-10-9'
    },
    {
      id: 'book-5',
      title: 'Echoes of Empire',
      genre: 'Historical Fiction',
      category: 'historical',
      price: 599,
      rating: 4.9,
      reviewsCount: 2100,
      cover: 'images/book_echoes_empire.jpg',
      badge: 'Award Winner',
      summary: 'An epic saga spanning three generations across turbulent global shifts, celebrating resilience, heritage, and the enduring power of hope.',
      format: 'Hardcover',
      pages: 512,
      publisher: 'Novelia Publishing',
      isbn: '978-0-876543-21-0'
    },
    {
      id: 'book-6',
      title: 'Midnight Musings',
      genre: 'Short Story Collection',
      category: 'contemporary',
      price: 349,
      rating: 4.8,
      reviewsCount: 780,
      cover: 'images/book_midnight_musings.jpg',
      badge: 'Collector’s Edition',
      summary: 'A curated compilation of fifteen intimate short stories that capture the quiet beauty of late-night solitude and fleeting human moments.',
      format: 'Paperback',
      pages: 240,
      publisher: 'Aurelian Press',
      isbn: '978-0-112233-44-5'
    }
  ];

  // Sample Short Stories for Reader Modal
  const storiesData = [
    {
      id: 'story-1',
      title: 'The Clockmaker’s Secret',
      category: 'Historical Fiction',
      readTime: '6 min read',
      date: 'August 2026',
      excerpt: 'In the quiet town of Prague, an aging horologist guards a pocket watch that doesn’t measure hours, but moments of true clarity...',
      content: `
        <h4 class="font-serif mb-4 text-center">The Clockmaker’s Secret</h4>
        <p class="lead italic text-center mb-5 text-muted">"Time is not a stream that flows away, but an ocean that surrounds us."</p>
        
        <p>Master Josef sat at his heavy oak workbench, his magnifying loupe pressed tight against his right orbit. The brass gears before him were no larger than sesame seeds, yet each teeth had been filed by hand in the winters of 1912.</p>
        
        <p>Outside his window, the snow began to fall over Prague’s Old Town Square. The famous astronomical clock chimed seven heavy beats into the freezing air. Josef did not look up. His focus was fixed on a small silver chronometer that bore no hands upon its porcelain face.</p>
        
        <p>For forty years, collectors had traveled from Vienna and London trying to purchase the handless watch. They called it Josef's madness. But to those who knew how to listen, the watch did not measure seconds. When wound thrice with a rose-gold key, its ticking matched the heartbeat of whoever held it, slowing down during moments of stillness, accelerating in anger or passion.</p>
        
        <p>"A clock should tell you how much life you have felt, not how much you have lost," Josef whispered to the quiet room, setting his fine tweezers down.</p>
      `
    },
    {
      id: 'story-2',
      title: 'Autumn Leaves in Kyoto',
      category: 'Contemporary Fiction',
      readTime: '4 min read',
      date: 'July 2026',
      excerpt: 'A chance meeting at a centuries-old tea house brings together two strangers running from their pasts...',
      content: `
        <h4 class="font-serif mb-4 text-center">Autumn Leaves in Kyoto</h4>
        <p class="lead italic text-center mb-5 text-muted">"Some conversations stay with us long after the tea grows cold."</p>
        
        <p>The maple leaves at Tenryu-ji temple were the color of spun copper. Rain drizzled softly against the wooden verandah where Clara sat with a steaming bowl of matcha.</p>
        
        <p>An elderly man in a dark kimono sat three paces away, sketching the reflection of the garden pond into a leather notebook. Without raising his head, he spoke in measured English.</p>
        
        <p>"You have been staring at the third maple tree for twenty minutes," he observed gently.</p>
        
        <p>Clara smiled faintly. "I was wondering how long a single leaf holds on before giving in to the wind."</p>
        
        <p>The old man turned a page. "It doesn’t give in to the wind, my dear. It simply trusts the ground."</p>
      `
    },
    {
      id: 'story-3',
      title: 'A Letter to Tomorrow',
      category: 'Inspirational',
      readTime: '5 min read',
      date: 'June 2026',
      excerpt: 'Found inside an antique desk, a letter written in 1944 reveals a timeless message of hope...',
      content: `
        <h4 class="font-serif mb-4 text-center">A Letter to Tomorrow</h4>
        <p class="lead italic text-center mb-5 text-muted">"Write down what you love today so tomorrow remembers why it survived."</p>
        
        <p>When Maya restored the 19th-century writing bureau purchased at a countryside auction, she expected hidden drawers. She did not expect a sealed envelope stamped with a faded violet wax emblem.</p>
        
        <p>The handwriting was sharp and precise:</p>
        
        <p><em>"To whoever opens this desk when the storms have passed: Do not measure your worth by the noise of the world outside. Measure it by the silence you protect within your home, and the kindness you offer without expectation."</em></p>
      `
    }
  ];

  // DOM Elements
  const navbar = document.querySelector('.navbar-novelia');
  const booksGrid = document.getElementById('books-grid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const quickViewModal = document.getElementById('quickViewModal');
  const readerModal = document.getElementById('readerModal');
  const newsletterForm = document.getElementById('newsletter-form');

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Filter Catalog Function
  if (filterPills.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        filterPills.forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');

        const category = e.target.getAttribute('data-filter');
        state.activeFilter = category;
        renderBooksGrid();
      });
    });
  }

  // Render Books Grid dynamically
  function renderBooksGrid() {
    if (!booksGrid) return;

    const filtered = state.activeFilter === 'all' 
      ? booksData 
      : booksData.filter(b => b.category === state.activeFilter);

    booksGrid.innerHTML = '';

    if (filtered.length === 0) {
      booksGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted font-serif fs-5">No books found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(book => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 mb-4';

      col.innerHTML = `
        <article class="book-card">
          <div class="book-cover-container">
            <span class="badge bg-dark text-uppercase font-sans position-absolute top-0 start-0 m-3 px-3 py-2 fw-semibold" style="font-size: 0.65rem; letter-spacing: 0.08em;">${book.badge}</span>
            <img src="${book.cover}" alt="${book.title}" class="book-cover-img" loading="lazy">
            <div class="book-actions-overlay">
              <button class="btn-icon-circle btn-quickview" data-book-id="${book.id}" title="Quick View">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1 justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-surface-high text-muted font-sans text-uppercase px-2 py-1" style="font-size: 0.65rem; letter-spacing: 0.08em;">${book.genre}</span>
                <span class="fw-bold text-dark font-sans">₹${book.price}</span>
              </div>
              <h3 class="font-serif h5 text-dark mb-2">${book.title}</h3>
              <div class="d-flex align-items-center gap-1 text-gold mb-3" style="font-size: 0.85rem;">
                <i class="bi bi-star-fill"></i>
                <span class="fw-semibold ms-1 text-dark">${book.rating}</span>
                <span class="text-muted ms-1">(${book.reviewsCount})</span>
              </div>
            </div>
            <div class="mt-2">
              <button class="btn btn-novelia-outline w-100 py-2 btn-quickview" data-book-id="${book.id}">Details</button>
            </div>
          </div>
        </article>
      `;

      booksGrid.appendChild(col);
    });

    attachGridEventListeners();
  }

  // Attach Grid Event Listeners
  function attachGridEventListeners() {
    document.querySelectorAll('.btn-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const bookId = e.currentTarget.getAttribute('data-book-id');
        openQuickViewModal(bookId);
      });
    });
  }

  // Quick View Modal Population
  function openQuickViewModal(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('qv-book-cover').src = book.cover;
    document.getElementById('qv-book-title').textContent = book.title;
    document.getElementById('qv-book-genre').textContent = book.genre;
    document.getElementById('qv-book-price').textContent = `₹${book.price}`;
    document.getElementById('qv-book-rating').textContent = `${book.rating} (${book.reviewsCount} reviews)`;
    document.getElementById('qv-book-summary').textContent = book.summary;
    document.getElementById('qv-book-format').textContent = book.format;
    document.getElementById('qv-book-pages').textContent = `${book.pages} pages`;
    document.getElementById('qv-book-isbn').textContent = book.isbn;

    const bsModal = new bootstrap.Modal(quickViewModal);
    bsModal.show();
  }

  // Story Reader Modal Handler
  document.querySelectorAll('.btn-open-reader').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const storyId = e.currentTarget.getAttribute('data-story-id');
      openReaderModal(storyId);
    });
  });

  function openReaderModal(storyId) {
    const story = storiesData.find(s => s.id === storyId) || storiesData[0];
    const readerContent = document.getElementById('reader-content-body');

    if (readerContent) {
      readerContent.innerHTML = story.content;
      applyReaderStyles();
    }

    const bsModal = new bootstrap.Modal(readerModal);
    bsModal.show();
  }

  // Reader Controls (Theme & Font Size)
  const fontDecreaseBtn = document.getElementById('font-decrease');
  const fontIncreaseBtn = document.getElementById('font-increase');
  const themeButtons = document.querySelectorAll('[data-reader-theme]');

  if (fontDecreaseBtn && fontIncreaseBtn) {
    fontDecreaseBtn.addEventListener('click', () => {
      if (state.readerFontSize > 14) {
        state.readerFontSize -= 2;
        applyReaderStyles();
      }
    });

    fontIncreaseBtn.addEventListener('click', () => {
      if (state.readerFontSize < 26) {
        state.readerFontSize += 2;
        applyReaderStyles();
      }
    });
  }

  if (themeButtons.length > 0) {
    themeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const theme = e.currentTarget.getAttribute('data-reader-theme');
        state.readerTheme = theme;
        applyReaderStyles();
      });
    });
  }

  function applyReaderStyles() {
    const readerBody = document.getElementById('reader-content-body');
    if (!readerBody) return;

    readerBody.style.fontSize = `${state.readerFontSize}px`;
    readerBody.className = `reader-modal-body theme-${state.readerTheme}`;
  }



  // Newsletter Form Handler
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        showToast(`Welcome to the Novelia Reader's Circle, ${email}! ✉️`);
        newsletterForm.reset();
      }
    });
  }

  // Toast Notification Utility
  function showToast(message, type = 'info') {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center text-white bg-dark border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body font-sans px-3 py-3">
            ${message}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById(toastId);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
    bsToast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }

  // Custom ScrollSpy - more reliable than Bootstrap's native implementation
  const navLinks = document.querySelectorAll('.navbar-novelia .nav-link');
  const sections = [];
  const sectionIds = [];

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const section = document.querySelector(href);
      if (section) {
        sections.push(section);
        sectionIds.push(href.substring(1));
      }
    }
  });

  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-90px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Handle click on nav links for smooth scroll
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          const navHeight = document.querySelector('.navbar-novelia').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Close mobile menu when any anchor link inside the collapse is clicked
  const collapseContent = document.getElementById('navbarContent');
  if (collapseContent) {
    collapseContent.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor && collapseContent.classList.contains('show')) {
        const collapseInstance = bootstrap.Collapse.getInstance(collapseContent);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    });
  }

  // Initial Execution
  renderBooksGrid();

  // WhatsApp Order Modal - open WhatsApp with pre-filled message
  const orderNowBtn = document.querySelector('[data-bs-target="#whatsappOrderModal"]');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
      const whatsappLink = document.getElementById('whatsapp-order-link');
      if (whatsappLink) {
        // Ensure the link is correct (security: use encoded text)
        whatsappLink.href = 'https://wa.me/919597211397?text=' + encodeURIComponent('I want to order this book. please send the payment link and confirm.');
      }
    });
  }

  // Video Players - Mutual Pause & Active State Handling
  const videoElements = document.querySelectorAll('video');
  videoElements.forEach(video => {
    const wrapper = video.closest('.video-player-wrapper');

    video.addEventListener('play', () => {
      if (wrapper) wrapper.classList.add('is-playing');
      videoElements.forEach(otherVideo => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });

    video.addEventListener('pause', () => {
      if (wrapper) wrapper.classList.remove('is-playing');
    });

    video.addEventListener('ended', () => {
      if (wrapper) wrapper.classList.remove('is-playing');
    });
  });

  // Pause videos when modals open
  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(modal => {
    modal.addEventListener('show.bs.modal', () => {
      videoElements.forEach(video => {
        if (!video.paused) {
          video.pause();
        }
      });
    });
  });
});
