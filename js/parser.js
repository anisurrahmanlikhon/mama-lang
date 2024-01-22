
        function runCode() {
            // Get the output element and clear it
            var output = document.getElementById('output');
            output.textContent = '';
            // Get the code from the textarea
            var code = document.getElementById('code').value;
            document.getElementById("output").placeholder = "mama ekhane output dekha toh";


            const translations = {
                'mama aida hoilo': 'let', // Variable declaration
                'bol toh mama': 'console.log', // Print to console
                'kisuina mama': 'null', // Null value
                'haw mama': 'true', // Boolean true value
                'nah mama': 'false', // Boolean false value
                'jodi mama': 'if', // If condition
                'nah hoile mama': 'else if', // Else if condition
                'akdom e nah hoile': 'else', // Else condition
                'jotokhon porjonto mama': 'while', // While loop
                'thamis mama': 'break', // Break statement
                'tarpor er tah dekh': 'continue' // Continue statement
                // ... other keywords as needed (Mama tui jodi aida aro kisu add korte chas mama, akta PR open kor mama!)
            };

            const translateKeywordToJS = (keyword) => {
                return translations[keyword] || keyword;
            };

            const convertToJS = (sourceCode) => {
                Object.keys(translations).forEach(keyword => {
                    // Use a regex to match whole words only to prevent partial replacements
                    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
                    sourceCode = sourceCode.replace(regex, translations[keyword]);
                });
                return sourceCode;
            };

            // Convert the code to JavaScript
            code = convertToJS(code);

            // Run the code and capture the output
            var output;
            try {
                output = eval(code);
            } catch (error) {
                output = error;
            }

            // Display the output
            console.log = function (message) {
                // Get the output element
                var output = document.getElementById('output');

                // Append the message to the output element
                output.textContent += message + '\n';
            };
        }

       function clearCode() {
            // Clear the text in the textarea
            document.getElementById('code').value = '';

            // Clear the output div
            document.getElementById('output').innerHTML = '';
        }




