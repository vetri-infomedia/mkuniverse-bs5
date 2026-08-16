# WhatsApp Order Modal Implementation Plan

## Goal
When user clicks "order now" button in the featured book section, open a modal window with a WhatsApp payment gateway link that pre-fills a message.

## WhatsApp Number
919597211397 (with country code 91 for India)

## Pre-filled Message
"I want to order this book. please send the payment link and confirm."

## Implementation Steps

### 1. Add WhatsApp Order Modal to index.html
Add a new Bootstrap modal after existing modals (around line 476) with:
- Modal ID: `whatsappOrderModal`
- Header: "WhatsApp Payment Gateway"
- Body: Brief message explaining the action + "Continue to WhatsApp" button
- The button opens `https://wa.me/919597211397?text=I%20want%20to%20order%20this%20book.%20please%20send%20the%20payment%20link%20and%20confirm.`

### 2. Update "order now" Button
- Add `data-bs-toggle="modal" data-bs-target="#whatsappOrderModal"` to the button at line 127-129
- Remove any existing click handlers if present

### 3. Add JavaScript Handler (js/main.js)
- No additional JS needed if using Bootstrap's data attributes
- Optional: Add analytics tracking or cleanup on modal close

## WhatsApp URL Format
```
https://wa.me/919597211397?text=I%20want%20to%20order%20this%20book.%20please%20send%20the%20payment%20link%20and%20confirm.
```

## Validation
- Click "order now" → modal opens
- Click "Continue to WhatsApp" → opens WhatsApp Web/App with pre-filled message
- Modal closes properly on backdrop click or close button