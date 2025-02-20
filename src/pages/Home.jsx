import { NavLink, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  function handleNavigate(ruta) {
    navigate(ruta);
  }

  return (
    <>
      <div className="relative h-[90vh] bg-amber-900 text-amber-100 flex justify-center items-center">
        Este es el Home
        <Button
          ruta="/agents"
          handleNavigate={handleNavigate}
          text="Ir a Agents"
        ></Button>
        <Button
          ruta="/details"
          handleNavigate={handleNavigate}
          text="Ir a Details"
        >
          Ir a Details
        </Button>
      </div>
    </>
  );
}

function Button({ ruta, handleNavigate, text }) {
  return (
    <button
      className=" px-3 py-2 bg-amber-300 hover:bg-amber-500 text-amber-950"
      onClick={() => handleNavigate(ruta)}
    >
      {text}
    </button>
  );
}
