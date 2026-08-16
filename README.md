# Geradores de ETP e TR — CNJ 2026

Repositório unificado com dois geradores de scripts para apoiar o planejamento de contratações de Soluções de Tecnologia da Informação e Comunicação no CNJ:

- Estudo Técnico Preliminar (ETP);
- Termo de Referência (TR).

As aplicações são páginas HTML estáticas, sem backend e sem envio dos dados preenchidos para servidores externos.

## Funcionalidades

- configuração dos parâmetros da contratação;
- seleção das seções aplicáveis ao ETP ou ao TR;
- checklists de conformidade TCU/CNJ;
- requisitos específicos para serviços em nuvem;
- Método M²E² e pesquisa de preços no gerador de ETP;
- anexos obrigatórios no gerador de TR;
- geração do script estruturado;
- cópia do script para a área de transferência;
- exportação do script gerado para arquivo `.docx` editável no Microsoft Word ou LibreOffice.

> **Escopo atual da exportação:** o DOCX contém o script estruturado produzido pelo gerador. A elaboração automática do ETP ou TR final, com conteúdo institucional preenchido e análise das evidências, exige uma etapa adicional de IA ou um motor de modelos documentais.

## Como executar

Não há instalação de dependências.

1. Baixe ou clone o repositório.
2. Abra `index.html` em um navegador moderno.
3. Escolha o gerador de ETP ou TR.
4. Preencha os parâmetros, selecione as seções e atualize o script.
5. Use **Baixar DOCX** para exportar o resultado.

Também é possível servir a pasta por qualquer servidor HTTP estático.

## Estrutura

```text
.
├── index.html                 # página inicial
├── etp.html                   # gerador de ETP
├── tr.html                    # gerador de TR
├── assets/
│   └── docx-export.js         # exportador DOCX local, sem dependências
└── tests/
    └── docx-export.test.cjs   # teste automatizado do pacote DOCX
```

## Testes

Com Node.js 18 ou superior:

```bash
npm test
```

O teste valida a assinatura ZIP/DOCX, o conteúdo XML principal, os estilos, a numeração de listas e a sanitização do nome do arquivo.

## Segurança e privacidade

- O processamento ocorre inteiramente no navegador.
- Não são feitas chamadas de rede pelos geradores.
- O repositório não contém credenciais, dados pessoais ou informações de processos reais.

Antes de utilizar o material em um processo administrativo, revise a fundamentação normativa, os dados institucionais, as evidências e a versão vigente dos modelos oficiais do CNJ.

## Licenciamento

Nenhuma licença de uso foi definida nesta versão. O titular do repositório deverá escolher e adicionar uma licença antes de eventual distribuição pública.
