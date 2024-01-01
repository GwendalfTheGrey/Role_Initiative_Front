// FETCH ALL LEVELS CALLED IN LevelsContext
// CONTEXT USED IN APP PASSED TO VARIOUS COMPONENTS
export const getLevels = async () => {
    const response = await fetch("https://role-initiative-server.vercel.app/api/levels/getLevels");
    return await response.json();
};