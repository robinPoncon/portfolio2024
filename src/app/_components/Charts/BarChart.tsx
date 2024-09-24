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
				borderWidth: 0,
				borderRadius: 4
			}
		]
	};

	const options: ChartOptions<"bar"> = {
		indexAxis: "y" as const,
		maintainAspectRatio: false,
		scales: {
			y: {
				ticks: {
					color: resolvedTheme === "dark" ? "#e4e5f1" : "#121212",
					font: {
						weight: "bold"
					}
				},
				grid: {
					color: resolvedTheme === "dark" ? "#4b5563" : "#d1d5db"
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
				max: 100,
				grid: {
					color: resolvedTheme === "dark" ? "#4b5563" : "#d1d5db"
				}
			}
		},
		plugins: {
			legend: {
				position: "top",
				align: "start",
				labels: {
					color: resolvedTheme === "dark" ? "#e4e5f1" : "#121212",
					font: {
						weight: "bold",
						size: 12
					}
				}
			}
		}
	};

	return (
		<div className="h-56 shadow-lg bg-lighterBg dark:bg-greyBg rounded-md p-2">
			<Bar
				data={data}
				options={options}
			/>
		</div>
	);
};
export default HorizontalBarChart;
