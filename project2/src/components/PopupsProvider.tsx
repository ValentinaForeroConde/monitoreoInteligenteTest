import React, { ReactNode, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type PopUpsProviderProps = {
  children: ReactNode;
  id: string;
  defaultPosition: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  bringToFront: (id: string) => void;
  updatePopupPosition: (id: string, position: { x: number; y: number }) => void;
};

export const PopupsProvider: React.FC<PopUpsProviderProps> = ({
  children,
  id,
  defaultPosition,
  bringToFront,
  updatePopupPosition,
}) => {
  const [position, setPosition] = useState({
    x: defaultPosition.left,
    y: defaultPosition.top,
  });

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  const onStop = (e: DraggableEvent, ui: DraggableData) => {
    setPosition({ x: ui.x, y: ui.y });
    updatePopupPosition(id, { x: ui.x, y: ui.y });
  };

  return (
    <Draggable
      position={position}
      onStart={() => bringToFront(id)}
      bounds=".popUpsContainer"
      handle=".handle"
      onDrag={handleDrag}
      onStop={onStop}
    >
      {children}
    </Draggable>
  );
};
