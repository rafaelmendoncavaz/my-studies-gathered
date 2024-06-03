PASSO A PASSO:

1. -> Abra o Terminal Git Bash

    Configurando sua identidade...

2. -> Digite "$ git config --global user.name "Seu Nome""

3. -> Digite "$ git config --global user.email "seu@email.com""

    Trocar o Editor Padrão do Git (Vim) caso queira

4. -> Digite $ git config --global core.editor "code -w"

    Verificando suas Configurações

5. -> Digite $ git config --list

Git config permite ver e atribuir variáveis de configuração, que podem ser armazenadas em 3 lugares diferentes:

a. -> /etc/gitconfig (Válido para todos os usuários do sistema e todos os seus repositórios. Se você deseja passar a opção --system para git config, ele lê e escreve neste arquivo)

b. -> ~/.gitconfig (ou) ~/.config/git/config (Somente para o seu usuário. Você pode fazer o git ler e escrever neste arquivo passando a opção --global)

c. -> config (no diretório do Git, ou seja de qualquer repositório que você esteja usando: específico para este repositório) .git/config 

// Cada nível sobrescreve os valores do nível anterior, ou seja, valores em .git/config prevalecem sobre /etc/gitconfig.

// cat é uma opção de busca para listar o que está dentro do arquivo

    Criando Diretório

6. digite $ mkdir git-nome (Criando a pasta)

7. digite $ cd git-nome/ (Entrando na pasta)

8. digite $ git init (Iniciando o repositório)

9. $ ls -a (Ver a pasta .git onde está a pasta do repositório)

Aqui você consegue acessar a lista de usuários, adicionar usuários e também configurar a pasta.

    Todos os comandos do Git

10. Digite $ git help (Acesse toda a lista de comandos do git com descrição de suas funções)

    Iniciando um Repositório:

11. Digite $ pwd para verificar a pasta de seu usuário

12. Digite $ cd Diretório/pasta-do-repositório/ para localizar o diretório do seu repositório

13. Digite $ ls para verificar o conteúdo do repositório (se houver)

14. Digite $ git init para iniciar seu repositório Git

// Haverá um diretório escondido chamado .git a partir de agora (Digite $ ls -a para verificar)

    Verificando o histórico do projeto:

15. Digite $ ls -al .git No local do seu repositório já iniciado para listar todos os arquivos

// HEAD será o "momento atual" do projeto (commit mais recente)

    Commitando arquivos (Adicionando pontos na história do projeto)

16. Com o Git Bash na pasta que referencia o repositório, digite $ git add . (Para adicionar todos os arquivos atualizados), $  git commit -m "Breve Descrição da alteração" (para adicionar a mensagem da modificação).

    Log (histórico) dos commits

17. digite $ git log para ver todos os históricos do commit

// Todo commit tem um nome único e que pode ser acessado fazendo a sua chamada pela sua hash. 

// HEAD apontará o momento atual do commit, e em sequência a seta apontará para qual "branch" está localizada.

// A versão abreviada deste comando é $ git log --oneline

// Caso queria verificar apenas um número específico entre os últimos commits, utilize $ git log -n (n sendo a quantia de commits que deseja visualizar)

// Para filtrar por datas, digite $ git log --since=year-month-day (Para verificar até), ou $ git log --until=year-month-day (Para verificar anteriores a)

// Para filtrar por autor do commit, digite $ git log --author=name

// Para filtrar por mensagem/comentário do commit, digite $ git log --grep="palavra-chave"

    Estágios do Arquivo

// Para entender os estágios do arquivo, seguimos esta ordem de raciocínio:

a. -> git init/clone (inicia seu repositório do 0 ou a partir de um pronto)

// Neste momento Ele se encontra no Diretório Local ou de Trabalho

b. -> git add . moverá os arquivos alterados/novos para a "Staging Area" que é o local onde os arquivos estão prontos para serem commitados. 

c. -> git commit moverá as mudanças adicionadas e preparadas para serem commitadas, no repositório git local, que conterá todas as versões do seu projeto armazenadas na pasta oculta .git

// Aqui você poderá usar também o git push para empurrar a versão atualizada do commit para um repositório remoto previamente configurado

    Workflow do Git

// Conforme modificações são realizadas no projeto, você terá como padrão o ÚLTIMO commit disponível para visualização, mas no histórico você terá TODAS as versões disponíveis para serem acessadas.

    Removendo da "Stage Area" arquivos que não serão commitados

18. use $ git rm --cached nome-do-arquivo.extensão para deixar de rastrear este arquivo para o commit area.

// Também pode ser usado o comando git restore --staged arquivo.extensão para retirar ele da "Stage Area"

    Alertando sobre as modificações feitas no projeto

19. use $ git diff para mostrar o registro das modificações feitas nos arquivos que já haviam sido guardados no repositório previamente. É PRECISO que ao menos UM COMMIT tenha sido feito para que o git possa detectar as alterações feitas. 

// use $ git diff --staged para comparar as modificações dos arquivos na stage area e no repositório, ao invés de comparar as modificações feitas na pasta de trabalho com o repositório. 

    Removendo arquivos com o Git

20. Use o comando git rm nomedoarquivo.extensão para deletar arquivos usando o git.

// Cuidado ao deletar, pois se excluir algum arquivo que não esteja no repositório, ele foi perdido para sempre pois não há uma outra versão de sua existência.

    Renomeando/movendo arquivos com o Git

21. Você pode renomear manualmente os arquivos na pasta, porém também terá que remover o arquivo como estava nomeado anteriormente, com $ git rm nome-do-arquivo, e então adicionar o arquivo renomeado com $ git add nome-do-arquivo.

// Diretamente no git: $ git mv nome-do-arquivo.extensão novo-nome.extensão

// Mover serve também para renomear pois quando você renomeia um arquivo, você move também o caminho dele, se tornando outro caminho. 

22. Para mover os arquivos, use $ git mv arquivo-que-vai-mover diretorio-que-vai-mover/arquivo-que-vai-mover

    Desfazendo modificações

23. Utilize o comando $ git restore nome-do-arquivo para restaurar mudanças que você fez que não deseja que sejam commitadas. 

24. Para desfazer modificações realizadas que já estão na "Staged Area", utilize o comando $ git restore --staged nome-do-arquivo

    Corrigindo o último commit

25. Para modificar o conteúdo ou a mensagem do último commit, utilize o comando $ git commit --ammend -m "Nova Mensagem" para alterar a mensagem, ou apenas $ git commit --ammend para corrigir o último commit, após ter feito as alterações e enviado para a "Staged Area". 

    Requperando arquivos

26. Use o $ git log para encontrar o nome do commit que precisa, e então após pegar os primeiros caracteres do nome/hash do commit, use o comando $ git checkout HASH -- nome-do-arquivo. 

// Este comando "trará um arquivo do passado, para o presente", portanto cuidado ao usar este comando, de preferência, evite commitá-lo e apenas pegue/resgate suas informações. 

    Removendo arquivos não rastreados

27. Para remover PERMANENTEMENTE os arquivos não rastreados, utilize o comando $ git clean, e para CONFIRMAR os arquivos que serão removidos, utilize $ git clean -n.

    Reverter múltiplos arquivos commitados

28. Primeiramente, sua Working Tree tem que estar limpa, portanto nada deve aparecer no $ git status. Use o $ git log para verificar a qual ponto deseja retornar, então utilize este comando: $ git revert HEAD~n onde n é o número do commit abaixo do HEAD que deseja reverter. Também pdoe fazer o comando utilizando o nome da exata hash que deseja reverter. 

// Este comando também realiza um novo commit logo após ser utilizado, para que você não perca/delete nenhum commit, mas sim crie um novo ponto à partir da reversão.

    Ver modificações em diversos pontos da história

29. Utilize o comando $ git show hash-do-commit para verificar quais foram as modificações realizadas no arquivo designado, e pode destacar as modificações com $ git show hash-do-commit --color-words

// Pode também pedir todas as modificações dentro de uma sub-pasta usando o mesmo princípio, mas substituindo --color-words por -- nome-do-diretorio/* ou designar um arquivo específico

// Diferente do $ git diff, o $ git show pode mostrar alterações em qualquer momento da história, utilizando da sua referência, enquanto o diff só mostra a diferença entre o repositório local e a "Staged Area"

    Ignorando arquivos e diretórios indesejados

30. Utilize o arquivo ".gitignore" e dentro dele, coloque todas as pastas e/ou arquivos que deseja que seje ignorados em seus commits. 

// Isto é muito comum em projetos que utilizam Frameworks que podem ser instalados individualmente por qualquer pessoa que deseja utilizar o projeto, commitando apenas as mudanças efetivas do projeto. 

// Pode criar o arquivo pelo Git usando o comando $ vim .gitignore

// Caso tenha algum arquivo para ser ignorado que já tenha sido enviado para o repositório, faça sua remoção utilizando $ git rm -r --cached .

    INICIANDO UM NOVO PROJETO

Localizando o seu projeto e inicializando no Git:
-->> $ cd local/do/diretorio

Iniciando o Git no projeto:
-->> $ git init

