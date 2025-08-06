'use client';

import React from 'react';
import Button from '@/components/atoms/Button';

type ChartType = 'bar' | 'line' | 'pie';

interface ChartTypeSwitcherProps {
  currentType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

const ChartTypeSwitcher: React.FC<ChartTypeSwitcherProps> = ({ currentType, onTypeChange }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <Button
        variant={currentType === 'bar' ? 'primary' : 'secondary'}
        onClick={() => onTypeChange('bar')}
      >
        Bar Chart
      </Button>
      <Button
        variant={currentType === 'line' ? 'primary' : 'secondary'}
        onClick={() => onTypeChange('line')}
      >
        Line Chart
      </Button>
      <Button
        variant={currentType === 'pie' ? 'primary' : 'secondary'}
        onClick={() => onTypeChange('pie')}
      >
        Pie Chart
      </Button>
    </div>
  );
};

export default ChartTypeSwitcher;
