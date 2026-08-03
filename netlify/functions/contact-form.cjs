/**
 * @deprecated Netlify function — site is on Vercel.
 * Contact form now POSTs JSON directly to:
 *   https://tur-automations.vercel.app/api/webhooks/contact
 * Safe to delete after confirming production contact works.
 */
exports.handler = async () => ({
  statusCode: 410,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message:
      'Gone — use https://tur-automations.vercel.app/api/webhooks/contact',
  }),
})
