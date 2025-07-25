document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[name="contact"]');
  if (!form) return;
  
  const submitButton = form.querySelector('button[type="submit"]');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        form.innerHTML = '<div class="text-center py-8">' +
          '<div class="text-green-600 dark:text-green-400 text-lg font-medium mb-2">' +
          '✅ Message sent successfully!' +
          '</div>' +
          '<p class="text-gray-600 dark:text-gray-400">' +
          'Thank you for your message. We will get back to you soon.' +
          '</p>' +
          '</div>';
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
      
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
});
