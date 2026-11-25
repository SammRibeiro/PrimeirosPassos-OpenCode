import { expect, test } from "@playwright/test";

const profiles = {
  Faculdade: ["Notebook", "Carregador", "Caderno", "Estojo", "Garrafa"],
  Trabalho: ["Notebook", "Carregador", "Crachá", "Chaves", "Fones"],
  Academia: ["Toalha", "Garrafa", "Roupa de treino", "Fones"],
};

function getDemo(page) {
  return page.getByRole("group", { name: "Perfil de organização" }).locator("..");
}

function getProfile(demo, name) {
  return demo.getByRole("button", { name, exact: true });
}

function getItem(demo, name) {
  return demo.getByRole("checkbox", { name: new RegExp(name) });
}

async function selectAllItems(demo, items) {
  for (const item of items) {
    await getItem(demo, item).check();
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("seleciona Faculdade por padrão", async ({ page }) => {
  const demo = getDemo(page);

  await expect(getProfile(demo, "Faculdade")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(getProfile(demo, "Trabalho")).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  await expect(getProfile(demo, "Academia")).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  await expect(demo.getByText("0 de 5 adicionados", { exact: true })).toBeVisible();
});

test("exibe somente os itens correspondentes a cada perfil", async ({ page }) => {
  const demo = getDemo(page);

  for (const [profile, items] of Object.entries(profiles)) {
    await getProfile(demo, profile).click();
    await expect(demo.getByRole("checkbox")).toHaveCount(items.length);

    for (const item of items) {
      await expect(getItem(demo, item)).toBeVisible();
    }
  }
});

test("permite adicionar e remover itens da mochila", async ({ page }) => {
  const demo = getDemo(page);
  const notebook = getItem(demo, "Notebook");

  await notebook.check();
  await expect(notebook).toBeChecked();

  await notebook.uncheck();
  await expect(notebook).not.toBeChecked();
});

test("desmarca todos os itens ao trocar de perfil, inclusive itens em comum", async ({
  page,
}) => {
  const demo = getDemo(page);

  await getItem(demo, "Notebook").check();
  await getItem(demo, "Carregador").check();
  await getProfile(demo, "Trabalho").click();

  for (const item of profiles.Trabalho) {
    await expect(getItem(demo, item)).not.toBeChecked();
  }
  await expect(demo.getByText("0 de 5 adicionados", { exact: true })).toBeVisible();
});

test("atualiza o contador ao adicionar e remover itens", async ({ page }) => {
  const demo = getDemo(page);
  const notebook = getItem(demo, "Notebook");
  const charger = getItem(demo, "Carregador");

  await notebook.check();
  await expect(demo.getByText("1 de 5 adicionados", { exact: true })).toBeVisible();

  await charger.check();
  await expect(demo.getByText("2 de 5 adicionados", { exact: true })).toBeVisible();

  await notebook.uncheck();
  await expect(demo.getByText("1 de 5 adicionados", { exact: true })).toBeVisible();
});

test("informa todos os itens faltantes ao fechar a mochila vazia", async ({
  page,
}) => {
  const demo = getDemo(page);

  await demo.getByRole("button", { name: "Fechar zíper e sair" }).click();

  await expect(demo.getByRole("status")).toHaveText(
    "Ping! Você esqueceu: Notebook, Carregador, Caderno, Estojo, Garrafa.",
  );
});

test("informa somente os itens faltantes ao fechar a mochila parcialmente preenchida", async ({
  page,
}) => {
  const demo = getDemo(page);

  await getItem(demo, "Notebook").check();
  await getItem(demo, "Estojo").check();
  await demo.getByRole("button", { name: "Fechar zíper e sair" }).click();

  await expect(demo.getByRole("status")).toHaveText(
    "Ping! Você esqueceu: Carregador, Caderno, Garrafa.",
  );
});

test("exibe sucesso ao fechar a mochila completa", async ({ page }) => {
  const demo = getDemo(page);

  await selectAllItems(demo, profiles.Faculdade);
  await demo.getByRole("button", { name: "Fechar zíper e sair" }).click();

  await expect(demo.getByRole("status")).toHaveText(
    "Tudo certo para a rotina de faculdade!",
  );
});

test("limpa mensagens de alerta e sucesso ao trocar de perfil", async ({ page }) => {
  const demo = getDemo(page);

  await demo.getByRole("button", { name: "Fechar zíper e sair" }).click();
  await expect(demo.getByRole("status")).toBeVisible();
  await getProfile(demo, "Trabalho").click();
  await expect(demo.getByRole("status")).toHaveCount(0);

  await selectAllItems(demo, profiles.Trabalho);
  await demo.getByRole("button", { name: "Fechar zíper e sair" }).click();
  await expect(demo.getByRole("status")).toHaveText(
    "Tudo certo para a rotina de trabalho!",
  );
  await getProfile(demo, "Academia").click();
  await expect(demo.getByRole("status")).toHaveCount(0);
});

test("reinicia itens e mensagens sem alterar o perfil atual", async ({ page }) => {
  const demo = getDemo(page);

  await getProfile(demo, "Academia").click();
  await getItem(demo, "Toalha").check();
  await getItem(demo, "Fones").check();
  await demo.getByRole("button", { name: "Fechar zíper e sair" }).click();
  await expect(demo.getByRole("status")).toBeVisible();

  await demo.getByRole("button", { name: "Reiniciar" }).click();

  await expect(getProfile(demo, "Academia")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  for (const item of profiles.Academia) {
    await expect(getItem(demo, item)).not.toBeChecked();
  }
  await expect(demo.getByText("0 de 4 adicionados", { exact: true })).toBeVisible();
  await expect(demo.getByRole("status")).toHaveCount(0);
});
