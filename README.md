# PingPack

## Integrantes

- <!-- PREENCHER: nome -->
- <!-- PREENCHER: nome (se for em dupla; apague se for individual) -->

## Sobre o produto

PingPack é uma mochila inteligente para estudantes universitários e profissionais que vivem correndo. Compartimentos sensorizados e etiquetas discretas identificam os itens guardados e avisam pelo celular quando algo importante ficou para trás. Sua proposta é tornar a rotina mais tranquila com tecnologia simples e bem-humorada.

## Arquitetura

O projeto usa MVVM. Os **Models** guardam os dados mockados e regras puras, como a validação do formulário. Os **ViewModels** são hooks que coordenam estado e ações. As **Views** recebem esses dados e callbacks e cuidam apenas da interface.

```text
src/
├── models/       dados e regras puras
├── viewmodels/   estado e ações da tela
├── views/        seções da landing page
├── components/   componentes visuais reutilizáveis
└── app/          composição e estilos globais
```

No FAQ, por exemplo, `faq.js` contém perguntas e respostas, `useFaqViewModel.js` controla qual item está aberto e `Faq.jsx` renderiza o acordeão e chama a ação recebida.

## Como rodar

```bash
npm install
npm run dev
npm run build
```

## Jornada de construção

### Ideia inicial
<!-- PREENCHER: como surgiu a ideia? Quais alternativas foram consideradas?
Contexto conhecido: foram avaliadas, entre outras, ideias como cápsula de soneca (NapPod), vaso de planta falante (PlantaPet), app de foco gamificado (FocoFlow), cafeteira que escolhe café pelo humor e biblioteca de sons ambiente. A ideia escolhida foi uma mochila organizadora com sensores, originalmente chamada "MochilaMágica" e depois renomeada para "PingPack". -->

### Pesquisa e referências
<!-- PREENCHER: sites, produtos, estilos e referências visuais pesquisados. -->

### Ferramentas utilizadas
- React + Vite
- CSS Modules
- VS Code
- Codex, usado para implementar o código a partir da especificação
- <!-- PREENCHER: OpenCode, Figma, geradores de imagem etc., se usados -->

### Uso de IA
<!-- PREENCHER com a experiência real dos alunos. Pontos que podem ser citados:
- Claude: usado para sugerir ideias de produto, escolher o nome e escrever esta especificação.
- Codex: usado para implementar o código a partir da especificação.
Responder também: por que escolheram cada modelo; quando ajudou; quando o resultado não foi satisfatório; se trocaram de modelo e por quê; quais sugestões foram mantidas, alteradas ou descartadas. -->

### Evolução da solução
<!-- PREENCHER: o que mudou entre a primeira ideia e a versão final (cores, CTA, organização, imagens, nome do produto, sugestões de IA aceitas ou recusadas). -->

### Resultado final
<!-- PREENCHER: avaliação do resultado e o que fariam diferente com mais tempo. -->
