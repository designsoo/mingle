import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants';

import CreateBoard from '@/pages/CreateBoard';
import DetailBoard from '@/pages/DetailBoard';
import EditBoard from '@/pages/EditBoard';

const { createBoard, detailBoard, editBoard } = ROUTER_PATH;

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={createBoard} element={<CreateBoard />} />
        <Route path={detailBoard} element={<DetailBoard />} />
        <Route path={editBoard} element={<EditBoard />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
