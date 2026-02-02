import type { StaticImageData } from 'next/image';

import andreLoja from '../advisory-board/andre-loja.jpeg';
import mafaldaBrazao from './mafalda-brazao.jpeg';
import luisaCosta from './luisa-costa.png';
import mariliaMarques from './marilia-marques.png';
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
  luisaCosta
};
