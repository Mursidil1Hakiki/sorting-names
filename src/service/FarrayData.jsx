
export default function arryData(stringData) {
    console.warn(stringData);
    return stringData.split('\n').filter(word => word.length > 0);
};

