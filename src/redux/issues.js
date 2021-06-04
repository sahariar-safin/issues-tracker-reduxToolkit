import { createSlice } from '@reduxjs/toolkit'

export const issuesSlice = createSlice({
    name: 'issues',
    initialState: [

    ],
    reducers: {
        addIssue: (state, action) => {
            const newState = {
                ...action.payload,
                issueClosed: false,
                issueID: (Math.random() * 1000000).toFixed(0) * 1
            };
            state.unshift(newState);
        },
        deleteIssue: (state, action) => {
            const id = action.payload;
            return state.filter((issue) => issue.issueID !== id);
        },
        closeIssue: (state, action) => {
            const index = state.findIndex((issue) => issue.issueID === action.payload);
            state[index].issueClosed = true;
        }
    }
})

export const { addIssue, deleteIssue, closeIssue } = issuesSlice.actions;

export default issuesSlice.reducer;