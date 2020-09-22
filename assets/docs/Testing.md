Ran HTML code through [HTML Validator](https://validator.w3.org/) 
>   * Received error messages for p-tags inside iframes not being permitted. Removed the paragraph and text as iframes are supported in all browsers. Added Title to each iframe with description for screenreader accessibility.
>   * Warning for Intro section lacking heading. As this is an image gallery, no heading is required.  
>   * Warning for "empty heading" for the About section. The H3 tag with class of "countryheading" pulls in the relevant heading from the REST country API so this can be ignored.
>   * Two warnings for "The type attribute is unnecessary for JavaScript resources". Deleted both instances after researching correct measures.
>
> * Ran CSS code through [CSS Validator](https://jigsaw.w3.org/css-validator/)
>   *  No errors found.
>
> * Site Testing on live page:
>   * Navigation
>     * Clicked Navigation bar Logo/Text and confirmed it returns to Home/Intro.
>     * Clicked About on the navbar and scrolls to correct section.
>     * Clicked Game Reserves on the navbar and scrolls to correct section.
>     * Clicked Contact on the navbar and scrolls to correct section.
>   * About Section
>     * Clicked each country button and relevant country flag and API info replaces the placeholder image and text as expected.
>     * Clicked URL href from "Info supplied by **REST Countries API**" and site opened on the same tab in the browser. Added target="_blank" (which was missing). Retested and opens in a new tab in the browser as desired.
>   * Game Reserve section
>     * Clicked "1. Select a Country" button and dropdown list of country buttons appears as expected.
>     * Clicked each country button from the dropdown and relevant image, webcam and map focus appears as expected.
>     * Clicked "2. Select a Reserve button and dropdown list of reserve buttons appears as expected.
>     * Clicked each reserve button from the dropdown and the relevant information and map focus as expected for all reserves on each country.
>     * Clicked on each link for "[Excerpt from Official Park Website.]" and all are opening in a new tab in the browser as expected.
>     * Clicked all markers in the map (for each reserve in each country) and all display relevant information expected.
>     * Further to above, each website URL on marker info opens in a new tab in the browser as expected.
>   * Contact section
>     * Clicked Submit button without any form entries. Expected warning popup retuned of "Please fill out this field". Further tested all required form fields for same.
>     * Checked that Radio buttons give option for either/or selection, and not both.
>     * Tested completed form submission and modal appears confirming email has been sent.
>     * Confirmed that form resets to blank fields after form submission has been completed.