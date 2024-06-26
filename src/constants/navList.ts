import { ROUTER_PATH, SVGS } from '@/constants';

const { home, search, dashboard } = SVGS;
const { landing, boardList, createBoard } = ROUTER_PATH;

export const NAV_LIST = [
  { id: 0, value: home, path: landing },
  { id: 1, value: search, path: boardList },
  { id: 2, value: dashboard, path: createBoard },
];
