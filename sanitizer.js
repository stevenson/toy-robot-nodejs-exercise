function santizePlaceParams(params) {
    const [strX, strY, strF] = params.split(',');
    if ([strX, strY, strF].every(v => v !== undefined)) {
        const x = parseInt(strX.replace(/\D/g, '')) | null;
        const y = parseInt(strY.replace(/\D/g, '')) | null;
        const facing = strF.toLowerCase().match(/^((north|south)(east|west)?|east|west)/g);
        let paramErrors = '';
        if (!(0 <= x && x <= 5)) {
            paramErrors += '\n-- x must be within 0-5.'
        }
        if (!(0 <= y && y <= 5)) {
            paramErrors += '\n-- y must be within 0-5.'
        }
        if (!Array.isArray(facing) || !(facing.length > 0)) {
            paramErrors += '\n-- facing direction invalid.'
        }
        if (paramErrors !== '') {
            throw Error(`- ERROR: invalid place parameters: ${paramErrors}`);
        }
        return { x, y, facing: facing[0] };
    } else {
        throw Error('- ERROR: place require comma separated params: x, y, and facing');
    }
}


module.exports ={ 
    santizePlaceParams,
}