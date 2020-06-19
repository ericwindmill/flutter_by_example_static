
const _unit = 10;
export const spacing = {
    unit: 10,
    grid: {
        1: _unit,
        1.5: _unit * 1.5,
        2: _unit * 2,
        2.5 : _unit * 2.5,
        3: _unit * 3,
    },
    scale: (scale) => {
        if (scale % .5 !== 0) {
            console.log('invalid scale number')
        }
        return `${10 * scale}px`
    },
};