// Pegar <form /> tag
const form = document.getElementById("formContato");

// Pegar a tag que irá aparecer quando enviar mensagem
const contatoToast = document.getElementById("contatoToast");

// Adicionar uma função que observa quando o submit é executado e realiza uma ação
if (form && contatoToast) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const toast = new bootstrap.Toast(contatoToast);
    toast.show();
  });
}
