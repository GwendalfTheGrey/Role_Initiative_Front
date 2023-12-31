import { useEffect, useState } from "react";
import { getRoomDetails } from "../apis/rooms";

// CUSTOM HOOK TO FETCH DETAILS OF SPECIFIC ROOM
export const useFetchOneRoom = (idRoom) => {
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const backData = await getRoomDetails(idRoom);
            const booleanBackData = {
                ...backData,
                icon: !backData.icon ? null : backData.icon,
                description: backData.description.replace(/\r\n/g, '\n'),
                onGoing: backData.onGoing === 1,
            };
            setData(booleanBackData);
            setIsLoading(false);
        };
        fetchData();
    }, [idRoom]);

    return [[data, setData], isLoading];
};