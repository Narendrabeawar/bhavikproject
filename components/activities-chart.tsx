"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend, defs, linearGradient, stop } from "recharts"

const data = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 160 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 180 },
  { name: "May", value: 220 },
  { name: "Jun", value: 240 },
  { name: "Jul", value: 210 },
  { name: "Aug", value: 260 },
  { name: "Sep", value: 230 },
  { name: "Oct", value: 250 },
  { name: "Nov", value: 200 },
  { name: "Dec", value: 270 },
]

export function ActivitiesChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#2563EB" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: "#2563EB", fontWeight: 600 }} interval={0} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} domain={[0, 300]} />
          <Tooltip contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 2px 8px #0001' }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ fill: "#2563EB", strokeWidth: 2, r: 5 }}
            activeDot={{ r: 7, fill: "#2563EB" }}
            fillOpacity={1}
            fill="url(#colorValue)"
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
