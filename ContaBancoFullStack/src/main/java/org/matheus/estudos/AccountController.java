package org.matheus.estudos;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*") // permite que o front acesse essa API de qualquer domínio
public class AccountController {

    @PostMapping("/criar-conta")
    public String criarConta(@RequestBody AccountDTO account) {
        String mensagem = String.format(
                "Olá %s, obrigado por criar uma conta em nosso banco. Sua agência é %s, conta %s e seu saldo R$ %.2f já está disponível para saque.",
                account.getNomeCliente(),
                account.getAgencia(),
                account.getNumero(),
                account.getSaldo()
        );

        return mensagem;
    }
}
