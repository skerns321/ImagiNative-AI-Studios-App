# Formspree Contact Form Setup

Your contact form is now ready to work with Formspree! Follow these steps to complete the setup:

## 1. Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

## 2. Get Your Form ID
1. After creating the form, you'll get a Form ID (looks like `xwkgwbzy`)
2. Copy this Form ID

## 3. Update Your Contact Form
1. Open `src/components/Contact.tsx`
2. Find line 72: `https://formspree.io/f/YOUR_FORM_ID`
3. Replace `YOUR_FORM_ID` with your actual Form ID

Example:
```typescript
const response = await fetch('https://formspree.io/f/xwkgwbzy', {
```

## 4. Test Your Form
1. Run `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the submission

## 5. Configure Form Settings (Optional)
In your Formspree dashboard, you can:
- Set up custom email notifications
- Add spam protection
- Configure auto-reply messages
- View form submissions

## What's Included
- ✅ Form validation with Zod
- ✅ Error handling
- ✅ Success messages
- ✅ Loading states
- ✅ Service selection checkboxes
- ✅ Responsive design

## Alternative: Use Netlify Forms
If you deploy to Netlify, you can also use Netlify Forms:
1. Add `netlify` attribute to the form element
2. Remove the fetch logic
3. Let Netlify handle form submissions automatically

Your contact form is now Firebase-free and much simpler to maintain!