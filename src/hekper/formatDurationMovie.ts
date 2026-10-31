


export const FormatDurationMovie = (duration: number) : string=>{
    const hora = Math.floor( duration / 60);

    const mins = duration % 60;
    if( hora > 0 && mins > 0) return `${hora}:${mins < 10 ? `0${mins}`: `${mins}`} hrs.`
    const result = hora === 0 ? mins === 0 ? `${hora} hrs`: `${mins} mins` : `${hora} hrs`;

    return `${result}`
} 