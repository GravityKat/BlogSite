// List of citations from your Google Doc
const citations = [
  "Author(s), 'Title of Paper,' in Title of Conference Proceedings, vol., no., pp., Year.",
  "Author(s), 'Title of Paper,' in Title of Conference Proceedings, vol., no., pp., Year.",
  // Add more citations here
];

// Function to format citations in IEEE style
function formatCitationsIEEE(citations) {
  return citations.map((citation, index) => `[${index + 1}] ${citation}`);
}

// Generate the formatted citations
const formattedCitations = formatCitationsIEEE(citations);

// Display the formatted citations in the HTML
const citationsList = document.getElementById('citations-list');
formattedCitations.forEach(citation => {
  const citationElement = document.createElement('div');
  citationElement.classList.add('citation');
  citationElement.textContent = citation;
  citationsList.appendChild(citationElement);
});

// Sustainability Dropdown

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  });
});

