"use client";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

type BarChartProps = {
	title: string;
	labels: string[];
	datasLabels: number[];
};

const HorizontalBarChart = ({ title, labels, datasLabels }: BarChartProps) => {
	const { resolvedTheme } = useTheme();
	const t = useTranslations("Chart");

	const transformedData = datasLabels.map((level) => {
		switch (level) {
			case 1:
				return 25; // Notions - 25%
			case 2:
				return 50; // Intermédiaire - 50%
			case 3:
				return 75; // Avancé - 75%
			case 4:
				return 100; // Expert - 100%
			default:
				return 0;
		}
	});

	const data = {
		labels: labels,
		datasets: [
			{
				label: title,
				data: transformedData,
				backgroundColor: "#988ce3",
				borderWidth: 0,
				borderRadius: 4
			}
		]
	};

	const options: ChartOptions<"bar"> = {
		indexAxis: "x",
		maintainAspectRatio: false,
		scales: {
			y: {
				ticks: {
					stepSize: 25, // Espacement pour chaque niveau (25% à 100%)
					callback: function (tickValue: string | number) {
						if (typeof tickValue === "number") {
							switch (tickValue) {
								case 25:
									return t("notions");
								case 50:
									return t("intermediate");
								case 75:
									return t("advanced");
								case 100:
									return t("expert");
								default:
									return "";
							}
						}
						return "";
					},
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
					color: resolvedTheme === "dark" ? "#e4e5f1" : "#121212",
					font: {
						weight: "bold"
					}
				},
				grid: {
					color: resolvedTheme === "dark" ? "#4b5563" : "#d1d5db"
				}
			}
		},
		plugins: {
			legend: {
				position: "top",
				align: "center",
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
