import { c, useState } from "atomico";
import { copyTextToClipboard } from "../../utils";
import style from './style.css';

function dvClipboardCopy({ text }) {
  const [copied, setCopied] = useState(false);
  
  function handleClick(e) {
    e.preventDefault();
    copyTextToClipboard(text)
      .then(() => {
        setCopied(true);
        window.alert('Copied text to clipboard!');
      })
      .catch(() => {
        window.alert('Failed to copy text to clipboard.');
      });
  }
  return (
    <host shadowDom>
      <style>{style}</style>
      <div class="container">
        <div class="clipboard-copy">
          <input class="clipboard-copy-input" type="text" value={text} readonly />
          <button
            class="clipboard-copy-button"
            onclick={(e) => handleClick(e)}
          >
            Copy
          </button>
          <button
            onclick={() => setCopied(false)}
          >
            Reset
          </button>
          <button class="clipboard-state-button" style={`background-color: ${copied ? 'green' : 'red'}`}>
            {copied ? 'Copied' : 'Not Copied'}
          </button>
        </div>
      </div>
    </host>
  );
}

dvClipboardCopy.props = {
  text: {
    type: String,
    value: "",
  }
};

export const DvClipboardCopy = c(dvClipboardCopy);
