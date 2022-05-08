## Functional Requirements

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

## Technical Requirements

- See all countries from the API on the homepage
    - Fetch all countries data during first load from the API.
    - Cache the retrieved data in localStorage for further refreshes.
    - Create a Country component to display each country in a card.
        - Receives country data as props.
        - Card onclick redirects to details page.