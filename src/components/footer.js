// export default function Footer() {
//   return (
//     <footer classname="text-gray-700 container mx-auto w-full bg-red-300">
//       <div classname="bg-gray-500 w-full">
//         <div classname="container mx-auto pt-4 px-5 flex flex-wrap flex-auto sm:bg-gray-200">
//           <copy classname="">Copyright©2023.Slave All rights reserved</copy>
//           <storage classname="">
//             경기도 용인시 기흥구 강남로 40, 강남대학교
//           </storage>
//         </div>
//       </div>
//     </footer>
//   );
// }

/*
** 화면이 작을 때
1. div의 크기(배경: 배경색, border, display)
2. 텍스트의 크기(텍스트 크기, 색상, 폰트, 등등)
3. 애니메이션(transition)
** 화면이 클 때
1. div의 크기(배경: 배경색, border, display)
2. 텍스트의 크기(텍스트 크기, 색상, 폰트, 등등)
3. 애니메이션(transition)
*/

export default function Footer() {
  return (
    <footer className="w-full px-2 py-3 flex flex-col md:flex-row justify-center items-center  bg-gray-300 flex items-center my-3 before:flex-1 before:border-t before:border-gray-500 before:mt-0.5 after:flex-1 after:border-t after:border-gray-500 after:mt-0.5">
      <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center md:justify-between md:px-5 items-center">
        <span className="font-semibold text-gray-600 pb-1 font-mono ">
          Copyright©2023.Slave All rights reserved
        </span>
        <div className="font-semibold text-sm text-gray-600 pb-1 font-medium">
          경기도 용인시 기흥구 강남로 40, 강남대학교
          <br />
          곽박오이
        </div>
      </div>
    </footer>
  );
}
