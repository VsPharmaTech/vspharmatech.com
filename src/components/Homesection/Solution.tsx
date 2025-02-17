
import { motion } from "framer-motion";

const solutions = [
  { flaw: "General flaw in Mould", solution: "Sand blasting" },
  { flaw: "Mould Seal Leakage", solution: "Tip & Joint Alignment" },
  { flaw: "Bottle falling problem during mould opening", solution: "Check overcutting" },
  { flaw: "Hanger cutting", solution: "Check closing point pressure" },
  { flaw: "Solution dropping problem", solution: "Check TPD" },
  { flaw: "Hydraulic related problem", solution: "Check the pressure" },
  { flaw: "Parison thickness & length", solution: "Adjust the parison head mechanical setting" },
  { flaw: "Filling volume variation", solution: "Check valves & timers from buffer tank up to Filling section" },
  { flaw: "Batch failure due to contamination", solution: "Online particle counter monitor across the Filling section" },
  { flaw: "Irregularity in bottle neck for euro-capping", solution: "Neck section vacuum leakage" },
  { flaw: "Plastic leakage in parison head", solution: "Check Heating" },
  { flaw: "Extruder section plastic movements", solution: "Check heaters/barrel cooling & temperature sensors" }
];

const Solution = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="relative bg-white py-16 sm:py-30 px-4 sm:px-6 md:px-12 lg:px-24 text-center"
      id='guideline'
    >
      {/* Title and Description */}
      <h3 className="text-secondary font-lora font-bold text-base sm:text-lg">Our Solutions</h3>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold mt-2 sm:mt-3">Comprehensive <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold">Troubleshooting</span> Guidelines</h2>
      <p className="text-gray-600 text-base sm:text-lg mt-2 sm:mt-3 mb-8 sm:mb-12">
        Quick and practical solutions to common BFS challenges, ensuring seamless operations and minimal downtime.
      </p>
      
      {/* Table */}
      <div className="mt-10 overflow-x-auto md:px-40">
        <table className="w-full max-w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left border-r border-white">Flaw</th>
              <th className="py-3 px-4 text-left">Solution</th>
            </tr>
          </thead>
          <tbody>
            {solutions.map((item, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-100 transition-all`}
              >
                <td className="py-3 px-3 sm:px-4 border-b border-r border-gray-300 text-left text-sm sm:test-base">{item.flaw}</td>
                <td className="py-3 px-3 sm:px-4 border-b text-left text-sm sm:text-base font-semibold text-blue-700">{item.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default Solution;

