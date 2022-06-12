import { useEffect } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './Gantt.css';

const Gantt = ({ ganttContainer, tasks }) => {

  useEffect(() => {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.init(ganttContainer);
    gantt.parse(tasks);
  }, [ganttContainer, tasks]);

  return (
    <div
      ref={(input) => { ganttContainer = input }}
      style={{ width: '100%', height: '400px' }}
    ></div>
  );
}

export default Gantt;