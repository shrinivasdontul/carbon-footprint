import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Layout } from "~/root";

export const meta: MetaFunction = () => ({
  title: "Carbon Footprint Calculator",
  description: "Calculate your carbon footprint",
});

const emissionFactors = {
  electricity: 0.3, // kg CO2 per kWh
  gas: 0.2, // kg CO2 per kWh
  car: 0.25, // kg CO2 per km
  flight: 0.15, // kg CO2 per km
  beef: 15, // kg CO2 per kg
};

export default function CarbonFootprintCalculator() {
  const [electricityUsage, setElectricityUsage] = useState(0);
  const [gasUsage, setGasUsage] = useState(0);
  const [carMileage, setCarMileage] = useState(0);
  const [flightDistance, setFlightDistance] = useState(0);
  const [beefConsumption, setBeefConsumption] = useState(0);

  const electricityEmissions = electricityUsage * emissionFactors.electricity;
  const gasEmissions = gasUsage * emissionFactors.gas;
  const carEmissions = carMileage * emissionFactors.car;
  const flightEmissions = flightDistance * emissionFactors.flight;
  const beefEmissions = beefConsumption * emissionFactors.beef;

  const totalEmissions =
    electricityEmissions +
    gasEmissions +
    carEmissions +
    flightEmissions +
    beefEmissions;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Carbon Footprint Calculator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">
              Electricity Usage (kWh per month):
              <input
                type="number"
                value={electricityUsage}
                onChange={(e) => setElectricityUsage(Number(e.target.value))}
                className="w-full border rounded px-3 py-2"
              />
            </label>
            <label className="block mb-2">
              Gas Usage (kWh per month):
              <input
                type="number"
                value={gasUsage}
                onChange={(e) => setGasUsage(Number(e.target.value))}
                className="w-full border rounded px-3 py-2"
              />
            </label>
            <label className="block mb-2">
              Car Mileage (km per month):
              <input
                type="number"
                value={carMileage}
                onChange={(e) => setCarMileage(Number(e.target.value))}
                className="w-full border rounded px-3 py-2"
              />
            </label>
            <label className="block mb-2">
              Flight Distance (km per year):
              <input
                type="number"
                value={flightDistance}
                onChange={(e) => setFlightDistance(Number(e.target.value))}
                className="w-full border rounded px-3 py-2"
              />
            </label>
            <label className="block mb-2">
              Beef Consumption (kg per month):
              <input
                type="number"
                value={beefConsumption}
                onChange={(e) => setBeefConsumption(Number(e.target.value))}
                className="w-full border rounded px-3 py-2"
              />
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <p>Electricity Emissions: {electricityEmissions.toFixed(2)} kg CO2</p>
            <p>Gas Emissions: {gasEmissions.toFixed(2)} kg CO2</p>
            <p>Car Emissions: {carEmissions.toFixed(2)} kg CO2</p>
            <p>Flight Emissions: {flightEmissions.toFixed(2)} kg CO2</p>
            <p>Beef Emissions: {beefEmissions.toFixed(2)} kg CO2</p>
            <h3 className="text-lg font-semibold mt-4">
              Total Emissions: {totalEmissions.toFixed(2)} kg CO2 per month
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
