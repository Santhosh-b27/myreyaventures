import React from 'react';

// Perfectly centered, high-fidelity vector logos for Mytreya's partners & clients
export const CLIENT_LOGOS = [
  {
    id: "siemens",
    name: "Siemens",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 220 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="110" y="27" textAnchor="middle" dominantBaseline="middle" fill="#009999" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="32" letterSpacing="3">
          SIEMENS
        </text>
      </svg>
    )
  },
  {
    id: "mmc-gamuda",
    name: "MMC Gamuda",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 250 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(12, 0)">
          <rect x="0" y="9" width="28" height="32" rx="4" fill="#0A3B7B"/>
          <text x="6" y="32" fill="#FFFFFF" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="18">M</text>
          <text x="34" y="34" fill="#0A3B7B" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="25" letterSpacing="1">MMC</text>
          <line x1="100" y1="9" x2="100" y2="41" stroke="#CBD5E1" strokeWidth="2.5"/>
          <text x="112" y="34" fill="#2563EB" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="25" letterSpacing="0.5">GAMUDA</text>
        </g>
      </svg>
    )
  },
  {
    id: "motorola",
    name: "Motorola Solutions",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 240 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 0)">
          <circle cx="20" cy="25" r="19" fill="#0F172A"/>
          <path d="M10 33L15 17L20 28L25 17L30 33" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="48" y="32" fill="#0F172A" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="20" letterSpacing="1.5">
            MOTOROLA
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "mhi",
    name: "Mitsubishi Heavy Industries",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 240 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 0)">
          <g fill="#E60012">
            <polygon points="20,5 29,21 11,21" />
            <polygon points="11,21 20,37 2,37" />
            <polygon points="29,21 38,37 20,37" />
          </g>
          <text x="44" y="24" fill="#1E293B" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">
            MITSUBISHI
          </text>
          <text x="44" y="38" fill="#64748B" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="1.5">
            HEAVY INDUSTRIES
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "lt-hydrocarbon",
    name: "L&T Hydrocarbon Engineering",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 250 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(12, 0)">
          <rect x="0" y="7" width="50" height="34" rx="5" fill="#005BA3"/>
          <text x="6" y="31" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20">L&T</text>
          <text x="60" y="25" fill="#005BA3" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="18">LARSEN & TOUBRO</text>
          <text x="60" y="39" fill="#F6931C" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="11" letterSpacing="1.5">HYDROCARBON</text>
        </g>
      </svg>
    )
  },
  {
    id: "petrofac",
    name: "Petrofac",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 190 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="85" y="26" textAnchor="middle" dominantBaseline="middle" fill="#0F172A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="28">
          Petrofac
        </text>
        <circle cx="145" cy="24" r="5" fill="#2563EB"/>
      </svg>
    )
  },
  {
    id: "hpcl",
    name: "HPCL",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 170 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 0)">
          <circle cx="20" cy="25" r="18" fill="#0A3B7B"/>
          <path d="M13 16H18V34H13V16ZM22 16H27V34H22V16Z" fill="#E60012"/>
          <text x="46" y="33" fill="#0A3B7B" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="26" letterSpacing="2">
            HPCL
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "colas-rail",
    name: "Colas Rail",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 220 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 0)">
          <polygon points="0,25 15,8 30,25 15,42" fill="#F59E0B" />
          <polygon points="15,25 30,8 45,25 30,42" fill="#0F172A" />
          <text x="52" y="33" fill="#0F172A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1.5">
            COLAS <tspan fill="#F59E0B">RAIL</tspan>
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "tecnimont",
    name: "Tecnimont",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 210 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="105" y="22" textAnchor="middle" fill="#1E293B" fontFamily="Times New Roman, serif" fontWeight="900" fontSize="25" letterSpacing="1.5">
          TECNIMONT
        </text>
        <text x="105" y="38" textAnchor="middle" fill="#F6931C" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="9.5" letterSpacing="2.5">
          MAIRE GROUP E&I
        </text>
      </svg>
    )
  },
  {
    id: "sapura-evd",
    name: "Sapura EVD",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 200 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(18, 0)">
          <path d="M4 13L18 8L32 13L18 37Z" fill="#F6931C"/>
          <text x="40" y="32" fill="#0F172A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="24">
            Sapura <tspan fill="#F6931C">EVD</tspan>
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "eil",
    name: "EIL",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 170 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 0)">
          <rect x="0" y="8" width="34" height="32" rx="5" fill="#1E3A8A"/>
          <text x="7" y="30" fill="#FFFFFF" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="19">EI</text>
          <text x="44" y="32" fill="#1E3A8A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="26" letterSpacing="3.5">
            EIL
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "apex",
    name: "APEX",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 170 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 0)">
          <path d="M0 35L13 8L26 35H18L13 21L8 35H0Z" fill="#1E3A8A"/>
          <text x="34" y="33" fill="#1E3A8A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="26" letterSpacing="2.5">
            APEX
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "george-kent",
    name: "George Kent",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 220 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="110" y="22" textAnchor="middle" fill="#0F172A" fontFamily="Georgia, serif" fontWeight="900" fontSize="21" letterSpacing="1">
          GEORGE KENT
        </text>
        <text x="110" y="38" textAnchor="middle" fill="#D97706" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="9.5" letterSpacing="2.5">
          MALAYSIA BERHAD
        </text>
      </svg>
    )
  },
  {
    id: "meiden",
    name: "Meiden",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 180 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="90" y="26" textAnchor="middle" dominantBaseline="middle" fill="#0F172A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="28" letterSpacing="3">
          MEIDEN
        </text>
      </svg>
    )
  },
  {
    id: "parsons",
    name: "Parsons",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 180 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="90" y="26" textAnchor="middle" dominantBaseline="middle" fill="#DC2626" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="900" fontSize="28">
          PARSONS
        </text>
      </svg>
    )
  },
  {
    id: "dmia",
    name: "DMIA",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 160 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 0)">
          <rect x="0" y="8" width="32" height="32" rx="5" fill="#0F172A" />
          <text x="5" y="30" fill="#F6931C" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="20">D</text>
          <text x="40" y="33" fill="#0F172A" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="26" letterSpacing="1.5">
            DMIA
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "vkpt",
    name: "VKPT",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 150 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="75" y="26" textAnchor="middle" dominantBaseline="middle" fill="#1E293B" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="26" letterSpacing="3">
          VKPT
        </text>
      </svg>
    )
  },
  {
    id: "sai-engineering",
    name: "Sai Engineering",
    logo: (
      <svg className="w-full h-full max-h-12 md:max-h-14 overflow-visible" viewBox="0 0 220 50" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="110" y="26" textAnchor="middle" dominantBaseline="middle" fill="#0F172A" fontFamily="Times New Roman, serif" fontStyle="italic" fontWeight="900" fontSize="21">
          SAI ENGINEERING
        </text>
      </svg>
    )
  }
];
