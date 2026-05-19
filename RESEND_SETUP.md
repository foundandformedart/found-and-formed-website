# Resend Domain Verification

When you are ready to connect the custom domain to the email server, follow these steps:

1. In Resend, go to **Domains** on the left menu and add `foundandformedart.com`. It will give you a few DNS records (like TXT and MX records) that you need to add to whatever service you used to buy the domain (like GoDaddy, Namecheap, or Squarespace). 

2. Once the domain is verified, go to **API Keys** on the left menu and click **Create API Key**. Copy that long string of characters.

3. In your Supabase Dashboard, go to **Edge Functions** (the lightning bolt icon on the left).

4. Click on **Secrets** at the top.

5. Click **Add new secret**. 

6. Name it exactly: `RESEND_API_KEY`

7. Paste the API key you copied from Resend into the value box and save.

*(Note: If you don't have access to the domain's DNS settings right now, you can skip adding the domain and just use Resend's default testing address `onboarding@resend.dev` for now!)*
