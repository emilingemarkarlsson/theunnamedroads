exports.handler = async (event) => {
  // Only handle POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Method Not Allowed' })
    }
  }

  try {
    // Parse form data
    const params = new URLSearchParams(event.body)
    const formData = {}
    for (const [key, value] of params) {
      formData[key] = value
    }

    // Check honeypot field
    if (formData['bot-field']) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Spam detected' })
      }
    }

    // Extract form fields
    const { name, email, subject, message } = formData

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Missing required fields' })
      }
    }

    // Prepare payload for n8n webhook (similar to early-access flow)
    const timestamp = new Date().toISOString()
    const n8nPayload = {
      name,
      email,
      subject,
      message,
      timestamp,
      source: 'Contact Form - The Unnamed Roads'
    }

    // Send to n8n webhook (set N8N_WEBHOOK_URL in Netlify env vars)
    const webhookUrl = process.env.N8N_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL environment variable is not set')
      // Still return success to user, but log the error
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Message received successfully!'
        })
      }
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(n8nPayload)
    })

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status: ${response.status}`)
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Message sent successfully!'
      })
    }
  } catch (error) {
    console.error('Error sending to Slack:', error)

    // Still return success to user, but log the error
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Message received successfully!'
      })
    }
  }
}
