const API_ROOMS = "http://127.0.0.1:8000/api/rooms";

// FETCHING ROOMS FOR THE HOMECONNECTED, FANTASY, SCIFI AND HORRORANDOTHER COMPONENTS
export const getRooms = async (idGenre) => {
    if (!idGenre) {
        const response = await fetch(`${API_ROOMS}/getHomeRooms`);
        return await response.json();
    } else if (idGenre === 1) {
        const response = await fetch(`${API_ROOMS}/getFantasyRooms`);
        return await response.json();
    } else if (idGenre === 2) {
        const response = await fetch(`${API_ROOMS}/getSciFiRooms`);
        return await response.json();
    } else {
        const response = await fetch(`${API_ROOMS}/getHorrorAndOtherRooms`);
        return await response.json();
    }
};

// FETCHING DATA FOR DETAILS COMPONENTS
export const getRoomDetails = async (idRoom) => {
    const response = await fetch(`${API_ROOMS}/getRoomDetails/${idRoom}`);
    return await response.json();
};

// FETCHING ALL ROOMS FOR ADMIN IN PROFILE
export const getAllRoomsProfile = async () => {
    const response = await fetch(`${API_ROOMS}/getAllRoomsProfile`);
    return await response.json();
};

// FETCHING ALL ROOMS CREATED BY USER IF GAMEMASTER IN PROFILE
export const getGMRoomsProfile = async (idUser) => {
    const response = await fetch(`${API_ROOMS}/getGMRoomsProfile/${idUser}`);
    return await response.json();
};

// FETCHING ALL ROOMS JOINED BY USER IN PROFILE
export const getPlayerRoomsProfile = async (idUser) => {
    const response = await fetch(`${API_ROOMS}/getPlayerRoomsProfile/${idUser}`);
    return await response.json();
};

// UPDATING ONGOING VALUE IN DATABASE OF ROOM CREATED BY USER
export const changeOngoing = async (params) => {
    const response = await fetch(`${API_ROOMS}/roomDetails/changeOngoing`, {
        method: "PATCH",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        return await response.json();
    }
};

// ROOM CREATION
export const createRoom = async (values) => {
    const response = await fetch(`${API_ROOMS}/createRoom`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        }
    })
    const backResponse = await response.json()
    if (response.ok) {
        return backResponse
    } else {
        if (backResponse) {
            throw backResponse
        } else {
            throw new Error("API Create Room Error")
        }
    }
}

// ROOM DELETION
export const deleteRoom = async (idRoom) => {
    await fetch(`${API_ROOMS}/deleteRoom/${idRoom}`, {
        method: "DELETE",
    });
}