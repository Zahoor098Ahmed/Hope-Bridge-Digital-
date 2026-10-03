export function LogoMark({ className = "size-10 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="hb-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7a5af5" />
          <stop offset="0.55" stopColor="#4c5bd4" />
          <stop offset="1" stopColor="#18a57b" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#hb-g)" />
      <path d="M8 34 Q24 12 40 34" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M8 34 H40" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 34 V26.5 M24 34 V23 M32 34 V26.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
      <path d="M24 17.5c-1.4-2.2-5-1.6-5 1.2 0 2.4 3.2 4.3 5 5.6 1.8-1.3 5-3.2 5-5.6 0-2.8-3.6-3.4-5-1.2z" fill="#ffc75f" />
    </svg>
  );
}
