let fetchData = {
    story: {
        after: 300,
        heading: 'This is heading.....',
        chapterUrls: ['chapter1', 'chapter2', 'chapter3', 'chapter4'],
    },
    chapter1: {
        after: 1 * 1000,
        html:
            'chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1 chapter1',
    },
    chapter2: {
        after: 4 * 1000,
        html:
            'chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2 chapter2',
    },
    chapter3: {
        after: 3 * 1000,
        html:
            'chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3 chapter3',
    },
    chapter4: {
        after: 2 * 1000,
        html:
            'chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4 chapter4',
    },
};

export function getFetchData(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fetchData[item]);
        }, fetchData[item].after);
    });
}
