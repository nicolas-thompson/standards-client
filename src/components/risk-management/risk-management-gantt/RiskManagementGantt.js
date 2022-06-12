import Gantt from '../../gantt/Gantt';

import CSS from './RiskManagementGantt.module.css';

const RiskManagementGantt = () => {
  const data = {
    data: [
      { id: 1, text: 'Task #1', start_date: '2022-04-15', duration: 3, progress: 0.6 },
      { id: 2, text: 'Task #2', start_date: '2022-04-18', duration: 3, progress: 0.4 }
    ],
    links: [
      { id: 1, source: 1, target: 2, type: '0' }
    ]
  };

  return (
    <div>
      <div className={CSS["gantt-container"]}>
        <Gantt tasks={data} />
      </div>
    </div>
  );
}

export default RiskManagementGantt;
