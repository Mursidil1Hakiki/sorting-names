import arrayToObj from './FbackToArray';

test('ArrayToObbj ',()=>{
    const array = "mursidil hakiki\nali ramli\n";
    const obj =[
        {firstName:"mursidil ",lastName:"hakiki"},
        {firstName:"ali ",lastName:"ramli"}
        ];
    const value=arrayToObj(obj);
    expect(value).toEqual(array);
});