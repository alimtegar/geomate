import { MdOutlineHome, MdOutlineLeaderboard, MdOutlinePersonOutline } from 'react-icons/md';

// Types
import Shape from './types/Shape';

export const SHAPES: Shape[] = [
  {
    id: 1,
    name: 'Bola',
    code: 'sphere',
    stimulation: 'Ut Consequat Semper Viverra Nam?',
    stimulationImage: '/images/placeholder-image.jpeg',
    problemIdentification: 'Aliquam Faucibus Purus in Massa?',
    problemIdentificationImage: '/images/placeholder-image.jpeg',
    description: 'Bola adalah objek geometri dalam ruang tiga dimensi yang merupakan permukaan dari bola, analog dengan objek melingkar dalam dua dimensi, yaitu "lingkaran" adalah batas dari "cakram".',
    vFormula: '( 4 / 3 ) * PI * r ^ 3',
    lpFormula: '4 * PI * r ^ 2',
    nVertices: 0,
    nEdges: 0,
    nFaces: 1,
  },
  {
    id: 2,
    name: 'Tabung',
    code: 'cylinder',
    stimulation: 'Ut Consequat Semper Viverra Nam?',
    stimulationImage: '/images/placeholder-image.jpeg',
    problemIdentification: 'Aliquam Faucibus Purus in Massa?',
    problemIdentificationImage: '/images/placeholder-image.jpeg',
    description: 'Tabung atau silinder adalah bangun ruang tiga dimensi yang dibentuk oleh dua buah lingkaran identik yang sejajar dan sebuah persegi panjang yang mengelilingi kedua lingkaran tersebut. Tabung memiliki 3 sisi dan 2 rusuk.',
    vFormula: 'PI * r ^ 2 * t',
    lpFormula: '2 * PI * r * ( r + t )',
    nVertices: 0,
    nEdges: 2,
    nFaces: 3,
  },
  {
    id: 3,
    name: 'Prisma',
    code: 'prism',
    stimulation: 'Ut Consequat Semper Viverra Nam?',
    stimulationImage: '/images/placeholder-image.jpeg',
    problemIdentification: 'Aliquam Faucibus Purus in Massa?',
    problemIdentificationImage: '/images/placeholder-image.jpeg',
    description: 'Dalam geometri, prisma adalah bangun ruang tiga dimensi yang dibatasi oleh alas dan tutup identik berbentuk segi-n dan sisi-sisi tegak berbentuk persegi atau persegi panjang. Dengan kata lain prisma adalah bangun ruang yang mempunyai penampang melintang yang selalu sama dalam bentuk dan ukuran. Prisma segi-n memiliki n + 2 sisi, 3n rusuk dan 2n titik sudut.',
    vFormula: 'LA * t',
    lpFormula: '( 2 * LA ) + ( KA * t )',
    nVertices: -1,
    nEdges: -1,
    nFaces: -1,
  },
  {
    id: 4,
    name: 'Kerucut',
    code: 'cone',
    stimulation: 'Ut Consequat Semper Viverra Nam?',
    stimulationImage: '/images/placeholder-image.jpeg',
    problemIdentification: 'Aliquam Faucibus Purus in Massa?',
    problemIdentificationImage: '/images/placeholder-image.jpeg',
    description: 'Dalam geometri, kerucut adalah sebuah limas istimewa yang beralas lingkaran. Kerucut memiliki 2 sisi, 1 rusuk, dan 1 titik sudut.',
    vFormula: '( 1 / 3 ) * PI * r ^ 2 * t',
    lpFormula: 'PI * r * ( r + s )',
    nVertices: 1,
    nEdges: 1,
    nFaces: 2,
  },
  {
    id: 5,
    name: 'Limas',
    code: 'pyramid',
    stimulation: 'Ut Consequat Semper Viverra Nam?',
    stimulationImage: '/images/placeholder-image.jpeg',
    problemIdentification: 'Aliquam Faucibus Purus in Massa?',
    problemIdentificationImage: '/images/placeholder-image.jpeg',
    description: 'Dalam geometri, limas adalah bangun ruang tiga dimensi yang dibatasi oleh alas berbentuk segi-n dan sisi-sisi tegak berbentuk segitiga. Limas memiliki n + 1 sisi, 2n rusuk dan n + 1 titik sudut.',
    vFormula: '( 1 / 3 ) * LA * t',
    lpFormula: 'LA + LST',
    nVertices: -1,
    nEdges: -1,
    nFaces: -1,
  },
];

export const MATH_SYMBOLS = [
  {
    symbol: 'r',
    title: 'Radius',
  },
  {
    symbol: 't',
    title: 'Tinggi',
  },
  {
    symbol: 's',
    title: 'Garis Pelukis',
  },
  {
    symbol: 'LA',
    title: 'Luas Alas',
  },
  {
    symbol: 'LST',
    title: 'Luas Sisi Tegak',
  },
  {
    symbol: 'KA',
    title: 'Keliling Alas',
  },
  {
    symbol: 'V',
    title: 'Volume',
  },
  {
    symbol: 'LP',
    title: 'Luas Permukaan'
  },
];

export const NAVBAR_BOTTOM_MENU = [
  {
    icon: (<MdOutlineHome className="text-2xl" />),
    title: 'Beranda',
    href: '/',
  },
  {
    icon: (<MdOutlineLeaderboard className="text-2xl" />),
    title: 'Peringkat',
    href: '/leaderboard',
  },
  {
    icon: (<MdOutlinePersonOutline className="text-2xl" />),
    title: 'Profil',
    href: '/profile',
  },
];