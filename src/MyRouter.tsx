import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants';

import CreateBoard from '@/pages/CreateBoard';
import DetailBoard from '@/pages/DetailBoard';

const { createBoard, detailBoard } = ROUTER_PATH;

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={createBoard} element={<CreateBoard />} />
        <Route path={detailBoard} element={<DetailBoard />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
