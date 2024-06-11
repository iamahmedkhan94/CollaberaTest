import { useState } from 'react';

export const useTwoSum = () => {
    const [result, setResult] = useState<number[]>([]);

    const twoSum = (numbers: number[], target: number): number[] => {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                setResult([left + 1, right + 1]);
                return [left + 1, right + 1]; // Return 1-indexed positions
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        setResult([]);
        return [];
    };

    return { result, twoSum };
};
