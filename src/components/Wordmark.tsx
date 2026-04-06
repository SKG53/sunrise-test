/**
 * SUNRISE Wordmark — Gradient on Cream
 * Based on wordmark.js spec. Verified scale range: 24px – 96px
 */
const Wordmark = ({ base = 48 }: { base?: number }) => {
  const tmSize = base * 0.375;
  const spacing = base * 0.125;
  const tmGap = base * -0.104;
  const tmShift = base * 0.095;

  return (
    <span style={{ display: "inline-block", verticalAlign: "top", lineHeight: 0 }}>
      <span
        style={{
          display: "inline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: `${base}px`,
          fontWeight: 500,
          letterSpacing: `${spacing}px`,
          textTransform: "uppercase",
          lineHeight: 1,
          background:
            "linear-gradient(90deg, #4F308D, #822665, #94264B, #BF252D, #CC382C, #DC531F, #E76B37)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        SUNRISE
      </span>
      <span
        style={{
          display: "inline-block",
          fontFamily: "Montserrat, sans-serif",
          fontSize: `${tmSize}px`,
          fontWeight: 700,
          color: "#E76B37",
          lineHeight: 1,
          verticalAlign: "top",
          marginLeft: `${tmGap}px`,
          marginTop: `${tmShift}px`,
        }}
      >
        ™
      </span>
    </span>
  );
};

export default Wordmark;
