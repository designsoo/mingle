import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTER_PATH } from '@/constants';

import CreateBoard from '@/pages/CreateBoard';

const { createBoard } = ROUTER_PATH;

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={createBoard} element={<CreateBoard />} />
      </Routes>
    </Router>
  );
};

export default MyRouter;
