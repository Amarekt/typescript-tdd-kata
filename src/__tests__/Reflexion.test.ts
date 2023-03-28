import Reflexion from "../Reflexion";

describe("test pour la création de classe avec la reflexion", () => {
    it("créer classe", () => {
        expect(Reflexion()).toBeInstanceOf(Date);
    });
});