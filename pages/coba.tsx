// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import en from "../locales/en.json";
// import id from "../locales/id.json";

// export default function HomePage() {
//   const [language, setLanguage] = useState("id");
//   const [translations, setTranslations] = useState<any>(id);

//   useEffect(() => {
//     if (language === "en") {
//       setTranslations(en);
//     } else {
//       setTranslations(id);
//     }
//   }, [language]);

//   return (
//     <div className="h-auto w-full py-[125px] bg-[#f5f5db] px-8">
//       {/* flex dengan masing-masing bagian 50% */}
//       <div className="h-full w-full md:flex items-center justify-between">
//         <motion.div className="md:w-[50%]">
//           {/* text yang dibagi menjadi 60% */}
//           <div className="md:w-[60%]">
//             <p
//               id="welcome"
//               className="text-[#2f7d32] md:text-start text-center py-2"
//             >
//               {translations.welcome}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
