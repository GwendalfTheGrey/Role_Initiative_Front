const API_USERS = "http://127.0.0.1:8000/api/users";

export const createUser = async (newUser) => {
    const response = await fetch(`${API_USERS}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    });
    const backResponse = await response.json();
    if (response.ok) {
        return backResponse
    } else {
        if (backResponse) {
            throw backResponse;
        } else {
            throw new Error("API Create User Error");
        }
    }
};

export const signIn = async (values) => {
    const response = await fetch(`${API_USERS}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    const backResponse = await response.json();
    if (response.ok) {
        return backResponse;
    } else {
        if (backResponse) {
            throw backResponse;
        } else {
            throw new Error("API Login Error");
        }
    }
};

export const getConnectedUser = async () => {
    const response = await fetch(`${API_USERS}/connectedUser`, {
        credentials: "include",
    });
    return await response.json();
};

export const signOut = async () => {
    await fetch(`${API_USERS}/logout`, {
        method: "DELETE",
        credentials: "include",
    });
};

export const getUserJoinedRoom = async (idUser, idRoom) => {
    const response = await fetch(`${API_USERS}/getUserJoinedRoom/${idUser}/${idRoom}`);
    return await response.json();
};

export const userJoinsRoom = async (params) => {
    const response = await fetch(`${API_USERS}/userJoinsRoom`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        return await response.json();
    }
};

export const userLeavesRoom = async (params) => {
    await fetch(`${API_USERS}/userLeavesRoom`, {
        method: "DELETE",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        },
    });
};