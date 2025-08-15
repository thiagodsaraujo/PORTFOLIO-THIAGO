
# Configuração para Desenvolvimento Local

## Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

## Passos para instalação:

1. **Clone ou baixe o projeto**
   ```bash
   # Se usando Git
   git clone [URL_DO_SEU_REPOSITORIO]
   cd [NOME_DA_PASTA]
   
   # Ou extraia o arquivo ZIP baixado
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   - Abra: http://localhost:5173
   - Ou: http://127.0.0.1:5173

## Comandos disponíveis:

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build para produção
- `npm run preview` - Visualiza build de produção

## Estrutura do projeto:
```
/
├── index.html          # Página principal
├── style.css          # Estilos CSS
├── script.js          # JavaScript principal
├── attached_assets/   # Imagens e recursos
├── package.json       # Configurações npm
└── vite.config.js     # Configurações Vite
```

## Possíveis problemas:

1. **Porta 5173 ocupada**: O Vite tentará usar a próxima porta disponível
2. **Imagens não carregam**: Verifique se a pasta `attached_assets` foi copiada
3. **Erro de permissões**: Execute com privilégios de administrador se necessário

## Para produção:
```bash
npm run build
# Os arquivos serão gerados na pasta 'dist'
```
