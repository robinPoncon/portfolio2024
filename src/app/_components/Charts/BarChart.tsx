"use client";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";

type BarChartProps = {
	title: string;
	labels: string[];
	datasLabels: number[];
};

const HorizontalBarChart = ({ title, labels, datasLabels }: BarChartProps) => {
	const { resolvedTheme } = useTheme();

	const data = {
		labels: labels,
		datasets: [
			{
				label: title,
				data: datasLabels,
				backgroundColor: ["#988ce3"],
				borderColor: ["#5440d1"],
				borderWidth: 1,
				borderRadius: 4
			}
		]
	};

	const options: ChartOptions<"bar"> = {
		indexAxis: "y" as const,
		scales: {
			y: {
				ticks: {
					color: resolvedTheme === "dark" ? "#e4e5f1" : "#121212",
					font: {
						weight: "bold"
					}
				}
			},
			x: {
				ticks: {
					callback: function (value: string | number) {
						return `${value}%`;
					},
					color: resolvedTheme === "dark" ? "#e4e5f1" : "#121212",
					font: {
						weight: "bold"
					}
				},
				max: 100
			}
		},
		plugins: {
			legend: {
				labels: {
					color: resolvedTheme === "dark" ? "#e4e5f1" : "#121212",
					font: {
						weight: "bold",
						size: 16
					}
				}
			}
		}
	};

	return (
		<Bar
			data={data}
			options={options}
		/>
	);
};
export default HorizontalBarChart;
