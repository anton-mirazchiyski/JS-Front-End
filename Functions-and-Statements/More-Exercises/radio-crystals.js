function solve(elements) {
    const [targetThickness, ...thicknessOfChunks] = elements;

    for (let chunk of thicknessOfChunks) {
        console.log(`Processing chunk ${chunk} microns`);

        chunk = cutChunk(chunk);
        chunk = lapChunk(chunk);
        chunk = grindChunk(chunk);
        chunk = etchChunk(chunk);

        if (chunk === targetThickness - 1) {
            chunk = xRayChunk(chunk);
        }
        
        console.log(`Finished crystal ${chunk} microns`);
    }

    function cutChunk(chunk) {
        let cutCount = 0;

        while (chunk / 4 >= targetThickness) {
            chunk = chunk / 4;
            cutCount += 1
        }
        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            chunk = transportAndWash(chunk);
        }
        return chunk;
    }

    function lapChunk(chunk) {
        let lapCount = 0;

        while (chunk - (chunk * 0.2) >= targetThickness) {
            chunk -= chunk * 0.2;
            lapCount += 1;
        }
        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            chunk = transportAndWash(chunk);
        }
        return chunk;
    }

    function grindChunk(chunk) {
        let grindCount = 0;

        while (chunk - 20 >= targetThickness) {
            chunk = chunk - 20;
            grindCount += 1;
        }
        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            chunk = transportAndWash(chunk);
        }
        return chunk;
    }

    function etchChunk(chunk) {
        let etchCount = 0;

        while (chunk - 2 >= targetThickness - 1) {
            chunk = chunk - 2
            etchCount += 1;
        }
        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            chunk = transportAndWash(chunk);
        }
        return chunk;
    }

    function xRayChunk(chunk) {
        const incrementMicron = 1;

        console.log('X-ray x1');
        return chunk + incrementMicron;
    }

    function transportAndWash(chunk) {
        console.log('Transporting and washing');
        return Math.floor(chunk);
    }
}

solve([1375, 50000]);
console.log('');

solve([1000, 4000, 8100]);
console.log('');

solve([100, 99]);
