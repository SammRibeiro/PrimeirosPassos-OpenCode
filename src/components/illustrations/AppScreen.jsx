export default function AppScreen() {
  return (
    <svg
      viewBox="0 0 450 800"
      role="img"
      aria-label="Ilustração do aplicativo PingPack"
    >
      <rect width="450" height="800" rx="55" fill="#1b1f3b" />
      <rect x="24" y="30" width="402" height="740" rx="40" fill="#fff9f0" />
      <text
        x="60"
        y="110"
        fontFamily="sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="#1b1f3b"
      >
        Minha mochila
      </text>
      {["Notebook", "Carregador", "Marmita", "Garrafa"].map((x, i) => (
        <g key={x}>
          <rect
            x="55"
            y={150 + i * 85}
            width="340"
            height="60"
            rx="16"
            fill="#fff"
          />
          <circle
            cx="90"
            cy={180 + i * 85}
            r="13"
            fill={i === 1 ? "#ff6b4a" : "#22b07d"}
          />
          <text
            x="120"
            y={190 + i * 85}
            fontFamily="sans-serif"
            fontSize="21"
            fill="#1b1f3b"
          >
            {x}
          </text>
        </g>
      ))}
      <rect x="45" y="550" width="360" height="130" rx="24" fill="#ff6b4a" />
      <text
        x="70"
        y="600"
        fontFamily="sans-serif"
        fontSize="25"
        fontWeight="700"
        fill="#fff"
      >
        Ping!
      </text>
      <text x="70" y="640" fontFamily="sans-serif" fontSize="18" fill="#fff">
        Você esqueceu o carregador
      </text>
    </svg>
  );
}
