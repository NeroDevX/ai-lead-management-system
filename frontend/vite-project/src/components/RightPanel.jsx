import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

import"./RightPanel.css";

function RightPanel({
    total,
    newLeads,
    contacted,
    closed,
})  {

  const chartData = [
    {
        name: "New",
        value: newLeads,
        color: "#8B5CF6"
    },
    {
        name: "Contacted",
        value: contacted,
        color:"#FB923C"
    },
    {
        name: "Closed",
        value: closed,
        color: "#4ADE80"
    },
];
  
  return (
    <div className="right-panel">

      <div className="panel-card">

  <h3>📊 Leads Overview</h3>

  <div className="overview-chart">

    <div className="chart-wrapper">

      <ResponsiveContainer width={180} height={180}>

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            stroke="none"
          >

            {chartData.map((entry, index) => (

              <Cell
                key={index}
                fill={entry.color}
              />

            ))}

          </Pie>

        </PieChart>

      </ResponsiveContainer>

      <div className="chart-center">

        <h2>{total}</h2>

        <p>Total</p>

      </div>

    </div>

    <div className="chart-legend">

      {chartData.map((item) => {

        const percent =
          total === 0
            ? 0
            : Math.round((item.value / total) * 100);

        return (

          <div
            key={item.name}
            className="legend-item"
          >

            <span
              className="legend-color"
              style={{
                background: item.color,
              }}
            ></span>

            <div>

              <strong>{item.name}</strong>

              <p>
                {item.value} ({percent}%)
              </p>

            </div>

          </div>

        );

      })}

    </div>

  </div>

</div>

      <div className="panel-card">

        <h3>📈 Recent Activity</h3>

        <div className="activity-list">

          <div className="activity-item">
            <span className="activity-dot blue"></span>
            <p>Alex added a new lead</p>
          </div>

          <div className="activity-item">
            <span className="activity-dot green"></span>
            <p>Emma closed a deal</p>
          </div>

          <div className="activity-item">
            <span className="activity-dot orange"></span>
            <p>Michael contacted client</p>
          </div>

        </div>

      </div>

      <div className="panel-card">

        <h3>🤖 AI Assistant</h3>

        <div className="ai-card">

          <p>

            AI will analyze your CRM
            and recommend which leads
            should be contacted first.

          </p>

          <button className="assistant-button">

            Open Assistant

          </button>

        </div>

      </div>

    </div>
  );
}

export default RightPanel;