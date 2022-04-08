const parseFloatFromMasked = (masked?: string) => {
  const mValueString = masked?.toString().replace(/\s/g, '');
  const value = mValueString?.replace(/\D/g, '') || '';
  return +value;
};

const removeAllPoints = (valuePoints?: string) => {
  if (valuePoints == null) {
    return 0;
  }
  const value = valuePoints?.replace(/\./g, '') || 0;
  return +value;
};

const numberWithPoints = (value: string) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return value.toString().replace(regex, '.');
};

export { parseFloatFromMasked, removeAllPoints, numberWithPoints };
