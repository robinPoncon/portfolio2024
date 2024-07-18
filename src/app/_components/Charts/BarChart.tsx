"use client";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

const data = {
	labels: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "PHP"],
	datasets: [
		{
			label: "Maîtrise des Langages de Programmation",
			data: [90, 90, 80, 75, 50, 50],
			backgroundColor: ["#988ce3"],
			borderColor: ["#5440d1"],
			borderWidth: 1
		}
	]
};

const options: ChartOptions<"bar"> = {
	indexAxis: "y" as const,
	scales: {
		x: {
			ticks: {
				callback: function (value: string | number) {
					return `${value}%`;
				}
			},
			max: 100
		}
	}
};

const BarChart = () => {
	return (
		<Bar
			data={data}
			options={options}
		/>
	);
};
export default BarChart;
