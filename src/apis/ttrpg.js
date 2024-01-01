// FETCH ALL TTRPG CALLED IN TTRPGContext
// CONTEXT USED IN APP PASSED TO VARIOUS COMPONENTS
export const getTTRPG = async () => {
    const response = await fetch("https://role-initiative-server.vercel.app/api/ttrpg/getTTRPG");
    return await response.json();
};