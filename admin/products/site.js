document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('image-upload');
    const uploadBtn = document.getElementById('image-upload-btn');
    const fileNameSpan = document.getElementById('image-file-name');
  
    if (uploadBtn && uploadInput) {
      uploadBtn.addEventListener('click', () => {
        uploadInput.click();
      });
  
      uploadInput.addEventListener('change', () => {
        fileNameSpan.textContent = uploadInput.files[0]?.name;
      });
    }
});

const calendarIcon = document.querySelector('.calendar-icon');
const dateInput = document.getElementById('publication-date');

calendarIcon.addEventListener('click', () => {
  dateInput.showPicker?.() || dateInput.focus();
});