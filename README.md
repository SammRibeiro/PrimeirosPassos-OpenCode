# PingPack

> Landing page fictícia de uma mochila inteligente que avisa quando você esquece algo. Projeto da Atividade 01 (Landing Page de Produto), feito em React com arquitetura MVVM.

## Integrantes

- Samuel Ribeiro dos Santos Florenço

## Sobre o produto

A **PingPack** é uma mochila com compartimentos sensorizados. Cada item importante (notebook, carregador, marmita, garrafa, chaves, fones) recebe uma etiqueta discreta. Quando a pessoa fecha o zíper e sai, o app dá um "ping" no celular avisando o que ficou para trás.

- **Público:** estudantes universitários e profissionais que vivem correndo.
- **Proposta:** "Sua mochila avisa antes de você esquecer."
- **Tom:** leve e bem-humorado.
- **Aviso:** o produto é fictício. Nenhum pagamento é processado e nenhum dado é enviado a lugar algum.

## Funcionalidades da página

- Hero com CTA, benefícios e diferenciais, vitrine do produto, passos de "como funciona", avaliações fictícias, planos e preços, FAQ em acordeão e CTA final.
- **Demo interativa "Arrume sua mochila":** a pessoa escolhe os itens que colocou na mochila e, ao "fechar o zíper", recebe um alerta simulando o ping do app com o que faltou.
- **CTA funcional:** modal de lista de espera com formulário validado e mensagem de sucesso (simulada).
- Layout responsivo e navegação por âncoras com rolagem suave.

## Arquitetura

O projeto usa **MVVM**:

- **Model** (`src/models`): dados mockados e regras puras, como a validação do formulário. Não usa React.
- **ViewModel** (`src/viewmodels`): hooks customizados (`useXxxViewModel`) que guardam o estado e as ações de cada seção. Não têm JSX.
- **View** (`src/views` e `src/components`): componentes responsáveis pela renderização da interface. Recebem dados e ações dos ViewModels e também utilizam componentes visuais reutilizáveis, como as ilustrações SVG e os CSS Modules.

Exemplo do fluxo no FAQ: o Model guarda as perguntas e respostas, o `useFaqViewModel` controla qual pergunta está aberta, e a View `Faq` mostra a lista e chama a ação de abrir ou fechar.

## Como rodar

```bash
npm install
npm run dev     # ambiente de desenvolvimento
npm run build   # build de produção
```

## Jornada de construção

### Ideia inicial

Antes de escolher o produto, pedi ideias a uma IA e avaliei seis opções: uma cápsula de soneca para estudantes (NapPod), um vasinho de planta que "conversa" (PlantaPet), um app e ampulheta de foco gamificado (FocoFlow), uma cafeteira nonsense que escolhe o café pelo humor, uma mochila organizadora com sensores e uma assinatura de ambientes sonoros para estudar.

Escolhi a **mochila organizadora** porque é fácil de explicar e ilustrar, resolve uma dor real do dia a dia universitário (esquecer carregador, notebook ou marmita) e permite uma demo interativa simples. O nome original era "MochilaMágica". Pedi algo mais marcante e cheguei a **PingPack**, em referência ao aviso (o "ping") que o app envia.

### Pesquisa e referências

Pesquisei landing pages de venda de produtos online, principalmente de cursos, como **Descomplica** e **Pro Enem**. Escolhi essas referências porque são voltadas a estudantes, o mesmo público do meu produto, e têm um layout interessante para a minha ideia.

### Ferramentas utilizadas

- React + Vite
- CSS Modules
- VS Code
- Git e GitHub (versionamento e entrega)
- Claude (planejamento)
- GPT-5.6 Sol (implementação)

### Uso de IA

**Claude (Anthropic)**
- Sugeriu seis ideias de produto e uma recomendação.
- Sugeriu o nome PingPack e o slogan, a partir do nome original MochilaMágica.
- Escreveu o documento de especificação (`.md`) entregue para a implementação, com stack, arquitetura MVVM, seções da página, paleta, regras de código e o modelo do README.
- Orientou sobre como tratar as imagens do produto e deu uma estimativa de custo para a implementação.

**GPT-5.6 Sol (OpenAI)**
- Implementou o projeto a partir da especificação escrita com o Claude.

**Onde não ficou satisfatório:** no primeiro resultado do GPT-5.6 Sol, as ilustrações SVG estavam simples e precisei pedir ajustes de detalhamento. Também precisei pedir a correção da formatação do código, porque ele inicialmente entregou tudo sem quebras de linha.

**O que mantive, alterei e descartei:**
- Mantive o nome PingPack, o slogan e a arquitetura MVVM.
- A especificação previa a possibilidade de usar imagens reais do produto, com SVGs como alternativa. Descartei as imagens geradas e mantive apenas os SVGs.

### Evolução da solução

- **Nome do produto:** de "MochilaMágica" para "PingPack", para soar mais moderno e lembrar a função principal.
- **Imagens:** a primeira ideia era adicionar imagens geradas por IA depois do código pronto. Decidi manter somente os SVGs, porque ficaram bem desenvolvidos e atendem à proposta, já que se trata de um projeto acadêmico.
- **Ilustrações:** depois de ver a página rodando, a única mudança que pedi foi um melhor detalhamento dos SVGs.
- **Código:** pedi a reorganização da formatação, que veio inicialmente sem quebras de linha.

### Resultado final

O resultado foi muito satisfatório e superou minhas expectativas. A página ficou bonita e bem feita, com UX e UI limpos e fluidos, tanto na aparência quanto na usabilidade.

Com mais tempo, eu profissionalizaria alguns elementos do site, como usar imagens reais do produto no lugar dos SVGs, e implementaria mais funcionalidades para explorar melhor o uso da IA.

## Atividade 02 — Evolução com MCP

A landing page foi validada em responsividade, funcionamento, acessibilidade, SEO e desempenho com Playwright MCP e Chrome DevTools MCP. Foram ampliadas as áreas de toque, adicionado um `robots.txt` válido e configuradas exclusões para os artefatos dos navegadores.

- [Evidências técnicas e resultados](docs/mcp-evidencias.md)
- [Relato da Atividade 02](docs/relato-atividade-02.md)
