export const extrait = (value, length = 40) => {
    if(value.length <= 10)
        return value;
    return value.substr(0, length) + "...";
};