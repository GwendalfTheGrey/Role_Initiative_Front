export const getLevels = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/levels/getLevels");
    return await response.json();
};