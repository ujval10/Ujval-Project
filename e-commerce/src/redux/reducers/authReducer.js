const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        case "LOGOUT_USER":
            localStorage.removeItem("user");
            return { ...state, user: null };
        default:
            return state;
    }
};