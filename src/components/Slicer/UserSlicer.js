import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the user slice
const initialState = {
    Username: 'user111',
    Email: null,
    UserType: null,
    PlaylistList: [123456, 890123, 567890, 345678],
    HistoryList: [9822579481960, 363418137682, 5669251427026, 17189095737264],

    CurrentSong: 9822579481960, 
    CurrentPlaylist: null,
    ToBeAdded: null,

    FileUploadList: null
};

// Create a user slice with reducer functions
const UserSlicer = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.Username = action.payload.Username;
        state.Email = action.payload.Email;
        state.UserType = action.payload.UserType;
        state.PlaylistList = action.payload.PlaylistList;
        state.HistoryList = action.payload.HistoryList;
    },
    AddaPlaylist: (state, action) => {
        state.PlaylistList.push(action.payload);
        console.log(state.PlaylistList);
    },
    DeleteaPlaylist: (state, action) => {
        const Index = state.PlaylistList.findIndex((element) => element === action.payload);
        if (Index !== -1) state.PlaylistList.splice(Index, 1);
    
    },
    AddaHistory: (state, action) => {
        state.HistoryList = state.HistoryList.push(action.payload);
    },
    UpdateDatabase: (state, action) => {}
    ,
    UpdateCurrentSongState: (state, action) => {
        state.CurrentSong = action.payload;
        state.HistoryList.push(action.payload);
    },
    UpdateCurrentPlaylist: (state, action) => {
        state.CurrentPlaylist = action.payload;
    },
    UpdateSelectedSongID: (state, action) => {
        state.ToBeAdded = action.payload;
    },
    RemoveSelectedSongID: (state, action) => {
        state.ToBeAdded = null;
    },
    UpdateFileUploadList: (state, action) => {
        state.FileUploadList = action.FileUploadList;
    },
    FilterOutIDUploadList: (state, action) => {
        state.FileUploadList =  state.FileUploadList.filter(item => item !== action.payload);
    }
    }
});

// Export actions
export const { setUser, AddaPlaylist, DeleteaPlaylist, AddaHistory, UpdateDatabase, UpdateCurrentSongState, UpdateCurrentPlaylist, UpdateSelectedSongID, RemoveSelectedSongID, UpdateFileUploadList, FilterOutIDUploadList} = UserSlicer.actions;

// Export the reducer
export default UserSlicer.reducer;
