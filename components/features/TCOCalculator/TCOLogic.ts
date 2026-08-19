export interface TCOInput {
  power: number;
  hoursPerYear: number;
  electricityCost: number;
  pumpPrice: number;
  sparePartsCost: number;
  downtimeCostPerHour: number;
  pemoEfficiency: number;
  analogEfficiency: number;
}

export interface TCOResult {
  pemo: {
    energyCost: number;
    partsCost: number;
    downtimeCost: number;
    total: number;
  };
  analog: {
    energyCost: number;
    partsCost: number;
    downtimeCost: number;
    total: number;
  };
  savingsPerYear: number;
  paybackPeriod: number;
}

export function calculateTCO(input: TCOInput): TCOResult {
  const pemoEnergyCost = (input.power / input.pemoEfficiency) * input.hoursPerYear * input.electricityCost;
  const analogEnergyCost = (input.power / input.analogEfficiency) * input.hoursPerYear * input.electricityCost;

  const pemoPartsCost = input.sparePartsCost * 0.8;
  const analogPartsCost = input.sparePartsCost;

  const pemoDowntimeCost = input.downtimeCostPerHour * 10;
  const analogDowntimeCost = input.downtimeCostPerHour * 30;

  const pemoTotal = pemoEnergyCost + pemoPartsCost + pemoDowntimeCost;
  const analogTotal = analogEnergyCost + analogPartsCost + analogDowntimeCost;

  const savingsPerYear = analogTotal - pemoTotal;
  const paybackPeriod = savingsPerYear > 0 ? (input.pumpPrice / savingsPerYear) * 12 : 0;

  return {
    pemo: {
      energyCost: Math.round(pemoEnergyCost),
      partsCost: Math.round(pemoPartsCost),
      downtimeCost: Math.round(pemoDowntimeCost),
      total: Math.round(pemoTotal),
    },
    analog: {
      energyCost: Math.round(analogEnergyCost),
      partsCost: Math.round(analogPartsCost),
      downtimeCost: Math.round(analogDowntimeCost),
      total: Math.round(analogTotal),
    },
    savingsPerYear: Math.round(savingsPerYear),
    paybackPeriod: Math.round(paybackPeriod),
  };
}