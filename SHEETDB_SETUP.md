# SheetDB Integration Setup

## Current Configuration

- **API Endpoint**: `https://sheetdb.io/api/v1/a5si29f7xe2n8`
- **Method**: POST
- **Data Format**: JSON

## Google Sheet Requirements

Your Google Sheet must have the following columns:

1. **email** (required) - Case-sensitive column name
2. **timestamp** (optional) - For tracking submission times

## SheetDB Setup Steps

1. Go to [SheetDB.io](https://sheetdb.io)
2. Create a new API from your Google Sheet
3. Ensure your Google Sheet has an "email" column in the first row
4. Copy the API endpoint URL
5. Update the `API_ENDPOINT` constant in `src/components/EmailForm.jsx` if needed

## Testing the Integration

1. Open the browser console (F12)
2. Submit a test email address
3. Check the console for:
   - `SheetDB Response:` log showing the API response
   - Any error messages
4. Check your Google Sheet to verify the email was added

## Expected Response Format

SheetDB typically returns one of these formats:

**Success:**
```json
{
  "created": 1,
  "id": "row_id"
}
```

**Duplicate Entry:**
```json
{
  "error": "duplicate entry" or "email already exists"
}
```

**Error:**
```json
{
  "error": "error message"
}
```

## Troubleshooting

### Email not appearing in sheet
- Verify the column name is exactly "email" (case-sensitive)
- Check SheetDB dashboard for API status
- Check browser console for error messages
- Verify the API endpoint URL is correct

### Network errors
- Check internet connection
- Verify SheetDB service is operational
- Check browser console for CORS errors

### Duplicate entries
- The code handles duplicates gracefully (shows success message)
- To prevent duplicates, set up unique constraints in SheetDB

## Current Implementation Features

✅ Email validation before submission
✅ Automatic email trimming and lowercasing
✅ Timestamp tracking
✅ Duplicate handling
✅ Error handling with user-friendly messages
✅ Console logging for debugging
✅ Loading states
✅ Success confirmation
