function DNAStrand(dna) {
    return dna.split('').map(i => {
        if (i === 'A') { return 'T' }
        else if (i === 'T') { return 'A' }
        else if (i === 'G') { return 'C' }
        else if (i === 'C') { return 'G' }
    }).join('')
}