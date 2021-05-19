import { Hello } from "./components/hello.jsx";
import { Brand } from "./components/brand.jsx";
import { DvClipboardCopy } from "./components/dv-clipboard-copy";

customElements.define("atomico-hello", Hello);
customElements.define("atomico-brand", Brand);
customElements.define("dv-clipboard-copy", DvClipboardCopy);
