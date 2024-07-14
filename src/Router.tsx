import { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants';

const Landing = lazy(() => import('@/pages/Landing'));
const BoardList = lazy(() => import('@/pages/BoardList'));
const CreateBoard = lazy(() => import('@/pages/CreateBoard'));
const DetailBoard = lazy(() => import('@/pages/DetailBoard'));
const EditBoard = lazy(() => import('@/pages/EditBoard'));
const AddCard = lazy(() => import('@/pages/AddCard'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const { landing, createBoard, detailBoard, editBoard, addCard, boardList } = ROUTER_PATH;

const MyRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={createBoard} element={<CreateBoard />} />
          <Route path={detailBoard} element={<DetailBoard />} />
          <Route path={editBoard} element={<EditBoard />} />
          <Route path={addCard} element={<AddCard />} />
          <Route path={boardList} element={<BoardList />} />
          <Route path={landing} element={<Landing />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MyRouter;
