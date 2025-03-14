const cepInput = document.getElementById('cep');
        const logradouroInput = document.getElementById('logradouro');
        const complementoInput = document.getElementById('complemento');
        const bairroInput = document.getElementById('bairro');
        const cidadeInput = document.getElementById('cidade');
        const ufInput = document.getElementById('uf');
        const cepError = document.getElementById('cepError');


        cepInput.addEventListener('input', function() {
            const cep = this.value.replace(/\D/g, ''); // Remove non-numeric characters

            if (cep.length === 8) {
                consultarCEP(cep);
            } else {
                limparCampos();
                if (cep.length > 0) {
                    cepError.textContent = "CEP deve ter 8 dígitos.";
                } else {
                    cepError.textContent = "";
                }

            }
        });

        function consultarCEP(cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        cepError.textContent = "CEP não encontrado.";
                        limparCampos();
                    } else {
                        cepError.textContent = ""; // Clear any previous error message
                        logradouroInput.value = data.logradouro;
                        complementoInput.value = data.complemento;
                        bairroInput.value = data.bairro;
                        cidadeInput.value = data.localidade;
                        ufInput.value = data.uf;
                    }
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                    cepError.textContent = "Erro ao consultar o CEP.";
                    limparCampos();
                });
        }

        function limparCampos() {
            logradouroInput.value = '';
            complementoInput.value = '';
            bairroInput.value = '';
            cidadeInput.value = '';
            ufInput.value = '';
        }