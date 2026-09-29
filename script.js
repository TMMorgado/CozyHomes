document.getElementById('navToggle').addEventListener('click', function(){
  var links = document.querySelector('.nav-links');
  var open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  links.style.cssText += open ? '' : 'position:absolute;top:100%;left:0;right:0;flex-direction:column;background:#141A21;padding:20px 32px;gap:18px;';
});

var form = document.getElementById('contactForm');
var btn = document.getElementById('formBtn');
var statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async function(e){
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  btn.disabled = true;
  btn.textContent = 'A enviar...';
  statusEl.className = 'form-status';
  statusEl.textContent = '';

  try {
    var res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      statusEl.textContent = 'Pedido enviado! Entraremos em contacto o mais brevemente possível.';
      statusEl.className = 'form-status ok';
    } else {
      throw new Error('Erro no envio');
    }
  } catch (err) {
    statusEl.textContent = 'Não foi possível enviar. Tente novamente ou contacte-nos por telefone ou WhatsApp.';
    statusEl.className = 'form-status err';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar pedido';
  }
});