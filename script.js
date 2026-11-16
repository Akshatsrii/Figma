/**
 * Simplifying Compliance - Interactive Scripts & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Elements
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const siteHeader = document.querySelector('.site-header');

  // Modal Elements
  const contactModal = document.getElementById('contactModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const consultationForm = document.getElementById('consultationForm');
  const serviceInterest = document.getElementById('serviceInterest');
  const submitBtn = document.getElementById('submitBtn');
  const toastContainer = document.getElementById('toastContainer');
  const backToTop = document.getElementById('backToTop');

  // ==========================================
  // MOBILE DRAWER
  // ==========================================
  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (!contactModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawerLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      closeDrawer();
    });
  });

  // Active state handling for desktop nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // ==========================================
  // INTERACTIVE CONSULTATION & CONTACT MODAL
  // ==========================================
  function openModal(serviceName) {
    closeDrawer(); // ensure drawer is closed
    if (serviceName && serviceInterest) {
      // Find matching option or default to first
      const options = Array.from(serviceInterest.options);
      const match = options.find(
        (opt) => opt.value.toLowerCase().includes(serviceName.toLowerCase()) || 
                 serviceName.toLowerCase().includes(opt.value.toLowerCase())
      );
      if (match) {
        serviceInterest.value = match.value;
      }
    }

    contactModal.classList.add('active');
    modalBackdrop.classList.add('active');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus on first input
    const firstInput = document.getElementById('fullName');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 150);
    }
  }

  function closeModal() {
    contactModal.classList.remove('active');
    modalBackdrop.classList.remove('active');
    contactModal.setAttribute('aria-hidden', 'true');
    if (!mobileDrawer.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  // Trigger modal on CTA buttons with [data-modal-trigger]
  document.querySelectorAll('[data-modal-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const service = trigger.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  // Trigger modal when clicking feature cards
  document.querySelectorAll('.feature-card[data-service]').forEach((card) => {
    card.addEventListener('click', () => {
      const service = card.getAttribute('data-service');
      openModal(service);
    });

    // Enter / Space key accessibility for cards
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const service = card.getAttribute('data-service');
        openModal(service);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close modals or drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactModal && contactModal.classList.contains('active')) {
        closeModal();
      } else if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    }
  });

  // ==========================================
  // TOAST NOTIFICATION SYSTEM
  // ==========================================
  function showToast(title, message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div class="toast-content">
        <h4 class="toast-title">${title}</h4>
        <p class="toast-desc">${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, 4000);
  }

  // ==========================================
  // FORM SUBMISSION HANDLER
  // ==========================================
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('fullName');
      const name = nameInput ? nameInput.value.trim() : 'there';

      // Show loading spinner
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }

      // Simulate API call
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }

        closeModal();
        consultationForm.reset();

        showToast(
          'Consultation Booked!',
          `Thank you, ${name}! Our SEBI compliance advisory team will reach out within 24 hours.`
        );
      }, 900);
    });
  }

  // ==========================================
  // STICKY HEADER & SCROLL BEHAVIOR
  // ==========================================
  function handleScroll() {
    const scrollY = window.scrollY;

    // Header glassmorphic elevation
    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTop) {
      if (scrollY > 320) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
