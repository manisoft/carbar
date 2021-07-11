export const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const generateColors = (carArr) => {
    let colors = [];
    for (let i = 0; i < carArr.length; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}