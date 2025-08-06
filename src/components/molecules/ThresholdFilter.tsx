'use client';

import React from 'react';
import Input from '@/components/atoms/Input';

interface ThresholdFilterProps {
  threshold: number | '';
  onThresholdChange: (value: number | '') => void;
}

const ThresholdFilter: React.FC<ThresholdFilterProps> = ({ threshold, onThresholdChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onThresholdChange('');
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && numValue >= 0) {
        onThresholdChange(numValue);
      }
    }
  };

  return (
    <div className="mb-4">
      <Input
        label="Sales Threshold"
        type="number"
        value={threshold}
        onChange={handleChange}
        placeholder="e.g., 3000"
        min="0"
      />
    </div>
  );
};

export default ThresholdFilter;
