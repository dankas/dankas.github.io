---
layout: post
title: Dica- Como solucionar o erro  "Could not load file or assembly 'Renci.SshNe'" no PowerBI.
excerpt: "Dica para solucionar erro de conexão com um banco dados MySQL ao PowerBI. "
modified: 2020-01-20
tags: [mysql, beginner, dicas, powerbi, .netconnector]
comments: true
pinned: false
Categories: [Dicas,PowerBI]
image:
  feature: Screenshotpowrbi.JPG
---
# Conectando PowerBI com banco MySQL 

Comecei a estudar o **PowerBI** da microsoft como uma solução para visualizar dados do parque de impressão aqui onde dou suporte. Os dados de contadores e suprimentos ficam armazenados num banco MySQL e o PowerBI tem um conector direto para bancos MySQL/MariaDB, uma mão da roda para o meu caso! Mas, obviamente, nada é tão simples assim- durante a configuração recebo o seguinte erro:

>"An error happened while reading data from the provider: 'Could not load file or assembly 'Renci.SshNet, Version=2016.1.0.0, Culture=neutral, PublicKeyToken=1cee9f8bde3db106' or one of its dependencies. The system cannot find the file specified

Faltava alguma dependência para conectar o banco. A solução para isso é simplesmente atualizar o DOTNet Connector disponibilizado pelo MySQL, para isso basta ir no **MySQL Installer** ou entrar neste link: [DOTNet Connector](https://dev.mysql.com/downloads/connector/net/).

Depois de atualizado a conexão funcionou como esperado. Agora to começando a aprender o funcionamento da ferramenta XD
![Imagem] (/img/powerbirelatorio.jpg)
.
