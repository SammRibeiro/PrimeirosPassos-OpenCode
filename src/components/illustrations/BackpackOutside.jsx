export default function BackpackOutside({ square = false }) {
  return (
    <svg
      viewBox={square ? "0 0 600 600" : "0 0 800 600"}
      role="img"
      aria-label="Ilustração da parte externa da mochila"
    >
      <rect width="100%" height="100%" rx="30" fill="#f1edff" />
      <path
        d="M270 145c10-75 250-75 260 0"
        fill="none"
        stroke="#1b1f3b"
        strokeWidth="22"
      />
      <rect x="210" y="120" width="380" height="390" rx="100" fill="#1b1f3b" />
      <rect x="255" y="275" width="290" height="190" rx="65" fill="#5b4bff" />
      <path
        d="M275 285h250"
        stroke="#ff6b4a"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="535" cy="290" r="16" fill="#ff6b4a" />
      <path
        d="M315 170h170"
        stroke="#5b4bff"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}
