document.addEventListener('DOMContentLoaded', () => {
  let openModalBtn = document.getElementById('openModalBtn');
  let closeModalBtn = document.getElementById('closeModalBtn');
  let modal = document.getElementById('myModal');

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
