export default {
    namespace:'profile',
    state:{
        profile:[]
    },
    effects:{
        *getProfile({ payload }, { call, put }) {
            const data = yield call(profile, payload);
            yield put({ 
                type: "profileReducer", 
                payload: data
            });
        }
    },
    reducers:{
        profileReducer(state, { payload }){
            return {
                ...state,
                profile: payload,
            };
        }
    }
}