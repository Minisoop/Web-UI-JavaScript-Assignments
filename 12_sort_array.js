var library = [ 
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

library.sort((a, b) => {
    
    let ta = a.title.toLowerCase(),
        tb = b.title.toLowerCase();

    if (ta < tb) {
        return -1;
    }
    if (ta > tb) {
        return 1;
    }
    
    let aa = a.author.toLowerCase(),
        ab = b.author.toLowerCase();

    if (aa < ab) {
        return -1;
    }
    if (aa > ab) {
        return 1;
    }

    let ida = a.libraryID.toLowerCase(),
        idb = b.libraryID.toLowerCase();

    if (ida < idb) {
        return -1;
    }
    if (ida > idb) {
        return 1;
    }

    return 0;
});

console.log(library);