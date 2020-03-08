import arrayData from './FarrayData';


test('arrayData', ()=>{
    const arr =["mursidil hakiki","Ali ramli"];
    const value = arrayData("mursidil hakiki\nAli ramli");
    expect(value).toEqual(arr);
})