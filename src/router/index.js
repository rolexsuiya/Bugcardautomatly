import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Issues from '../components/issues/issues';
import BugCard from '../screen/bugCard';
import CodeSmall from '../screen/Issue';


const AppRoutes = () => {
  return (
   <>
   <Routes>
      <Route path="/" element={<BugCard/>}></Route>
      <Route path={"/issue"} element={<Issues />}></Route>
      <Route path={"/CodeSmall"} element={<CodeSmall />}></Route>
    </Routes>
   </>
  )
}

export default AppRoutes;