// Change title for pdf filename while keeping tab title
const originalTitle = document.title;
const pdfTitle = 'reed-evans-cv';

window.addEventListener('beforeprint', () => {
    document.title = pdfTitle;
});

window.addEventListener('afterprint', () => {
    document.title = originalTitle;
});
