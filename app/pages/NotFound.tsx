

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-40">
      {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">404 Not Found</h1>
      <p className="text-gray-500 text-lg">
        The page you are looking for does not exist.
      </p> */}

      <div className="w-[600px] h-[300px] notFound">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#2c4569" />
              <stop offset="100%" stop-color="#0ea5e9" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g stroke="#e5f0ff" stroke-width="1">
            <line x1="0" y1="50" x2="600" y2="50" />
            <line x1="0" y1="100" x2="600" y2="100" />
            <line x1="0" y1="150" x2="600" y2="150" />
            <line x1="0" y1="200" x2="600" y2="200" />
            <line x1="0" y1="250" x2="600" y2="250" />
          </g>

          <rect
            class="scan-line"
            x="0"
            y="0"
            width="600"
            height="10"
            fill="url(#blueGlow)"
            opacity="0.12"
          />

          <text
            x="300"
            y="150"
            text-anchor="middle"
            font-size="120"
            font-weight="700"
            fill="url(#blueGlow)"
            filter="url(#glow)"
            class="pulse"
          >
            404
          </text>

          <g stroke="#2c4569" stroke-width="2" fill="none">
            <path d="M80 160 H140 V120 H200" />
            <path d="M520 140 H460 V180 H400" />
            <circle cx="200" cy="120" r="4" fill="#2c4569" />
            <circle cx="400" cy="180" r="4" fill="#2c4569" />
          </g>

          <text
            x="300"
            y="210"
            text-anchor="middle"
            font-size="16"
            fill="#64748b"
            letter-spacing="2"
          >
            PAGE NOT FOUND
          </text>
        </svg>
      </div>

      <a href="/" className="mt-8 pb-20 text-blue-500 hover:underline">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
