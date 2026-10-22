export default function BackpackOutside() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Ilustração detalhada da parte externa da mochila PingPack"
    >
      <defs>
        <filter
          id="outside-shadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="180%"
        >
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="18"
            floodColor="#1b1f3b"
            floodOpacity="0.18"
          />
        </filter>
        <linearGradient id="outside-bg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff9f0" />
          <stop offset="1" stopColor="#e8e3ff" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" rx="30" fill="url(#outside-bg)" />
      <circle cx="170" cy="110" r="58" fill="#ff6b4a" opacity="0.12" />
      <circle cx="690" cy="470" r="78" fill="#5b4bff" opacity="0.1" />
      <ellipse
        cx="400"
        cy="526"
        rx="210"
        ry="30"
        fill="#1b1f3b"
        opacity="0.12"
      />
      <g filter="url(#outside-shadow)">
        <path
          d="M302 151c8-74 188-74 196 0"
          fill="none"
          stroke="#1b1f3b"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path
          d="M265 151c-56 30-86 96-86 176v131"
          fill="none"
          stroke="#4032df"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M535 151c56 30 86 96 86 176v131"
          fill="none"
          stroke="#4032df"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <rect
          x="210"
          y="120"
          width="380"
          height="390"
          rx="100"
          fill="#1b1f3b"
        />
        <path d="M233 243c14-79 66-108 167-108s153 29 167 108" fill="#252b50" />
        <rect x="255" y="273" width="290" height="190" rx="65" fill="#5b4bff" />
        <path
          d="M278 360c65 35 179 35 244 0v44c-65 34-179 34-244 0z"
          fill="#493bdc"
        />
        <path
          d="M278 292h244"
          stroke="#ff6b4a"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <circle cx="526" cy="292" r="17" fill="#ff6b4a" />
        <path
          d="M526 309v29"
          stroke="#ff6b4a"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M315 170h170"
          stroke="#5b4bff"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <rect x="361" y="424" width="78" height="34" rx="17" fill="#fff9f0" />
        <circle cx="385" cy="441" r="8" fill="#22b07d" />
        <path
          d="M402 441h20"
          stroke="#1b1f3b"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M228 259v132M572 259v132"
          stroke="#343a62"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
      <g fill="none" stroke="#ff6b4a" strokeWidth="7" opacity="0.85">
        <circle cx="574" cy="188" r="20" />
        <circle cx="574" cy="188" r="38" opacity="0.45" />
      </g>
    </svg>
  );
}
