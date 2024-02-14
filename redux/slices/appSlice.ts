import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { andromedaInit } from "@uiw/codemirror-theme-andromeda";
import { copilotInit } from "@uiw/codemirror-theme-copilot";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { nordInit } from "@uiw/codemirror-theme-nord";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";

export interface AppSliceStateType {
          theme: typeof tokyoNightInit | typeof andromedaInit | typeof copilotInit | typeof draculaInit | typeof nordInit;
}

const initialState: AppSliceStateType = {
          theme: tokyoNightInit as typeof tokyoNightInit | typeof andromedaInit | typeof copilotInit | typeof draculaInit | typeof nordInit,
};

const appSlice = createSlice({
          name: "appSlice",
          initialState,
          reducers: {
                    updateTheme: (
                              state,
                              action: PayloadAction<AppSliceStateType["theme"]>
                    ) => {
                              state.theme = action.payload;
                    },
          },
});

export default appSlice.reducer;
export const { updateTheme } = appSlice.actions;
