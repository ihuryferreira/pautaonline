# Descrição do Sistema de Pauta do Dia
O Sistema de Pauta do Dia é uma aplicação web desenvolvida com Node.js que facilita o gerenciamento de chamados e relatórios diários.
A aplicação permite a criação, edição e exclusão de registros de chamados, com informações detalhadas sobre as atividades realizadas e o status de conclusão de cada chamado.

# Funcionalidades Principais:
  * Registro de Chamados: Adicione novos chamados com um número identificador único, uma mensagem descritiva sobre o que foi realizado e o estado atual do chamado.
  * Gerenciamento de Dados: Visualize e gerencie os chamados em uma tabela interativa. É possível editar ou excluir registros conforme necessário.
  * Armazenamento e Compartilhamento: Os chamados são armazenados em uma tabela persistente, e uma captura de tela dessa tabela pode ser enviada diretamente via WhatsApp para comunicação com a equipe.
  * Tecnologias Utilizadas:
  * Backend: Node.js com Express para gerenciamento de rotas e middleware.
  * Banco de Dados: PostgreSQL para armazenamento de dados.
  * Frontend: EJS para renderização de páginas dinâmicas.
  * Sessões e Uploads: express-session para gerenciamento de sessões e multer para manipulação de uploads de arquivos.
  * Comunicação em Tempo Real: Socket.io para atualizações em tempo real (se aplicável).

# Dependências:
body-parser: Middleware para parsing de requisições HTTP.
cors: Suporte a Cross-Origin Resource Sharing.
dotenv: Carregamento de variáveis de ambiente.
express: Framework web para Node.js.
express-session: Gerenciamento de sessões de usuário.
multer: Manipulação de uploads de arquivos.
pg: Cliente PostgreSQL para Node.js.
socket.io: Comunicação em tempo real.

# DevDependencies:
nodemon: Ferramenta para reinicialização automática do servidor durante o desenvolvimento.

O Sistema de Pauta do Dia é uma solução eficiente para o gerenciamento de chamados diários, proporcionando uma interface amigável e funcionalidades robustas para facilitar o seu fluxo de trabalho.

# Página de Login
![image](https://github.com/user-attachments/assets/1929a8a6-f932-4543-a662-4e5739688564)

# Página do Formulário Finalizado
![image](https://github.com/user-attachments/assets/e883b8d0-6a20-4d41-9d7f-0b08276613e2)

# Página do Formulário Pausados
![image](https://github.com/user-attachments/assets/d6b6956c-871e-452a-aa0c-67ce034bbad9)

# Página Modificar Pauta
![image](https://github.com/user-attachments/assets/99e40a07-af56-4c2c-ae0a-ba9ba09bec2a)

# Página Formulário de Editar Pauta
![image](https://github.com/user-attachments/assets/b8cbc75b-488e-4099-a1e6-150dd6496d90)

# Página View da Pauta
![image](https://github.com/user-attachments/assets/95d5f9fa-033a-44a4-8d6d-090a0a4967ca)
