/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import Module0 from './pages/Module0';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';
import Module5 from './pages/Module5';
import Module6 from './pages/Module6';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="module/0" element={<Module0 />} />
          <Route path="module/1" element={<Module1 />} />
          <Route path="module/2" element={<Module2 />} />
          <Route path="module/3" element={<Module3 />} />
          <Route path="module/4" element={<Module4 />} />
          <Route path="module/5" element={<Module5 />} />
          <Route path="module/6" element={<Module6 />} />
        </Route>
      </Routes>
    </Router>
  );
}
