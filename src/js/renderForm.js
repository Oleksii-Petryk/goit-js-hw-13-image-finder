import { refs } from "./refs";

export function renderForm() {
    const form = searchFormTmpl();
    refs.container.insertAdjacentHTML('afterbegin', form);
};