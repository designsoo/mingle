import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants';

import AddCard from '@/pages/AddCard';
import CreateBoard from '@/pages/CreateBoard';
import DetailBoard from '@/pages/DetailBoard';
import EditBoard from '@/pages/EditBoard';

const { createBoard, detailBoard, editBoard, addCard } = ROUTER_PATH;

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={createBoard} element={<CreateBoard />} />
        <Route path={detailBoard} element={<DetailBoard />} />
        <Route path={editBoard} element={<EditBoard />} />
        <Route path={addCard} element={<AddCard />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
