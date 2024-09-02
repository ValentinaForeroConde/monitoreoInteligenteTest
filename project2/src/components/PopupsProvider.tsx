import React, { useState, useEffect } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type PopUpsProviderProps = {
  children: React.ReactNode;
  id: string;
  initialPosition: { x: number; y: number };
  bringToFront: (id: string) => void;
  handleDrag: (id: string, position: { x: number; y: number }) => void;
  onStop: (id: string, position: { x: number; y: number }) => void;
};

export const PopupsProvider: React.FC<PopUpsProviderProps> = ({
  children,
  id,
  initialPosition,
  bringToFront,
  handleDrag,
  onStop,
}) => {
  const [position, setPosition] = useState(initialPosition);

  const handleDragInternal = (e: DraggableEvent, ui: DraggableData) => {
    const newPosition = { x: ui.x, y: ui.y };
    setPosition(newPosition);
    handleDrag(id, newPosition);
  };

  const handleStopInternal = (e: DraggableEvent, ui: DraggableData) => {
    const newPosition = { x: ui.x, y: ui.y };
    setPosition(newPosition);
    onStop(id, newPosition);
  };

  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  return (
    <Draggable
      position={position}
      onStart={() => bringToFront(id)}
      bounds=".popUpsContainer"
      handle=".handle"
      onDrag={handleDragInternal}
      onStop={handleStopInternal}
    >
      {children}
    </Draggable>
  );
};
