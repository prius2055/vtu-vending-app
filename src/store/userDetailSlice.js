import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserDetail = createAsyncThunk(
  'fetch/userDetails',
  async () => {
    // const authToken = '3511591c93907798464ca20ba3bff2b8f0d9a9b1';
    const response = await axios.get('https://geodnatechsub.com/api/user/', {
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Token 3511591c93907798464ca20ba3bff2b8f0d9a9b1',
      },
    });

    console.log(response);
    // const allUsers = await response.data;
    // return allUsers;
    // console.log(allUsers);
  }
);

const initialState = {
  usersDetailArray: [],
  isLoading: true,
  loadingError: undefined,
};

const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // .addCase(fetchUserDetail.pending, (state, { payload }) => {
      //   console.log(payload);
      // })
      .addCase(fetchUserDetail.fulfilled, (state, { payload }) => {
        // console.log(payload);
      });
    // .addCase(fetchUserDetail.rejected, (state, { payload }) => {
    //   console.log(payload);
    // });
  },
});

export default userDetailSlice.reducer;
