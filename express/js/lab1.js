document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        console.log('Contact section found');
        contactSection.classList.add('visible');

        // Change background color on hover
        contactSection.addEventListener('mouseover', function() {
            console.log('Mouse over contact section');
            contactSection.style.backgroundColor = '#f1f1f1';
        });

        contactSection.addEventListener('mouseout', function() {
            console.log('Mouse out of contact section');
            contactSection.style.backgroundColor = '';
        });

        // Display alert on form submit
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            console.log('Contact form found');
            contactForm.addEventListener('submit', function(event) {
                console.log('Form submitted');
                alert('Form submitted!');
            });
        } else {
            console.log('Contact form not found');
        }

        // Toggle visibility of contact information
        const toggleButton = document.getElementById('toggleInfo');
        const contactInfo = contactSection.querySelector('.w3-col.m6.w3-large.w3-margin-bottom');
        if (toggleButton && contactInfo) {
            console.log('Toggle button and contact info found');
            toggleButton.addEventListener('click', function() {
                console.log('Toggle button clicked');
                if (contactInfo.style.display === 'none') {
                    contactInfo.style.display = 'block';
                } else {
                    contactInfo.style.display = 'none';
                }
            });
        } else {
            console.log('Toggle button or contact info not found');
        }
    } else {
        console.log('Contact section not found');
    }
});