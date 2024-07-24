
describe("Number operations", () =>{

    it("1 plus 1should be equal to 2", () => {
        let a = 1;
        let b = 1;
        expect(a + b).toBe(2)
    })

    it("5 plus 6 not equal to 10", ()=>{
        let a = 5;
        let b = 6;
        expect(a + b).not.toBe(12)
    })
})

describe("Testing other matcher methodes", () =>{
    it("Testing that a variable is undefined", ()=>{
        let number = 1;

        expect(number).toBeDefined(); // Correct assertion for defined
        expect(number).not.toBeNull(); // Correct assertion for not null
        expect(number).not.toBeFalsy(); // Correct assertion for not falsy
    })
    it("Number comparison", ()=>{
        const a = 1;
        const b = 2;

        expect(a+b).toBeGreaterThan(2); // Correct assertion for defined
        expect(a+b).toBeGreaterThanOrEqual(3);
        expect(a+b).toBeLessThanOrEqual(5);
        expect(a+b).toBeLessThan(10);
    })
    it("there should be no I in team", ()=>{
        let string = 'team';
        expect(string).not.toMatch(/I/i);
    })

    
    it("shouldn't have PS4", ()=> {
        const shoppinlist = ["Milk","Trash bags","Paper  towels","Iphones"];
        // expect(shoppinlist.not.toContain('PS4'));
        expect(shoppinlist).not.toContain('PS4');
    })
})

// testing primitive and reference type equality
describe("Testing Reference equality",() =>{
    const user = {
        name:"Clement"
    }
    user['age'] = 45;

    test ("Should return user objet with age as 45", () => {
        expect(user).toEqual({
            name:"Clement",
            age: 45
        })

    })

    test ("Should return user objet with name and age", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
        }))
    })

    test ("Array equality", () => {
        const users =[
            "Clement",
            "Sarah",
            "july"
        ]

        users.push("Jacob");

        expect(users).toEqual(["Clement","Sarah","july","Jacob"])
        expect(users).toEqual(expect.arrayContainning(["Jacob"]))
        expect(users).toEqual(expect.objectContaining([expect.any(String)]))
    })

})

