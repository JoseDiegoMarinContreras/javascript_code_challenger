/*
Description:
   - Given two sorted arrays nums1 and nums2 of size m and n respectively,
     return the median of the two sorted arrays.
   - The overall run time complexity should be O(log (m+n)).

 

Example:
   - Input:
      nums1 = [1, 3]
      nums2 = [2]
   - Output: 2.00000 
   - Explanation: merged array = [1,2,3] and median is 2.
*/

// SOLUTION
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalSize = nums1.length + nums2.length
    const medianNum2Position = Math.floor(totalSize / 2);
    const medianNum1Position = medianNum2Position - (totalSize%2 !==0 ? 0 : 1);
    let lastNumber = 0;
    let iteration = -1;
    do{
        iteration++;
        const num1 = nums1[0] ?? Number.POSITIVE_INFINITY;
        const num2 = nums2[0] ?? Number.POSITIVE_INFINITY;

        if(num1 > num2){
            lastNumber = num2;
            nums2.shift();
        }
        if(num2 >= num1){
            lastNumber = num1;
            nums1.shift();
        }
        if(iteration === medianNum1Position){
            const n1 = lastNumber;
            let n2 = n1;
            if(iteration !== medianNum2Position){
                n2 = Math.min(
                    nums1[0] ?? Number.POSITIVE_INFINITY,
                    nums2[0] ?? Number.POSITIVE_INFINITY
                );
            }
            return (n1 + n2) / 2;
        }
        
    }while(true);
}