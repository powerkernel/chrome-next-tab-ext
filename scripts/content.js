const btns = document.getElementsByClassName('ack-btn');
if (btns.length > 0) {
  [].map.call(btns, (btn) => {
    btn.addEventListener('click', handleClick);
  });
}

async function handleClick(event) {
  chrome.runtime.sendMessage({ action: 'next_tab' });
}
