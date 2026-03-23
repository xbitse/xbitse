# Google Maps Reviews Integration

## Setup Required

To use real Google Maps reviews in the testimonials section, you need to:

### 1. Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Maps JavaScript API" 
4. Create an API key
5. Copy the API key

### 2. Update the Component

Replace `YOUR_GOOGLE_MAPS_API_KEY` in `src/components/TestimonialsGoogle.tsx` with your actual API key:

```typescript
const API_KEY = "your_actual_api_key_here";
```

### 3. Security Notes

- **Never expose API keys in frontend code** in production
- Use environment variables or backend proxy
- Consider rate limits (Google Maps has quotas)
- The current implementation fetches reviews client-side

### 4. Alternative: Backend Proxy

For better security, set up a backend endpoint:
```typescript
// Example backend endpoint
app.get('/api/google-reviews', async (req, res) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});
```

Then update the component to fetch from your backend:
```typescript
const response = await fetch('/api/google-reviews');
```

### 5. Current Place ID

The component uses this Google Place ID:
- **XBIT - Teknik & IT-Support**: `ChIJc7v8y8t4Gk9Lxg2oY`

This corresponds to the business location you provided.

## Benefits

✅ **Real reviews** from actual Google Maps customers
✅ **Trust signals** from verified Google users  
✅ **Fresh content** that updates automatically
✅ **SEO benefits** from Google's authority

## Next Steps

1. Get your Google Maps API key
2. Update the component with your key
3. Deploy and test the integration

The component will automatically fetch and display real Google reviews alongside your existing testimonials!
