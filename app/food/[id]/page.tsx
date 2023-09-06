// import React from "react";
// import { getrecipes } from "@/app/page";
// import Link from "next/link";
// type Props = { items: {} };
// // export async function getrecipes() {
// //   try {
// //     const recipes = await fetch("http://localhost:3000/api/recipes");
// //     // const rec: prop = recipes;
// //     const dat: prop = await recipes.json();
// //     const res = dat.results;
// //     // console.log("hello",dat.results);
// //     return res;
// //   } catch (error) {
// //     console.log("Failed to fetch data");
// //   }
// // }
// async function page({ params }: { params: { id: number } }) {
//   const items: Props = await getrecipes();
//   const item = items?.find((item) => {
//     return item.id == params.id;
//     //  if(item.id==params.id)
//     //  {
//     //     return item
//     //  }
//   });
//   return (
//     <div className="border-y rounded-3xl m-10 justify-center flex-col content-center ">
//       <div className="flex content-center justify-center">
//         <img src={item.thumbnail_url} alt={item.name} className="w-1/2 p-10 rounded-full" />
//         <div className="p-10 justify-center content-center">
//           <h1 className="text-7xl py-10">{item.name}</h1>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="p-10 w-1/2">
//           <h2 className="text-4xl">About</h2>
//           <p className="py-7 text-2xl">{item.description}</p>
//         </div>
//         <div className="p-10 px-20 w-1/2 ">
//           <h2 className="text-4xl">Ingredients</h2>
//           <ul className="py-5">
//             {item.sections[0].components?.map((ingre) => (
//               <li className="text-2xl py-2">{ingre.ingredient.name}</li>
//             ))}
//           </ul>
//         </div>

//       </div>
//         <div className="p-10">
//           <h2 className="text-4xl">Method</h2>
//           <ul>
//             {item.instructions?.map((ingre) => (
//               <li className="py-5">
//                 <ul>
//                   <li className="text-1xl">Step {ingre.position}</li>
//                   <li className="text-2xl">{ingre.display_text}</li>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//     </div>
//   );
// }

// export default page;
//------------------------------------------------------------------------------
import { getrecipes } from "@/app/page";
import React from "react";

type Props = { items: {} };

async function page({ params }: { params: { id: number } }) {
  const items: Props = await getrecipes();
  const item = items?.find((item) => {
    return item.id == params.id;
  });
  return (
    <div className="bg-white border text-[#03383f] justify-center w-full p-10 ">
      <div className="flex-col justify-center ">
        <div className="mb-10 -mt-10 pt-10 -mx-10 bg-[#fdf2cc] flex justify-center">
          <h1>THE RECIPE</h1>
        </div>
        <div
          className="flex flex-col -m-10 p-10 justify-center
                         bg-[#fdf2cc] sm:flex-row sm:content-center
                         justify-items-center   "
        >
          <img
            src={item.thumbnail_url}
            alt="food"
            className="rounded-2xl w-full sm:w-1/2 "
          />
          <div
            className="text-left content-center my-10 text-3xl sm:w-1/3 
                             sm:mx-10 sm:m-auto"
          >
            <h1 className="stroke-1">{item.name}</h1>
          </div>
        </div>

        <div className="flex flex-col -mx-10 mt-10  p-10 justify-center bg-[#fef8e6] sm:flex-row sm:p-5">
          <div className="space-y-3 sm:w-1/2 sm:m-10 sm:mt-5">
            <h1 className="text-2xl">About</h1>
            <p>{item.description}</p>
          </div>
          <div className="space-y-3  mt-10 sm:w-1/2 sm:m-10 sm:mt-5 sm:ml-10">
            <h1 className="text-2xl">Ingredients</h1>
            <ul className="space-y-2">
              {item.sections[0].components?.map((ingre) => (
                <li>{ingre.ingredient.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col -mx-10 p-10 justify-center bg-[#fbfaf4] sm:px-14">
          <div className="space-y-3">
            <h1 className="text-2xl">Method</h1>
            <ul className="space-y-5">
              {item.instructions?.map((ingre) => (
                <li className="space-y-2">
                  <h1 className="text-lg">Step {ingre.position}</h1>
                  <p>{ingre.display_text}</p>
                </li>
              ))}
              {/* <li className="space-y-2">
                <h1 className="text-lg">Step 1</h1>
                <p>Slice your croissants in half horizontally and set aside.</p>
              </li>
              <li className="space-y-2">
                <h1 className="text-lg">Step 2</h1>
                <p>
                  Add the bacon to the pan and fry on a medium heat. As your
                  bacon begins to cook add the Rowse Chilli Fusion to the pan
                  and stir around the pan with the fat from the bacon. Once the
                  bacon crisps up remove and set aside. Place the croissant
                  halves face town in the pan and cook until golden brown.
                </p>
              </li>
              <li className="space-y-2">
                <h1 className="text-lg">Step 3</h1>
                <p>
                  As your bacon is sizzling away, place your knob of butter in a
                  fresh pan and heat until the butter is melted and bubbling.
                  Beat your eggs and tip them in, gently moving them around the
                  pan as they cook.
                </p>
              </li>
              <li className="space-y-2">
                <h1 className="text-lg">Step 4</h1>
                <p>
                  Build your sandwich… Take your croissants and lay them out
                  like an open sandwich. Grate some cheddar onto the base and
                  then add your egg. Next, place the bacon on top of the egg and
                  scatter some chives on top. Add your sliced avocado on top and
                  season with salt and pepper. Put the croissant lid on then
                  finish up with a squeeze of Rowse Chilli Fusion Honey.
                </p>
              </li> */}
            </ul>
          </div>
        </div>
        <div className=" flex justify-center content-center space-x-5  mt-10">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82708 7.49972C1.82708 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82708 10.6327 1.82708 7.49972ZM5.03747 9.21395C4.87949 8.98746 4.56782 8.93193 4.34133 9.08991C4.11484 9.24789 4.05931 9.55956 4.21729 9.78605C4.93926 10.8211 6.14033 11.5 7.50004 11.5C8.85974 11.5 10.0608 10.8211 10.7828 9.78605C10.9408 9.55956 10.8852 9.24789 10.6587 9.08991C10.4323 8.93193 10.1206 8.98746 9.9626 9.21395C9.41963 9.99238 8.51907 10.5 7.50004 10.5C6.481 10.5 5.58044 9.99238 5.03747 9.21395ZM5.37503 6.84998C5.85828 6.84998 6.25003 6.45815 6.25003 5.97498C6.25003 5.4918 5.85828 5.09998 5.37503 5.09998C4.89179 5.09998 4.50003 5.4918 4.50003 5.97498C4.50003 6.45815 4.89179 6.84998 5.37503 6.84998ZM10.5 5.97498C10.5 6.45815 10.1083 6.84998 9.62503 6.84998C9.14179 6.84998 8.75003 6.45815 8.75003 5.97498C8.75003 5.4918 9.14179 5.09998 9.62503 5.09998C10.1083 5.09998 10.5 5.4918 10.5 5.97498Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
