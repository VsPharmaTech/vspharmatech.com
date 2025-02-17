import React from "react";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href: string; // Ensuring href is required
}

export default function Button({ variant = 'primary', children, href }: ButtonProps) {
  return (
    <div className="inline-block">
    <a
      href={href}
      className={`
        px-6 py-2 rounded-md font-medium font-roboto transition-colors flex items-center gap-2
        ${
          variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-800"
            : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
        }
      `}
    >
      {children}
      <img src="/ArrowF.svg" alt="Arrow" className="h-full gap-x-2" />
    </a>
    </div>
  );
}

// import React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
//   children: React.ReactNode;
// }

// export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
//   return (
//     <button
//       {...props}
//       className={`
//         px-6 py-2 rounded-md font-medium font-roboto transition-colors flex items-center gap-2
//         ${variant === 'primary'
//           ? 'bg-blue-600 text-white hover:bg-blue-800'
//           : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}
//       `}
//     >
//       {children}
//       <img src="/ArrowF.svg" alt="Arrow" className="h-full gap-x-2" />
//     </button>
//   )
// }

