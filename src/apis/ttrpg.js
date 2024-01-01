// FETCH ALL TTRPG CALLED IN TTRPGContext
// CONTEXT USED IN APP PASSED TO VARIOUS COMPONENTS
export const getTTRPG = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/ttrpg/getTTRPG");
    return await response.json();
};