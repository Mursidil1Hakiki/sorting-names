import arrayToObj from './FsortingName';

test('ArrayToObbj ',()=>{
    const setObj = [
        {firstName:"mursidil ",lastName:"hakiki"},
        {firstName:"alo ",lastName:"ramli"},
        {firstName:"ali ",lastName:"ramli"},
        {firstName:"maulana ",lastName:"arman"}
        ];
    const  resultObj=[
        {firstName:"maulana ",lastName:"arman"},
        {firstName:"mursidil ",lastName:"hakiki"},
        {firstName:"ali ",lastName:"ramli"},
        {firstName:"alo ",lastName:"ramli"}
        ];
    const value=arrayToObj(setObj);
    expect(value).toEqual(resultObj);
});