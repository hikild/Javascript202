# AT

Objetivo do trabalho é criar um registro de todas as compras de moedas estrangeiras que possuo. Consultando dados da API [https://exchangeratesapi.io/](https://exchangeratesapi.io/) da data da compra e convertendo para Reais nos dias de hoje.

![Mockup](https://github.com/ebertti/Javascript202/blob/master/AT/CarteiraMoedas.png?raw=true)


## Primeira Parte

Para cadastrar uma compra preciso saber o valor comprado na moeda, (ex: se foi comprado dólares, registrar o valor em DOLAR), a moeda comprada (No mínimo 5 moedas além do BRL) e a data de sua compra (dia, mês e ano)

## Segunda Parte

Após um valor adicionado, ele deverá ser exibido em uma tabela com no mínimo estes campos:

- QUANTIDADE na moeda estrangeira
- MOEDA
- DATA DA COMPRA
- Valor na data da compra (obtido pela API)
- % de ganho referente a cotação de hoje (calculado a partir do valor de hoje (latest) retornado da API)
- Valor de hoje em reais (calculado a partir do valor de hoje (latest) retornado da API)

## Terceira Parte

Quando um valor é adicionado, deve-se recalcular o relatório agregado de moedas (apenas um registro por moeda), com as seguintes informações:

- MOEDA
- COTAÇÃO DO DIA (valor obtido pela api como latest)
- SOMATÓRIO EM REAIS (somando todas as compras que foram feitas na mesma moeda)

## Quarta Parte

Em seguida, exibir o valor total de riquezas acumulados, que é a soma em reais com a cotação de hoje de todas as moedas

## Pontos de usabilidade / Armazenamento

Quando uma moeda for adicionada ou removida, o relatório deverá ser recalculado, utilizar o bootstrap4, os registros de compras no localstorage, então, quando os dados forem adicionados ou removidos, eles devem ser armazenados no localstorage. E quando a aplicação for reaberta, ele deve exibir os dados que foram salvos anteriormente.

## Entrega

Deve ser entregue em um arquivo nomeado pelo seguinte formato AT.NomeDoAluno.zip. Nele deve conter apenas 1 arquivo HTML, podem usar quantos arquivos JS quiserem, e podem utilizar apenas 1 arquivo CSS além do Bootstrap.

## Bibliotecas permitidas

Apenas o uso de 2 bibliotecas está permitido: Axios e momentjs

## Rubricas

### Primeira Parte

- Utilizou elementos HTML corretos (input, dropdown, e botão)
- Validação se campos estão preenchidos
- Exibiu mensagens de erro para ajudar na realização da tarefa
- Utilizou a API para obter a cotação do dia da compra
- Salvou dados no localstorage (valor, moeda, dataCompra, cotacaoDiaCompra)
- Utilizou de forma correta o bootstrap4 para deixar o layout responsivo

### Segunda Parte

- Montou a tabela seguindo padrões básicos (thead, tbody e etc)
- Criou as linhas da tabela com as informações fornecidas pelo usuário nas colunas correspondentes
- Criou evento de excluir linha corretamente
- Obteve valores das moedas no dia de hoje pela API
- Calculando valores correspondentes ao dia de hoje e exibiu corretamente
- Ao remover uma linha da tabela, remover os valores do locastorage

### Terceira Parte

- Montou dinamicamente DIVs para cada moeda
- Somou os valores de cada moeda com a cotação de hoje
- Exibiu a cotação do dia obtivo pela API
- Utilizou o Bootstrap para formatar os elementos do relatório

### Quarta Parte

- Exibiu o valor final de riquezas dinamicamente
- Atualizou o valor conforme novos valores foram adicionados ou removidos
- Recalculou valores com base na API
- Utilizou o Bootstrap para formatar os elementos do relatório

## Pontos usabilidade (extras)

- Limpou campos após clicar no botão adicionar
- Foco no campo que teve erro no dado informado pelo usuário
- Botão para limpar TODOS os dados, ele deve limpar a tabela sem refresh na página
- Ordenar compras por data mais recente de compra
- Ordenar o relatório por moeda com mais valor em REAL
- Utilizar um BADGE do Bootstrap para informar se a % está positiva ou negativa
- Utilizar Classe para controlar registros de compra de moedas
- Utilizou Symbol para ajudar a remover alinha correta da tabela na lista de registros
- Formatou corretamente os valores de cada moeda com seu símbolo correspondente.
