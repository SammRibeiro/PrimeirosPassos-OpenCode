export const bagProfiles = [
  {
    id: "college",
    name: "Faculdade",
    items: [
      { id: "notebook", name: "Notebook" },
      { id: "charger", name: "Carregador" },
      { id: "notebook-paper", name: "Caderno" },
      { id: "pencil-case", name: "Estojo" },
      { id: "bottle", name: "Garrafa" },
    ],
  },
  {
    id: "work",
    name: "Trabalho",
    items: [
      { id: "notebook", name: "Notebook" },
      { id: "charger", name: "Carregador" },
      { id: "badge", name: "Crachá" },
      { id: "keys", name: "Chaves" },
      { id: "headphones", name: "Fones" },
    ],
  },
  {
    id: "gym",
    name: "Academia",
    items: [
      { id: "towel", name: "Toalha" },
      { id: "bottle", name: "Garrafa" },
      { id: "workout-clothes", name: "Roupa de treino" },
      { id: "headphones", name: "Fones" },
    ],
  },
];

export function getMissingItems(items, packedIds) {
  return items.filter((item) => !packedIds.includes(item.id));
}
