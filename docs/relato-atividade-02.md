# Relato — Atividade 02: Evolução da PingPack com MCP

**Aluno:** Samuel Ribeiro dos Santos Florenço  
**Repositório:** https://github.com/SammRibeiro/PrimeirosPassos-OpenCode

## O que foi analisado

Analisei responsividade, funcionamento, acessibilidade, SEO e desempenho da landing page. Escolhi esses aspectos porque cobrem tanto a experiência em diferentes telas quanto os principais fluxos interativos e a qualidade técnica percebida pelo navegador.

## MCPs utilizados e por que foram escolhidos

- **Playwright MCP:** escolhi para reproduzir interações reais, redimensionar a janela, medir elementos, verificar console e rede e produzir capturas comparáveis.
- **Chrome DevTools MCP:** escolhi para executar auditorias Lighthouse, validar a estrutura da página e medir LCP e CLS com traces.
- **Motivo pessoal da escolha:** Escolhi o Playwright MCP porque testar a página manualmente em vários tamanhos de tela, além de validar o formulário, o modal e a navegação por teclado, dá muito trabalho e é difícil de comprovar. Com ele, esses testes são automatizados e as capturas de evidência são salvas.

Escolhi o Chrome DevTools MCP porque ele ajuda a verificar regras de acessibilidade e desempenho: roda o Lighthouse e aponta o que precisa melhorar, em vez de eu ter que adivinhar.

## Como o MCP foi usado

Segui um fluxo de diagnóstico, correção e reteste. Com o Playwright, capturei a página em 360×800, 768×1024, 1280×800 e 1920×1080, medi overflow e áreas de toque e automatizei Navbar, CTAs, modal, formulário, FAQ, demo e preços. Com o Chrome DevTools, rodei Lighthouse mobile e desktop e traces com recarga e cache ignorado. Após as correções, repeti as mesmas verificações.

## Problemas encontrados e melhorias realizadas

- Corrigi áreas clicáveis menores que 44 px na navegação, no rodapé e no botão de fechar do modal.
- Criei um `robots.txt` válido, elevando o SEO de 91 para 100.
- Mantive e validei o favicon SVG; o console ficou com zero erros e avisos.
- Impedi que artefatos dos MCPs fossem versionados ou observados pelo Vite.

Os demais fluxos passaram no diagnóstico: não houve rolagem horizontal, as âncoras chegaram às seções corretas, o menu móvel funcionou, os CTAs abriram o modal, o foco permaneceu preso, as validações do formulário funcionaram, a FAQ manteve apenas uma resposta aberta e a demo retornou as mensagens corretas.

## Antes e depois

O Lighthouse registrou Acessibilidade 100 e Boas práticas 100 antes e depois. O SEO passou de 91 para 100 em mobile e desktop. No trace local, o LCP variou de 306 ms para 244 ms e o CLS permaneceu em 0,01. As diferenças visuais entre as versões são discretas, pois o layout, o conteúdo e a identidade visual foram mantidos. As principais melhorias foram técnicas e de usabilidade, como o aumento das áreas de toque, a correção do `robots.txt` e a validação dos fluxos interativos. As capturas comparativas estão em [antes](evidencias/antes/) e [depois](evidencias/depois/).

## Como o MCP contribuiu (e seus limites)

O Playwright tornou mensurável um problema discreto de área de toque que seria fácil ignorar apenas olhando a página. O Lighthouse identificou objetivamente o `robots.txt` ausente, e o trace forneceu métricas reais de carregamento. Os MCPs não avaliam gosto visual e as métricas locais variam conforme a execução. Também houve conflito inicial com um perfil do Chrome já aberto; depois de fechar essa instância, a auditoria prosseguiu. A categoria experimental Agentic Browsing apontou arquivos não exigidos pela atividade e foi mantida fora do escopo.

## Evidências

- [Log técnico completo](mcp-evidencias.md)
- [Capturas e relatórios antes](evidencias/antes/)
- [Capturas e relatórios depois](evidencias/depois/)
- [Capturas de chamadas aos MCPs](evidencias/chamadas-mcp/)
