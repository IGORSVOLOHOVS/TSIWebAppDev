document.addEventListener('DOMContentLoaded', function() {
    const infoSection = document.querySelector('.info');
    const skillsSection = document.querySelector('.skills');
    const toggleInfoButton = document.getElementById('toggle-info');
    const toggleSkillsButton = document.getElementById('toggle-skills');

    toggleInfoButton.addEventListener('click', function() {
        if (infoSection.style.display === 'none' || infoSection.style.display === '') {
            infoSection.style.display = 'block';
        } else {
            infoSection.style.display = 'none';
        }
    });

    toggleSkillsButton.addEventListener('click', function() {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
});