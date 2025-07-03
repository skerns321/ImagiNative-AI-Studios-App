# Environment Variables Setup Guide

## 📋 Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# ==========================================
# FIREBASE CONFIGURATION (REQUIRED)
# ==========================================
# Get these from Firebase Project Settings -> General -> Your apps -> Web app
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id

# ==========================================
# AI SERVICE API KEYS (REQUIRED FOR AI FEATURES)
# ==========================================
# OpenAI API Key - Get from https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-your-openai-api-key

# Anthropic API Key - Get from https://console.anthropic.com/
ANTHROPIC_API_KEY=sk-ant-your-anthropic-api-key

# Replicate API Token - Get from https://replicate.com/account/api-tokens
REPLICATE_API_TOKEN=r8_your-replicate-token

# Deepgram API Key - Get from https://console.deepgram.com/
DEEPGRAM_API_KEY=your-deepgram-api-key

# ==========================================
# EMAIL SERVICE (OPTIONAL)
# ==========================================
# SendGrid API Key - Get from https://app.sendgrid.com/settings/api_keys
SENDGRID_API_KEY=SG.your-sendgrid-api-key

# ==========================================
# DEVELOPMENT SETTINGS
# ==========================================
NODE_ENV=development
```

## 🔧 Setup Instructions

### Step 1: Create Environment File
```bash
# Create your local environment file
touch .env.local
```

### Step 2: Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Go to Project Settings -> General
4. Scroll to "Your apps" section
5. Add a web app or select existing
6. Copy the configuration values to your `.env.local`

### Step 3: AI Service Setup

#### OpenAI
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create new API key
3. Add to `.env.local` as `OPENAI_API_KEY`

#### Anthropic
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Generate API key
3. Add to `.env.local` as `ANTHROPIC_API_KEY`

#### Replicate
1. Visit [Replicate](https://replicate.com/account/api-tokens)
2. Create API token
3. Add to `.env.local` as `REPLICATE_API_TOKEN`

#### Deepgram
1. Visit [Deepgram Console](https://console.deepgram.com/)
2. Create API key
3. Add to `.env.local` as `DEEPGRAM_API_KEY`

### Step 4: Test Setup
```bash
# Start development server to test
npm run dev
```

## 🚨 Important Security Notes

1. **Never commit `.env.local` to version control**
2. **Use different API keys for development and production**
3. **Rotate API keys regularly**
4. **Monitor API usage and set billing limits**

## 🌐 Production Deployment

For production deployment (Vercel, Netlify, etc.):

1. Add all environment variables to your deployment platform
2. Use production Firebase project
3. Use production API keys
4. Set `NODE_ENV=production`

### Vercel Setup
```bash
# Using Vercel CLI
vercel env add OPENAI_API_KEY
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
# ... add all other variables
```

## 🔍 Troubleshooting

### Common Issues

**Firebase connection errors:**
- Check all `NEXT_PUBLIC_FIREBASE_*` variables are set
- Verify Firebase project is active
- Check Firebase rules allow read/write

**AI API errors:**
- Verify API keys are correct and active
- Check billing/usage limits
- Ensure API keys have required permissions

**Build failures:**
- Make sure all required environment variables are set
- Check for typos in variable names
- Verify `.env.local` is not committed to git

### Testing Environment Variables
```typescript
// Add to any component for debugging
console.log('Firebase Config:', {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

// Check API keys (don't expose in production)
console.log('OpenAI Key exists:', !!process.env.OPENAI_API_KEY);
```

## 📋 Environment Checklist

### Development Setup
- [ ] `.env.local` file created
- [ ] All Firebase variables set
- [ ] At least one AI API key configured
- [ ] Development server starts without errors
- [ ] Firebase connection working
- [ ] AI services responding

### Production Setup
- [ ] All environment variables set in deployment platform
- [ ] Production Firebase project configured
- [ ] Production API keys configured
- [ ] Build process succeeds
- [ ] All features working in production

---

**Remember**: Keep your API keys secure and never share them publicly! 