export const testCode = (code) => {
    const t0 = performance.now();
    eval(code);
    const t1 = performance.now();
    return t1 - t0;
};
