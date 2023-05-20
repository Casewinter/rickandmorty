const BotaoPaginas = ({
  paginaPrev,
  avancar,
  paginaTotal,
  voltar,
}: {
  paginaPrev: number;
  paginaTotal: number;
  avancar: () => void;
  voltar: () => void;
}) => {
  return (
    <div className="text-white w-[80%] m-auto flex justify-between  items-center p-2 h-10">
      <button onClick={voltar} className="text-3xl">
        {" "}
        &laquo;
      </button>
      <div>
        <span>{paginaPrev}</span>
        <span className="p-2">/</span>
        <span>{paginaTotal}</span>
      </div>
      <button onClick={avancar} className="text-3xl">
        {" "}
        &raquo;{" "}
      </button>
    </div>
  );
};

export default BotaoPaginas;
