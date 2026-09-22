document.getElementById('navToggle').addEventListener('click', function(){
    var links = document.querySelector('.nav-links');
    var open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText += open ? '' : 'position:absolute;top:100%;left:0;right:0;flex-direction:column;background:#141A21;padding:20px 32px;gap:18px;';
  });
