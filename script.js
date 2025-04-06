document.addEventListener('DOMContentLoaded', function() {
    // Navigation logic for blockchain sections
    const ethBtn = document.getElementById('eth-btn');
    const solBtn = document.getElementById('sol-btn');
    const bscBtn = document.getElementById('bsc-btn');
    
    const ethProjects = document.getElementById('eth-projects');
    const solProjects = document.getElementById('sol-projects');
    const bscProjects = document.getElementById('bsc-projects');
    
    ethBtn.addEventListener('click', function() {
        window.scrollTo({
            top: ethProjects.offsetTop - 100,
            behavior: 'smooth'
        });
    });
    
    solBtn.addEventListener('click', function() {
        window.scrollTo({
            top: solProjects.offsetTop - 100,
            behavior: 'smooth'
        });
    });
    
    bscBtn.addEventListener('click', function() {
        window.scrollTo({
            top: bscProjects.offsetTop - 100,
            behavior: 'smooth'
        });
    });
    
    // Filter buttons logic for each section
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const section = this.closest('section');
            
            // Update active button
            section.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter project cards
            const projectCards = section.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else if (card.classList.contains(category)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('button.block.md\\:hidden');
    const mobileMenu = document.createElement('div');
    
    mobileMenu.className = 'fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center transform translate-x-full transition-transform duration-300 ease-in-out';
    mobileMenu.innerHTML = `
        <button class="absolute top-6 right-6 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <nav class="flex flex-col items-center space-y-6 text-xl">
            <!-- 移除了导航菜单项 -->
        </nav>
    `;
    
    document.body.appendChild(mobileMenu);
    
    const closeMenuBtn = mobileMenu.querySelector('button');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    });
    
    // Add tooltips for metrics
    const metricItems = document.querySelectorAll('#metrics > div > div');
    
    metricItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('bg-gray-800/60');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('bg-gray-800/60');
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Show animation when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, section > div');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate-fadeIn');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
