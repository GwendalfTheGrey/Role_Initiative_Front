export const getTTRPG = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/ttrpg/getTTRPG");
    return await response.json();
};