const icons = {
  account: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5184_207)">
<path d="M8 8C9.933 8 11.5 6.433 11.5 4.5C11.5 2.567 9.933 1 8 1C6.067 1 4.5 2.567 4.5 4.5C4.5 6.433 6.067 8 8 8Z" stroke="black"/>
<path d="M15 17C15 13.134 11.866 10 8 10C4.13401 10 1 13.134 1 17" stroke="black" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5184_207">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  bag: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5C5 5.0879 5 4.75154 5 4.4909C5 4.27749 5 3.95737 5 3.53055C5 1.85682 6.34315 0.5 8 0.5C9.65685 0.5 11 1.85682 11 3.53055C11 3.92499 11 4.22082 11 4.41804C11 4.68519 11 5.02996 11 5.45236" stroke="black"/>
<path d="M15 5.5H1V15.5H15V5.5Z" stroke="black"/>
</svg>`,
  burger: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="4.5" x2="16" y2="4.5" stroke="black"/>
<line y1="8.5" x2="16" y2="8.5" stroke="black"/>
<line y1="12.5" x2="16" y2="12.5" stroke="black"/>
</svg>
`,
  facebook: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2H3C2.4475 2 2 2.4475 2 3V13C2 13.5525 2.4475 14 3 14H8.5V9.5H7V7.5H8.5V6.2065C8.5 4.6565 9.4465 3.8125 10.8295 3.8125C11.492 3.8125 12.061 3.862 12.227 3.884V5.504L11.268 5.5045C10.516 5.5045 10.3705 5.862 10.3705 6.386V7.5H12.5905L12.0905 9.5H10.3705V14H13C13.5525 14 14 13.5525 14 13V3C14 2.4475 13.5525 2 13 2Z" fill="#8F8F8F"/>
</svg>`,
  instagram: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.081C6.398 3.081 6.208 3.087 5.5755 3.116C4.8925 3.147 4.259 3.284 3.7715 3.7715C3.284 4.259 3.147 4.8925 3.116 5.5755C3.087 6.208 3.081 6.398 3.081 8C3.081 9.602 3.087 9.792 3.116 10.4245C3.147 11.1075 3.284 11.741 3.7715 12.2285C4.259 12.716 4.8925 12.853 5.5755 12.884C6.208 12.913 6.398 12.919 8 12.919C9.602 12.919 9.792 12.913 10.4245 12.884C11.1075 12.853 11.741 12.716 12.2285 12.2285C12.716 11.741 12.853 11.1075 12.884 10.4245C12.913 9.792 12.919 9.602 12.919 8C12.919 6.398 12.913 6.208 12.884 5.5755C12.853 4.8925 12.716 4.259 12.2285 3.7715C11.741 3.284 11.1075 3.147 10.4245 3.116C9.792 3.087 9.602 3.081 8 3.081ZM8 2C9.6295 2 9.834 2.007 10.474 2.036C11.449 2.0805 12.3055 2.3195 12.993 3.007C13.6805 3.6945 13.9195 4.551 13.964 5.526C13.993 6.166 14 6.3705 14 8C14 9.6295 13.993 9.834 13.964 10.474C13.9195 11.449 13.6805 12.3055 12.993 12.993C12.3055 13.6805 11.449 13.9195 10.474 13.964C9.834 13.993 9.6295 14 8 14C6.3705 14 6.166 13.993 5.526 13.964C4.551 13.9195 3.6945 13.6805 3.007 12.993C2.3195 12.3055 2.0805 11.449 2.036 10.474C2.007 9.834 2 9.6295 2 8C2 6.3705 2.007 6.166 2.036 5.526C2.0805 4.551 2.3195 3.6945 3.007 3.007C3.6945 2.3195 4.551 2.0805 5.526 2.036C6.166 2.007 6.3705 2 8 2ZM8 4.919C9.7015 4.919 11.081 6.2985 11.081 8C11.081 9.7015 9.7015 11.081 8 11.081C6.2985 11.081 4.919 9.7015 4.919 8C4.919 6.2985 6.2985 4.919 8 4.919ZM8 10C9.1045 10 10 9.1045 10 8C10 6.8955 9.1045 6 8 6C6.8955 6 6 6.8955 6 8C6 9.1045 6.8955 10 8 10ZM11.203 5.517C10.8054 5.517 10.483 5.19465 10.483 4.797C10.483 4.39935 10.8054 4.077 11.203 4.077C11.6006 4.077 11.923 4.39935 11.923 4.797C11.923 5.19465 11.6006 5.517 11.203 5.517Z" fill="#8F8F8F"/>
</svg>
`,
  logo: `<svg width="179" height="16" viewBox="0 0 179 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.48557 12.6262H3.85576L3.11073 14.3085H0L6.16824 1.60449L12.3413 14.3085H9.23059L8.48557 12.6262ZM7.46478 10.3268L6.16824 7.38735L4.8717 10.3268H7.46478Z" fill="black"/>
<path d="M15.5343 7.95884C15.5343 4.43884 18.5483 1.60913 22.3024 1.60913C24.1505 1.60913 25.8486 2.31313 27.1935 3.6297L25.2342 5.48113C24.4408 4.67199 23.4538 4.24227 22.3024 4.24227C20.0674 4.24227 18.3209 5.87884 18.3209 7.95884C18.3209 10.0388 20.0722 11.6754 22.2879 11.6754C23.0958 11.6754 23.8409 11.4606 24.4891 11.0491V9.25713H21.9638V6.65599H27.0967V12.5303C25.7034 13.664 24.1021 14.304 22.3218 14.304C18.5483 14.3086 15.5343 11.4743 15.5343 7.95884Z" fill="black"/>
<path d="M39.9122 12.6262H35.2824L34.5374 14.3085H31.4266L37.5949 1.60449L43.7631 14.3085H40.6524L39.9122 12.6262ZM38.8914 10.3268L37.5949 7.38735L36.2983 10.3268H38.8914Z" fill="black"/>
<path d="M48.1897 1.76001H50.9424V14.1532H48.1897V1.76001Z" fill="black"/>
<path d="M59.2684 7.54276V14.153H56.5156V1.45361L64.0143 8.40218V1.7599H66.767V14.4593L59.2684 7.54276Z" fill="black"/>
<path d="M86.3361 0H89.3646L82.3691 15.9131H79.3406L86.3361 0Z" fill="black"/>
<path d="M102.165 1.76001H110.588V4.36115H104.923V6.65601H109.945V9.25715H104.923V14.1532H102.17V1.76001H102.165Z" fill="black"/>
<path d="M122.267 12.6263H117.637L116.892 14.3086H113.781L119.949 1.60913L126.118 14.3086H123.007L122.267 12.6263ZM121.246 10.3268L119.949 7.38742L118.653 10.3268H121.246Z" fill="black"/>
<path d="M129.136 11.1268L131.681 10.0388C131.797 11.0628 132.537 11.7211 133.51 11.7211C134.4 11.7211 135.014 11.1679 135.014 10.3588C135.014 8.33821 129.867 8.95078 129.867 5.03306C129.867 3.02621 131.42 1.60449 133.592 1.60449C135.309 1.60449 136.732 2.53706 137.269 3.97706L134.874 4.98735C134.681 4.45249 134.226 4.08678 133.645 4.08678C133.016 4.08678 132.61 4.45249 132.61 4.97364C132.61 6.70164 137.777 6.27649 137.777 10.3908C137.777 12.6719 136.011 14.3085 133.582 14.3085C131.434 14.3085 129.591 13.0056 129.136 11.1268Z" fill="black"/>
<path d="M144.705 4.36115H141.497V1.76001H150.645V4.36115H147.457V14.1532H144.705V4.36115Z" fill="black"/>
<path d="M155.377 1.76001H163.799V4.36115H158.134V6.65601H163.156V9.25715H158.134V11.552H163.799V14.1532H155.377V1.76001Z" fill="black"/>
<path d="M175.623 14.1532L173.064 9.79201H171.719V14.1532H168.966V1.76001H173.94C176.354 1.76001 178.182 3.4743 178.182 5.76915C178.182 7.40572 177.278 8.73601 175.884 9.38058L178.816 14.1532H175.623ZM171.724 7.19087H173.944C174.849 7.19087 175.435 6.63772 175.435 5.76915C175.435 4.9143 174.854 4.36115 173.944 4.36115H171.724V7.19087Z" fill="black"/>
</svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.15176 6.19201C3.30356 6.29913 3.76114 6.61727 4.52452 7.14627C5.28792 7.67526 5.87273 8.08257 6.27899 8.36823C6.32363 8.39954 6.41845 8.4676 6.56352 8.57252C6.70861 8.6775 6.82917 8.76234 6.9251 8.82705C7.0211 8.89174 7.13715 8.9643 7.27337 9.04464C7.40955 9.1249 7.53792 9.18527 7.65845 9.22524C7.77901 9.26553 7.89061 9.28549 7.99327 9.28549H8H8.00675C8.10941 9.28549 8.22106 9.26551 8.34161 9.22524C8.4621 9.18527 8.59059 9.12483 8.72665 9.04464C8.86278 8.96421 8.97883 8.89171 9.07483 8.82705C9.17083 8.76234 9.29129 8.6775 9.43643 8.57252C9.58147 8.46751 9.67642 8.39954 9.72105 8.36823C10.1317 8.08257 11.1764 7.3571 12.8549 6.19187C13.1808 5.96429 13.4531 5.68969 13.6718 5.36824C13.8907 5.04694 14 4.70987 14 4.35723C14 4.06254 13.8939 3.81029 13.6818 3.60049C13.4698 3.39064 13.2186 3.28577 12.9285 3.28577H3.07138C2.72766 3.28577 2.46314 3.40183 2.27787 3.63393C2.09262 3.86609 2 4.15627 2 4.50445C2 4.7857 2.12281 5.09047 2.36831 5.41857C2.61378 5.7467 2.87502 6.00454 3.15176 6.19201Z" fill="#8F8F8F"/>
<path d="M13.3303 6.90845C11.8661 7.89943 10.7544 8.66958 9.99555 9.21875C9.74109 9.40618 9.53467 9.55249 9.37614 9.65733C9.21761 9.76224 9.00678 9.86938 8.74333 9.9787C8.47999 10.0882 8.23456 10.1428 8.00684 10.1428H8.00001H7.99328C7.76561 10.1428 7.52004 10.0882 7.25669 9.9787C6.99334 9.86938 6.78237 9.76224 6.62388 9.65733C6.46545 9.55249 6.25895 9.40618 6.00452 9.21875C5.40181 8.77682 4.29245 8.00662 2.67641 6.90845C2.42188 6.73892 2.19643 6.5446 2 6.32588V11.6427C2 11.9375 2.10487 12.1896 2.31471 12.3995C2.52451 12.6094 2.77679 12.7143 3.07145 12.7143H12.9286C13.2232 12.7143 13.4755 12.6094 13.6853 12.3995C13.8952 12.1896 14 11.9375 14 11.6427V6.32588C13.808 6.54007 13.5849 6.73439 13.3303 6.90845Z" fill="#8F8F8F"/>
</svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5Z" stroke="black"/>
<path d="M10 10L15 15" stroke="black"/>
</svg>`,
};
export default icons;
