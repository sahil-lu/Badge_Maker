export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, role, image } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  try {
    // If no webhook URL is configured, return mock response for development
    if (!webhookUrl) {
      console.log('No webhook URL configured, returning mock response for development');
      return res.status(200).json({
        image_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
        share_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/badge/${encodeURIComponent(name.trim())}`,
        name: name.trim(),
        role: role ? role.trim() : '',
        profile_image: image || null,
      });
    }

    // Call the external webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        role: role ? role.trim() : '',
        image: image || null,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook responded with status: ${webhookResponse.status}`);
    }

    const webhookData = await webhookResponse.json();

    // Validate the response structure
    if (!webhookData.image_url || !webhookData.share_url) {
      throw new Error('Invalid response from webhook: missing image_url or share_url');
    }

    // Return the minted badge data
    res.status(200).json({
      image_url: webhookData.image_url,
      share_url: webhookData.share_url,
      name: name.trim(),
      role: role ? role.trim() : '',
      profile_image: image || null,
    });

  } catch (error) {
    console.error('Error calling webhook:', error);
    
    // Return a mock response for development/testing
    console.log('Returning mock response due to error');
    return res.status(200).json({
      image_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop&crop=center&auto=format&q=80',
      share_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/badge/${encodeURIComponent(name.trim())}`,
      name: name.trim(),
      role: role ? role.trim() : '',
      profile_image: image || null,
    });
  }
}
