const BadgePreview = ({ name = "Your Name", role = "", image = null }) => {
  return (
    <div className="w-72 h-96 mx-auto relative">
      {/* Badge Pin/Clasp */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg border border-gray-500 shadow-lg">
          <div className="w-6 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg mx-auto mt-1 border border-gray-400"></div>
        </div>
      </div>
      
      {/* Main Badge */}
      <div className="w-full h-full bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400 rounded-3xl shadow-2xl border-4 border-amber-500 relative overflow-hidden">
        {/* Metallic texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-amber-600/20 rounded-3xl"></div>
        
        {/* Badge border highlight */}
        <div className="absolute inset-1 bg-gradient-to-br from-amber-100 to-amber-300 rounded-3xl border border-amber-400"></div>
        
        {/* Inner content area */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
          {/* Organization Header */}
          <div className="mb-4">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 px-4 py-2 rounded-full shadow-lg border border-amber-800">
              <span className="text-xs font-bold tracking-wide uppercase">
                LISA Ai for HR
              </span>
            </div>
          </div>
          
        {/* Profile Image */}
        {image && (
            <div className="mb-4 relative">
              <div className="w-36 h-36 rounded-full border-4 border-amber-600 shadow-lg bg-white p-1">
            <img
              src={image}
              alt="Profile"
                  className="w-full h-full rounded-full object-cover"
            />
              </div>
              {/* Image border highlight */}
              <div className="absolute inset-0 w-36 h-36 rounded-full border-2 border-amber-200"></div>
          </div>
        )}
        
          {/* Name */}
          <h2 className="text-xl font-bold mb-2 text-amber-900 drop-shadow-sm">
          {name}
        </h2>
          
          {/* Role */}
        {role && (
            <div className="mb-4">
              <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-amber-100 px-3 py-1 rounded-lg shadow-md border border-amber-900">
                <span className="text-sm font-semibold">
            {role}
                </span>
              </div>
            </div>
          )}
          
          {/* Logo Section - Bottom */}
          <div className="mt-auto flex justify-center items-center gap-8">
            {/* LISA Logo */}
            <div className="w-20 h-12 flex items-center justify-center">
              <svg width="80" height="30" viewBox="0 0 590.7 217.2" className="w-full h-full">
                <g>
                  <polygon fill="url(#SVGID_1_)" points="103.4,108.5 127.7,75.1 103.4,41.7 79.1,75.1"/>
                  <polygon fill="#9333EA" points="103.4,0 103.4,0 103.4,41.7 127.7,75.1 127.7,75.1 127.7,33.4"/>
                  <polygon fill="#F3E8FF" points="103.4,0 103.4,0 103.4,41.7 79.2,75.1 79.1,75.1 79.1,33.4"/>
                  <polygon fill="url(#SVGID_00000005967171009535923140000010327539022529772199_)" points="103.4,108.5 142.7,121.2 142.7,162.5 103.4,149.7"/>
                  <polygon fill="#9333EA" points="167.2,196.2 167.2,196.2 142.7,162.5 142.7,121.2 142.7,121.2 167.2,154.9"/>
                  <polygon fill="#F3E8FF" points="167.2,196.2 167.2,196.2 142.7,162.5 103.4,149.7 103.4,149.7 127.9,183.4"/>
                  <polygon fill="url(#SVGID_00000162312110271939699950000005044286658663815823_)" points="103.4,108.5 64.2,121.2 64.2,162.5 103.4,149.7"/>
                  <polygon fill="#F3E8FF" points="39.7,196.2 39.7,196.2 64.2,162.5 64.2,121.2 64.1,121.2 39.7,154.9"/>
                  <polygon fill="#9333EA" points="39.7,196.2 39.7,196.2 64.2,162.5 103.4,149.7 103.4,149.7 78.9,183.4"/>
                  <polygon fill="url(#SVGID_00000013909230732793766520000003773793571359674559_)" points="103.4,108.5 79.1,75.1 39.9,87.8 64.2,121.2"/>
                  <polygon fill="#9333EA" points="0.3,74.9 0.3,74.9 39.9,87.8 39.9,87.8 79.1,75.1 79.1,75.1 39.5,62.2"/>
                  <polygon fill="#F3E8FF" points="0.3,74.9 0.3,74.9 39.9,87.8 39.9,87.8 64.2,121.2 64.1,121.2 24.5,108.3"/>
                  <polygon fill="url(#SVGID_00000177476072552773852660000002344838818276752275_)" points="103.4,108.5 127.7,75.1 166.9,87.8 142.7,121.2"/>
                  <polygon fill="#9333EA" points="206.6,74.9 206.6,74.9 166.9,87.8 166.9,87.8 127.7,75.1 127.7,75.1 167.3,62.2"/>
                  <polygon fill="#F3E8FF" points="206.6,74.9 206.6,74.9 166.9,87.8 142.7,121.2 142.7,121.2 182.3,108.3"/>
                  <polygon fill="#9F57ED" points="103.4,149.7 127.9,183.4 103.4,217.2 78.9,183.4"/>
                  <polygon fill="url(#SVGID_00000093139163382962022930000009346693023437375616_)" points="127.7,75.1 127.7,33.4 167.3,20.5 167.3,62.2"/>
                  <polygon fill="url(#SVGID_00000163775886397944129640000004345274315410607038_)" points="79.1,75.1 79.1,33.4 39.5,20.5 39.5,62.2"/>
                  <polygon fill="url(#SVGID_00000037681552134783395360000008379395991288907190_)" points="142.7,121.2 182.3,108.3 206.8,142 167.2,154.9"/>
                  <polygon fill="url(#SVGID_00000067229527095910890900000014018026214873065116_)" points="64.1,121.2 24.5,108.3 0,142 39.7,154.9"/>
                  <path fill="#0F172A" d="M530.9,174c-10.2,0-14.4-6.1-14.4-12.4c0-8.5,5.9-12.2,13.7-13.4l22.9-3.7v5.4C553.1,168.7,541.9,174,530.9,174z M479.9,164c0,19.3,15.4,36.8,42,36.8c16.1,0,27.8-6.8,34.2-17.1c0,8.3,1,12.7,1.2,13.7h33.4c-0.2-1.2-1.5-9.3-1.5-18.8v-59.3c0-24.9-14.4-46.9-53.7-46.9c-35.6,0-51.7,22.9-53.2,40.3l32.2,6.6c0.7-9,7.8-17.8,20.7-17.8c11.7,0,17.8,6.1,17.8,13.2c0,4.1-2.2,7.3-8.8,8.3l-28.6,4.4C495.8,130.4,479.9,142.6,479.9,164z M363.7,163.1c1,13.4,13.2,38.1,51.2,38.1c32.5,0,48.3-20.3,48.3-41c0-17.8-12.2-32.9-37.3-38.1l-16.1-3.2c-5.4-1-9.5-3.9-9.5-9c0-6.3,6.1-10.5,13.2-10.5c11.2,0,16.4,6.8,17.3,14.9l30.7-5.6c-1.2-14.2-13.4-36.1-48.6-36.1c-27.1,0-46.6,18.1-46.6,40.3c0,17.1,10.2,31.7,36.1,37.3l13.9,3.2c9,2,12,5.6,12,10c0,5.4-4.6,10.5-14.2,10.5c-12.7,0-18.5-8.1-19-16.4L363.7,163.1z M301,39.1c0,12,9.8,21.7,21.5,21.7c12.2,0,22-9.8,22-21.7s-9.8-21.7-22-21.7C310.8,17.4,301,27.1,301,39.1z M341.3,197.5V76.2h-37.1v121.3H341.3z M271.5,197.5V20.8h-37.1v176.7H271.5z"/>
                </g>
                <defs>
                  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-30.7264" y1="-60.8945" x2="-29.7264" y2="-60.8945" gradientTransform="matrix(45.542 0 0 -45.542 1480.2 -2698.1885)">
                    <stop offset="0" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="0.4944" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="0.4944" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="1" style={{stopColor:"#9F57ED"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000005967171009535923140000010327539022529772199_" gradientUnits="userSpaceOnUse" x1="-28.5224" y1="-60.7405" x2="-27.5224" y2="-60.7405" gradientTransform="matrix(35.3355 -25.6749 -25.6749 -35.3355 -445.8238 -2730.6335)">
                    <stop offset="0" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.4868" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.4876" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="1" style={{stopColor:"#BA83F6"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000162312110271939699950000005044286658663815823_" gradientUnits="userSpaceOnUse" x1="-32.5629" y1="-62.0962" x2="-31.5629" y2="-62.0962" gradientTransform="matrix(35.6231 25.7961 25.7961 -35.6231 2827.7747 -1249.5087)">
                    <stop offset="0" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5012" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5014" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="1" style={{stopColor:"#BA83F6"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000013909230732793766520000003773793571359674559_" gradientUnits="userSpaceOnUse" x1="-26.806" y1="-62.1347" x2="-25.806" y2="-62.1347" gradientTransform="matrix(14.0356 -43.1787 -43.1787 -14.0356 -2242.147 -1909.4407)">
                    <stop offset="0" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="0.509" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="0.509" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="1" style={{stopColor:"#9F57ED"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000177476072552773852660000002344838818276752275_" gradientUnits="userSpaceOnUse" x1="-33.3642" y1="-64.2297" x2="-32.3642" y2="-64.2297" gradientTransform="matrix(13.1722 40.4898 40.4898 -13.1722 3168.7678 582.9607)">
                    <stop offset="0" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="0.4957" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="0.4957" style={{stopColor:"#B981F6"}}/>
                    <stop offset="0.4958" style={{stopColor:"#B57AF4"}}/>
                    <stop offset="0.4958" style={{stopColor:"#AD6EF2"}}/>
                    <stop offset="0.4958" style={{stopColor:"#A35EEE"}}/>
                    <stop offset="0.4958" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5241" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="1" style={{stopColor:"#9F57ED"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000093139163382962022930000009346693023437375616_" gradientUnits="userSpaceOnUse" x1="-26.7072" y1="-66.3087" x2="-25.7072" y2="-66.3087" gradientTransform="matrix(-35.7827 -25.9849 -25.9849 35.7827 -2512.7119 1739.9331)">
                    <stop offset="0" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5161" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5166" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="1" style={{stopColor:"#BA83F6"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000163775886397944129640000004345274315410607038_" gradientUnits="userSpaceOnUse" x1="-30.68" y1="-67.5078" x2="-29.68" y2="-67.5078" gradientTransform="matrix(-37.1761 27.0164 27.0164 37.1761 761.5547 3372.5413)">
                    <stop offset="0" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5105" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5105" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="1" style={{stopColor:"#BA83F6"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000037681552134783395360000008379395991288907190_" gradientUnits="userSpaceOnUse" x1="-26.8924" y1="-62.2013" x2="-25.8924" y2="-62.2013" gradientTransform="matrix(14.454 -44.5763 -44.5763 -14.454 -2216.4048 -1944.1591)">
                    <stop offset="0" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.4942" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.4943" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="1" style={{stopColor:"#BA83F6"}}/>
                  </linearGradient>
                  <linearGradient id="SVGID_00000067229527095910890900000014018026214873065116_" gradientUnits="userSpaceOnUse" x1="-32.9689" y1="-64.2271" x2="-31.9689" y2="-64.2271" gradientTransform="matrix(14.7386 45.2788 45.2788 -14.7386 3418.731 655.1349)">
                    <stop offset="0" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5006" style={{stopColor:"#9F57ED"}}/>
                    <stop offset="0.5007" style={{stopColor:"#BA83F6"}}/>
                    <stop offset="1" style={{stopColor:"#BA83F6"}}/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Lets Upgrade Logo */}
            <div className="w-28 h-16 flex items-center justify-center">
              <img 
                src="/Logo_new-clour-blk-01 (7).png" 
                alt="Lets Upgrade" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
        </div>
        
        {/* Subtle embossed effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
      </div>
      
      {/* Badge shadow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl transform translate-x-1 translate-y-1 -z-10"></div>
    </div>
  );
};

export default BadgePreview;
