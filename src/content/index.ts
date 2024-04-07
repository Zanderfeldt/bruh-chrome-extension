const gifContainer = document.createElement('div');
      gifContainer.style.position = 'fixed'; // Position the container relative to the viewport
      gifContainer.style.top = '0'; // Align the container to the top of the viewport
      gifContainer.style.left = '0'; // Align the container to the left of the viewport
      gifContainer.style.width = '100%'; // Make the container full width of the viewport
      gifContainer.style.height = '100%'; // Make the container full height of the viewport
      gifContainer.style.zIndex = '9999'; // Ensure the container appears on top
      gifContainer.style.pointerEvents = 'none'; // Make the container click-through
      gifContainer.style.backgroundColor = 'transparent';
      gifContainer.style.margin = '0px'
      gifContainer.style.padding = '0px'
      document.body.appendChild(gifContainer);

chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse) {
      const bruhImg: HTMLImageElement = document.createElement('img');
      bruhImg.src = msg;
      bruhImg.style.width = '200px';
      bruhImg.style.height = 'auto';

      
      const randomTop = Math.floor(Math.random() * (gifContainer.offsetHeight - bruhImg.offsetHeight)) + 'px';
      const randomLeft = Math.floor(Math.random() * (gifContainer.offsetWidth - bruhImg.offsetWidth)) + 'px';
      bruhImg.style.position = 'absolute';
      bruhImg.style.top = randomTop;
      bruhImg.style.left = randomLeft;
      gifContainer.appendChild(bruhImg);
    }
  );