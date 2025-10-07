import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: 'content/docs',
  source: docs.toFumadocsSource(),
});