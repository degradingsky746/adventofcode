import { processFileLineByLine } from "../../utils/reader";
import * as path from 'path';

// const main1 = async () => {
//     let count = 0;
//     const sumEligibleGameIds = (line: string) => {
//         const maxEligibility = {
//             "red": 12,
//             "green": 13,
//             "blue": 14
//         };
//         const gameId = parseInt(line.split(":")[0]?.split(" ")[1] as string);
//         const cubeDraws = line.split(":")[1]?.split(";");
//         const isEligible = cubeDraws?.every(draw => {
//             return draw.split(",").map(x => x.trim()).every(cube => {
//                 return maxEligibility[cube.split(" ")[1] as "red" | "blue" | "green"] >= parseInt(cube.split(" ")[0] as string);
//             })
//         })
//         if(isEligible){
//             count += gameId;
//         }
//     }
//     await processFileLineByLine(path.resolve(__dirname, '../../../inputs/2.txt'), sumEligibleGameIds);
//     console.log(count);
// }

const main2 = async () => {
    let count = 0;
    const sumEligibleGameIds = (line: string) => {
        const maxEligibility = {
            "red": 0,
            "green": 0,
            "blue": 0
        };
        const cubeDraws = line.split(":")[1]?.split(";");
        cubeDraws?.forEach(draw => {
            return draw.split(",").map(x => x.trim()).forEach(cube => {
                const cubeCount = parseInt(cube.split(" ")[0] as string);
                const cubeColor = cube.split(" ")[1] as "red" | "blue" | "green";
                if (maxEligibility[cubeColor] < cubeCount) {
                    maxEligibility[cubeColor] = cubeCount;
                }
            })
        })
        count += Object.values(maxEligibility).reduce((acc, curr) => acc*curr, 1);
    }
    await processFileLineByLine(path.resolve(__dirname, '../../../inputs/2.txt'), sumEligibleGameIds);
    console.log(count);
}

main2();