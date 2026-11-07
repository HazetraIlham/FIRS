# FIRS GitHub Pages Prototype

Frontend-only prototype for Fiberline Instrument Reporting System.

## Included
- Mobile-first reporting form
- Dummy employee, area, equipment and issue master data
- Dynamic tag, part and issue selection
- Multiple equipment per submission
- Finding / Replacement / Both
- Replacement status and serial numbers
- Client-side validation and demo confirmation

## Important
This version does NOT connect to Google Sheets. Submission only validates the form in the browser and displays a demo confirmation. Do not enter confidential or production operational data.

## Publish
1. Create a GitHub repository named `FIRS`.
2. Upload all files and folders. Keep `index.html` at repository root.
3. Open repository Settings -> Pages.
4. Choose Deploy from a branch, select `main` and `/ (root)`, then Save.
5. Open the GitHub Pages URL after publishing.

## Next phase
Connect GitHub Pages to a backend API, then Google Apps Script and Google Sheets. Implement server-side validation and security before production use.
