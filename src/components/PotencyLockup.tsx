/**
 * Potency Lockup — React version of the render*mgLockup JS specs.
 * Requires Montserrat wght 800+900.
 */

const TIER_DEFAULTS: Record<number, string> = {
  5: "#C4922A",
  10: "#CC1F39",
  30: "#0B6134",
  60: "#61213A",
};

interface PotencyLockupProps {
  dose: number;
  base?: number;
  color?: string;
}

const PotencyLockup = ({ dose, base = 64, color }: PotencyLockupProps) => {
  const c = color || TIER_DEFAULTS[dose] || "#1A1A1A";
  const mg = base * 0.27;
  const thc = base * 0.66;

  return (
    <span style={{ display: "inline-block", verticalAlign: "top", lineHeight: 0, textAlign: "left" }}>
      {/* Dose number */}
      <span
        style={{
          display: "inline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: `${base}px`,
          fontWeight: 900,
          letterSpacing: `${base * -0.105}px`,
          color: c,
          lineHeight: 1,
        }}
      >
        {dose}
      </span>

      {/* MG / THC stack */}
      <span
        style={{
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: `${base * 0.15}px`,
          marginTop: `${base * 0.11}px`,
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "Montserrat, sans-serif",
            fontSize: `${mg}px`,
            fontWeight: 900,
            letterSpacing: `${mg * -0.15}px`,
            color: c,
            lineHeight: 1,
            marginLeft: `${base * -0.013}px`,
            marginBottom: `${base * -0.075}px`,
          }}
        >
          MG
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "Montserrat, sans-serif",
            fontSize: `${thc}px`,
            fontWeight: 800,
            letterSpacing: `${thc * -0.13}px`,
            color: c,
            lineHeight: 1,
          }}
        >
          THC
        </span>
      </span>
    </span>
  );
};

export default PotencyLockup;
