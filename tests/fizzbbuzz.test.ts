import { FizzBuzz } from "../fizzbuzz/fizzbuzz";

test("input 1 expect display 1", () => {
    const result = FizzBuzz(1);
    expect(result).toBe("1");
});

test("input 2 expect display 2", () =>{
    const result = FizzBuzz(2);
    expect(result).toBe("2");
})

test("input 3 expect display fizz", () =>{
     const result = FizzBuzz(3);
     expect(result).toBe("Fizz");
})

test("input 5 expect display buzz", () => {
    const result = FizzBuzz(5);
    expect(result).toBe("Buzz");
})

test("input 6 expect display fizz", () => {
    const result = FizzBuzz(6);
    expect(result).toBe("Fizz");
})
test("input 7 expect display 7", () => {
    const result = FizzBuzz(7);
    expect(result).toBe("7")
})

test("input 30 expect display FizzBuzz", ()=>{
    const result = FizzBuzz(30);
    expect(result).toBe("FizzBuzz");
})

test("input 15 expect display FizzBuzz", () => {
    const result = FizzBuzz(15);
    expect(result).toBe("FizzBuzz");
})
test("input 300 expect display FizzBuzz", () =>{
    const result = FizzBuzz(300);
    expect(result).toBe("FizzBuzz");
})