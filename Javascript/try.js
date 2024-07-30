// function intersect (nums1, nums2){
    
//     // # Sort
//     nums1.sort()
//     nums2.sort()

//     console.log(nums1)
//     console.log(nums2)


//     const size_nums1 = nums1.length;
//     const size_nums2 = nums2.length;

//     let num = 0;
//     let temp = [];
//     let output;

//     // Function to check Array
//     for (let i = 0 ; i < size_nums1 ; i++){
//         for (let j = 0 ; j < size_nums2 ; j++){
//             if (nums1[i] == nums2[j]){
//                 output = nums1[i]
//                 // output = [].concat(nums1[i]);
//             }
//             temp.push(output);
//         }
//     }
//     // for (let i = 0; i < size_nums1; i++){
//     //     for (let j = 0; j < size_nums2; j++){
//     //         if (nums1[i] == nums2[i]){
//     //             // temp = [].concat(nums2[i]);
//     //             temp += nums2[i];
//     //             num += 1;
//     //         }
//     //     }
//     // }

//     console.log(temp);

// }

// // const nums1 = [1, 2, 2, 1]
// // const nums2 = [2, 2]

// const nums1 = [4, 9, 5]
// const nums2 = [9, 4, 9, 8, 4]

// intersect(nums1, nums2);

// function intersect(nums1, nums2) {
//   // Sort both arrays
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   console.log(nums1);
//   console.log(nums2);

//   let i = 0,
//     j = 0;
//   const result = [];

//   // Use two pointers to find the intersection
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] < nums2[j]) {
//       i++;
//     } else if (nums1[i] > nums2[j]) {
//       j++;
//     } else {
//       result.push(nums1[i]);
//       i++;
//       j++;
//     }
//   }

//   console.log(result);
//   return result;
// }

// // const nums1 = [1, 2, 2, 1]
// // const nums2 = [2, 2]

// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4];

// intersect(nums1, nums2);
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

function twoSum(nums, target) {
  let i = 0;
  let j = nums.length;
  
  // while ( i < target && j > i ) {

  // }

  const temp = [];

  for ( i = 0 ; i < nums.length ; i++ ) {
    // console.log(i, 'i')
    for ( j = nums.length ; j > i ; j-- ){
      // console.log(j, 'j')
      if ( nums[i] + nums[j] == target ) {
        // temp.push( i, j );
        return [i, j]
        // console.log(nums[i], nums[j]);
        // console.log(i, j);
        // console.log('tes');
      }
      // console.log('tes 2');
    }
  }

  // console.log(temp)

  // return
}


// const nums = [2,7,11,15];
// const target = 9;
// const nums = [3, 2, 4];
// const target = 6;

const nums = [3, 3];
const target = 6;

// twoSum(nums, target)
console.log(twoSum(nums, target));