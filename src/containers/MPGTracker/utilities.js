//used to add a little padding at the top of the y-axis
const domain_offset = 5;

export const formatData = (data, y_prop) => {
    return data.map((item, iter) => {
        return{
            x: item['created'],
            y: item[y_prop]
        };
    });
}

export const getAverage = (data) => {
    const sum = data.reduce((sum, next, iter) => {
        return sum += next.y;
    }, 0);
    return Math.round(sum / data.length);
}

export const getAverageData = (data, avg) => {
    return data.map(item => {
        return {x: item.x, y: avg}
    })
}

export const getMax = (data)=> data.map(item => item.y).reduce((max, curr) => Math.max(max, curr));
export const getMin = (data)=> data.map(item => item.y).reduce((min, curr) => Math.min(min, curr));

export const getDomain = (data, property, min = 0) => [min, getMax(data)+domain_offset];

export const getCalculations = (original_data, y_prop) => {
    if(original_data.length === 0 ){
        return {
            data: [],
            avg_value: 0,
            avg_data: [],
            y_domain: [0,1],
            max_value: 0,
            min_value: 0
        };
    }

    const data = formatData(original_data, y_prop);
    const avg_value = getAverage(data);
    return {
        data: formatData(original_data, y_prop),
        avg_value: getAverage(data),
        avg_data: getAverageData(data, avg_value),
        y_domain: getDomain(data),
        max_value: getMax(data),
        min_value: getMin(data)
    };
}
