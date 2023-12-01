import { processFileLineByLine } from "../../utils/reader";
import * as path from 'path';

// Part: 1
(
    async () => {
        let count = 0;
        const combineTerminalDigits = (
            (line: string) => {
                
                let i=0;
                let j=line.length-1;
                for(; i<line.length-1; i++){
                    let p = parseInt(line[i] as string);
                    if(!isNaN(p)){
                        break;
                    }
                }
                for(; j>=0; j--){
                    let p = parseInt(line[j] as string);
                    if(!isNaN(p)){
                        break;
                    }
                }
                count += +(line[i]!+line[j]) 
            }
        );
        await processFileLineByLine(path.resolve(__dirname, '../../../inputs/1a.txt'), combineTerminalDigits);
        console.log('ans', count);
    }
);

// Part: 2
// oneight -> 1ight, if this was in ending i wanted on8
// twone
// threeight
// fiveight
// eightwo
// eighthree
// sevenine
// nineight
(
    async () => {
        let count = 0;
        const combineTerminalDigits = (
            (line: string) => {
                ["oneight", "twone", "threeight", "fiveight", "eightwo", "eighthree", "sevenine", "nineight"].forEach((num, i) => {
                    const corrected = ["oneeight", "twoone", "threeeight", "fiveeight", "eighttwo", "eightthree", "sevennine", "nineeight"];
                    line = line.replace(new RegExp(num, 'gi'), corrected[i] as string);
                });

                ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].forEach((num, i) => {
                    line = line.replace(new RegExp(num, 'gi'), (i+1).toString())
                });
                let i=0;
                let j=line.length-1;
                for(; i<line.length-1; i++){
                    let p = parseInt(line[i] as string);
                    if(!isNaN(p)){
                        break;
                    }
                }
                for(; j>=0; j--){
                    let p = parseInt(line[j] as string);
                    if(!isNaN(p)){
                        break;
                    }
                }
                count += +(line[i]!+line[j]) 
                console.log(line[i]!+line[j]) 
            }
        );
        await processFileLineByLine(path.resolve(__dirname, '../../../inputs/1b.txt'), combineTerminalDigits);
        console.log('ans', count);
    }
)();