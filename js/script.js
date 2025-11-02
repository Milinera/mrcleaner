
document.querySelectorAll('.que_content_item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('que_content_item_active')) {
      item.classList.remove('que_content_item_active');
    } else {
      document.querySelectorAll('.que_content_item').forEach(el => {
        el.classList.remove('que_content_item_active');
      });
      item.classList.add('que_content_item_active');
    }
  });
});
