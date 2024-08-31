
function isLoggedIn() {
    return localStorage.getItem('loggedin') === 'true';
}

document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.getElementById('search-box');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownItems = dropdownMenu ? dropdownMenu.getElementsByClassName('dropdown-item') : [];
    const bookNowButton = document.getElementById('book-now');
    const bookingForm = document.getElementById('booking-form');

    // Check if user is logged in
    // if (!isLoggedIn()) {
    //     if (bookNowButton) {
    //         bookNowButton.style.display = 'none'; // Hide the button if not logged in
    //     }
    //     if (bookingForm) {
    //         bookingForm.innerHTML += '<p>Please log in to book a tour.</p>'; // Show a message
    //     }
    // }

    // Search functionality
    if (searchBox) {
        searchBox.addEventListener('input', function () {
            const filter = searchBox.value.toLowerCase();
            let matchFound = false;

            Array.from(dropdownItems).forEach(function (item) {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = 'block';
                    matchFound = true;
                } else {
                    item.style.display = 'none';
                }
            });

            dropdownMenu.style.display = matchFound ? 'block' : 'none';
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', function (e) {
            if (!searchBox.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.display = 'none';
            }
        });

        // Handle selecting a dropdown item
        Array.from(dropdownItems).forEach(function (item) {
            item.addEventListener('click', function () {
                searchBox.value = item.textContent;
                dropdownMenu.style.display = 'none';
            });
        });
    }

    // Handle the "Book Now" button click
    if (bookNowButton) {
        bookNowButton.addEventListener('click', function (e) {
            e.preventDefault();
            const destination = searchBox ? searchBox.value.trim() : '';
            if (destination) {
                // Define the destination pages
                const destinationPages = {
                    'London': 'london.html',
                    'Canada': 'canada.html',
                    'Monaco': 'monaco.html',
                    // Add other destinations and their corresponding pages
                };

                const page = destinationPages[destination];
                if (page) {
                    if (isLoggedIn()) {
                        window.location.href = page;
                    } else {
                        alert("You need to be logged in to book a tour.");
                    }
                } else {
                    alert("Destination is not in the list.");
                }
            } else {
                alert("Please select a destination first!");
            }
        });
    }

    // Ensure all "Book Now" links check login status
    const bookNowLinks = document.querySelectorAll('.book-now');
    bookNowLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (!isLoggedIn()) {
                e.preventDefault(); // Prevent navigation if not logged in
                alert('Please log in to book a tour.');
            }
        });
    });
});
