LAYOUT: iFood


Estamos aqui, mais um fim de projeto e essa é a primeira vez que anoto um README, então, vamos lá.
Conclui o projeto tomando como base o layout do zepli ao máximo que pude, e pelo que pude também analisar não consegui relazar a requisição place order que realiza o pedido. Recebo a mensagem de erro que os métodos de pagamento devem ser money ou creditcard. Analisando o código é possível ver que os métodos de pagamento, os mesmos pedidos pela requisição, à saber, money ou creditcard, estão dispostos num select no modal que adiciona o produto no carrinho. Não sei exatamente onde posso ter errado. Esse foi mais um desafio que enfrentei na Labenu o qual tirei mais proveito. O projeto Labefood até então é como uma encicloédia pra mim, nde posso revisar tudo que me foi passado até agora.
E um fator muito importante que não poderia deixar passar, creio que seja um bug, ao nos logarmos na aplicação, de primeira mão a API retorna o erro do catch da requisição, no entanto é desnessário logar novamento ou recarregar a página. É preciso redigitar o endereço do link do surge no navegador do celular, outro detahe intrigante também, é que esse defeito, ou bug, só ocorre quando acessamos via mobile. Lembrando não adianta relogar o recarregar, mas sim na mesma tela que apresenta o alert de erro, digitar novamente o link do surge e dar entar no vaegar. Daí você redirecionado para a tela de feeds.
