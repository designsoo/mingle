import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants';

import AddCard from '@/pages/AddCard';
import BoardList from '@/pages/BoardList';
import CreateBoard from '@/pages/CreateBoard';
import DetailBoard from '@/pages/DetailBoard';
import EditBoard from '@/pages/EditBoard';

const { createBoard, detailBoard, editBoard, addCard, boardList } = ROUTER_PATH;

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={createBoard} element={<CreateBoard />} />
        <Route path={detailBoard} element={<DetailBoard />} />
        <Route path={editBoard} element={<EditBoard />} />
        <Route path={addCard} element={<AddCard />} />
        <Route path={boardList} element={<BoardList />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
