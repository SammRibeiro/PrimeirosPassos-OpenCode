# Evidências de uso de MCP — PingPack

## Ambiente

- Data/hora dos testes: 27/10/2026, das 22:32 às 22:39 (America/Sao_Paulo)
- MCPs usados: Playwright MCP e Chrome DevTools MCP
- Navegador: Chrome 156.0.0.0, Windows 10
- Ferramentas Playwright encontradas: `browser_click`, `browser_close`, `browser_console_messages`, `browser_drag`, `browser_drop`, `browser_emulate_media`, `browser_evaluate`, `browser_file_upload`, `browser_fill_form`, `browser_find`, `browser_handle_dialog`, `browser_hover`, `browser_navigate`, `browser_navigate_back`, `browser_network_request`, `browser_network_requests`, `browser_press_key`, `browser_resize`, `browser_run_code_unsafe`, `browser_select_option`, `browser_snapshot`, `browser_tabs`, `browser_take_screenshot`, `browser_type` e `browser_wait_for`.
- Ferramentas Chrome DevTools encontradas: `click`, `close_page`, `drag`, `emulate`, `evaluate_script`, `fill`, `fill_form`, `get_console_message`, `get_css_styles`, `get_network_request`, `handle_dialog`, `hover`, `lighthouse_audit`, `list_console_messages`, `list_network_requests`, `list_pages`, `navigate_page`, `new_page`, `performance_analyze_insight`, `performance_start_trace`, `performance_stop_trace`, `press_key`, `resize_page`, `screencast_start`, `screencast_stop`, `select_page`, `take_heapsnapshot`, `take_screenshot`, `take_snapshot`, `type_text`, `upload_file` e `wait_for`.

## Log de interações com o MCP

| # | Data/hora | MCP | Ferramenta | O que foi feito | Resultado | Evidência |
|---|-----------|-----|------------|-----------------|-----------|-----------|
| 1 | 27/10 22:32 | Chrome DevTools | `list_pages` | Confirmação de disponibilidade | MCP operacional, uma página em branco | Registro da chamada no chat |
| 2 | 27/10 22:33 | Playwright | `browser_navigate` | Abertura da aplicação | Página carregada em `localhost:5173` | `antes/antes-360.png` |
| 3 | 27/10 22:33 | Playwright | `browser_resize`, `browser_evaluate`, `browser_take_screenshot` | Teste em 360×800 | Sem rolagem horizontal; havia alvos menores que 44 px | `antes/antes-360.png` |
| 4 | 27/10 22:33 | Playwright | `browser_resize`, `browser_evaluate`, `browser_take_screenshot` | Teste em 768×1024 | Sem rolagem horizontal; havia alvos menores que 44 px | `antes/antes-768.png` |
| 5 | 27/10 22:33 | Playwright | `browser_resize`, `browser_evaluate`, `browser_take_screenshot` | Teste em 1280×800 | Sem rolagem horizontal ou imagens distorcidas | `antes/antes-1280.png` |
| 6 | 27/10 22:33 | Playwright | `browser_resize`, `browser_evaluate`, `browser_take_screenshot` | Teste em 1920×1080 | Sem rolagem horizontal ou imagens distorcidas | `antes/antes-1920.png` |
| 7 | 27/10 22:34 | Playwright | `browser_run_code_unsafe` | Menu, CTAs, modal, formulário, FAQ, demo e preços | Todos os fluxos existentes passaram; carrossel não existe | Registro da chamada no chat |
| 8 | 27/10 22:35 | Playwright | `browser_run_code_unsafe` | Repetição das âncoras após a rolagem suave | Todas terminaram entre 75 e 78 px do topo | Registro da chamada no chat |
| 9 | 27/10 22:35 | Playwright | `browser_console_messages` | Leitura de erros e avisos | 0 erros e 0 avisos | Registro da chamada no chat |
| 10 | 27/10 22:35 | Playwright | `browser_network_requests` | Inspeção das requisições | Nenhuma requisição falhou | Registro da chamada no chat |
| 11 | 27/10 22:35 | Chrome DevTools | `lighthouse_audit` | Auditoria mobile antes | Acessibilidade 100; Boas práticas 100; SEO 91 | `antes/antes-lighthouse-mobile.json` |
| 12 | 27/10 22:35 | Chrome DevTools | `lighthouse_audit` | Auditoria desktop antes | Acessibilidade 100; Boas práticas 100; SEO 91 | `antes/antes-lighthouse-desktop.json` |
| 13 | 27/10 22:36 | Chrome DevTools | `performance_start_trace` | Trace com recarga e cache ignorado | LCP 306 ms; CLS 0,01 | Registro da chamada no chat |
| 14 | 27/10 22:36 | Chrome DevTools | `evaluate_script` | Semântica, metadados, títulos, SVGs e labels | `pt-BR`, metadados, um h1, hierarquia e labels corretos | Registro da chamada no chat |
| 15 | 27/10 22:36 | Playwright | `browser_resize`, `browser_evaluate`, `browser_take_screenshot` | Reteste nas quatro resoluções | Sem overflow e nenhum alvo abaixo de 44 px | `depois/depois-*.png` |
| 16 | 27/10 22:37 | Playwright | `browser_run_code_unsafe` | Reteste funcional completo | Todos os testes passaram | Registro da chamada no chat |
| 17 | 27/10 22:37 | Playwright | `browser_console_messages`, `browser_network_requests` | Reteste de console e rede | 0 erros, 0 avisos e nenhuma falha de rede | Registro da chamada no chat |
| 18 | 27/10 22:38 | Chrome DevTools | `lighthouse_audit` | Auditoria mobile depois | Acessibilidade 100; Boas práticas 100; SEO 100 | `depois/depois-lighthouse-mobile.json` |
| 19 | 27/10 22:38 | Chrome DevTools | `lighthouse_audit` | Auditoria desktop depois | Acessibilidade 100; Boas práticas 100; SEO 100 | `depois/depois-lighthouse-desktop.json` |
| 20 | 27/10 22:39 | Chrome DevTools | `performance_start_trace` | Trace final com as mesmas opções | LCP 244 ms; CLS 0,01 | Registro da chamada no chat |

## Testes realizados

| Área | Teste | Antes | Depois |
|------|-------|-------|--------|
| Responsividade | 360, 768, 1280 e 1920 px sem rolagem horizontal | Passou | Passou |
| Responsividade | Textos, sobreposição e imagens/SVGs | Passou | Passou |
| Responsividade | Alvos interativos com pelo menos 44 px | Falhou | Passou |
| Funcionamento | Links âncora da Navbar | Passou | Passou |
| Funcionamento | Menu hambúrguer abre, fecha e fecha por link | Passou | Passou |
| Funcionamento | CTAs da Navbar, Hero, Pricing e FinalCta | Passou | Passou |
| Funcionamento | Plano do Pricing pré-selecionado | Passou | Passou |
| Funcionamento | Modal fecha por X, fundo e Esc | Passou | Passou |
| Funcionamento | Foco inicial, bloqueio do fundo e foco preso | Passou | Passou |
| Funcionamento | Formulário vazio, e-mail inválido e sucesso | Passou | Passou |
| Funcionamento | FAQ abre uma por vez e atualiza `aria-expanded` | Passou | Passou |
| Funcionamento | Demo: faltantes, mochila completa e reinício | Passou | Passou |
| Funcionamento | Toggle de preços e botões Reservar | Passou | Passou |
| Funcionamento | Carrossel de depoimentos | Não aplicável: não existe | Não aplicável |
| Funcionamento | Console e requisições | Passou | Passou |
| Acessibilidade | `lang`, metadados, títulos, landmarks, SVGs e labels | Passou | Passou |
| Acessibilidade | Lighthouse | 100 | 100 |
| SEO | Lighthouse | 91 | 100 |
| Código | `npm run build` | — | Passou: 79 módulos transformados |

## Achados e correções

| ID | Área | Descrição | Severidade | Revelado por (MCP/ferramenta) | Correção aplicada | Status | Evidência antes | Evidência depois |
|----|------|-----------|-----------|-------------------------------|-------------------|--------|-----------------|------------------|
| R01 | Responsividade | Logo, menu hambúrguer e links tinham área clicável menor que 44 px | Média | Playwright / `browser_evaluate` | `min-height`/`min-width` de 44 px nos controles e links | Corrigido | `antes/antes-360.png` | `depois/depois-360.png` |
| A01 | Acessibilidade | Botão de fechar do modal media 38×38 px | Média | Playwright / medição de alvos | Dimensão alterada para 44×44 px | Corrigido | Código anterior | Reteste funcional |
| S01 | SEO | Ausência de `robots.txt` válido reduzia SEO para 91 | Média | Chrome DevTools / `lighthouse_audit` | Criado `public/robots.txt` válido | Corrigido | `antes/antes-lighthouse-mobile.json` | `depois/depois-lighthouse-mobile.json` |
| F01 | Funcionamento | Favicon SVG e console sem 404 | Baixa | Playwright / console e rede | Favicon SVG mantido e validado | Corrigido | Registro anterior do console | Reteste sem erros |
| C01 | Código | Artefatos de navegador não estavam ignorados | Baixa | Pré-checagem da especificação | Inclusões no `.gitignore` e em `server.watch.ignored` | Corrigido | Configuração anterior | `.gitignore` e `vite.config.js` |
| P01 | Desempenho | Fontes externas aparecem como recurso bloqueador, mas LCP já era 306 ms | Baixa | Chrome DevTools / trace | Aceito; nenhuma mudança adicional justificada | Aceito | Trace antes | Trace depois |

As falhas experimentais de “Agentic Browsing” (`llms.txt` e `ai-catalog.json`) ficaram aceitas porque não pertencem às categorias solicitadas na atividade. A ferramenta usada não disponibilizou pontuação de Performance no Lighthouse; por isso desempenho foi medido pelo trace, sem inventar uma nota.

## Lighthouse antes × depois

| Categoria | Mobile antes | Mobile depois | Desktop antes | Desktop depois |
|-----------|--------------|---------------|----------------|----------------|
| Acessibilidade | 100 | 100 | 100 | 100 |
| Boas práticas | 100 | 100 | 100 | 100 |
| SEO | 91 | 100 | 91 | 100 |
| Performance | Não disponível nesta ferramenta | Não disponível | Não disponível | Não disponível |

## Desempenho (trace)

| Métrica | Antes | Depois |
|---------|-------:|-------:|
| LCP | 306 ms | 244 ms |
| CLS | 0,01 | 0,01 |

Os valores são medições locais sem throttling e podem variar entre execuções.
