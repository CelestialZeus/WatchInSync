import { createSlice } from '@reduxjs/toolkit';


export const popUpSlice = createSlice({
    name: 'popup',
    initialState: {
        popupval: false,
    },
    reducers: {
        confpopon: (state, action) => {
            state.popupval = action.payload;
            console.log('succesdcccs');

            console.log(state.popupval);

        },
        confpopoff: (state, action) => {
            state.popupval = action.payload;
            console.log('logsssout success');
        },
    },
});

export const { confpopon, confpopoff } = popUpSlice.actions;
export const selectPop = (state) => state.popupval;
export default popUpSlice.reducer;
