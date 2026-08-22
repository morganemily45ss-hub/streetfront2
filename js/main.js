document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation scroll effect
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Hero form tabs
    const tabs = document.querySelectorAll('.hero-form-container .tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add back to clicked
            e.target.classList.add('active');
        });
    });

    // 3. Prevent form submission for demo
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Just simulate a load or action
            alert("This is a static demo. Form submissions are disabled.");
        });
    });

    // 4. Auth Modal logic
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const switchModeBtn = document.getElementById('switch-mode');
    const modalSwitchText = document.getElementById('modal-switch-text');
    
    const signinBtns = document.querySelectorAll('.auth-signin');
    const signupBtns = document.querySelectorAll('.auth-signup');

    let isLoginMode = true;

    function openModal(mode) {
        if (!modal) return;
        
        isLoginMode = (mode === 'signin');
        
        if (isLoginMode) {
            modalTitle.textContent = "Sign In";
            switchModeBtn.textContent = "Sign up";
            modalSwitchText.childNodes[0].nodeValue = "Don't have an account? ";
        } else {
            modalTitle.textContent = "Sign Up";
            switchModeBtn.textContent = "Sign in";
            modalSwitchText.childNodes[0].nodeValue = "Already have an account? ";
        }
        
        modal.classList.add('active');
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
    }

    signinBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('signin');
        });
    });

    signupBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('signup');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Switch mode
    if (switchModeBtn) {
        switchModeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(isLoginMode ? 'signup' : 'signin');
        });
    }

    // 5. Mobile Menu stub
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Mobile menu clicked. Expand logic here.');
        });
    }

});
