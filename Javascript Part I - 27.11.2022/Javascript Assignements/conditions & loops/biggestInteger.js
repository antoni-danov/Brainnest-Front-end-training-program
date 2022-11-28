function biggestInteger(a, b) {
    if (a > b) {
        return a;
    } else if (a === b) {
        return a;
    }
    return b;
}

biggestInteger(3, 5);
biggestInteger(7, 2);
biggestInteger(4, 4);