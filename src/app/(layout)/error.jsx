"use client"
import React from 'react';

/**
 * A responsive and visually appealing 404 Not Found page component.
 * Uses Tailwind CSS for all styling to ensure adaptability across devices.
 * The page features a central message, a descriptive text, and a call-to-action button
 * to return to the homepage.
 *
 * @returns {JSX.Element} The rendered 404 error page component.
 */
function ErrorPage() {
  return (
    // The main container. We use 'min-h-screen' to make it take up the full viewport height,
    // and 'flex items-center justify-center' to center the content both horizontally and vertically.
    // The background is set to a dark gray for a modern aesthetic.
    <div className=" text-white font-sans antialiased min-h-screen lg:min-h-[70vh] flex items-center justify-center p-4 md:p-8">
      
      {/* The content container. A flex column with centered text, a maximum width,
          and a shadow for depth. The 'rounded-lg' and 'p-8' give it a polished look. */}
      <div className="flex flex-col items-center text-center max-w-xl w-full rounded-lg p-8 transition-all duration-300">
        
        {/* The main error code. The large, bold font immediately draws attention. */}
        <h1 className="text-9xl font-extrabold text-secondary tracking-widest animate-pulse">
          404
        </h1>
        
        {/* A descriptive heading for the page. */}
        <h2 className="text-4xl sm:text-5xl font-bold mt-6 text-primary">
          Oops! The page you're looking for doesn't exist.
        </h2>
        
        {/* A more detailed paragraph to explain the situation and provide context.
            This helps in guiding the user on what to do next. */}
        <p className="text-secondary mt-4 leading-relaxed max-w-md">
          It might have been moved or deleted. Don't worry, you can always go back to our homepage.
        </p>

      </div>
    </div>
  );
}

// Export the component as the default export, which is standard for Next.js pages.
export default ErrorPage;
