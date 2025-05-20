import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='w-full py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl border-t
    border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(34,197,94,0.1)]'
    >
        <div className='px-[5%] md:px-[8%] lg:px-[10%]'>
            <p className='text-center text-sm md:text-base text-gray-300 hover:text-cyan-400/90 transition-colors duration-300'>
                <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                    Empowering digital finance — &copy; 2025 CryptoTracking.
                </span>

            </p>
            <p className='text-center text-xs md:text-sm text-gray-400 mt-2'>"Cryptocurrency is freedom of money." — Erik Voorhees.</p>
            <br />
            <div className="flex justify-center space-x-4">
               {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/oluwatunmise-alimi-563915225/" 
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/*Twitter */}
              <a 
                href="https://x.com/dorcas_tunmise" 
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>        
          </div>
    </div>
  )
}

export default Footer