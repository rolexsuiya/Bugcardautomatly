import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BugCard from '../screen/bugCard';
import CodeSmall from '../screen/Issue';

const AppRoutes = () => {
  return (
   <>
   <Routes>
      <Route path="/" element={<BugCard/>}></Route>
      <Route path={"/issue"} element={<CodeSmall />}></Route>
    </Routes>
   </>
  )
}

export default AppRoutes;