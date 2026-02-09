import type { StaticImageData } from 'next/image';

import andreLoja from '../advisory-board/andre-loja.jpg';
import mafaldaBrazao from './mafalda-brazao.jpg';
import luisaCosta from './luisa-costa.jpeg';
import mariliaMarques from './marilia-marques.jpg';
import inesLouro from './ines-louro.jpg';
import henriqueAlbuquerque from './henrique-albuquerque.jpg';
import carolinaRoovers from './carolina-roovers.jpeg';

export const pictures: Record<string, StaticImageData> = {
  andreLoja,
  carolinaRoovers,
  henriqueAlbuquerque,
  inesLouro,
  mafaldaBrazao,
  mariliaMarques,
  luisaCosta,
};
