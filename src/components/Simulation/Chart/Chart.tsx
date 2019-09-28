import React from 'react';
import styles from './Chart.module.css';
import Candlestick from './Candlestick';
import TradeMarkers from './TradeMarkers';
import NowMarker from './NowMarker';

export default function Chart(props) {
  let {
    chartWidth,
    chartHeight,
    ohlcData,
    xScale,
    yScale,
    barWidth,
    simulationIndex,
    selectedIndex,
    pattern,
    trades,
    focalTradeIndex,
    onBarMouseOver,
    onBarMouseOut,
    onBarClick,
  } = props;

  return (
    <svg className={styles.chart} width={chartWidth} height={chartHeight}>
      <Candlestick
        {...{
          ohlcData,
          simulationIndex,
          selectedIndex,
          pattern,
          onBarMouseOver,
          onBarMouseOut,
          onBarClick,
          xScale,
          yScale,
          barWidth,
        }}
      />
      <NowMarker
        x={
          ohlcData[simulationIndex]
            ? xScale(ohlcData[simulationIndex].date) + barWidth
            : 0
        }
        dimmed={selectedIndex > -1 || simulationIndex === ohlcData.length - 1}
      />
      <TradeMarkers
        {...{
          trades,
          ohlcData,
          xScale,
          yScale,
          focalTradeIndex,
          selectedTradeIndex: selectedIndex + 1,
        }}
      />
    </svg>
  );
}
