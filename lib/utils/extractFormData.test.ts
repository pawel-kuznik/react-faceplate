import { extractFormData } from "./extractFormData";

describe("extractFormData", () => {
    it('should extract data from text based inputs', () => {

        const form = document.createElement("form");

        const input = document.createElement("input");
        input.setAttribute("name", "test");
        input.value = "foo";

        form.append(input);

        const data = extractFormData(form);

        expect(data).toHaveProperty("test", "foo");
    });
    it('should not extract data from disabled text based inputs', () => {

        const form = document.createElement("form");

        const input = document.createElement("input");
        input.setAttribute("name", "test");
        input.setAttribute("disabled", "disabled");
        input.value = "foo";

        form.append(input);

        const data = extractFormData(form);

        expect(data).not.toHaveProperty("test", "foo");
    });
    it('should extract data from select based inputs', () => {

        const form = document.createElement("form");

        const select = document.createElement("select");
        select.setAttribute("name", "test");
        
        const option = document.createElement("option");
        option.setAttribute("selected", "selected");
        option.value = "foo";

        select.append(option);

        form.append(select);

        const data = extractFormData(form);

        expect(data).toHaveProperty("test", "foo");
    });
    it('should extract data from select based inputs', () => {

        const form = document.createElement("form");

        const select = document.createElement("select");
        select.setAttribute("disabled", "disabled");
        select.setAttribute("name", "test");
        
        const option = document.createElement("option");
        option.setAttribute("selected", "selected");
        option.value = "foo";

        select.append(option);

        form.append(select);

        const data = extractFormData(form);

        expect(data).not.toHaveProperty("test", "foo");
    });
});