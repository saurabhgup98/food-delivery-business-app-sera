import { MetricCard, ChartData } from '../../../data/dashboardData';

interface MiddleSectionProps {
  metrics: MetricCard[];
  revenueChart: ChartData;
  ordersChart: ChartData;
}

export default function MiddleSection({ metrics, revenueChart, ordersChart }: MiddleSectionProps) {
  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-emerald-400';
      case 'negative':
        return 'text-rose-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Metrics Cards - 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-blue/30 rounded-xl p-6 backdrop-blur-sm shadow-xl shadow-sera-blue/10 hover:shadow-sera-blue/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-2">{metric.title}</p>
                <p className="text-white text-3xl font-bold mb-1">{metric.value}</p>
                <p className={`text-sm font-semibold ${getChangeColor(metric.changeType)}`}>
                  {metric.change}
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-sera-blue/30 to-sera-pink/20 rounded-xl flex items-center justify-center text-3xl">
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Charts - 1 per row */}
      <div className="space-y-6">
        {/* Revenue Chart */}
        <div className="bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-blue/30 rounded-xl p-6 backdrop-blur-sm shadow-xl shadow-sera-blue/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-bold text-lg">Revenue Chart</h3>
              <p className="text-gray-400 text-sm">Monthly revenue trends</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-sera-blue rounded-full"></div>
              <span className="text-sera-blue text-sm font-medium">Revenue</span>
            </div>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="h-64 flex items-end justify-between space-x-2">
            {revenueChart.datasets[0].data.map((value, index) => {
              const maxValue = Math.max(...revenueChart.datasets[0].data);
              const height = (value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-sera-blue/80 to-sera-blue/40 rounded-t-lg transition-all duration-500 hover:from-sera-blue to-sera-blue/60"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-gray-400 text-xs">{revenueChart.labels[index]}</span>
                  <span className="text-white text-xs font-medium">${(value / 1000).toFixed(1)}k</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-gradient-to-br from-dark-800/95 via-dark-700/90 to-dark-600/85 border border-sera-green/30 rounded-xl p-6 backdrop-blur-sm shadow-xl shadow-sera-green/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-bold text-lg">Orders Chart</h3>
              <p className="text-gray-400 text-sm">Monthly order trends</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-sera-green rounded-full"></div>
              <span className="text-sera-green text-sm font-medium">Orders</span>
            </div>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="h-64 flex items-end justify-between space-x-2">
            {ordersChart.datasets[0].data.map((value, index) => {
              const maxValue = Math.max(...ordersChart.datasets[0].data);
              const height = (value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-sera-green/80 to-sera-green/40 rounded-t-lg transition-all duration-500 hover:from-sera-green to-sera-green/60"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-gray-400 text-xs">{ordersChart.labels[index]}</span>
                  <span className="text-white text-xs font-medium">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
