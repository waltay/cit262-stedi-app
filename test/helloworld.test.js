import userName from "../utils/helloworld.mjs";
import assert from "assert";

it("Tests Hello World", ()=>{

    const name = userName();

    assert.equal(name,"Walter");

    console.log(`Hello ${name}`);

});
