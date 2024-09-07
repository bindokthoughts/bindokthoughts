import './Bulb.scss';

export default function Bulb() {
 
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 130" className="lamp">
        <g>
          <circle className="bulb" cx="30" cy="109.3" r="10.7" />
          <line style={{ fill: 'none', stroke: '#D7D5AF', strokeWidth: 0.263, strokeLinecap: 'round', strokeMiterlimit: 10 }} x1="28.1" y1="108.1" x2="27.4" y2="113.4" />
          <line style={{ fill: 'none', stroke: '#D7D5AF', strokeWidth: 0.263, strokeLinecap: 'round', strokeMiterlimit: 10 }} x1="32" y1="108.1" x2="32.6" y2="113.4" />
          <polyline style={{ fill: 'none', stroke: '#D7D5AF', strokeWidth: 0.263, strokeLinecap: 'round', strokeMiterlimit: 10 }} points="27.8,113.5 28.3,112.8 28.8,113.5 29.6,112.8 30,113.5 30.7,112.9 31.2,113.5 31.8,112.8 32.3,113.5" />
        </g>
        <rect x="20.7" y="66.7" style={{ fill: '#2D2D2F' }} width="18.6" height="15.6" />
        <rect x="28.5" y="0" style={{ fill: '#2D2D2F' }} width="3" height="66.7" />
        <path style={{ fill: '#2D2D2F' }} d="M30,80.3c-16.6,0-30,13.4-30,30h60C60,93.8,46.6,80.3,30,80.3z" />
        <path style={{ fill: '#2D2D2F' }} d="M30,80.3c-16.6,0-30,13.4-30,30h60C60,93.8,46.6,80.3,30,80.3z" />
        <g className="switch">
          <line style={{ fill: 'none', stroke: '#2D2D2F', strokeWidth: 0.5, strokeMiterlimit: 10 }} x1="49" y1="100" x2="49" y2="118" />
          <circle style={{ fill: 'none', stroke: '#2D2D2F', strokeWidth: 0.5, strokeMiterlimit: 10 }} cx="49" cy="120" r="1.6" />
        </g>
      </svg>

    </>
  )
}
