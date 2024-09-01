import React, { useState } from "react";
import { PopupType, usePopups } from "../src/hooks/usePopups";
import { CloseIcon } from "../src/utils/CloseIcon";
import { PopupsProvider } from "project2/lib/esm";

function App() {
  const { popups, addPopup, closePopup, closeAll, updatePopupPosition } =
    usePopups();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const onClickAddPopup = (
    type: PopupType,
    top: number,
    left: number,
    width: number,
    height: number
  ) => {
    const number = `${popups?.length + 1}`;
    addPopup({
      id: number,
      title: `Popup: ${number} - Tipo: ${type}`,
      content: `Este es el contenido del Popup # ${number}, 
        tiene un tamaño de "${width}px" X "${height}px" y tiene una
        posición inicial de Top: ${top} y Left: ${left}, sin embargo 
        puede arrastrarse por toda la pantalla, y conservará la posición
        en la que se deje incluso si la ventana se recarga. Pruébalo!`,
      defaultPosition: {
        left,
        top,
        width,
        height,
      },
      type,
    });
  };

  const onClickClosePopup = (id: string) => {
    closePopup(id);
  };

  const onCloseAll = () => {
    closeAll();
  };

  const bringToFront = (id: string) => {
    setActivePopup(id);
  };

  const handleDrag = (id: string, position: { x: number; y: number }) => {
    updatePopupPosition(id, {
      left: position.x,
      top: position.y,
    });
  };

  const handleStop = (id: string, position: { x: number; y: number }) => {
    updatePopupPosition(id, {
      left: position.x,
      top: position.y,
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="flex justify-between p-4 items-center bg-white shadow">
        <h1 className="text-l font-semibold">PRUEBA TÉCNICA 2024 - REACT</h1>
        <button type="button" className="btn-primary" onClick={onCloseAll}>
          Cerrar todos
        </button>
      </header>

      <div className="flex-1 flex justify-center items-center bg-lightBlue p-4 popUpsContainer">
        <div className="w-full h-full relative">
          <div className="flex gap-2 mb-4">
            <button
              className="btn-primary"
              onClick={() => onClickAddPopup("A", 30, 20, 200, 350)}
            >
              Agregar Popup Tipo A
            </button>
            <button
              className="btn-primary"
              onClick={() => onClickAddPopup("B", 30, 250, 300, 300)}
            >
              Agregar Popup Tipo B
            </button>
          </div>

          <div>
            {popups?.length > 0 &&
              popups.map((popup) => (
                <PopupsProvider
                  key={popup.id}
                  id={popup.id}
                  initialPosition={{
                    x: popup.defaultPosition.left,
                    y: popup.defaultPosition.top,
                  }}
                  bringToFront={bringToFront}
                  handleDrag={handleDrag}
                  onStop={handleStop}
                >
                  <div
                    id={popup.id}
                    className={`absolute box border rounded-md ${
                      popup.type === "A" ? "bg-white" : "bg-blue-700 text-white"
                    } shadow-lg shadow-blue-500/40 p-0`}
                    style={{
                      zIndex: activePopup === popup.id ? 10 : 0,
                      width: `${popup.defaultPosition.width}px`,
                      height: `${popup.defaultPosition.height}px`,
                    }}
                  >
                    <div
                      className={`handle flex ${
                        popup.type === "A"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-600"
                      } rounded-t-md p-2 cursor-move items-center justify-between`}
                    >
                      <span>{popup.title}</span>
                      <button
                        type="button"
                        onClick={() => onClickClosePopup(popup.id)}
                        data-testid="close"
                      >
                        <CloseIcon />
                      </button>
                    </div>
                    <div className="p-2">
                      <p>{popup.content}</p>
                    </div>
                  </div>
                </PopupsProvider>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
