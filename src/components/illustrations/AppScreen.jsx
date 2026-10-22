export default function AppScreen() {
  return (
    <svg
      viewBox="0 0 450 800"
      role="img"
      aria-label="Ilustração detalhada do aplicativo PingPack"
    >
      <defs>
        <filter id="phone-shadow" x="-30%" y="-20%" width="160%" height="150%">
          <feDropShadow
            dx="0"
            dy="20"
            stdDeviation="16"
            floodColor="#1b1f3b"
            floodOpacity="0.24"
          />
        </filter>
        <linearGradient id="app-bg" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#f1edff" />
          <stop offset="1" stopColor="#fff9f0" />
        </linearGradient>
      </defs>
      <rect width="450" height="800" rx="55" fill="#e8e3ff" />
      <g filter="url(#phone-shadow)">
        <rect x="18" y="12" width="414" height="776" rx="58" fill="#1b1f3b" />
        <rect
          x="31"
          y="27"
          width="388"
          height="746"
          rx="46"
          fill="url(#app-bg)"
        />
        <rect x="169" y="42" width="112" height="23" rx="12" fill="#1b1f3b" />
        <circle cx="391" cy="88" r="20" fill="#5b4bff" />
        <path
          d="M383 88l6 6 11-13"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="60"
          y="112"
          fontFamily="sans-serif"
          fontSize="30"
          fontWeight="700"
          fill="#1b1f3b"
        >
          Minha mochila
        </text>
        <text
          x="60"
          y="139"
          fontFamily="sans-serif"
          fontSize="15"
          fill="#6b7280"
        >
          Terça-feira, tudo no lugar?
        </text>
        {["Notebook", "Carregador", "Marmita", "Garrafa"].map((x, i) => (
          <g key={x}>
            <rect
              x="55"
              y={164 + i * 82}
              width="340"
              height="64"
              rx="16"
              fill="#fff"
            />
            <rect
              x="69"
              y={176 + i * 82}
              width="40"
              height="40"
              rx="12"
              fill={i === 1 ? "#fff0eb" : "#e5f7f1"}
            />
            <circle
              cx="89"
              cy={196 + i * 82}
              r="9"
              fill={i === 1 ? "#ff6b4a" : "#22b07d"}
            />
            <text
              x="124"
              y={203 + i * 82}
              fontFamily="sans-serif"
              fontSize="21"
              fill="#1b1f3b"
            >
              {x}
            </text>
            <path
              d={`M356 ${190 + i * 82}l7 7 13-16`}
              fill="none"
              stroke={i === 1 ? "#ff6b4a" : "#22b07d"}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}
        <rect x="45" y="535" width="360" height="137" rx="24" fill="#ff6b4a" />
        <circle cx="82" cy="574" r="17" fill="#fff" opacity="0.25" />
        <path
          d="M82 563v13M82 585v1"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <text
          x="112"
          y="582"
          fontFamily="sans-serif"
          fontSize="25"
          fontWeight="700"
          fill="#fff"
        >
          Ping!
        </text>
        <text x="70" y="622" fontFamily="sans-serif" fontSize="18" fill="#fff">
          Você esqueceu o carregador
        </text>
        <text
          x="70"
          y="649"
          fontFamily="sans-serif"
          fontSize="14"
          fill="#fff"
          opacity="0.8"
        >
          Verifique antes de sair
        </text>
        <rect
          x="154"
          y="735"
          width="142"
          height="7"
          rx="4"
          fill="#1b1f3b"
          opacity="0.28"
        />
      </g>
    </svg>
  );
}
