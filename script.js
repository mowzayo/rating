let selectedRating = null; // Track the selected rating

// Get all the rating divs
const ratingDivs = document.querySelectorAll('.ratin');
const submitBtn = document.querySelector('.reset'); // Correctly get the button
const thankYouContainer = document.getElementById('thankYouContainer');
const thankYouMessage = document.getElementById('thankYouMessage');
const selectedRatingValue = document.getElementById('selectedRatingValue');

// Loop through each rating div and add click event listeners
ratingDivs.forEach(div => {
    div.addEventListener('click', function() {
        // If the clicked div is already selected, deselect it (unclick functionality)
        if (selectedRating === this.textContent) {
            selectedRating = null;
            this.classList.remove('selected'); // Remove selected class
        } else {
            // Remove 'selected' class from all divs
            ratingDivs.forEach(d => d.classList.remove('selected'));

            // Add 'selected' class to the clicked div
            selectedRating = this.textContent;
            this.classList.add('selected');
        }
    });
});

// Handle the submit button click
submitBtn.addEventListener('click', function() {
    if (selectedRating) {
        // Show the thank you container and display the selected rating
        selectedRatingValue.textContent = selectedRating;
        thankYouContainer.style.display = 'block';
    } else {
        alert("Please select a rating before submitting!");
    }
});

