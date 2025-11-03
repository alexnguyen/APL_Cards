function toggleTypeDivs() {
        const radioButtons = document.querySelectorAll('input[name="option"]');
        const divs = document.querySelectorAll('div[id^="typediv"]'); // Selects divs starting with "div"

        radioButtons.forEach(radio => {
            if (radio.checked) {
            // Hide all divs first
            divs.forEach(div => {
                div.style.display = 'none';
            });
            // Show the div corresponding to the selected radio button
            document.getElementById(radio.value).style.display = 'block';
            }
        });
        }

        // Optional: Call the function on page load to set initial state if a radio button is checked by default
        window.onload = toggleTypeDivs;

function toggleApplicationTypeDivs() {
        const radioButtons = document.querySelectorAll('input[name="option"]');
        const divs = document.querySelectorAll('div[id^="applicationtypediv"]'); // Selects divs starting with "div"

        radioButtons.forEach(radio => {
            if (radio.checked) {
            // Hide all divs first
            divs.forEach(div => {
                div.style.display = 'none';
            });
            // Show the div corresponding to the selected radio button
            document.getElementById(radio.value).style.display = 'block';
            }
        });
        }

        // Optional: Call the function on page load to set initial state if a radio button is checked by default
        window.onload = toggleApplicationTypeDivs;