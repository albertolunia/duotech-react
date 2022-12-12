import React from "react";
import { VerMais } from "./styles";

export default function LinkVer() {
  const [toogle, setToogle] = React.useState(true);
  const [cor, setCor] = React.useState("#1A81E0");
  React.useEffect(() => {
    setCor((state) => (toogle ? "#1A81E0" : "#0B6CC5"));
  }, [toogle]);
  return (
    <div>
      <VerMais
        href="#"
        style={{ color: cor }}
        onClick={(e) => setToogle((state) => !state)}
      >
        Ver Mais
      </VerMais>
    </div>
  );
}
