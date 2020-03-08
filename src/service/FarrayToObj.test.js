import arrayToObj from './FarrayToObj';

test('ArrayToObbj ',()=>{
    const array = ["mursidil hakiki","ali ramli"];
    const obj =[
        {firstName:"mursidil ",lastName:"hakiki"},
        {firstName:"ali ",lastName:"ramli"}
        ];
    const value=arrayToObj(array);
    expect(value).toEqual(obj);
}) 