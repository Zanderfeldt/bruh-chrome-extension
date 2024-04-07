import React, { useState } from 'react';
import './App.css';

const gifUrls: Array<string> = [
  'https://media1.tenor.com/m/-g_sKUkI3MkAAAAd/what-bruh.gif',
  'https://media1.tenor.com/m/SyJNiTVc-ogAAAAC/confused-no.gif',
  'https://media1.tenor.com/m/3vyG_tzaHb4AAAAC/confused-confused-face.gif',
  'https://media1.tenor.com/m/Zm4UTU5fw2UAAAAd/bruh.gif',
  'https://media1.tenor.com/m/859O4kcSeEoAAAAC/bruh-rpx_syria.gif',
  'https://media1.tenor.com/m/TWBY86l4F54AAAAC/bruh-rpx_syria.gif',
  'https://media1.tenor.com/m/nGemHCg1iqcAAAAd/real.gif',
  'https://media1.tenor.com/m/pTQ1cO-LsaYAAAAC/uh-wtf.gif',
  'https://media1.tenor.com/m/lSmw--Y_NEoAAAAC/funny-uh-ok.gif',
  'https://media1.tenor.com/m/N33D0S5ggBsAAAAC/what-why.gif',
  'https://media1.tenor.com/m/f9aThtyRQS4AAAAC/jackie-chan-meme.gif',
  'https://media1.tenor.com/m/FE6caXZ5sS0AAAAC/confused-wth.gif',
  'https://media1.tenor.com/m/ZbVToYKumF0AAAAd/kamie-catfish.gif',
  'https://media1.tenor.com/m/Q7CCigqAEcsAAAAd/wtf-is-going-on-here-confused.gif',
  'https://media1.tenor.com/m/l48-xayit34AAAAd/yikes-now-thats-what-i-call-yikes.gif',
  'https://media1.tenor.com/m/78T_NTBNlskAAAAC/steve-carell-the-office.gif',
  'https://media1.tenor.com/m/8czoavDnT4AAAAAC/steve-carell-annoyed.gif',
  'https://media1.tenor.com/m/E-xwdW3OEvoAAAAC/well-damn.gif'
  ]


const App = () => {
  // State to track the index of the current GIF
  const [gifIndex, setGifIndex] = useState(0);

  const generateDogGif = async () => {
    // Get the active tab
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const activeTab = tabs[0];
    // Send the dog Gif
    chrome.tabs.sendMessage(activeTab.id || 0, gifUrls[gifIndex]);
    const nextIndex = (gifIndex + 1) % gifUrls.length;
    setGifIndex(nextIndex);
  };

  return (
    <main>
      {/* <h1 style={{ textAlign: 'center', marginBottom: '8px', marginTop: '8px' }}>BRUH.</h1> */}
      <img src={gifUrls[0]} />
      <button className='button-32' onClick={generateDogGif}>BRUH.</button>
    </main>
  );
};


export default App;