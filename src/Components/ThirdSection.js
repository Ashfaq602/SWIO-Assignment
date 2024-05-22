// import React from 'react';
// import './ThirdSection.css';

// const ThirdSection = () => {
//     return (
//         <div className="third-section">
//             <img src="https://replay.software/sleeve/images/IconArrayThemeDark@2x.png" alt="Icon Array Theme Dark" />
//             <img src="https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png" alt="Icon Array Layout Dark" />
//             <img src="https://replay.software/sleeve/images/IconArraySettingsDark@2x.png" alt="Icon Array Settings Dark" />
//             <img src="https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png" alt="Icon Array Layout Dark" />

//             <h5>CUSTOMIZATION</h5>
//             <h1>Countless ways to customize.</h1>
//             <h3>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h3>

//             <img src="https://replay.software/sleeve/images/IconHotkeysDark@2x.png"  />
//             <h2>Settings</h2>
//             <p>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.

// Show it in the Dock, choose from custom icons, or keep it on the Desktop only.

// Set your custom keyboard shortcuts and integrate with the apps you use.</p>
// <div className="container2">
//     <img src="https://github.com/mnogu/adjust-sound-volume/blob/main/screenshot.png?raw=true" alt="" />
// </div>
//         </div>
//     );
// };

// export default ThirdSection;
import React from 'react';
import './ThirdSection.css';

const ThirdSection = () => {
    return (
        <div className="third-section">
            <div className="settings-container">
                <div className="settings-content">
                    <h2>Settings</h2>
                    <p>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it. Show it in the Dock, choose from custom icons, or keep it on the Desktop only. Set your custom keyboard shortcuts and integrate with the apps you use.</p>
                </div>
                <div className="container2">
                    <img src="https://github.com/mnogu/adjust-sound-volume/blob/main/screenshot.png?raw=true" alt="" />
                </div>
            </div>
            <img src="https://replay.software/sleeve/images/IconArrayThemeDark@2x.png" alt="Icon Array Theme Dark" />
            <img src="https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png" alt="Icon Array Layout Dark" />
            <img src="https://replay.software/sleeve/images/IconArraySettingsDark@2x.png" alt="Icon Array Settings Dark" />
            <img src="https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png" alt="Icon Array Layout Dark" />
            <h5>CUSTOMIZATION</h5>
            <h1>Countless ways to customize.</h1>
            <h3>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h3>
        </div>
    );
};

export default ThirdSection;

