import { useState } from "react";

export default function Syottokentta({
  toiminto,
  napinteksti = "Hae",
  paikanpitaja = "",
}) {
  const [hakuehto, setHakuehto] = useState("");

  return (
    <div>
      <input
        placeholder={paikanpitaja}
        onChange={(e) => setHakuehto(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setHakuehto(e.target.value);
            toiminto(hakuehto);
          }
        }}
      />
      <button onClick={() => toiminto(hakuehto)}>{napinteksti}</button>
    </div>
  );
}
