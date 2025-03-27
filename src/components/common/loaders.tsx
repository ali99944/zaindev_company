// export function GridLoader({ count = 4, className = '' }: { count?: number, className?: string }) {
//     return (
//       <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
//         {Array.from({ length: count }).map((_, index) => (
//           <CardLoader key={index} />
//         ))}
//       </div>
//     )
//   }
  
  export function LinesLoader({ lines = 3, className = '' }: { lines?: number, className?: string }) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div 
            key={index} 
            className={`h-4 bg-[#FFC971] rounded animate-pulse ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
    )
  }