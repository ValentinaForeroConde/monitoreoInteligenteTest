import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type PopupType = "A" | "B";

export type Popup = {
  id: string;
  title: string;
  content: string;
  defaultPosition: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  type: PopupType;
};
type Store = {
  popups: Popup[];
  addPopup: (newPopup: Popup) => void;
  closePopup: (popupId: string) => void;
  closeAll: () => void;
  updatePopupPosition: (
    popupId: string,
    newPosition: Partial<Popup["defaultPosition"]>
  ) => void;
};

export const usePopups = create<Store>()(
  persist(
    (set) => ({
      popups: [],
      addPopup: (newPopup: Popup) =>
        set((state) => ({ popups: [...state.popups, newPopup] })),
      closePopup: (popupId: string) =>
        set((state) => ({
          popups: state.popups.filter((p: Popup) => p.id !== popupId),
        })),
      closeAll: () => set(() => ({ popups: [] })),
      updatePopupPosition: (
        popupId: string,
        newPosition: Partial<Popup["defaultPosition"]>
      ) =>
        set((state) => ({
          popups: state.popups.map((popup) =>
            popup.id === popupId
              ? {
                  ...popup,
                  defaultPosition: { ...popup.defaultPosition, ...newPosition },
                }
              : popup
          ),
        })),
    }),
    {
      name: "monitoreo-inteligente-settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
