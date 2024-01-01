// FETCH ALL LEVELS CALLED IN LevelsContext
// CONTEXT USED IN APP PASSED TO VARIOUS COMPONENTS
export const getLevels = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/levels/getLevels");
    return await response.json();
};