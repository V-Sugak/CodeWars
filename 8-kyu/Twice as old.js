function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : dadYearsOld - sonYearsOld * 2;
}