import { Cerdo } from "./Cerdo"

describe ("Test Cerdo" , () => {

    const cerdo : Cerdo = new Cerdo(4);

    it("Numero de patas" , () => {
        expect(cerdo.getNumPatas()).toBe(4);
    })
})