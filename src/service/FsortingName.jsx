export default function SortingName(arryObj){
    let sortedNames = arryObj.sort((a, b) => {
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
            return 1;
        } else if (b.lastName.toLowerCase() > a.lastName.toLowerCase()) {
            return -1;
        } else {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                return 1;
            } else if (b.firstName.toLowerCase() > a.firstName.toLowerCase()) {
                return -1;
            } else {
                return 0;
            };
        };
    });
    return sortedNames
}