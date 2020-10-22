export const waitUntilBeVisible = (el, timeout, text) => {
    el.waitUntil(
        function () {
            return this.isDisplayedInViewport();
        }, {
        timeout, text
    });
};

export const confirmPromptAndTypeValue = (el1, prompt,el2, val) => {
    expect(el1).toHaveText(prompt);
    el2.addValue(val);
};