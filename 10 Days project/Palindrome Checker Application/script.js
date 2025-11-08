        document.getElementById('palindrome-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const inputText = document.getElementById('input-text').value;
            const result = isPalindrome(inputText); 
            if(inputText.trim() === "") {
                document.getElementById('result').innerText = "Please enter some text.";
                return;
            }
            document.getElementById('result').innerText = result ? `"${inputText}" is a palindrome!"` : `"${inputText}" is not a palindrome."`;
        });

        function isPalindrome(str) {
            const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            const reversed = cleaned.split('').reverse().join('');
            return cleaned === reversed;
        }
