// Add shims and polyfills
import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";

import { define } from "hybrids";
import DvClipboardCopy from "./DvClipboardCopy";

// Enable HMR for development
if (process.env.NODE_ENV !== "production") module.hot.accept();

// Define imported web component
define("dv-clipboard-copy", DvClipboardCopy);
