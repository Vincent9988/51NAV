document.addEventListener('DOMContentLoaded', function () {
  var navBtn = document.querySelector('.nav-btn');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    navBtn.classList.toggle('nav-active');
  }

  if (navBtn) {
    navBtn.addEventListener('click', toggleSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      navBtn.classList.remove('nav-active');
    });
  }

  // 点击侧边栏链接后自动关闭（移动端）
  var sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        navBtn.classList.remove('nav-active');
      }
    });
  });

  // 点击图片跳转到对应网站（新标签页打开）
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    var img = card.querySelector('.card-img');
    var link = card.querySelector('.card-title a');
    if (img && link && link.href) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function () {
        window.open(link.href, '_blank');
      });
    }
  });


});
