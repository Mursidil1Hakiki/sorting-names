export default function arrayToObj(arrayData) {
    let arrObj = [];
    arrayData.forEach(element => {
        let arrayname = element.split(/\W+/);
        let firstName = "";
        let lastName = "";
        for (let i = 0; i < arrayname.length; i++) {
            if (i < arrayname.length - 1) {
                firstName += arrayname[i] + " ";
            } else {
                lastName = arrayname[i];
            }
        }
        arrObj.push({
            firstName: firstName,
            lastName: lastName
        });
    });
    return arrObj;
}