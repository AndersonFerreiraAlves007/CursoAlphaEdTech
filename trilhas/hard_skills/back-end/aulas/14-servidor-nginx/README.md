<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Servidor_HTTP&color=red)
![](https://img.shields.io/static/v1?label&message=Nginx&color=blue)

## 📖 Sobre a aula - Servidor Nginx
---

-  **Data:** 10/12/2021
-  **Professor:** Kenji Tuniguchi
-  **Descrição:** Nesta aula iremos instalar e configurar o servidor http Nginx.

## 📚 Referências
---

- [https://nginx.org/en/](https://nginx.org/en/)
- [https://nginx.org/en/linux_packages.html#Ubuntu](https://nginx.org/en/linux_packages.html#Ubuntu)
- [https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04-pt](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04-pt)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

Nginx é um servidor HTTP E um proxy reverso

Alguns recursos:

- Servir arquivos estáticos
- Suporte SSL E HTTPS
- Balanceamento de carga
- Teste A/B
- 10.000 conexões HTTP keep-alive inativas ocupam cerca de 2,5M de memória;
- Controle de acesso baseado no endereço do cliente ;
- Limitar o número de conexões simultâneas provenientes de um endereço;

Install:

1. pré-requisitos
```
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
```

2. importa chave de assinatura oficial do nginx, para que o apt possa verificar a autenticidade do pacote
```
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
```

verifica se o arquivo baixado contém a chave
```
gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

```
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

configura repositório nginx estáveis para apt
```
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

sinaliza para novos pacotes
```
echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
    | sudo tee /etc/apt/preferences.d/99nginx
```

```
sudo apt update
sudo apt install nginx
```

sudo ufw app list
sudo ufw allow 'Nginx HTTP'
sudo ufw status
systemctl status nginx
curl -4 icanhazip.com