/*const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
*/

const mobileMenu = document.getElementById("mobile-menu");
        const navbar = document.getElementById("navbar");
        const links = document.querySelectorAll('.navbar__links');
        const dynamicContent = document.getElementById('dynamic-content');

        mobileMenu.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                const target = link.getAttribute('data-content');
                loadContent(target);
            });
        });

        function loadContent(target) {
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.add('hidden');
            });

            // Show the selected content
            const selectedContent = document.getElementById(target);
            if (selectedContent) {
                selectedContent.classList.remove('hidden');
                dynamicContent.innerHTML = selectedContent.innerHTML;
            }
        }

        // Prevent form submission to show how it works
        const signupForm = document.getElementById('signup-form');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            alert('Sign up form submitted!'); // Placeholder action
        });