import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { registerDocSearchTools } from './tools';

export default function docSearchExtension(pi: ExtensionAPI) {
  registerDocSearchTools(pi);
}
