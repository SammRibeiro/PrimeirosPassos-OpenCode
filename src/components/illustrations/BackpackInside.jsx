export default function BackpackInside() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Ilustração detalhada dos compartimentos internos da mochila PingPack"
    >
      <defs>
        <filter id="inside-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow
            dx="0"
            dy="16"
            stdDeviation="16"
            floodColor="#1b1f3b"
            floodOpacity="0.17"
          />
        </filter>
        <linearGradient id="inside-bg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff9f0" />
          <stop offset="1" stopColor="#e8e3ff" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="30" fill="url(#inside-bg)" />
      <ellipse
        cx="400"
        cy="530"
        rx="285"
        ry="30"
        fill="#1b1f3b"
        opacity="0.11"
      />
      <g filter="url(#inside-shadow)">
        <rect x="105" y="75" width="590" height="440" rx="85" fill="#1b1f3b" />
        <rect x="132" y="102" width="536" height="386" rx="62" fill="#343a62" />
        <path
          d="M400 105v380"
          stroke="#5b4bff"
          strokeWidth="10"
          strokeDasharray="14 10"
        />
        <rect x="164" y="130" width="205" height="310" rx="24" fill="#5b4bff" />
        <rect x="184" y="151" width="165" height="242" rx="14" fill="#fff9f0" />
        <rect x="202" y="171" width="129" height="190" rx="8" fill="#d9d4ff" />
        <circle cx="266" cy="377" r="7" fill="#1b1f3b" />
        <rect x="430" y="130" width="205" height="118" rx="22" fill="#ff6b4a" />
        <path
          d="M449 177h167"
          stroke="#fff9f0"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.8"
        />
        <rect x="439" y="278" width="84" height="164" rx="24" fill="#22b07d" />
        <path
          d="M461 278v-28h40v28"
          fill="none"
          stroke="#fff9f0"
          strokeWidth="10"
        />
        <rect x="547" y="278" width="79" height="164" rx="20" fill="#fff9f0" />
        <path
          d="M562 324h49M562 348h36"
          stroke="#5b4bff"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="348" cy="173" r="12" fill="#22b07d" />
        <circle cx="614" cy="153" r="12" fill="#22b07d" />
        <circle cx="510" cy="299" r="12" fill="#22b07d" />
        <circle cx="612" cy="300" r="12" fill="#ff6b4a" />
      </g>
      <g fill="none" stroke="#ff6b4a" strokeWidth="6">
        <circle cx="680" cy="110" r="18" />
        <circle cx="680" cy="110" r="34" opacity="0.4" />
      </g>
    </svg>
  );
}
