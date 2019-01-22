
export const upper  = (str: string): string => {
    if (!str) {
        throw (new Error("Null str"));
    }
    const upper = str.trim().toUpperCase();
    if (!upper) {
        throw (new Error("Blank str"));
    }

    return "!!!" + upper  + "!!!";
};

