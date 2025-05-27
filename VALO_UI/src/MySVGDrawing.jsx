import React from 'react';

function MyFullscreenSVGDrawing() {
const screenWidth = 1920;
const screenHeight = 1080;

return (
    <svg width={screenWidth} height={screenHeight} viewBox={`0 0 ${screenWidth} ${screenHeight}`} style={{ width: '100vw', height: '100vh' }}>

    <rect
        x="0"
        y="705"
        width="480"
        height="90"
        fill="rgba(255, 0, 0, 0.5)" // 半透明の赤
        stroke="red"
        strokeWidth="5"
    />

    <circle
        cx={screenWidth - 100} // 右端から100px内側
        cy="100" // 上端から100px下側
        r={screenHeight / 10}
        fill="rgba(0, 0, 255, 0.5)" // 半透明の青
        stroke="blue"
        strokeWidth="5"
    />

    <line
        x1="50"
        y1={screenHeight - 50}
        x2={screenWidth - 50}
        y2={screenHeight - 50}
        stroke="green"
        strokeWidth="10"
    />
    </svg>
);
}

export default MyFullscreenSVGDrawing;