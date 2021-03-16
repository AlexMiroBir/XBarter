import {createSlice} from "@reduxjs/toolkit";



const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
       theme:'light'

    },
    reducers: {
        setDarkTheme: {
            reducer: (state) => {
                state.theme = "dark";
            },

        },
        setLightTheme: {
            reducer: (state) => {
                state.theme = "light";
            },

        },

    },
    // extraReducers: {
    //     [asyncThunks.fetchNewContact.pending]: (state, action) => {
    //         state.loading = true
    //
    //     },
    //     [asyncThunks.fetchNewContact.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.error = ''
    //
    //     },
    //     [asyncThunks.fetchNewContact.rejected]: (state, action) => {
    //         state.loading = false
    //
    //         state.error = action.error.message
    //     },
    //     [asyncThunks.fetchAllContacts.pending]: (state, action) => {
    //         state.loading = true
    //
    //     },
    //     [asyncThunks.fetchAllContacts.fulfilled]: (state, {payload}) => {
    //         state.loading = false
    //         state.contacts = payload
    //
    //
    //     },
    //     [asyncThunks.fetchAllContacts.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    //     [asyncThunks.fetchExistContact.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [asyncThunks.fetchExistContact.fulfilled]: (state, action) => {
    //         state.error = ''
    //         state.loading = false
    //     },
    //     [asyncThunks.fetchExistContact.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    //     [asyncThunks.fetchDelContactById.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [asyncThunks.fetchDelContactById.fulfilled]: (state, action) => {
    //         state.error = ''
    //         state.loading = false
    //     },
    //     [asyncThunks.fetchDelContactById.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    //     [asyncThunks.fetchDelAllContacts.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [asyncThunks.fetchDelAllContacts.fulfilled]: (state, action) => {
    //         state.error = ''
    //         state.loading = false
    //     },
    //     [asyncThunks.fetchDelAllContacts.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    //     [asyncThunks.fetchRegister.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [asyncThunks.fetchRegister.fulfilled]: (state, action) => {
    //         state.error = ''
    //         state.loading = false
    //     },
    //     [asyncThunks.fetchRegister.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    //     [asyncThunks.fetchLogin.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [asyncThunks.fetchLogin.fulfilled]: (state, action) => {
    //         state.error = ''
    //         state.loading = false
    //         state.token = action.payload.token
    //         state.isLogin = true
    //     },
    //     [asyncThunks.fetchLogin.rejected]: (state, action) => {
    //         state.loading = false
    //         state.isLogin = false
    //         state.error = action.error.message
    //     },
    // }
})

export default mainSlice.reducer
export const {
    setDarkTheme,
    setLightTheme


} = mainSlice.actions

