export default function BackToArray(arrayObj) {
    let sortedNameArray = [];
    let fullName;
    let stringSortedNames = "";
    arrayObj.forEach(element => {
        fullName = element.firstName + element.lastName;
        sortedNameArray.push(fullName);
    });
    // console.warn(sortedNameArray);
    sortedNameArray.forEach(element => {
        stringSortedNames += element + "\n";
    });
    return stringSortedNames;
}