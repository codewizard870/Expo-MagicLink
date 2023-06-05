import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const YellowCheckBadge = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        stroke="#FEDF89"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.125}
        d="M8.047 1.018a1.223 1.223 0 0 1 1.905 0l1.134 1.41a1.222 1.222 0 0 0 1.085.45l1.8-.195a1.222 1.222 0 0 1 1.35 1.35l-.196 1.8a1.222 1.222 0 0 0 .45 1.084l1.411 1.134a1.222 1.222 0 0 1 0 1.905l-1.415 1.129a1.223 1.223 0 0 0-.45 1.085l.195 1.8a1.22 1.22 0 0 1-1.35 1.35l-1.8-.196a1.221 1.221 0 0 0-1.084.45l-1.13 1.406a1.22 1.22 0 0 1-1.905 0l-1.133-1.41a1.224 1.224 0 0 0-1.085-.45l-1.8.196a1.221 1.221 0 0 1-1.35-1.35l.196-1.8a1.223 1.223 0 0 0-.45-1.085l-1.41-1.134a1.222 1.222 0 0 1 0-1.905l1.41-1.134a1.22 1.22 0 0 0 .45-1.084l-.196-1.8a1.222 1.222 0 0 1 1.35-1.35l1.8.195a1.224 1.224 0 0 0 1.085-.45l1.133-1.401Z"
      />
      <Path
        fill="#000"
        d="M7.72 10.39V9.28h1.63c.213 0 .407-.043.58-.13.173-.087.31-.21.41-.37.1-.167.15-.367.15-.6 0-.227-.05-.423-.15-.59a.98.98 0 0 0-.41-.38 1.279 1.279 0 0 0-.58-.13H7.72V5.97h1.77c.447 0 .847.09 1.2.27.36.18.643.437.85.77.207.327.31.717.31 1.17 0 .453-.103.847-.31 1.18-.207.327-.49.58-.85.76-.353.18-.753.27-1.2.27H7.72Zm-1 2.61V5.97h1.36V13H6.72Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9}
        x2={9}
        y1={0.562}
        y2={17.437}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEC84B" />
        <Stop offset={1} stopColor="#F79009" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default YellowCheckBadge;
