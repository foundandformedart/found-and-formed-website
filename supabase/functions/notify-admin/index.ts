import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { subject, type, data } = await req.json()

    // Format the email body dynamically based on the submitted data
    let htmlContent = `<h2>${subject}</h2><ul>`
    for (const [key, value] of Object.entries(data)) {
      htmlContent += `<li><strong>${key}:</strong> ${value}</li>`
    }
    htmlContent += `</ul>`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Found & Formed <hello@foundandformedart.com>',
        to: 'info@foundandformedart.com',
        subject: subject,
        html: htmlContent,
      }),
    })

    const resendData = await res.json()

    if (!res.ok) {
      throw new Error(resendData.message || 'Failed to send email via Resend')
    }

    return new Response(JSON.stringify(resendData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
