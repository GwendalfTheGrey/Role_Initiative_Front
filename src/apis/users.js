const API_USERS = "https://role-initiative-server.vercel.app/api/users";

// USER REGISTRATION CALLED IN REGISTER FORM
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

// USER LOGIN CALLED IN AUTHCONTEXT THROUGH LOGIN FUNCTION
// LOGIN FUNCTION USED IN LOGIN FORM
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

// USER CONNECTED CHECK THROUGH COOKIE CALLED IN USERLOADER
// USERLOADER USED AS LOADER IN ROUTER
export const getConnectedUser = async () => {
    const response = await fetch(`${API_USERS}/connectedUser`, {
        credentials: "include",
    });
    return await response.json();
};

// USER LOGOUT CALLED IN AUTHCONTEXT THROUGH LOGOUT FUNCTION
// LOGOUT FUNCTION USED IN HEADER
export const signOut = async () => {
    await fetch(`${API_USERS}/logout`, {
        method: "DELETE",
        credentials: "include",
    });
};

// CHECK TO SEE IF USER AS JOINED SPECIFIC ROOM CALLED IN useFetchUserJoinedRoom HOOK
// HOOK USED IN DETAILS COMPONENT
export const getUserJoinedRoom = async (idUser, idRoom) => {
    const response = await fetch(`${API_USERS}/getUserJoinedRoom/${idUser}/${idRoom}`);
    return await response.json();
};

// USER JOINS ROOM AS PLAYER CALLED IN DETAILS COMPONENT
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

// USER LEAVES A JOINED ROOM AS PLAYER CALLED IN DETAILS COMPONENT
export const userLeavesRoom = async (params) => {
    await fetch(`${API_USERS}/userLeavesRoom`, {
        method: "DELETE",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// MODIFY USER
export const modifyUser = async (values) => {
    const response = await fetch(`${API_USERS}/modifyUser`, {
        method: "PATCH",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const backResponse = await response.json()
    if (response.ok) {
        return backResponse
    } else {
        if(backResponse) {
            return backResponse
        } else {
            throw new Error("API Modify User Error")
        }
    }
}

// DELETE USER
export const deleteUser = async (idUser) => {
    const response = await fetch(`${API_USERS}/deleteUser/${idUser}`, {
        method: "DELETE",
        credentials: "include",
    })
    const backResponse = await response.json();
    if (response.ok) {
        return backResponse
    } else {
        if(backResponse) {
            return backResponse
        } else {
            throw new Error("API Delete User Error")
        }
    }
}