/**
 *  This function will extract "visual" data from a HTML form. The "visual" is 
 *  referencing the data that user could consider as current data. Meaning, 
 *  if inputs are disabled, the data is not inserted into the output. 
 */
export function extractFormData(form: HTMLFormElement) : object {

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // while disabled inputs aren't passed to data when parsing it via
    // FormData, the selects need a more specialized approach.
    const selects = form.querySelectorAll("select");

    for (let select of selects) {

        if (select.getAttribute('disabled')) continue;

        const name = String(select.getAttribute('name'));
        if (!name) continue;

        data[name] = select.value;
    }        

    return data;
};
